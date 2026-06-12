"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Layers, ChevronRight, Home, ArrowRight, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function EngineeringSystems() {
  const features = [
    { 
      title: "SCALABLE ARCHITECTURE", 
      desc: "Built to grow with your business without compromising performance.",
      icon: Layers
    },
    { 
      title: "CLOUD-NATIVE SOLUTIONS", 
      desc: "Leveraging modern cloud infrastructure for reliability and speed.",
      icon: Server
    },
    { 
      title: "SECURE BY DESIGN", 
      desc: "Security is integrated at every layer of the system.",
      icon: Shield
    }
  ];

  const stats = [
    { value: "30+", label: "Systems Built" },
    { value: "99.9%", label: "Uptime Focus" },
    { value: "100%", label: "Scalable" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-0 px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-orbitron uppercase tracking-widest text-muted-foreground mb-12">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span>Core Capabilities</span>
          <ChevronRight size={10} />
          <span className="text-foreground font-bold">Engineering Systems</span>
        </nav>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-orbitron text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
                ENGINEERING <br /> <span className="text-accent">SYSTEMS</span>
              </h1>
              
              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-12 max-w-md">
                We build scalable, secure, and high-performance backend and cloud-native systems engineered to handle real-world complexity.
              </p>

              {/* Feature List */}
              <div className="space-y-8 mb-12">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/5 border border-accent/10 dark:bg-white/5 dark:border-white/10 rounded flex items-center justify-center group-hover:border-accent/50 transition-colors">
                      <feature.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-[10px] font-bold tracking-[0.2em] mb-1 text-slate-900 dark:text-white group-hover:text-accent transition-colors uppercase">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-[11px] leading-relaxed max-w-xs">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 border border-accent text-accent font-orbitron text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
              >
                Let's Build Your System <ChevronRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Visual + Stats */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[16/10] bg-slate-50 dark:bg-[#15191E] border border-slate-200 dark:border-white/5 rounded-lg flex items-center justify-center overflow-hidden group shadow-inner"
            >
              {/* IMAGE PLACEHOLDER - REPLACE SRC LATER */}
              <div className="absolute inset-0 z-0">
                 <img 
                    src="/placeholder-engineering.jpg" 
                    alt="Engineering Systems Visual" 
                    className="w-full h-full object-cover opacity-10 dark:opacity-20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                 />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-6 text-slate-400 dark:text-slate-600">
                <div className="relative">
                   <ImageIcon size={80} className="opacity-40 dark:opacity-20" />
                   <div className="absolute inset-0 bg-accent/5 blur-2xl"></div>
                </div>
                <span className="font-orbitron text-[10px] tracking-[0.4em] uppercase text-center">
                  ENGINEERING SYSTEMS <br /> VISUAL
                </span>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-200 dark:border-white/10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-slate-200 dark:border-white/10"></div>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-50 dark:bg-[#15191E] border border-slate-200 dark:border-white/5 p-6 rounded-lg text-center space-y-2 shadow-sm">
                  <div className="font-orbitron text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-muted-foreground text-[9px] font-orbitron tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <section className="relative w-full border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black py-20 px-6 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.05)_0%,transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase text-slate-900 dark:text-white">
            READY TO BUILD SOMETHING <span className="text-accent">ELITE?</span>
          </h2>
          <p className="text-muted-foreground text-sm font-sans mb-10">
            Let's turn your idea into a high-performance system.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <Link 
              href="/contact"
              className="px-10 py-4 bg-accent text-white font-orbitron font-bold text-xs tracking-[0.2em] uppercase hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Start a Project <ArrowRight size={16} className="inline ml-2" />
            </Link>
            
            <div className="flex flex-col items-center gap-4">
               <div className="w-12 h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-sm">
                  <img src="/company-logo.png" alt="BharatTitan" className="w-6 h-6 grayscale opacity-50" />
               </div>
               <div className="text-[10px] font-orbitron tracking-[0.3em] text-slate-400 dark:text-slate-600 uppercase">
                  Elite Systems. Limitless Possibilities.
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
