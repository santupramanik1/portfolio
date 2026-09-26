'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Play, RefreshCw, Sparkles, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCES, EDUCATION_LIST } from '@/data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'system';
  text: string;
  formattedOutput?: React.ReactNode;
}

export default function InteractiveTerminal({ isOpen, onClose }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'welcome-1',
      type: 'system',
      text: 'SANTU_AI_SHELL v2.6.0 [x86_64-pc-linux-gnu]\nType "help" or click command tags below to explore.'
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpen]);

  const handleCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim().toLowerCase();
    if (!rawCmd) return;

    const newLogs: CommandLog[] = [
      ...logs,
      { id: `input-${Date.now()}`, type: 'input', text: cmdStr }
    ];

    let outputNode: React.ReactNode = null;
    let outputText = '';

    switch (rawCmd) {
      case 'help':
        outputText = 'Available Commands:\n• skills      - Display tech stack radar & proficiencies\n• projects    - Summary of top full-stack & AI projects\n• experience  - Work history & internship milestones\n• education   - Degree qualifications & CGPA\n• contact     - Phone, Email, Location & Links\n• hire        - Key highlights on why Santu is an ideal candidate\n• clear       - Clear console screen';
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 py-1 text-xs">
            <p className="text-cyan-400 font-bold">/// TECHNICAL SKILLS RADAR ///</p>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-amber-300 font-mono w-32 shrink-0">[{cat.name}]:</span>
                <span className="text-slate-300 font-mono">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-3 py-1 text-xs">
            <p className="text-cyan-400 font-bold">/// FEATURED PROJECTS ///</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-900/80 border border-cyan-500/20">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>{p.title} ({p.category})</span>
                  <span className="text-cyan-400 font-mono text-[10px]">{p.date}</span>
                </div>
                <p className="text-slate-300 text-[11px] mt-1">{p.summary}</p>
                <div className="text-emerald-400 text-[10px] mt-1 font-mono">Stack: {p.techStack.join(' • ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-2 py-1 text-xs">
            <p className="text-cyan-400 font-bold">/// WORK HISTORY ///</p>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="p-2 rounded bg-slate-900/80 border border-cyan-500/20">
                <div className="text-white font-bold">{exp.role} @ {exp.company} ({exp.period})</div>
                <ul className="list-disc list-inside text-slate-300 text-[11px] mt-1 space-y-1">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-2 py-1 text-xs">
            <p className="text-cyan-400 font-bold">/// ACADEMIC QUALIFICATIONS ///</p>
            {EDUCATION_LIST.map((edu) => (
              <div key={edu.id} className="text-slate-300">
                <span className="text-emerald-400 font-bold">[{edu.grade}]</span> {edu.degree} - {edu.institution} ({edu.period})
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 py-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">/// CONTACT DETAILS ///</p>
            <p>📍 Location : {PERSONAL_INFO.location}</p>
            <p>📧 Email    : {PERSONAL_INFO.email}</p>
            <p>📱 Phone    : {PERSONAL_INFO.phone}</p>
            <p>🌐 GitHub   : {PERSONAL_INFO.github}</p>
            <p>💻 LeetCode : {PERSONAL_INFO.leetcode}</p>
          </div>
        );
        break;

      case 'hire':
        outputText = '🚀 Why Hire Santu Pramanik?\n1. Proven MERN & Next.js full-stack capabilities with clean TypeScript architecture.\n2. Generative AI & LangChain agent integration expertise.\n3. Strong algorithmic foundation with 300+ LeetCode DSA challenges solved.\n4. Demonstrated production reliability (99.9% uptime during Inquesta internship).\n5. High academic rigor (MCA CGPA 9.05 & BCA CGPA 8.76).';
        break;

      case 'clear':
        setLogs([
          {
            id: `sys-${Date.now()}`,
            type: 'system',
            text: 'Terminal cleared.'
          }
        ]);
        setInputVal('');
        return;

      default:
        outputText = `Command not recognized: "${cmdStr}". Type "help" for valid commands.`;
        break;
    }

    newLogs.push({
      id: `output-${Date.now()}`,
      type: 'output',
      text: outputText,
      formattedOutput: outputNode
    });

    setLogs(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col h-[520px]"
        >
          {/* Top Header Bar */}
          <div className="px-6 py-4 bg-[#080d1a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>santu@portfolio:~ (Interactive AI Console)</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Command Chips */}
          <div className="px-6 py-2 bg-slate-950/80 border-b border-white/5 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-mono text-[10px] mr-1">Quick Commands:</span>
            {['help', 'skills', 'projects', 'experience', 'education', 'contact', 'hire', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 hover:border-cyan-400 transition-all cursor-pointer"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Screen Body */}
          <div className="flex-1 p-6 overflow-y-auto font-mono text-xs space-y-4 bg-[#04060d]">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                {log.type === 'input' && (
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <span>santu@portfolio:~$</span>
                    <span>{log.text}</span>
                  </div>
                )}

                {log.type === 'system' && (
                  <div className="text-slate-400 whitespace-pre-line leading-relaxed">
                    {log.text}
                  </div>
                )}

                {log.type === 'output' && (
                  <div>
                    {log.text && (
                      <div className="text-slate-200 whitespace-pre-line leading-relaxed">
                        {log.text}
                      </div>
                    )}
                    {log.formattedOutput}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt Footer */}
          <div className="px-6 py-3 bg-[#080d1a] border-t border-white/10 flex items-center gap-3">
            <span className="text-cyan-400 font-mono font-bold">santu@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command (e.g. skills, projects, hire)..."
              className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none placeholder:text-slate-500"
              autoFocus
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-2 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
