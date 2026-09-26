'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#05070e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Educational <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Solid foundations in computer science theory, algorithms, software engineering, and application design.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 shadow-md">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
                
                <h4 className="text-slate-300 text-sm font-medium mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{edu.institution}</span>
                </h4>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.period}
                  </span>
                </div>

                {edu.details && (
                  <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-white/10">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
