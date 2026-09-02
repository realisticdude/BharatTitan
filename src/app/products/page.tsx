"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Activity, Database, Globe, Layers, Layout, Lock, Terminal, Zap, ChevronRight, Cpu, Shield, Box } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { DataStreamBackground } from '@/components/DataStreamBackground';

// Helper component for counting numbers
const CountingNumber = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    const timer = setTimeout(() => {
      motionValue.set(numericValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [numericValue, motionValue]);

  return (
    <motion.span>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default function Products() {
  const products = [
    {
      id: 1,
      name: "TITAN ANALYTICS",
      tag: "Enterprise Data",
      status: "Coming Soon",
      desc: "Lightweight analytics engine for tracking system performance and user behavior. Focused on clarity over complexity.",
      image: "/titan-analytics.jpg"
    },
    {
      id: 2,
      name: "BHARAT CLOUD",
      tag: "Infrastructure",
      status: "Beta Access",
      desc: "Modular cloud infrastructure designed for small to mid-scale deployments with cost efficiency.",
      image: "/bharat-cloud.png"
    },
    {
      id: 3,
      name: "FORTRESS UI",
      tag: "Design System",
      status: "Available",
      desc: "Reusable UI component system built for speed, consistency, and futuristic interfaces.",
      image: "/fortress-ui.png"
    },
    {
      id: 4,
      name: "Titan Link",
      tag: "Connectivity",
      status: "Coming Soon",
      desc: "Unified API layer enabling seamless communication between services and external platforms.",
      image: "/titan-link.png"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-background relative overflow-hidden">
      {/* Background Energy */}
      <div className="fixed inset-0 z-0 opacity-40">
        <DataStreamBackground />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block mb-4"
          >
            <span className="text-accent text-xs font-bold tracking-[0.5em] uppercase px-4 py-1 border border-accent/30 rounded-full bg-accent/5">
              Proprietary Systems
            </span>
          </motion.div>
          
          <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
            {["FLAGSHIP", "PRODUCTS"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: "easeOut" }}
                className={`inline-block ${word === "PRODUCTS" ? "text-accent drop-shadow-[0_0_25px_var(--accent)]" : ""}`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-muted-foreground max-w-2xl mx-auto font-sans text-lg mb-12"
          >
            In-house innovations designed to revolutionize the grid. Engineering the future, one module at a time.
          </motion.p>

          {/* 1. PRODUCT OVERVIEW STRIP */}
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 bg-card/10 border border-white/5 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            {[
              { label: "Active Products", val: "4" },
              { label: "In Development", val: "2" },
              { label: "Beta Access", val: "1" },
              { label: "Stable Releases", val: "1" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-3 text-[10px] font-orbitron tracking-widest uppercase"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-muted-foreground">{stat.label}:</span>
                <span className="text-white">
                  <CountingNumber value={stat.val} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FLAGSHIP PRODUCTS SEQUENTIAL REVEAL */}
        <section className="mb-32">
          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ 
                  duration: 0.9, 
                  delay: index * 0.15, 
                  ease: [0.21, 0.73, 0.29, 0.94] 
                }}
                className="group relative bg-card/40 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-accent/30 transition-colors duration-500"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Scanning Line Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div 
                    animate={{ 
                      top: ["-100%", "200%"],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-accent/10 to-transparent skew-y-12"
                  />
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Product Image (Left or Right based on index) */}
                  <div className={`relative w-full md:w-1/2 h-[300px] md:h-auto order-${index % 2 === 0 ? 2 : 1}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent via-card/10 to-card/80`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center order-1">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 text-accent text-xs font-bold tracking-[0.3em] uppercase rounded shadow-[0_0_15px_rgba(255,80,0,0.1)]">
                        {product.tag}
                      </div>
                      <div className="h-[1px] w-12 bg-accent/30"></div>
                    </div>

                    <h3 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg font-sans leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {product.desc}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-12 pt-6 border-t border-white/10">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-orbitron text-muted-foreground tracking-widest uppercase mb-1 opacity-60">System Status</span>
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${product.status === 'Available' ? 'bg-green-400' : 'bg-accent'} opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${product.status === 'Available' ? 'bg-green-400' : 'bg-accent'}`}></span>
                          </span>
                          <span className={`text-sm font-bold font-sans tracking-wide ${product.status === 'Available' ? 'text-green-400' : 'text-accent/90'}`}>
                            {product.status}
                          </span>
                        </div>
                      </div>
                      
                      <a 
                        href="mailto:bharattitanofficial@gmail.com"
                        className="group/btn relative px-8 py-4 bg-white text-black font-orbitron font-bold text-xs tracking-widest uppercase hover:text-white transition-all duration-500 rounded-lg overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative z-10 flex items-center gap-2">
                          Access Module <ChevronRight size={14} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MOBILE FALLBACK: Normal Grid */}
        <div className="md:hidden grid grid-cols-1 gap-8 mb-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative min-h-[320px] bg-card/40 backdrop-blur-md border border-white/5 overflow-hidden rounded-xl p-8"
            >
              {/* Product Image Background (Mobile) */}
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
                <Image src={product.image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/40"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-[10px] font-bold tracking-widest uppercase rounded mb-4">
                  {product.tag}
                </div>
                <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-6">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-xs font-bold text-muted-foreground uppercase">{product.status}</span>
                  <a href="mailto:bharattitanofficial@gmail.com" className="text-accent text-[10px] font-bold tracking-widest uppercase">&gt; INITIATE ACCESS</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. USE CASES */}
        <section className="mb-32">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM DATA</span>
              <h2 className="font-orbitron text-4xl font-bold text-white tracking-widest uppercase">USE <span className="text-accent">CASES</span></h2>
            </div>
            <div className="hidden md:block h-[1px] flex-1 mx-12 bg-gradient-to-r from-accent/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Internal dashboards", icon: Layout, color: "from-blue-500/10" },
              { title: "SaaS foundations", icon: Layers, color: "from-purple-500/10" },
              { title: "Business automation", icon: Zap, color: "from-orange-500/10" },
              { title: "API-driven platforms", icon: Globe, color: "from-green-500/10" }
            ].map((use, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group p-8 bg-card/20 border border-white/5 hover:border-accent/30 transition-all duration-500 flex flex-col gap-6 relative overflow-hidden rounded-xl backdrop-blur-sm shadow-lg`}
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${use.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Scanning Line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100">
                  <motion.div 
                    animate={{ left: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-accent/5 to-transparent skew-x-12"
                  />
                </div>

                <div className="relative z-10 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-accent/10 group-hover:text-accent transition-all duration-500">
                  <use.icon size={28} className="opacity-70 group-hover:opacity-100" />
                </div>
                <span className="relative z-10 text-white font-orbitron font-bold tracking-wider uppercase text-sm group-hover:text-accent transition-colors">
                  {use.title}
                </span>
                
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. DEVELOPMENT STATUS TRACKER */}
        <section className="mb-32 p-8 md:p-16 bg-card/10 border border-white/5 relative overflow-hidden rounded-3xl backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] -z-10"></div>
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// ACCESS CONTROL</span>
            <h2 className="font-orbitron text-4xl font-bold text-white tracking-widest uppercase">SYSTEM <span className="text-accent">PROGRESSION</span></h2>
          </div>
          <div className="space-y-12 max-w-4xl">
            {[
              { name: "TITAN ANALYTICS", status: "In Development", progress: 60, icon: Activity },
              { name: "BHARAT CLOUD", status: "Beta (Open Access)", progress: 85, icon: Globe },
              { name: "FORTRESS UI", status: "Stable (v1.2)", progress: 100, icon: Layout },
              { name: "Titan Link API", status: "Planning Phase", progress: 15, icon: Terminal }
            ].map((item, i) => (
              <div key={i} className="space-y-4 group">
                <div className="flex justify-between items-end text-xs font-orbitron uppercase tracking-widest">
                  <div className="flex items-center gap-3">
                    <item.icon size={16} className="text-accent/60 group-hover:text-accent transition-colors" />
                    <span className="text-white font-bold group-hover:text-accent transition-colors">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground group-hover:text-white transition-colors">{item.status} — {item.progress}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 overflow-hidden rounded-full border border-white/5 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-accent relative"
                  >
                    {/* Pulsing Light at the tip of progress */}
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white/30 to-transparent shadow-[0_0_20px_var(--accent)]"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PRODUCT PHILOSOPHY */}
        <section className="mb-32 py-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-orbitron text-2xl font-bold text-white tracking-[0.2em] uppercase mb-10">PRODUCT <span className="text-accent">PHILOSOPHY</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Build only what is needed",
                "Focus on performance first",
                "Keep systems modular",
                "Avoid unnecessary complexity"
              ].map((text, i) => (
                <div key={i} className="text-muted-foreground font-sans text-xs uppercase tracking-[0.2em] px-4 py-2 border-x border-accent/20">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. ACCESS MODEL & 7. INTEGRATION LAYER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Access Model */}
          <section className="p-8 bg-card/10 border border-white/5 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all"></div>
            <div className="mb-10">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// PERMISSIONS</span>
              <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">ACCESS <span className="text-accent">MODEL</span></h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Private builds for clients", icon: Lock },
                { label: "Limited beta access", icon: Activity },
                { label: "Internal development tools", icon: Terminal },
                { label: "Gradual public releases", icon: Globe }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-5 bg-white/5 border border-white/5 rounded-xl hover:bg-accent/5 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <item.icon size={20} />
                  </div>
                  <span className="text-muted-foreground font-sans text-base group-hover:text-white transition-colors">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Integration Layer */}
          <section className="flex flex-col justify-center p-12 bg-accent/5 border border-accent/20 relative group rounded-3xl overflow-hidden backdrop-blur-md">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 blur-[100px] group-hover:bg-accent/30 transition-all duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] group-hover:bg-accent/20 transition-all duration-700"></div>
            
            <h2 className="font-orbitron text-4xl font-bold text-white tracking-widest uppercase mb-8 leading-tight">INTEGRATION <br/><span className="text-accent">LAYER</span></h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed tracking-wide mb-10 opacity-80 group-hover:opacity-100">
              All products are designed to work independently or integrate into a unified system stack for better performance and scalability. Our modular architecture ensures zero friction during cross-module communication.
            </p>
            <div className="flex gap-4">
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i} 
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.3 
                  }}
                  className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" 
                />
              ))}
            </div>
          </section>
        </div>

        {/* 8. FUTURE PIPELINE */}
        <section className="mb-32">
          <div className="mb-8">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// ROADMAP</span>
            <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">FUTURE <span className="text-accent">PIPELINE</span></h2>
          </div>
          <div className="space-y-4 opacity-60">
            {[
              "Automation engine (planned)",
              "Monitoring dashboard v2",
              "Internal dev tools expansion"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 font-sans text-sm text-muted-foreground italic">
                <div className="w-4 h-[1px] bg-white/20"></div> {text}
              </div>
            ))}
          </div>
        </section>

        {/* 10. AUTOMATION MODULES */}
        <section className="mb-32">
          <div className="mb-16 flex items-center gap-8">
            <h2 className="font-orbitron text-4xl font-bold text-white tracking-widest uppercase shrink-0">AUTOMATION <span className="text-accent">MODULES</span></h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-accent/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "WORKFLOW ENGINE", 
                status: "Internal Use", 
                icon: Cpu,
                desc: "Lightweight automation system built using n8n for handling repetitive processes and integrations." 
              },
              { 
                name: "AI AGENT CORE", 
                status: "Early Development", 
                icon: Shield,
                desc: "Basic AI agent system designed for handling user queries and structured automation tasks." 
              },
              { 
                name: "AUTOMATION API LAYER", 
                status: "In Progress", 
                icon: Box,
                desc: "Custom APIs designed to trigger workflows, connect services, and automate backend operations." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 bg-card/20 border border-white/5 hover:border-accent/40 transition-all duration-500 group relative overflow-hidden rounded-2xl backdrop-blur-md shadow-2xl"
              >
                {/* Animated Background Mesh */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,var(--accent)_0%,transparent_70%)]"></div>
                
                <div className="mb-8 flex justify-between items-start">
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/20 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
                    <item.icon className="text-accent" size={32} />
                  </div>
                  <span className="text-[10px] font-orbitron text-accent tracking-[0.2em] uppercase px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-orbitron text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors tracking-tight">
                  {item.name}
                </h3>
                
                <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>

                <div className="flex items-center gap-3 text-[10px] font-mono text-accent/50 group-hover:text-accent transition-colors">
                  <span className="animate-pulse">●</span>
                  <span className="uppercase tracking-[0.3em]">System Active</span>
                  <div className="flex-1 h-[1px] bg-accent/20 group-hover:bg-accent/40 transition-all"></div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/30 transition-all duration-500 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/0 group-hover:border-accent/30 transition-all duration-500 rounded-bl-2xl"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 11. AUTOMATION USE CASES */}
        <section className="mb-32">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM DATA</span>
              <h2 className="font-orbitron text-4xl font-bold text-white tracking-widest uppercase">AUTOMATION <span className="text-accent">USE CASES</span></h2>
            </div>
            <div className="hidden md:block h-[1px] flex-1 mx-12 bg-gradient-to-r from-accent/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Lead capture → CRM", icon: Activity },
              { title: "Form → DB Sync", icon: Database },
              { title: "Social content scheduling", icon: Globe },
              { title: "Internal alerts → Notifications", icon: Zap }
            ].map((use, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 bg-card/20 border border-white/5 hover:border-accent/20 transition-all duration-500 group flex flex-col gap-4 rounded-xl backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <use.icon className="text-accent/50 group-hover:text-accent transition-colors duration-300" size={24} />
                <span className="text-white font-sans font-bold tracking-wide uppercase text-xs z-10">{use.title}</span>
                <div className="text-[8px] font-mono text-muted-foreground opacity-0 group-hover:opacity-60 transition-opacity z-10">
                  &gt; executing workflow...
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 12. AUTOMATION PHILOSOPHY */}
        <section className="mb-32 py-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-orbitron text-2xl font-bold text-white tracking-[0.2em] uppercase mb-10">AUTOMATION <span className="text-accent">PHILOSOPHY</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Automate only what is repetitive",
                "Keep workflows transparent",
                "Avoid over-complex pipelines",
                "Maintain manual override capability"
              ].map((text, i) => (
                <div key={i} className="text-muted-foreground font-sans text-xs uppercase tracking-[0.2em] px-4 py-2 border-x border-accent/20">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. SYSTEM INTEGRATIONS */}
        <section className="mb-32">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM STACK</span>
              <h2 className="font-orbitron text-4xl font-bold text-white tracking-widest uppercase">SYSTEM <span className="text-accent">INTEGRATIONS</span></h2>
            </div>
            <div className="hidden md:block h-[1px] flex-1 mx-12 bg-gradient-to-r from-accent/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "REST APIs", icon: Terminal, desc: "High-performance endpoints" },
              { title: "Webhooks", icon: Activity, desc: "Real-time event triggers" },
              { title: "Third-party tools", icon: Layers, desc: "e.g. n8n integration" },
              { title: "Backend connectors", icon: Database, desc: "Direct database links" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-8 bg-card/20 border border-white/5 rounded-2xl space-y-4 group hover:border-accent/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-3 text-accent text-xs font-orbitron uppercase tracking-widest">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <item.icon size={16} />
                  </div>
                  {item.title}
                </div>
                <div className="text-muted-foreground font-sans text-xs leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 14. AI + AUTOMATION COMBINED */}
        <section className="mb-32 p-12 bg-accent/5 border border-accent/20 relative group overflow-hidden rounded-3xl backdrop-blur-md">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all"></div>
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// HYBRID SYSTEMS</span>
            <h2 className="font-orbitron text-4xl font-bold text-white tracking-widest uppercase mb-6">AI + <span className="text-accent">AUTOMATION</span></h2>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed tracking-wide mb-8 opacity-80 group-hover:opacity-100">
              Combining structured workflows with lightweight AI agents to create semi-autonomous systems for business operations. We bridge the gap between deterministic logic and adaptive intelligence.
            </p>
            <div className="flex gap-4">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: `${i * 0.2}s` }}></div>
               ))}
            </div>
          </div>
        </section>

        {/* 9. CTA SECTION */}
        <section className="mb-12">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden bg-accent p-12 md:p-24 shadow-2xl shadow-accent/40 text-center rounded-[2rem]"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h2 className="font-orbitron text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                INTERESTED IN <br/>USING OUR SYSTEMS?
              </h2>
              <p className="text-white/90 text-lg md:text-2xl font-sans mb-12 max-w-2xl mx-auto tracking-wide">
                Request access or integrate with your workflow. The future is waiting.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="mailto:bharattitanofficial@gmail.com"
                  className="w-full sm:w-auto px-12 py-6 bg-white text-accent font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-500 shadow-2xl rounded-xl"
                >
                  REQUEST ACCESS
                </a>
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-white text-white font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-accent transition-all duration-500 backdrop-blur-sm rounded-xl"
                >
                  CONTACT TEAM
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
