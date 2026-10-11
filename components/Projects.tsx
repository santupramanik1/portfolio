'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  FolderGit2, ExternalLink, Sparkles, ArrowUpRight,
  Globe, ShieldCheck, Database, Server, Zap, LayoutDashboard
} from 'lucide-react';
import { Github } from '@/components/Icons';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';

// ─── Accent colour mapping ────────────────────────────────────────────────
const ACCENT: Record<string, { glow: string; pill: string; badge: string; dot: string }> = {
  cyan: {
    glow:  'rgba(6,182,212,0.18)',
    pill:  'bg-cyan-950/60 border-cyan-500/40 text-cyan-300',
    badge: 'from-cyan-400 to-teal-300',
    dot:   'bg-cyan-400',
  },
  emerald: {
    glow:  'rgba(52,211,153,0.18)',
    pill:  'bg-emerald-950/60 border-emerald-500/40 text-emerald-300',
    badge: 'from-emerald-400 to-green-300',
    dot:   'bg-emerald-400',
  },
  violet: {
    glow:  'rgba(139,92,246,0.18)',
    pill:  'bg-violet-950/60 border-violet-500/40 text-violet-300',
    badge: 'from-violet-400 to-purple-300',
    dot:   'bg-violet-400',
  },
  amber: {
    glow:  'rgba(251,191,36,0.15)',
    pill:  'bg-amber-950/60 border-amber-500/40 text-amber-300',
    badge: 'from-amber-400 to-yellow-300',
    dot:   'bg-amber-400',
  },
};

function getAccent(project: Project) {
  const key = project.accentColor || 'cyan';
  return ACCENT[key] ?? ACCENT.cyan;
}

// ─── Category icon mapping ─────────────────────────────────────────────────
function CategoryIcon({ category }: { category: string }) {
  if (category === 'AI / Full Stack') return <Zap className="w-3.5 h-3.5" />;
  if (category === 'Web Apps')        return <Globe className="w-3.5 h-3.5" />;
  return <Database className="w-3.5 h-3.5" />;
}

// ─── Tilt Card ─────────────────────────────────────────────────────────────
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  }, [x, y]);

  const handleLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Mock browser header ───────────────────────────────────────────────────
function BrowserBar({ project, accent }: { project: Project; accent: ReturnType<typeof getAccent> }) {
  return (
    <div className="h-44 relative overflow-hidden rounded-t-2xl"
      style={{ background: 'linear-gradient(135deg,#060d1c 0%,#080f1e 60%,#030710 100%)' }}>
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 80% 20%, ${accent.glow} 0%, transparent 70%)` }}
      />
      {/* Animated grid lines */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />

      {/* Window chrome */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full border ${accent.pill}`}>
          <CategoryIcon category={project.category} />
          {project.category}
        </span>
      </div>

      {/* Code-like preview */}
      <div className="relative z-10 mx-4 mt-1 bg-[#05070e]/80 backdrop-blur-md rounded-xl p-3 border border-white/10">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[11px] text-cyan-400">{project.title.toLowerCase()}.config.ts</span>
          <Sparkles className="w-3 h-3 text-cyan-400" />
        </div>
        <p className="font-mono text-[10px] text-slate-500">// {project.subtitle}</p>
        {project.hasAdminPanel && (
          <div className="mt-1 flex items-center gap-1.5 font-mono text-[10px] text-violet-300">
            <LayoutDashboard className="w-3 h-3" />
            <span>admin_panel: enabled • role_based_access: true</span>
          </div>
        )}
        <div className="mt-1 font-mono text-[10px] text-emerald-400">
          ▶ status: 200 OK • {project.metrics || 'Active Build'}
        </div>
      </div>
    </div>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────
