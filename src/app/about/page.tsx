"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Zap, Cpu, Shield, Activity, Globe, Layout, Database, Server, Code, Layers } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-3 py-1 border border-accent/30 bg-accent/5 rounded text-accent text-xs font-sans tracking-[0.3em] uppercase">
            Identity Core
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            WHO WE <span className="text-accent drop-shadow-[0_0_10px_var(--accent)]">ARE</span>
          </h2>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed font-sans">
            BharatTitan is an elite digital force. Born from the fusion of cold intelligence and fiery ambition, we craft experiences that defy the ordinary.
          </p>
        </motion.div>

        {/* 1. ORIGIN SIGNAL */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 max-w-2xl"
        >
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// ORIGIN SIGNAL</span>
          <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 tracking-wider uppercase">ORIGIN <span className="text-accent">SIGNAL</span></h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-sans mb-4">
            BharatTitan was initiated as a focused digital unit to build high-performance systems with precision and clarity.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-sans">
            What started as small-scale builds evolved into structured system engineering across multiple domains.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Target,
              title: "OUR MISSION",
              desc: "To engineer robust, scalable, and futuristic systems that empower enterprises to dominate the global grid."
            },
            {
              icon: Eye,
              title: "OUR VISION",
              desc: "A reality where Indian technology defines the apex of performance, security, and elite design."
            },
            {
              icon: Zap,
              title: "OUR ENERGY",
              desc: "Fueling the digital revolution with high-octane code and neon-charged creativity. We don't stop until the future is built."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group bg-card/40 backdrop-blur-md p-8 border border-white/5 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-background rounded-lg border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_15px_var(--accent)] transition-all duration-300">
                  <item.icon className="text-accent group-hover:text-white w-8 h-8 transition-colors duration-300" />
                </div>
                <h3 className="font-sans text-xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. OPERATION PRINCIPLES */}
        <section className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// CORE LOGIC</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">OPERATION <span className="text-accent">PRINCIPLES</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Precision over volume", icon: Activity },
              { title: "Systems over shortcuts", icon: Layers },
              { title: "Performance over decoration", icon: Cpu },
              { title: "Long-term stability over quick delivery", icon: Shield }
            ].map((principle, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card/20 border border-white/5 hover:border-accent/20 transition-all flex flex-col gap-4 group"
              >
                <principle.icon className="text-accent/50 group-hover:text-accent transition-colors" size={20} />
                <span className="text-white font-sans font-medium tracking-wide text-sm">{principle.title}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. TECH STACK CORE */}
        <section className="mb-32 p-8 md:p-12 bg-card/10 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none"></div>
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// INTERNAL STRUCTURE</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">TECH STACK <span className="text-accent">CORE</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { category: "Frontend", items: "React, Next.js", icon: Layout },
              { category: "Backend", items: "Node.js, Express", icon: Code },
              { category: "Cloud", items: "AWS (EC2, S3)", icon: Server },
              { category: "Database", items: "MongoDB, PostgreSQL", icon: Database },
              { category: "Tools", items: "Git, Docker", icon: Cpu }
            ].map((stack, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center gap-2 text-accent text-[10px] font-orbitron uppercase tracking-widest">
                  <stack.icon size={12} /> {stack.category}
                </div>
                <div className="text-white font-sans text-sm tracking-wide leading-relaxed font-mono opacity-80">{stack.items}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SYSTEM PHILOSOPHY */}
        <section className="mb-32 py-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-6">// SYSTEM DATA</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase mb-8">SYSTEM <span className="text-accent">PHILOSOPHY</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Scalable from day one",
                "Maintainable over time",
                "Efficient under real-world load",
                "Clean in structure and logic"
              ].map((text, i) => (
                <div key={i} className="text-muted-foreground font-sans text-sm uppercase tracking-[0.1em] border-l border-accent/30 pl-4 text-left">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. GLOBAL REACH & 6. CURRENT FOCUS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Global Reach */}
          <section>
            <div className="mb-8">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// NETWORK</span>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">GLOBAL <span className="text-accent">REACH</span></h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Clients served in 3+ countries", val: "03+" },
                { label: "Remote-first collaboration", val: "SYNC" },
                { label: "Async communication supported", val: "ASYNC" },
                { label: "Flexible engagement models", val: "FLEX" }
              ].map((reach, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-card/20 border border-white/5">
                  <span className="text-muted-foreground font-sans text-sm">{reach.label}</span>
                  <span className="text-accent font-orbitron text-xs font-bold">{reach.val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Current Focus */}
          <section>
            <div className="mb-8">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// OPERATIONS</span>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">CURRENT <span className="text-accent">FOCUS</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Web application systems",
                "Automation tools",
                "Portfolio platforms",
                "Backend architectures"
              ].map((focus, i) => (
                <div key={i} className="p-5 bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors group">
                   <div className="text-white font-orbitron text-[10px] mb-2 opacity-50 group-hover:opacity-100">0{i+1}</div>
                   <div className="text-white font-sans text-xs font-bold tracking-widest uppercase">{focus}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 7. TEAM STRUCTURE */}
        <section className="mb-32 max-w-xl">
          <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// EXECUTION</span>
          <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase mb-6">TEAM <span className="text-accent">STRUCTURE</span></h2>
          <p className="text-muted-foreground text-base leading-relaxed font-sans mb-4">
            Small, focused, and execution-driven.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed font-sans">
            Projects are handled with a lean approach to maintain speed and clarity.
          </p>
        </section>

        {/* Stats / Divider */}
        <div className="relative py-16 mb-20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { label: "Systems Online", value: "150+" },
                    { label: "Elite Partners", value: "45+" },
                    { label: "Cycles Active", value: "10+" },
                    { label: "Awards Unlocked", value: "25" }
                ].map((stat, i) => (
                    <div key={i} className="group cursor-default">
                        <div className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{stat.value}</div>
                        <div className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase font-sans">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* 8. EXTENDED METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pb-20">
            {[
                { label: "Avg Duration", value: "2–6 WKS" },
                { label: "Repeat Clients", value: "40%" },
                { label: "Uptime Focus", value: "99%" },
                { label: "Support window", value: "07 DAYS" }
            ].map((metric, i) => (
                <div key={i} className="group">
                    <div className="font-orbitron text-xl md:text-2xl font-bold text-white/70 mb-2 group-hover:text-accent transition-colors">{metric.value}</div>
                    <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase font-sans">{metric.label}</div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
