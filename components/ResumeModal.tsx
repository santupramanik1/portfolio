'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Copy, Check, FileText, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, PROJECTS, SKILL_CATEGORIES } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyText = () => {
    const text = `${PERSONAL_INFO.name}\n${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email}\nGitHub: ${PERSONAL_INFO.github} | LeetCode: ${PERSONAL_INFO.leetcode}\n\nCAREER OBJECTIVE:\n${PERSONAL_INFO.careerObjective}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overscroll-contain"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-cyan-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[90vh] my-auto"
        >
          {/* Top Bar Controls */}
          <div className="shrink-0 flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name} — Resume</h3>
                <p className="text-xs font-mono text-cyan-400">Curriculum Vitae • Verified Profile</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 glass-card hover:bg-white/10 border border-white/15 transition-all cursor-pointer"
                title="Copy Resume Summary"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <a
                href="/Santu_Pramanik_Resume.pdf"
                download="Santu_Pramanik_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                title="Download Official Resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href="/Santu_Pramanik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 glass-card hover:bg-white/10 border border-white/15 transition-all cursor-pointer"
                title="Open PDF to Print"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div className="flex-1 space-y-8 overflow-y-auto overscroll-contain pr-2 text-slate-200 text-sm">
            {/* Header */}
            <div className="text-center space-y-2 border-b border-white/10 pb-6">
              <h1 className="text-3xl font-extrabold text-white tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-cyan-300">
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                <span>•</span>
                <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">LeetCode</a>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2">
                CAREER OBJECTIVE
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

            {/* Educational Qualifications */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
                EDUCATIONAL QUALIFICATIONS
              </h4>
              <div className="space-y-3">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs border-b border-white/5 pb-2">
                    <div>
                      <span className="font-bold text-white block">{edu.degree}</span>
                      <span className="text-slate-400">{edu.institution}</span>
                    </div>
                    <div className="text-right font-mono text-slate-400 mt-1 sm:mt-0">
                      <div>{edu.period}</div>
                      <div className="text-emerald-400 font-bold">{edu.grade}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
                EXPERIENCE
              </h4>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                      <span className="font-bold text-white">{exp.role} | {exp.company} ({exp.type})</span>
                      <span className="font-mono text-cyan-400">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
                TECHNICAL SKILLS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.name} className="flex items-start gap-2">
                    <span className="font-mono text-amber-300 shrink-0">{cat.name}:</span>
                    <span className="text-slate-300">{cat.skills.map((s) => s.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
                PROJECTS
              </h4>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white">
                      <span>{proj.title} – {proj.subtitle}</span>
                      <span className="font-mono text-cyan-400">{proj.date}</span>
                    </div>
                    <div className="font-mono text-[11px] text-amber-300">Tech Stack: {proj.techStack.join(' | ')}</div>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 pt-1">
                      {proj.keyHighlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2">
                ACHIEVEMENTS
              </h4>
              <p className="text-xs text-slate-300">
                • <strong>Competitive Programming & DSA (LeetCode):</strong> Solved 300+ DSA challenges on LeetCode, demonstrating strong command of data structures, algorithms, and code optimization.
              </p>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="shrink-0 flex flex-wrap items-center justify-between gap-4 pt-4 mt-6 border-t border-white/10">
            <span className="text-xs font-mono text-slate-400">
              Official PDF Resume • Santu Pramanik
            </span>
            <a
              href="/Santu_Pramanik_Resume.pdf"
              download="Santu_Pramanik_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
