'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cyber3DScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Particles & Polyhedron Simulation
    const numNodes = 45;
    const nodes: {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: string;
      label: string;
    }[] = [];

    const techLabels = [
      'React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 
      'Express', 'C++', 'Python', 'LangChain', 'REST API',
      'JWT', 'Gemini AI', 'Tailwind', 'MySQL', 'Git'
    ];

    const colors = ['#38bdf8', '#818cf8', '#34d399', '#a855f7', '#06b6d4'];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 0.8,
        y: (Math.random() - 0.5) * height * 0.8,
        z: (Math.random() - 0.5) * 400,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        color: colors[i % colors.length],
        label: techLabels[i % techLabels.length]
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left - width / 2;
      mouseY = e.clientY - rect.top - height / 2;
      targetRotationY = (mouseX / width) * 0.6;
      targetRotationX = -(mouseY / height) * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera rotation
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;
      angle += 0.005;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY + angle * 0.2);
      const sinY = Math.sin(rotationY + angle * 0.2);

      const fov = 350;
      const projectedNodes: { x: number; y: number; scale: number; node: (typeof nodes)[0] }[] = [];

      nodes.forEach((node) => {
        // Velocity update
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        if (Math.abs(node.x) > width * 0.4) node.vx *= -1;
        if (Math.abs(node.y) > height * 0.4) node.vy *= -1;
        if (Math.abs(node.z) > 200) node.vz *= -1;

        // 3D rotation matrix
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;
        let y1 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        const distance = fov + z2;
        if (distance > 0) {
          const scale = fov / distance;
          const projX = width / 2 + x1 * scale;
          const projY = height / 2 + y1 * scale;
          projectedNodes.push({ x: projX, y: projY, scale, node });
        }
      });

      // Draw connections
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.25 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw 3D wireframe core (dodecahedron style dynamic rings)
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(angle);
      
      // Outer Glowing Ring
      ctx.beginPath();
      ctx.ellipse(0, 0, 160, 60, angle * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner Counter-rotating Ring
      ctx.beginPath();
      ctx.ellipse(0, 0, 110, 110, -angle * 0.8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Draw nodes & tech labels
      projectedNodes.forEach(({ x, y, scale, node }) => {
        ctx.beginPath();
        ctx.arc(x, y, Math.max(1, node.radius * scale), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Render subset of tech labels for a futuristic tech globe look
        if (scale > 1.1) {
          ctx.font = `${Math.floor(10 * scale)}px monospace`;
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, scale - 0.5)})`;
          ctx.fillText(node.label, x + 8 * scale, y + 4 * scale);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
      {/* Background glow behind 3D Canvas */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow" />
      <div className="absolute w-60 h-60 rounded-full bg-indigo-600/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
      />

      {/* Floating 3D Badge Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-4 right-4 z-20 glass-card px-4 py-2.5 rounded-xl flex items-center gap-3 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
        <span>3D Interactive Matrix • Orbiting Node Graph</span>
      </motion.div>
    </div>
  );
}
