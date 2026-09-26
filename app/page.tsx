'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import ResumeModal from '@/components/ResumeModal';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 cyber-grid selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Ambient Mesh Light */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        <Navbar
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        <main>
          <Hero
            onOpenResume={() => setResumeOpen(true)}
            onOpenTerminal={() => setTerminalOpen(true)}
          />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Interactive Terminal Shell Drawer */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Resume Viewer Drawer */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
