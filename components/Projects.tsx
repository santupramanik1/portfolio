'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight, Cpu } from 'lucide-react';
import { Github } from '@/components/Icons';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'AI / Full Stack', 'MERN Stack'];

  const filteredProjects = filterCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Engineering & <span className="gradient-text">AI Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Full-stack web applications, AI automation tools, and real-time platforms built with clean code practices.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = filterCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 border border-cyan-400'
                    : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card glass-card-hover rounded-3xl border border-white/10 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header Mockup window */}
                <div className="h-48 bg-gradient-to-br from-slate-900 via-[#080d1a] to-cyan-950/60 p-4 border-b border-white/10 relative flex flex-col justify-between overflow-hidden">
                  {/* Glowing ambient background inside card preview */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all" />

                  {/* Window Controls Dot Header */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Preview Architecture Graphics Code Snippet Visual */}
                  <div className="z-10 bg-[#05070e]/80 backdrop-blur-md rounded-xl p-3 border border-white/10 font-mono text-[11px] text-slate-300 space-y-1">
                    <div className="flex items-center justify-between text-cyan-400">
                      <span>{project.title.toLowerCase()}.config.ts</span>
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                    </div>
                    <p className="text-slate-400 truncate">// {project.subtitle}</p>
                    <div className="text-emerald-400 text-[10px]">
                      status: 200 OK • {project.metrics || 'Active Build'}
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">{project.date}</span>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech stack tag pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/90 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-cyan-950/50 text-cyan-300">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <span>Deep Dive & Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
