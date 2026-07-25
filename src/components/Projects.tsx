"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Amazon Sales & Logistics Dashboard",
    subtitle: "AMAZON SALES & LOGISTICS",
    description: "Developed an interactive Amazon Sales Analysis Dashboard using Power BI, creating dynamic KPIs, slicers, and visualizations for content trends and distribution.",
    tags: ["Power BI", "Power Query", "Excel", "DAX"],
    link: "https://github.com/vinayaka-5503/Power-Bi-Amazon-Dasboard",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
  },
  {
    id: "02",
    title: "Uber Data Analysis Dashboard",
    subtitle: "OPERATIONAL BUSINESS INSIGHTS",
    description: "Developed an interactive dashboard using Microsoft Power BI, transforming raw data into actionable insights and improving decision-making efficiency by 30%.",
    tags: ["Power BI", "Power Query", "DAX", "Data Visualization"],
    link: "https://github.com/vinayaka-5503/uber_dashboard",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "03",
    title: "Real Mart Sales Analysis",
    subtitle: "RETAIL SALES & PROFITABILITY",
    description: "Conducted comprehensive performance analysis evaluating sales trends, profitability, and customer behavior, leading to 35% improvement in decision-making efficiency.",
    tags: ["Excel", "Power BI", "Power Query", "Analytics"],
    link: "https://www.linkedin.com/posts/vinayaka-shakaravarthi_dataanalytics-excel-businessintelligence-activity-7413524065031942144-v5Lb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkesdwBML4ep9Pz1NAGtNRAVL3b2QuJHuQ",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
];

function ProjectCard({ project }: { project: Project }) {
  // Use MotionValues for smooth pointer coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse motion
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Generate background style for the glowing hover effect
  const hoverBackground = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08), transparent 80%)`
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 md:p-10 h-[480px] transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02]"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: hoverBackground,
        }}
      />

      {/* Decorative Gradient Background (Static Subtle Glow) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 pointer-events-none z-0`} />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Card Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest text-neutral-600 group-hover:text-white/40 transition-colors duration-300">
            CASE STUDY // {project.id}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-neutral-900/50 text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white hover:text-neutral-950"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-16">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-500">
            {project.subtitle}
          </span>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-white uppercase group-hover:text-glow transition-all duration-300">
            {project.title}
          </h3>
          <p className="mt-4 text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="relative z-10 mt-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.04] bg-white/[0.02] px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-neutral-400 group-hover:border-white/10 group-hover:text-neutral-300 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#121212] overflow-hidden z-20">
      {/* Decorative light ray */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

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
            Projects
          </motion.h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
