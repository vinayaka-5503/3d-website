"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  logo: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  gradient: string;
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming",
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    skills: [
      {
        name: "Python",
        logo: (
          <svg viewBox="0 0 110 110" className="w-10 h-10 md:w-12 md:h-12">
            <path d="M54 2C32 2 33.5 19 33.5 19L38 28.5C38 28.5 35 29.5 31 31.5C22 36.5 13 43 13 58C13 74 27.5 73.5 27.5 73.5L34 73.5L34 64.5C34 54 42.5 45.5 53 45.5L72.5 45.5C72.5 45.5 79.5 45.5 79.5 36.5C79.5 25.5 71.5 16.5 61.5 16.5L52.5 16.5C52.5 16.5 40.5 16.5 40.5 7.5C40.5 -1.5 54 2 54 2 Z" fill="#3776AB"/>
            <path d="M56 108C78 108 76.5 91 76.5 91L72 81.5C72 81.5 75 80.5 79 78.5C88 73.5 97 67 97 52C97 36 82.5 36.5 82.5 36.5L76 36.5L76 45.5C76 56 67.5 64.5 57 64.5L37.5 64.5C37.5 64.5 30.5 64.5 30.5 73.5C30.5 84.5 38.5 93.5 48.5 93.5L57.5 93.5C57.5 93.5 69.5 93.5 69.5 102.5C69.5 111.5 56 108 56 108 Z" fill="#FFE873"/>
            <circle cx="43.5" cy="10" r="2.5" fill="white" />
            <circle cx="66.5" cy="100" r="2.5" fill="#306998" />
          </svg>
        ),
      },
      {
        name: "MySQL",
        logo: (
          <svg viewBox="0 0 128 128" className="w-10 h-10 md:w-12 md:h-12">
            <path d="M64 8C33.1 8 8 33.1 8 64c0 30.9 25.1 56 56 56s56-25.1 56-56C120 33.1 94.9 8 64 8zm24 74c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-24-32c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-16 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#00758F"/>
          </svg>
        ),
      },
    ],
  },
  {
    title: "Interactive Data Prototyping",
    gradient: "from-orange-500/10 via-amber-500/5 to-transparent",
    skills: [
      {
        name: "Jupyter Notebooks",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <circle cx="32" cy="32" r="26" fill="none" stroke="#F37626" strokeWidth="4" />
            <circle cx="32" cy="12" r="5" fill="#F37626" />
            <circle cx="32" cy="52" r="5" fill="#F37626" />
            <circle cx="16" cy="32" r="7" fill="#7C7C7C" />
            <circle cx="48" cy="32" r="7" fill="#7C7C7C" />
          </svg>
        ),
      },
      {
        name: "Google Colab",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <path d="M18 20 C10 20 6 26 6 32 C6 38 10 44 18 44 C26 44 30 38 32 35 C34 38 38 44 46 44 C54 44 58 38 58 32 C58 26 54 20 46 20 C38 20 34 26 32 29 C30 26 26 20 18 20 Z" fill="none" stroke="#F9AB00" strokeWidth="6" strokeLinecap="round" />
            <path d="M32 29 C34 26 38 20 46 20 C54 20 58 26 58 32 C58 38 54 44 46 44 C38 44 34 38 32 35" fill="none" stroke="#E37400" strokeWidth="6" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Data Visualization",
    gradient: "from-yellow-500/10 via-emerald-500/5 to-transparent",
    skills: [
      {
        name: "Power BI",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <rect x="14" y="32" width="10" height="20" rx="2" fill="#E2B13C" />
            <rect x="27" y="20" width="10" height="32" rx="2" fill="#F2C811" />
            <rect x="40" y="8" width="10" height="44" rx="2" fill="#F9E03D" />
          </svg>
        ),
      },
      {
        name: "Excel Dashboards",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <rect x="8" y="10" width="48" height="44" rx="4" fill="#107C41" />
            <rect x="26" y="18" width="24" height="28" rx="2" fill="white" opacity="0.15" />
            <line x1="26" y1="27" x2="50" y2="27" stroke="white" strokeWidth="2" opacity="0.4" />
            <line x1="26" y1="37" x2="50" y2="37" stroke="white" strokeWidth="2" opacity="0.4" />
            <line x1="38" y1="18" x2="38" y2="46" stroke="white" strokeWidth="2" opacity="0.4" />
            <rect x="10" y="18" width="20" height="28" rx="2" fill="#107C41" stroke="white" strokeWidth="2" />
            <text x="20" y="37" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="18" fill="white" textAnchor="middle">X</text>
          </svg>
        ),
      },
      {
        name: "Tableau",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <line x1="32" y1="12" x2="32" y2="52" stroke="#E8762E" strokeWidth="6" strokeLinecap="round" />
            <line x1="12" y1="32" x2="52" y2="32" stroke="#E8762E" strokeWidth="6" strokeLinecap="round" />
            <line x1="22" y1="22" x2="42" y2="42" stroke="#1F62AD" strokeWidth="4" strokeLinecap="round" />
            <line x1="22" y1="42" x2="42" y2="22" stroke="#1F62AD" strokeWidth="4" strokeLinecap="round" />
            <circle cx="32" cy="32" r="4" fill="#E8762E" />
            <circle cx="22" cy="22" r="3" fill="#1F62AD" />
            <circle cx="42" cy="42" r="3" fill="#1F62AD" />
            <circle cx="42" cy="22" r="3" fill="#5F9736" />
            <circle cx="22" cy="42" r="3" fill="#5F9736" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Data Analytics & Libraries",
    gradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    skills: [
      {
        name: "Pandas",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <rect x="12" y="8" width="16" height="48" rx="8" fill="#130754" />
            <rect x="36" y="8" width="16" height="48" rx="8" fill="#FF8C00" />
            <rect x="24" y="20" width="16" height="24" rx="8" fill="#4B0082" />
          </svg>
        ),
      },
      {
        name: "NumPy",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <path d="M32 8 L54 20 L54 44 L32 56 L10 44 L10 20 Z" fill="none" stroke="#013243" strokeWidth="4" />
            <path d="M32 8 L32 56" stroke="#013243" strokeWidth="2" />
            <path d="M10 20 L54 44" stroke="#013243" strokeWidth="2" />
            <path d="M10 44 L54 20" stroke="#013243" strokeWidth="2" />
          </svg>
        ),
      },
      {
        name: "Data Cleaning & Transformation",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12 text-indigo-400" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 12 H56 L36 36 V52 L28 56 V36 Z" />
            <line x1="18" y1="20" x2="46" y2="20" />
            <line x1="24" y1="28" x2="40" y2="28" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Cloud & Data Architecture",
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    skills: [
      {
        name: "Azure Core Fundamentals & Data Modelling",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <path d="M8 48 L28 12 L44 32 L28 48 Z" fill="#0078D4" />
            <path d="M28 12 L56 48 H44 L36 32 Z" fill="#50E4FF" />
          </svg>
        ),
      },
      {
        name: "Relational Databases & Key Structures",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12 text-teal-400" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="20" cy="18" rx="10" ry="5" />
            <path d="M10 18 V28 C10 31 20 33 20 33 C20 33 30 31 30 28 V18" />
            <path d="M10 28 V38 C10 41 20 43 20 43 C20 43 30 41 30 38 V28" />
            
            <ellipse cx="44" cy="38" rx="10" ry="5" />
            <path d="M34 38 V48 C34 51 44 53 44 53 C44 53 54 51 54 48 V38" />
            
            <path d="M30 28 Q34 28 34 38" strokeDasharray="3 3" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "AI, ML & Statistical Analysis",
    gradient: "from-violet-500/10 via-rose-500/5 to-transparent",
    skills: [
      {
        name: "scikit-learn",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12">
            <circle cx="20" cy="32" r="12" fill="none" stroke="#F89938" strokeWidth="4" />
            <circle cx="44" cy="32" r="12" fill="none" stroke="#3499CD" strokeWidth="4" />
            <path d="M26 22 A 16 16 0 0 1 38 22" fill="none" stroke="#4C4C4C" strokeWidth="3" />
            <path d="M26 42 A 16 16 0 0 0 38 42" fill="none" stroke="#4C4C4C" strokeWidth="3" />
          </svg>
        ),
      },
      {
        name: "Machine Learning Basics",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12 text-violet-400" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="8" />
            <circle cx="16" cy="18" r="4" fill="currentColor" />
            <circle cx="48" cy="18" r="4" fill="currentColor" />
            <circle cx="48" cy="46" r="4" fill="currentColor" />
            <circle cx="16" cy="46" r="4" fill="currentColor" />
            <line x1="20" y1="21" x2="27" y2="27" />
            <line x1="44" y1="21" x2="37" y2="27" />
            <line x1="44" y1="43" x2="37" y2="37" />
            <line x1="20" y1="43" x2="27" y2="37" />
          </svg>
        ),
      },
      {
        name: "Descriptive Statistics",
        logo: (
          <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-12 md:h-12 text-rose-400" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 52 H56" />
            <path d="M12 52 C20 52 24 20 32 20 C40 20 44 52 52 52" />
            <line x1="32" y1="20" x2="32" y2="52" strokeDasharray="3 3" />
          </svg>
        ),
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#121212] border-t border-white/[0.05] overflow-hidden z-20">
      {/* Decorative light ray */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight text-glow"
          >
            Tech Stack &amp; Skills
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 md:p-10 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02]"
            >
              {/* Decorative Subtle Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 pointer-events-none z-0`} />

              {/* Grid Pattern Accent */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

              <div className="relative z-10 w-full">
                <h3 className="font-mono text-xs tracking-widest text-neutral-600 group-hover:text-white/40 border-b border-white/5 pb-4 mb-6 uppercase transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills Sub-Grid inside category card */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        y: -4,
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                      }}
                      className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/[0.03] bg-white/[0.01] transition-all duration-300 text-center"
                    >
                      {/* Logo Wrapper */}
                      <div className="flex items-center justify-center w-12 h-12 mb-3 transition-transform duration-300 hover:scale-110">
                        {skill.logo}
                      </div>

                      {/* Skill Label */}
                      <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider leading-tight max-w-full block line-clamp-2 group-hover:text-neutral-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
