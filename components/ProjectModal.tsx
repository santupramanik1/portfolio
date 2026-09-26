'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Layers, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { Github } from '@/components/Icons';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-md"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        >
          {/* Header Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Title & Category */}
          <div className="mb-6 pr-12">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">{project.date}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-cyan-400 font-mono text-sm mt-1">{project.subtitle}</p>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-6">
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>

            {project.architectureNotes && (
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-200 flex items-start gap-3">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-cyan-400 block mb-1">Architecture Highlights:</span>
                  <span>{project.architectureNotes}</span>
                </div>
              </div>
            )}
          </div>

          {/* Key Achievements & Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Key Features & Engineering Deliverables</span>
            </h4>
            <ul className="space-y-2.5">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-900 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-200 glass-card hover:bg-white/10 border border-white/15 transition-all"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>View Source Code</span>
            </a>

            <a
              href={project.demoUrl === '#' ? project.githubUrl : project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
