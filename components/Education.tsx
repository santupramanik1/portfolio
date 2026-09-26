'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-28 relative bg-[#04060c] overflow-hidden">
      {/* Background Cyber Mesh & Laser Glow */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight">
            Educational <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-mono">
            Academic progression from secondary foundations to advanced Master of Computer Applications studies.
          </p>
        </div>

        {/* Timeline Journey Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Laser Line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-indigo-500 to-emerald-500 opacity-40" />

          <div className="space-y-10 lg:space-y-16">
            {EDUCATION_LIST.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 35, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Center Node Badge (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#080d1a] border border-cyan-500/50 items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] z-20">
                    <span className="font-mono text-xs font-bold text-cyan-300">0{idx + 1}</span>
                  </div>

                  {/* Card Side */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)]">
                    <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl">
                      {/* Top Corner Glow Accent */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-full blur-2xl group-hover:from-cyan-500/20 group-hover:to-indigo-500/20 transition-all pointer-events-none" />

                      {/* Header Line: Node Icon & Grade Pill */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-md">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
                              Milestone 0{idx + 1}
                            </span>
                            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-indigo-400" />
                              {edu.period}
                            </span>
                          </div>
                        </div>

                        <div className="px-3.5 py-1.5 rounded-2xl text-xs font-mono font-extrabold bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-950/40">
                          {edu.grade}
                        </div>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight tracking-tight group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>

                      {/* Board / Institution */}
                      <div className="text-slate-300 text-xs sm:text-sm font-medium mb-4 flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{edu.institution}</span>
                      </div>

                      {/* Location Badge */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{edu.location}</span>
                      </div>

                      {/* Details / Description */}
                      {edu.details && (
                        <div className="pt-4 border-t border-white/10 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{edu.details}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer Side for Alternating Grid */}
                  <div className="hidden lg:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
