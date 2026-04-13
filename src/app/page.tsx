"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Zap } from 'lucide-react';
import { DataStreamBackground } from '@/components/DataStreamBackground';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      
      {/* 1. Canvas Data Stream Background */}
      <DataStreamBackground />

      {/* 2. Hero Image Integration (Blended) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
            src="/hero-wolf.png" 
            alt="Futuristic Wolf Pack" 
            className="w-full h-full object-cover object-center mix-blend-lighten"
        />
        {/* Color Overlay to harmonize with theme */}
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10"></div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-accent/30 bg-background/80 backdrop-blur-xl shadow-lg shadow-accent/20"
        >
          <Zap size={14} className="text-accent fill-accent animate-pulse" />
          <span className="text-white text-xs font-orbitron tracking-[0.3em] uppercase">
            System Overdrive Active
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-8 tracking-tighter"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">LEAD THE</span>
          <span className="relative inline-block">
             <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent/60">PACK</span>
             {/* Text Glow */}
             <span className="absolute inset-0 text-accent opacity-50 blur-lg z-0">PACK</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-sans font-light leading-relaxed tracking-wide"
        >
          Harness the velocity of <span className="text-white font-medium">next-gen data streams</span>. 
          We engineer the digital alpha.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg"
        >
          <Link 
            href="/contact"
            className="group relative w-full sm:w-auto px-8 py-5 bg-accent text-white font-orbitron font-bold tracking-widest uppercase overflow-hidden clip-path-slant hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/40 hover:shadow-accent/60"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              JOIN THE HUNT <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link 
            href="/products"
            className="group relative w-full sm:w-auto px-8 py-5 bg-transparent border border-white/20 text-white font-orbitron font-bold tracking-widest uppercase overflow-hidden hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              VIEW ARSENAL <Activity size={20} className="group-hover:text-accent transition-colors" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