function ProjectCard({
  project, index, onOpen
}: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const accent = getAccent(project);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <TiltCard className="h-full">
        <div
          className="h-full flex flex-col rounded-2xl border border-white/10 overflow-hidden cursor-pointer relative"
          style={{
            background: 'rgba(10,14,26,0.85)',
            backdropFilter: 'blur(20px)',
            boxShadow: hovered
              ? `0 0 40px ${accent.glow}, 0 20px 40px rgba(0,0,0,0.4)`
              : '0 4px 24px rgba(0,0,0,0.3)',
            borderColor: hovered ? `${accent.glow.replace('0.18','0.5')}` : 'rgba(255,255,255,0.1)',
            transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Featured ribbon */}
          {project.featured && (
            <div
              className={`absolute top-4 left-0 z-20 flex items-center gap-1 text-[10px] font-mono font-bold px-3 py-0.5 rounded-r-full bg-gradient-to-r ${accent.badge} text-slate-900`}
            >
              <Sparkles className="w-2.5 h-2.5" /> Featured
            </div>
          )}

          {/* Admin Panel Badge */}
          {project.hasAdminPanel && (
            <div className="absolute top-10 left-0 z-20 flex items-center gap-1 text-[10px] font-mono font-bold px-3 py-0.5 rounded-r-full bg-violet-600/90 text-white shadow-lg shadow-violet-500/30 mt-1">
              <ShieldCheck className="w-2.5 h-2.5" /> Admin Panel
            </div>
          )}

          {/* Browser Header */}
          <BrowserBar project={project} accent={accent} />

          {/* Card body */}
          <div className="flex-1 flex flex-col justify-between p-5 space-y-4">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono text-slate-500 shrink-0 pt-1">{project.date}</span>
              </div>
              <p className="text-[13px] text-slate-400 leading-relaxed line-clamp-3">
                {project.summary}
              </p>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-white/10 text-slate-300"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-white/10 text-slate-500">
                  +{project.techStack.length - 5} more
                </span>
              )}
            </div>

            {/* Action row */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => onOpen(project)}
                className="group/btn inline-flex items-center gap-1.5 text-xs font-mono font-medium transition-colors cursor-pointer"
                style={{ color: accent.glow.includes('52,211') ? '#34d399' : accent.glow.includes('139,92') ? '#a78bfa' : '#22d3ee' }}
              >
                <span>Deep Dive</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

// ─── Stats bar ─────────────────────────────────────────────────────────────
const STATS = [
  { icon: <Server className="w-4 h-4 text-cyan-400" />,    label: 'Projects Shipped',  value: '4+' },
  { icon: <Globe className="w-4 h-4 text-emerald-400" />,  label: 'Live Deployments',  value: '4' },
  { icon: <ShieldCheck className="w-4 h-4 text-violet-400" />, label: 'Admin Panels',  value: '1' },
  { icon: <Database className="w-4 h-4 text-amber-400" />, label: 'Tech Stacks Used',  value: '12+' },
];

// ─── Main Section ──────────────────────────────────────────────────────────
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'AI / Full Stack', 'MERN Stack', 'Web Apps'];

  const filteredProjects = filterCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle,#06b6d4,transparent)' }} />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle,#8b5cf6,transparent)' }} />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Engineering &amp; <span className="gradient-text">AI Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-2xl text-[15px] leading-relaxed"
          >
            Full-stack web applications, AI automation tools, travel platforms, and real-time systems
            — all shipped with clean architecture and production-grade practices.
          </motion.p>
        </div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-xl px-4 py-3 border border-white/10"
              style={{ background: 'rgba(10,14,26,0.7)', backdropFilter: 'blur(12px)' }}
            >
              {s.icon}
              <div>
                <p className="text-xl font-bold text-white leading-none">{s.value}</p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 flex-wrap mb-12"
        >
          {categories.map((cat) => {
            const active = filterCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className="relative px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 cursor-pointer"
                style={{
                  background: active
                    ? 'linear-gradient(135deg,#06b6d4,#818cf8)'
                    : 'rgba(255,255,255,0.05)',
                  color: active ? '#030712' : '#94a3b8',
                  border: active ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: active ? '0 0 20px rgba(6,182,212,0.35)' : 'none',
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="sync">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com/santupramanik1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono text-sm font-semibold text-slate-200 border border-white/15 transition-all duration-300 hover:border-cyan-500/50 hover:text-white"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}
          >
            <Github className="w-4 h-4" />
            <span>Explore All Repositories</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
