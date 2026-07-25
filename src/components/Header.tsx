"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#121212]/70 backdrop-blur-md border-b border-white/[0.05]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-white text-lg font-black tracking-widest uppercase hover:opacity-80 transition-opacity">
          VK<span className="text-neutral-500">.</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#work"
            className="text-neutral-400 text-xs font-medium uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-neutral-400 text-xs font-medium uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-neutral-400 text-xs font-medium uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Availability Badge */}
        <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] rounded-full py-1.5 px-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[9px] uppercase tracking-widest text-neutral-300 font-mono">
            Available for hire
          </span>
        </div>
      </div>
    </motion.header>
  );
}
