"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the scrolly container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="relative bg-[#121212] min-h-screen text-white select-none">
      {/* Navigation */}
      <Header />

      {/* Scrollytelling Canvas Section */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        {/* Sticky wrapper */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Stats Banner (Horizontal row below Hero/Canvas) */}
      <section className="relative py-16 border-b border-white/[0.05] bg-[#121212] z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-white text-glow tracking-tight">3+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-2 font-medium">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-white text-glow tracking-tight">2</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-2 font-medium">Internships</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-white text-glow tracking-tight">8.1</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-2 font-medium">GPA</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-white text-glow tracking-tight">3+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-2 font-medium">Certificates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Skills Section */}
      <TechStack />

      {/* Projects Showcase Section */}
      <Projects />

      {/* Skills & Experience & Education (Vertical Timeline Layout) */}
      <section id="about" className="relative py-28 px-6 md:px-12 lg:px-24 border-t border-white/[0.05] bg-[#121212] z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Skills & Expertise */}
          <div className="lg:col-span-1 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-semibold mb-3 block">
                Capabilities {"//"} 02
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight mb-10 text-glow">
                Skills &amp; Expertise
              </h2>

              <div className="space-y-6">
                {/* Programming */}
                <div>
                  <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-3">{"// Programming"}</span>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>Python</span>
                        <span className="text-emerald-400 font-bold">90%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>Oracle SQL</span>
                        <span className="text-emerald-400 font-bold">85%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Analytics */}
                <div>
                  <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-3">{"// Data Analytics"}</span>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>Data Cleaning &amp; EDA</span>
                        <span className="text-emerald-400 font-bold">92%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>Pandas &amp; NumPy</span>
                        <span className="text-emerald-400 font-bold">88%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "88%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visualization */}
                <div>
                  <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-3">{"// Visualization"}</span>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>Power BI</span>
                        <span className="text-emerald-400 font-bold">95%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>Excel Dashboards</span>
                        <span className="text-emerald-400 font-bold">90%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>Tableau</span>
                        <span className="text-emerald-400 font-bold">75%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI & ML */}
                <div>
                  <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-3">{"// AI & ML"}</span>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>Machine Learning</span>
                        <span className="text-emerald-400 font-bold">70%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "70%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1.5">
                        <span>NLP Fundamentals</span>
                        <span className="text-emerald-400 font-bold">65%</span>
                      </div>
                      <div className="w-full h-[4px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "65%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Card (Fills vertical gap & adds visual balance) */}
            <div className="mt-12 p-6 rounded-2xl border border-white/5 bg-white/[0.01] relative overflow-hidden group hover:border-emerald-500/20 hover:bg-white/[0.02] transition-all duration-500">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              <span className="block text-[9px] font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">{"// Credentials"}</span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 animate-pulse" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wide group-hover:text-white transition-colors duration-300">Power BI Data Analyst Associate</h4>
                    <p className="text-[8px] text-neutral-500 mt-0.5 font-mono">MICROSOFT CERTIFIED (PL-300)</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wide group-hover:text-white transition-colors duration-300">Data Analytics Professional Certificate</h4>
                    <p className="text-[8px] text-neutral-500 mt-0.5 font-mono">GOOGLE CAREER CERTIFICATES</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wide group-hover:text-white transition-colors duration-300">Python Institute Certification</h4>
                    <p className="text-[8px] text-neutral-500 mt-0.5 font-mono">PYTHON CERTIFIED ASSOCIATE (PCAP)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline (Experience & Education) */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-semibold mb-3 block">
              Journey {"//"} 03
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight mb-12 text-glow">
              Experience &amp; Education
            </h2>

            <div className="relative border-l border-emerald-500/20 pl-8 ml-2 space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative">
                {/* Bullet */}
                <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full border border-emerald-400 bg-emerald-500 flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#121212]" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-wider">2025</span>
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Work Experience</span>
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase mt-1">Data Science Intern</h3>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block mt-0.5">Besant Technologies</span>
                  <p className="mt-3 text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    Applied EDA using Python (Pandas) and SQL. Created Power BI and Excel dashboards. Performed data cleaning and validation to improve data accuracy.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                {/* Bullet */}
                <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-500/40 bg-[#121212] flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-wider">2021 - 2025</span>
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-white/[0.03] text-neutral-400 border border-white/5">Education</span>
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase mt-1">Bachelor of Computer Science and Engineering</h3>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block mt-0.5">SNS College of Engineering</span>
                  <p className="mt-3 text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    Specialized in IoT and Cybersecurity, including Blockchain Technology. GPA: 8.1.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative">
                {/* Bullet */}
                <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full border border-emerald-400 bg-emerald-500 flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#121212]" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-wider">2024</span>
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Work Experience</span>
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase mt-1">Cybersecurity Intern</h3>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block mt-0.5">V Net Technologies</span>
                  <p className="mt-3 text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    Gained hands-on experience in protecting digital information, penetration testing, and incident response simulations with SIEM systems.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative">
                {/* Bullet */}
                <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-500/40 bg-[#121212] flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-wider">2023 - 2024</span>
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-white/[0.03] text-neutral-400 border border-white/5">Education</span>
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase mt-1">Minor Degree in Artificial Intelligence &amp; Machine Learning</h3>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block mt-0.5">SNS College of Engineering</span>
                  <p className="mt-3 text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    Focused on core AI concepts, machine learning algorithms, and data modeling.
                  </p>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="relative">
                {/* Bullet */}
                <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-500/40 bg-[#121212] flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-wider">2019 - 2021</span>
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-white/[0.03] text-neutral-400 border border-white/5">Education</span>
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase mt-1">Diploma in Mechanical Engineering</h3>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block mt-0.5">Nachimuthu Polytechnic College</span>
                  <p className="mt-3 text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    Built a strong foundation in engineering principles and analytical problem-solving.
                  </p>
                </div>
              </div>

              {/* Timeline Item 6 */}
              <div className="relative">
                {/* Bullet */}
                <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-500/40 bg-[#121212] flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-wider">2019</span>
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-white/[0.03] text-neutral-400 border border-white/5">Education</span>
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase mt-1">SSLC</h3>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block mt-0.5">Shantiniketan Matriculation School</span>
                  <p className="mt-3 text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    Completed secondary education with a focus on core academics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Carousel Section */}
      <Certifications />

      {/* Contact & Footer Section */}
      <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.05] bg-[#121212] z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-semibold mb-3 block">
                Status {"//"} 04
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-8 text-glow">
                Get in touch
              </h2>
              <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                Looking for an analyst who can build robust pipelines, uncover hidden trends, and tell a story with data? Let&apos;s connect. I&apos;m ready to bring my technical toolkit and problem-solving mindset to a dynamic data team.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 font-mono text-[10px] tracking-wider text-neutral-500">
              <span className="block text-neutral-600 mb-2">{"// REGION"}</span>
              <span className="block text-white uppercase tracking-wider">Tamil Nadu, India</span>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="flex flex-col justify-between p-8 md:p-12 rounded-2xl bg-white/[0.01] border border-white/5 glass-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-semibold mb-6 block">
                Connect channels
              </span>
              
              <div className="space-y-6">
                <a
                  href="mailto:vinayakaloopseeker@gmail.com"
                  className="flex items-center gap-4 group text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <div className="h-10 w-10 rounded-full border border-white/5 bg-neutral-900/50 flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-600 group-hover:text-neutral-400">Email</span>
                    <span className="block text-xs font-mono">vinayakaloopseeker@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/vinayaka-shakaravarthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <div className="h-10 w-10 rounded-full border border-white/5 bg-neutral-900/50 flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-600 group-hover:text-neutral-400">LinkedIn</span>
                    <span className="block text-xs font-mono">linkedin.com/in/vinayaka-shakaravarthi</span>
                  </div>
                </a>

                <a
                  href="https://github.com/vinayaka-5503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <div className="h-10 w-10 rounded-full border border-white/5 bg-neutral-900/50 flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-600 group-hover:text-neutral-400">GitHub</span>
                    <span className="block text-xs font-mono">github.com/vinayaka-5503</span>
                  </div>
                </a>

                <a
                  href="tel:+918610694332"
                  className="flex items-center gap-4 group text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <div className="h-10 w-10 rounded-full border border-white/5 bg-neutral-900/50 flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-600 group-hover:text-neutral-400">Phone</span>
                    <span className="block text-xs font-mono">+91 8610694332</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="relative py-12 px-6 md:px-12 bg-[#121212] border-t border-white/[0.03] text-center z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[10px] font-mono tracking-widest text-neutral-600">
            &copy; 2026 VINAYAKA SHAKARAVARTHI K. ALL RIGHTS RESERVED.
          </span>
          <span className="text-[10px] font-mono tracking-widest text-neutral-600">
            CRAFTED WITH PASSION FOR DATA &bull; POWERED BY CANVAS
          </span>
        </div>
      </footer>
    </main>
  );
}
