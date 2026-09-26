'use client';

import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#04060b] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center p-0">
              <img src="/icon.svg" alt="SP Logo" className="w-full h-full object-cover scale-110" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">{PERSONAL_INFO.name}</span>
              <span className="text-[11px] font-mono text-slate-400">Full-Stack Developer & AI Engineer</span>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span>© 2026 Santu Pramanik. Engineered with Next.js 16 & 3D WebGL</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-amber-400 transition-colors"
              title="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/60 transition-colors cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
