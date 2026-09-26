'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WhatsApp } from '@/components/Icons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function WhatsAppButton() {
  // Extract digits for WhatsApp URL (e.g. +91-9832487454 -> 919832487454)
  const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hi Santu! I visited your portfolio and would like to connect."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip on Hover */}
      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:flex items-center">
        <div className="px-3.5 py-1.5 rounded-xl bg-[#080d1a]/95 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium shadow-xl shadow-black/50 whitespace-nowrap backdrop-blur-md">
          💬 Chat on WhatsApp
        </div>
      </div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-xl shadow-emerald-500/30 border border-emerald-400/40 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Outer Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none opacity-75" />

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#05070e] rounded-full z-10" />

        <WhatsApp className="w-7 h-7 relative z-10 fill-white" />
      </motion.a>
    </div>
  );
}
