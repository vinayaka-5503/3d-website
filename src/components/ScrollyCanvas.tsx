"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, MotionValue, useMotionValueEvent, useSpring } from "framer-motion";

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const TOTAL_FRAMES = 75;

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth out the scroll progress to create momentum
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 35,
    stiffness: 120,
    restDelta: 0.0005,
  });

  // Preload images
  useEffect(() => {
    let loaded = 0;
    const tempImages: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loaded += 1;
      setLoadedCount(loaded);
      if (loaded === TOTAL_FRAMES) {
        setIsLoaded(true);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const formattedNum = String(i).padStart(2, "0");
      img.src = `/sequence/frame_${formattedNum}_delay-0.067s.png`;
      img.onload = handleImageLoad;
      img.onerror = () => {
        console.error(`Failed to load frame ${formattedNum}`);
        handleImageLoad(); // Increment anyway to prevent stuck loader
      };
      tempImages.push(img);
    }
    imagesRef.current = tempImages;
  }, []);

  // Draw frame logic
  const drawFrame = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
    );

    const img = imagesRef.current[frameIndex];
    if (img && img.complete) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        // Canvas is wider than image aspect ratio, crop vertically
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        // Canvas is taller than image aspect ratio, crop horizontally
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, []);

  // Fit canvas to display sizes (handling Retina/high DPR)
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Redraw the current frame after resize
    drawFrame(smoothProgress.get());
  }, [drawFrame, smoothProgress]);

  // Setup resize listeners and initial draw
  useEffect(() => {
    if (!isLoaded) return;
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isLoaded, resizeCanvas]);

  // Render frames as smoothProgress changes
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (isLoaded) {
      drawFrame(latest);
    }
  });

  const loadingPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <>
      {/* Premium Loader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-55 flex flex-col items-center justify-center bg-[#121212]"
          >
            <div className="relative flex flex-col items-center max-w-xs w-full px-6">
              {/* Spinning / Pulsing Glow Ring */}
              <div className="absolute w-40 h-40 border border-white/5 rounded-full animate-ping opacity-10" />
              <div className="absolute w-32 h-32 border-t-2 border-r-2 border-white/30 rounded-full animate-spin duration-1000" />
              
              {/* Progress counter */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-5xl font-extralight tracking-widest text-glow select-none"
              >
                {loadingPercentage}%
              </motion.span>
              
              {/* Text indicator */}
              <span className="text-neutral-500 uppercase tracking-[0.25em] text-[10px] mt-6 select-none font-medium animate-pulse">
                Preloading Experience
              </span>

              {/* Progress Bar */}
              <div className="w-full h-[1px] bg-neutral-800 mt-8 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white" 
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingPercentage}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main sticky viewport */}
      <div className="w-full h-full relative">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block opacity-90 transition-opacity duration-500"
          style={{
            willChange: "transform",
          }}
        />
        {/* Cinematic shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/30 pointer-events-none" />
      </div>
    </>
  );
}
