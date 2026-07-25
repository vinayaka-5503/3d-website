"use client";

import React, { useState } from "react";
import { motion, MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const [progress, setProgress] = useState(0);

  // Track progress locally to conditionally unmount sections
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  // Section 1: Intro (0% - 8%)
  const y1 = useTransform(scrollYProgress, [0, 0.08], [0, -40]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Section 2: Core Statement (30% - 55%)
  const y2 = useTransform(scrollYProgress, [0.20, 0.58], [80, -80]);
  const opacity2 = useTransform(scrollYProgress, [0.20, 0.32, 0.48, 0.58], [0, 1, 1, 0]);

  // Section 3: Design & Engineering Philosophy (60% - 85%)
  const y3 = useTransform(scrollYProgress, [0.55, 0.95], [80, -80]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.68, 0.82, 0.95], [0, 1, 1, 0]);

  // Scroll Indicator (fades quickly)
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.08], [0, 15]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none w-full h-full">
      {/* Section 1: Hero Intro (Center) */}
      {progress < 0.15 && (
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="flex flex-col items-center max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 text-xs md:text-sm uppercase tracking-[0.4em] text-neutral-400 font-semibold animate-pulse"
            >
              DATA &amp; AI ENTHUSIAST
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase text-glow"
            >
              Vinayaka Shakaravarthi K
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-[1px] bg-white/30 my-6 origin-center"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-xl uppercase tracking-[0.3em] text-neutral-300 font-light"
            >
              Data Analyst
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mt-8 pointer-events-auto"
            >
              <a
                href="#contact"
                className="bg-white text-neutral-950 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/vinayaka-5503"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                View GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Section 2: Statement (Left Aligned) */}
      {progress >= 0.10 && progress < 0.65 && (
        <motion.div
          style={{ y: y2, opacity: opacity2 }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-24 lg:px-36"
        >
          <div className="max-w-xl md:max-w-2xl text-left">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Mission
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
              Transforming Raw Data.
            </h2>
            <p className="mt-6 text-sm md:text-lg text-neutral-400 font-light leading-relaxed">
              Motivated data professional with expertise in Python, SQL, and data analytics. Passionate about transforming raw data into actionable insights through Power BI dashboards and advanced analytics.
            </p>
          </div>
        </motion.div>
      )}

      {/* Section 3: Philosophy (Right Aligned) */}
      {progress >= 0.45 && (
        <motion.div
          style={{ y: y3, opacity: opacity3 }}
          className="absolute inset-0 flex items-center justify-end px-8 md:px-24 lg:px-36"
        >
          <div className="max-w-xl md:max-w-2xl text-right flex flex-col items-end">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold mb-3 flex items-center gap-2">
              Focus
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
              Analysis &amp; Analytics
            </h2>
            <p className="mt-6 text-sm md:text-lg text-neutral-400 font-light leading-relaxed">
              I specialize in building clean datasets, performing Exploratory Data Analysis (EDA), and designing interactive dashboards to improve decision-making efficiency and drive business value.
            </p>
          </div>
        </motion.div>
      )}

      {/* Scroll Indicator (Bottom Center) */}
      {progress < 0.12 && (
        <motion.div
          style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center text-center"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 font-semibold mb-2">
            Scroll to explore
          </span>
          <div className="w-[18px] h-[30px] border border-neutral-600 rounded-full flex justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1.5 bg-neutral-400 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
