'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2, Sparkles, MapPin, Mail, Phone, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import Cyber3DScene from './Cyber3DScene';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export default function Hero({ onOpenResume, onOpenTerminal }: HeroProps) {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
      {/* Ambient background glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full-Stack & AI Roles</span>
              <span className="text-cyan-500/50">•</span>
              <span className="text-slate-400">Bengaluru, IN</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Hi, I&apos;m{' '}
              <span className="gradient-text font-black">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Role Title */}
            <h2 className="text-lg sm:text-2xl font-medium text-slate-300 mb-6 flex flex-wrap items-center gap-2">
              <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.title}</span>
            </h2>

            {/* Tagline / Brief Objective */}
            <p className="text-base text-slate-400 mb-8 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.careerObjective}
            </p>

            {/* Key Skill Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['MERN Stack', 'TypeScript', 'Next.js', 'Python', 'AI / LangChain', 'C++', 'REST APIs'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/80 border border-white/10 text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-white/10 border border-white/15 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center justify-center p-3.5 rounded-xl text-cyan-400 glass-card border border-cyan-500/30 hover:bg-cyan-950/40 transition-all cursor-pointer"
                title="Launch AI Console"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Contact & Social Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10 w-full">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-300" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode (300+)</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Orbit Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <Cyber3DScene />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 flex flex-col items-start relative overflow-hidden"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1 font-mono tracking-tight">
                <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
              </div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
