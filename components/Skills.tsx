'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles, Layers, Terminal, ShieldCheck, Zap, Activity } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { TechnologyIcon } from '@/components/TechIcons';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((cat) => cat.name)];

  const filteredCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.name === activeCategory);

  // Flatten all skills for the infinite scrolling ticker marquee
  const allSkills = SKILL_CATEGORIES.flatMap((c) => c.skills);

  return (
    <section id="skills" className="py-28 relative bg-[#04060c] overflow-hidden">
      {/* Background Cyber Mesh & Laser Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Cybernetic Skill Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight">
            Technology & <span className="gradient-text">Engineering Stack</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed font-mono">
            Production-grade stack spanning modern full-stack architectures, cloud platforms, and intelligent AI model workflows.
          </p>
        </div>

        {/* Floating Marquee Tech Ticker */}
        <div className="mb-16 relative overflow-hidden py-4 border-y border-white/10 bg-slate-950/60 backdrop-blur-md">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#04060c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#04060c] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
            className="flex items-center gap-6 whitespace-nowrap"
          >
            {[...allSkills, ...allSkills, ...allSkills].map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/50 transition-colors"
              >
                <TechnologyIcon name={skill.name} className="w-4 h-4" />
                <span className="text-xs font-mono font-medium text-slate-200">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'text-slate-950 shadow-xl shadow-cyan-500/25'
                    : 'glass-card text-slate-300 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeBentoTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 rounded-2xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {isSelected && <Zap className="w-3.5 h-3.5 fill-slate-950" />}
                  <span>{cat}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Futuristic Bento Deck Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card rounded-3xl border border-white/10 p-6 sm:p-10 relative overflow-hidden group shadow-2xl"
              >
                {/* Neon Corner Laser Accents */}
                <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                <div className="absolute top-0 left-0 w-[2px] h-24 bg-gradient-to-b from-cyan-500 to-transparent" />
                <div className="absolute bottom-0 right-0 w-24 h-[2px] bg-gradient-to-l from-indigo-500 to-transparent" />
                <div className="absolute bottom-0 right-0 w-[2px] h-24 bg-gradient-to-t from-indigo-500 to-transparent" />

                {/* Panel Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-950/50">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-3">
                        <span>{cat.name}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                          {cat.skills.length} Ecosystem Stack
                        </span>
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-[11px] font-mono text-emerald-400">
                      <Activity className="w-3.5 h-3.5 animate-pulse" />
                      <span>LIVE MODULE</span>
                    </div>
                  </div>
                </div>

                {/* Cyber Pod Tech Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className={`relative p-5 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center justify-between group/pod cursor-pointer ${
                        skill.highlight
                          ? 'bg-gradient-to-b from-[#0c1322] to-[#070b16] border-cyan-500/30 shadow-xl shadow-cyan-950/40 hover:border-cyan-400 hover:shadow-cyan-500/25'
                          : 'bg-slate-900/60 border-white/10 hover:border-white/25 hover:bg-slate-900/90'
                      }`}
                    >
                      {/* Pod Glowing Ring */}
                      <div className="absolute inset-0 rounded-2xl bg-cyan-500/0 group-hover/pod:bg-cyan-500/5 transition-colors pointer-events-none" />

                      {/* Icon Container with Dual Glow */}
                      <div className="relative w-14 h-14 rounded-2xl bg-[#080d1a] border border-white/15 flex items-center justify-center p-3 mb-4 shadow-inner group-hover/pod:border-cyan-400 group-hover/pod:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all">
                        <TechnologyIcon name={skill.name} className="w-8 h-8 group-hover/pod:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Skill Info */}
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-white block tracking-tight group-hover/pod:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                          Verified Tool
                        </span>
                      </div>

                      {/* Bottom Accent Indicator */}
                      <div className="w-full mt-4 pt-3 border-t border-white/5 flex items-center justify-center">
                        {skill.highlight ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-cyan-400">
                            <Sparkles className="w-3 h-3" />
                            <span>Core Engine</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 group-hover/pod:text-slate-400">
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                            <span>Production</span>
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
