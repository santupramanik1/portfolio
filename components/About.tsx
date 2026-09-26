'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Database, Sparkles, Code2, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Full-Stack Architecture',
      description: 'Designing end-to-end MERN & Next.js applications with strong TypeScript typing, modular folder structures, and high performance.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: Sparkles,
      title: 'AI & LLM Workflows',
      description: 'Integrating Google Gemini, Python LangChain agents, and ImageKit pipelines to build intelligent chat, search, and generation platforms.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: Database,
      title: 'Databases & Reliability',
      description: 'Crafting optimized MongoDB & MySQL schemas, JWT authentication workflows, and staging pipelines with verified 99.9% uptime.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Code2,
      title: 'Algorithmic Problem Solving',
      description: 'Solved 300+ DSA challenges on LeetCode with a strong emphasis on memory efficiency, dynamic programming, and clean C++ / JS code.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Crafting Intelligent & <span className="gradient-text">Scalability-Driven</span> Web Solutions
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Combining core computer science rigor with cutting-edge full-stack technologies and Generative AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span>Passionate Developer & Problem Solver</span>
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-4">
                I am <strong className="text-cyan-400 font-semibold">{PERSONAL_INFO.name}</strong>, a Master of Computer Applications (MCA) candidate at Presidency College, Bengaluru (CGPA 9.05), with a strong foundation in BCA from Panskura Banamali College (CGPA 8.76).
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                My engineering journey focuses on building highly resilient backend REST services, fluid React / Next.js interfaces, and integrating Generative AI features into real-world applications like automated recruitment platforms (HireIQ) and visual AI engines (CogniSketch).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Clean & Modular Code Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>99.9% Production Backend Uptime</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>LangChain & AI Agent Workflows</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>300+ LeetCode DSA Solutions</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${pillar.bg} border flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
