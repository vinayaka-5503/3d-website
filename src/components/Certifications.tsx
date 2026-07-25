"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  src: string;
}

const CERTIFICATES: Certificate[] = [
  {
    title: "Data Integration & API Development for AI Applications",
    issuer: "Certificate of Completion",
    src: "/CER/CertificateOfCompletion_Data Integration and API Development for AI Applications_page-0001.jpg",
  },
  {
    title: "Data Science Foundations Fundamentals",
    issuer: "Certificate of Completion",
    src: "/CER/CertificateOfCompletion_Data Science Foundations Fundamentals_page-0001.jpg",
  },
  {
    title: "Power BI Data Modeling with DAX",
    issuer: "Certificate of Completion",
    src: "/CER/CertificateOfCompletion_Power BI Data Modeling with DAX (1)_page-0001.jpg",
  },
  {
    title: "Power BI Essential Training",
    issuer: "Certificate of Completion",
    src: "/CER/CertificateOfCompletion_Power BI Essential Training_page-0001.jpg",
  },
  {
    title: "ServiceNow CIS - Data Foundations (CMDB & CSDM)",
    issuer: "Certified Implementation Specialist",
    src: "/CER/Certified Implementation Specialist – Data Foundations (CMDB and CSDM) (CIS-DF (CMDB and CSDM)) (1)_page-0001.jpg",
  },
  {
    title: "SQL & Relational Databases 101",
    issuer: "IBM / Cognitive Class",
    src: "/CER/IBM DB0101EN Certificate _ Cognitive Class.jpg",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CERTIFICATES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  }, []);

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Reset autoplay timer whenever the active slide changes
  const resetTimer = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
    autoplayTimer.current = setInterval(handleNext, 3500); // cycle every 3.5s
  }, [handleNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [resetTimer]);

  const current = CERTIFICATES[currentIndex];

  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#121212] border-t border-white/[0.05] overflow-hidden z-20">
      {/* Decorative background light ray */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-semibold mb-3 block animate-pulse">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight text-glow">
            Certifications
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-[800px] flex flex-col items-center">
          {/* Main Slide Card Frame */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center p-4 md:p-6 backdrop-blur-md shadow-2xl">
            {/* Grid background mask */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            {/* Slide Frame viewport */}
            <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  src={current.src}
                  alt={current.title}
                  className="max-w-full max-h-full object-contain rounded border border-white/5 shadow-lg select-none"
                  style={{ pointerEvents: "none" }}
                />
              </AnimatePresence>
            </div>

            {/* Left Nav Arrow */}
            <button
              onClick={() => {
                handlePrev();
                resetTimer();
              }}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-neutral-950/70 text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:text-white"
              aria-label="Previous Certificate"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={() => {
                handleNext();
                resetTimer();
              }}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-neutral-950/70 text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:text-white"
              aria-label="Next Certificate"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Label Details underneath card */}
          <div className="text-center mt-6 min-h-[64px] max-w-[600px] px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
                  {current.title}
                </h3>
                <p className="text-[10px] md:text-xs text-emerald-400 font-mono mt-1.5 uppercase tracking-[0.2em] font-semibold">
                  {current.issuer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex items-center gap-2 mt-4">
            {CERTIFICATES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleSelect(idx);
                  resetTimer();
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
