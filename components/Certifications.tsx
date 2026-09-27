'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BadgeCheck, ExternalLink, ChevronDown, Sparkles, Shield, Star } from 'lucide-react';
import { CERTIFICATIONS } from '@/data/portfolioData';

const accentMap: Record<string, { border: string; glow: string; text: string; bg: string; pill: string; shine: string }> = {
  cyan: {
    border: 'border-cyan-500/40',
    glow: 'shadow-[0_0_40px_rgba(6,182,212,0.18)]',
    text: 'text-cyan-400',
    bg: 'bg-cyan-950/50',
    pill: 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300',
    shine: 'from-cyan-400/0 via-cyan-400/10 to-cyan-400/0',
  },
  indigo: {
    border: 'border-indigo-500/40',
    glow: 'shadow-[0_0_40px_rgba(99,102,241,0.18)]',
    text: 'text-indigo-400',
    bg: 'bg-indigo-950/50',
    pill: 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300',
    shine: 'from-indigo-400/0 via-indigo-400/10 to-indigo-400/0',
  },
  emerald: {
    border: 'border-emerald-500/40',
    glow: 'shadow-[0_0_40px_rgba(16,185,129,0.18)]',
    text: 'text-emerald-400',
    bg: 'bg-emerald-950/50',
    pill: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300',
    shine: 'from-emerald-400/0 via-emerald-400/10 to-emerald-400/0',
  },
};

const floatingOrbs = [
  { size: 'w-80 h-80', pos: '-top-20 -left-20', color: 'bg-cyan-500/8' },
  { size: 'w-96 h-96', pos: 'top-1/2 -right-32', color: 'bg-indigo-600/8' },
  { size: 'w-72 h-72', pos: 'bottom-0 left-1/3', color: 'bg-emerald-500/8' },
];

export default function Certifications() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-28 relative bg-[#04060c] overflow-hidden">
      {/* Ambient Orbs */}
      {floatingOrbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.size} ${orb.pos} ${orb.color} rounded-full blur-[160px] pointer-events-none`}
        />
      ))}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-cyan-400/40 pointer-events-none"
          style={{ left: `${8 + i * 7.5}%`, top: `${15 + (i % 4) * 20}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs uppercase tracking-widest mb-5 shadow-lg shadow-cyan-950/50 backdrop-blur-md"
          >
            <BadgeCheck className="w-4 h-4" />
            <span>Professional Credentials</span>
          </motion.div>

          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Verified{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Industry-recognized credentials issued by IBM via Coursera — validating expertise in modern software
            engineering, front-end development, and Python programming.
          </p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 mt-8"
          >
            {[
              { label: 'Certificates', value: '3' },
              { label: 'Issuer', value: 'IBM' },
              { label: 'Platform', value: 'Coursera' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {CERTIFICATIONS.map((cert, idx) => {
            const a = accentMap[cert.accentColor] ?? accentMap.cyan;
            const isOpen = expanded === cert.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col h-full"
              >
                {/* Glow border pulse on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`}
                />

                <div
                  className={`relative glass-card rounded-3xl border ${a.border} ${a.glow} overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1 flex flex-col h-full`}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${cert.color.replace('/20', '')}`} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Badge + Issuer row */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 rounded-2xl ${a.bg} border ${a.border} flex items-center justify-center text-2xl shadow-lg select-none`}
                      >
                        {cert.badgeIcon}
                      </motion.div>

                      <div className="flex flex-col items-end gap-1.5">
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${a.bg} border ${a.border} ${a.text} text-[11px] font-semibold`}>
                          <Shield className="w-3 h-3" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500">
                          <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                          <span>Coursera Verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight tracking-tight mb-2 group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issued */}
                    <div className={`flex items-center gap-1.5 text-xs ${a.text} mb-5`}>
                      <BadgeCheck className="w-3.5 h-3.5" />
                      <span>Issued {cert.issuedDate}</span>
                    </div>

                    {/* Skills — expandable */}
                    <div>
                      <button
                        onClick={() => setExpanded(isOpen ? null : cert.id)}
                        className={`w-full flex items-center justify-between text-xs font-semibold ${a.text} uppercase tracking-widest py-2 border-t border-white/10 transition-colors hover:opacity-80`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" />
                          Skills Covered
                        </span>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 flex flex-wrap gap-2">
                              {cert.skills.map((skill, si) => (
                                <motion.span
                                  key={skill}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: si * 0.06 }}
                                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border ${a.pill} backdrop-blur-sm`}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Verify Button */}
                    {cert.verifyUrl && (
                      <div className="mt-auto pt-5">
                        <motion.a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold ${a.text} border ${a.border} ${a.bg} hover:brightness-125 transition-all backdrop-blur-sm`}
                        >
                          <Award className="w-3.5 h-3.5 shrink-0" />
                          <span>Verify Credential</span>
                          <ExternalLink className="w-3 h-3 opacity-70 shrink-0" />
                        </motion.a>
                      </div>
                    )}
                  </div>

                  {/* Bottom glow ribbon */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color.replace('/20', '')} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-14 text-slate-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-cyan-500" />
            <span>Credentials issued by</span>
            <span className="text-white font-bold">IBM</span>
            <span>&</span>
            <span className="text-blue-400 font-bold">Meta</span>
            <span>via</span>
            <span className="text-indigo-400 font-semibold">Coursera</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
