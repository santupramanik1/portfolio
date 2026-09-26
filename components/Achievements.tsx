'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, GraduationCap, Server, ExternalLink, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/portfolioData';

export default function Achievements() {
  const iconMap: Record<string, any> = {
    Code2,
    GraduationCap,
    Server,
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Recognitions in competitive programming, academic performance, and software reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => {
            const IconComponent = iconMap[ach.icon] || Trophy;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950/60 border border-amber-500/40 text-amber-300">
                      {ach.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-4">{ach.platform}</p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ach.description}
                  </p>
                </div>

                {ach.link && (
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-medium text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>Verify on LeetCode</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
