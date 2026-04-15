"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { ArrowRight, Activity, Zap, CheckCircle2, HelpCircle, Code, Server, Layers, Layout, Database, Rocket } from 'lucide-react';
import { DataStreamBackground } from '@/components/DataStreamBackground';
import Link from 'next/link';

// Helper component for counting numbers using Framer Motion's useSpring for performance
const CountingNumber = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [isInView, setIsInView] = useState(false);
  const countRef = React.useRef(null);
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  return (
    <motion.span
      ref={countRef}
      onViewportEnter={() => setIsInView(true)}
    >
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);
  const [activeActivityImage, setActiveActivityImage] = useState<string | null>(null);
  const [activeWhoIndex, setActiveWhoIndex] = useState(0);

  useEffect(() => {
    // Auto-cycle "Who We Build For" highlights
    const whoTimer = setInterval(() => {
      setActiveWhoIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(whoTimer);
  }, []);

  useEffect(() => {
    // Initial boot sequence delay
    const timer = setTimeout(() => setIsBooted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const viewportConfig = { once: true, margin: "-100px" };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      
      {/* Hero Section Container */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* 1. Canvas Data Stream Background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isBooted ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="dark:block hidden absolute inset-0 z-0 pointer-events-none"
        >
          <DataStreamBackground />
        </motion.div>

        {/* 2. Hero Image Integration */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={isBooted ? { opacity: 0.6, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
          <img 
              src="/hero-wolf.png" 
              alt="Futuristic Wolf Pack" 
              className="w-full h-full object-cover object-center mix-blend-normal dark:mix-blend-lighten opacity-50 dark:opacity-100"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 hidden dark:block"></div>
        </motion.div>

        {/* 3. Content Layer */}
        <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center pt-24 pb-12 min-h-[90vh]">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isBooted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-accent/30 bg-background/80 backdrop-blur-xl shadow-lg shadow-accent/20"
          >
            <Zap size={14} className="text-accent fill-accent animate-pulse" />
            <span className="text-white text-xs font-orbitron tracking-[0.3em] uppercase">
              System Overdrive Active
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 tracking-tighter"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isBooted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-400 via-slate-500 to-slate-400 dark:from-white dark:to-white/50"
            >
              LEAD THE
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={isBooted ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="relative inline-block"
            >
               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent/60">PACK</span>
               <motion.span 
                 animate={{ opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute inset-0 text-accent blur-lg z-0"
               >
                PACK
               </motion.span>
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isBooted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="text-slate-500 dark:text-muted-foreground text-lg md:text-2xl max-w-2xl mb-12 font-sans tracking-wide"
          >
            We engineer elite digital systems that redefine performance. 
            BharatTitan is the force behind India's next-gen innovation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBooted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg"
          >
            <Link 
              href="/contact"
              className="group relative w-full sm:w-auto px-8 py-5 bg-accent text-white font-orbitron font-bold tracking-widest uppercase overflow-hidden hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/40 hover:shadow-accent/60"
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
      </section>

      {/* 4. System Status Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={isBooted ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="relative z-20 w-full border-y border-white/5 bg-background/50 backdrop-blur-sm py-4"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-[10px] font-orbitron tracking-[0.2em] text-muted-foreground uppercase">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>SYSTEM STATUS: <span className="text-slate-900 dark:text-white">STABLE</span></span>
          </div>
          <div>Latency: <span className="text-slate-900 dark:text-white">42ms</span></div>
          <div>Deployments This Month: <span className="text-slate-900 dark:text-white">18</span></div>
          <div>Active Nodes: <span className="text-slate-900 dark:text-white">63</span></div>
          <div>Last Update: <span className="text-slate-900 dark:text-white">2h ago</span></div>
        </div>
      </motion.div>

      {/* 5. Core Capabilities */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
            className="mb-16"
          >
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// CORE MODULES</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-400 tracking-tighter uppercase">
              CORE <span className="text-accent">CAPABILITIES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ENGINEERING SYSTEMS", desc: "Building scalable backend and cloud-native apps" },
              { title: "INTELLIGENT AUTOMATION", desc: "Reducing manual workflows with smart integrations" },
              { title: "DATA STREAM PROCESSING", desc: "Handling real-time pipelines with optimized flow" },
              { title: "INTERFACE DESIGN", desc: "Clean, high-performance UI with futuristic aesthetics" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={viewportConfig}
                className="group relative p-8 bg-card/30 backdrop-blur-xl border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
                <div className="mt-6 text-[10px] font-orbitron text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  &gt; INITIALIZING...
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.1 Automation & AI Systems */}
      <section className="relative z-20 py-32 px-6 border-t border-white/5 bg-[#000000] overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <motion.img 
            src="/demo-automation-bg.png" 
            alt="" 
            className="w-full h-full object-contain will-change-transform"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ scale: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
            className="mb-16"
          >
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// AUTOMATION CORE</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-400 tracking-tighter uppercase">
              AUTOMATION & <span className="text-accent">AI SYSTEMS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Workflow Automation", desc: "n8n-based systems for seamless operations" },
              { title: "API Automation", desc: "API-triggered backend automation" },
              { title: "AI Agents", desc: "Intelligent agents for complex task handling" },
              { title: "Process Optimization", desc: "Business process optimization strategies" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={viewportConfig}
                className="group relative p-8 bg-card/40 backdrop-blur-xl border border-white/5 hover:border-accent/30 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors"></div>
                <h3 className="font-orbitron text-sm font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-sans mb-4">
                  {item.desc}
                </p>
                <div className="text-[8px] font-mono text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  &gt; EXECUTING WORKFLOW...
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.2 Who We Build For */}
      <section className="relative z-20 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
            className="mb-16 text-center"
          >
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// CLIENT TARGETING</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-400 tracking-tighter uppercase">
              WHO WE <span className="text-accent">BUILD FOR</span>
            </h2>
          </motion.div>

          <div className="relative h-[600px] flex items-center justify-center">
            {/* Circular Path Background */}
            <svg className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none opacity-20">
              <circle 
                cx="50%" cy="50%" r="48%" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeDasharray="4 4"
                className="text-accent/30"
              />
            </svg>

            {/* Central Core */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={viewportConfig}
              className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(255,59,0,0.1)]"
            >
              <Activity className="text-accent animate-pulse" size={32} />
            </motion.div>

            {/* Circular Items */}
            {[
              { title: "Startups", desc: "Building high-performance MVPs", icon: Rocket, angle: -90 },
              { title: "Businesses", desc: "Needing smart automation", icon: Zap, angle: 0 },
              { title: "Founders", desc: "Scaling digital systems", icon: Layers, angle: 90 },
              { title: "Personal Brands", desc: "Portfolios & branding", icon: Layout, angle: 180 }
            ].map((item, i) => {
              const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 220;
              const x = Math.cos((item.angle * Math.PI) / 180) * radius;
              const y = Math.sin((item.angle * Math.PI) / 180) * radius;

              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, scale: 1, x, y }}
                  animate={{ 
                    scale: i === activeWhoIndex ? 1.1 : 1,
                    borderColor: i === activeWhoIndex ? "rgba(255,59,0,0.5)" : "rgba(255,255,255,0.05)",
                    boxShadow: i === activeWhoIndex ? "0 0 30px rgba(255,59,0,0.2)" : "none",
                    zIndex: i === activeWhoIndex ? 20 : 10
                  }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                  viewport={viewportConfig}
                  onMouseEnter={() => setActiveWhoIndex(i)}
                  className={`absolute p-6 bg-card/20 border transition-all flex flex-col items-center text-center gap-3 backdrop-blur-md w-48 md:w-56 group cursor-pointer ${i === activeWhoIndex ? 'bg-accent/10' : ''}`}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    animate={{
                      scale: i === activeWhoIndex ? 1.2 : 1,
                      backgroundColor: i === activeWhoIndex ? "rgba(255,59,0,0.2)" : "rgba(0,0,0,1)"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.2 + 0.3 }}
                    className="w-10 h-10 bg-background border border-accent/20 flex items-center justify-center rounded-lg group-hover:border-accent/50 transition-colors"
                  >
                    <item.icon size={18} className={`transition-colors ${i === activeWhoIndex ? 'text-accent' : 'text-accent/70'}`} />
                  </motion.div>
                  <div>
                    <h3 className={`font-orbitron text-xs font-bold transition-colors mb-2 ${i === activeWhoIndex ? 'text-accent' : 'text-white'}`}>{item.title}</h3>
                    <p className={`transition-colors text-[10px] uppercase tracking-widest leading-tight ${i === activeWhoIndex ? 'text-white/90' : 'text-muted-foreground'}`}>{item.desc}</p>
                  </div>
                  {i === activeWhoIndex && (
                    <motion.div 
                      layoutId="who-active-dot"
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(255,59,0,1)]"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.3 Tech Stack Preview */}
      <section className="relative z-20 py-24 px-6 bg-accent/5 border-y border-white/5 overflow-hidden">
        {/* Energy Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,0,0.15),transparent_40%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
            className="mb-12"
          >
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM STACK</span>
            <h2 className="font-orbitron text-2xl font-bold text-slate-800 dark:text-slate-400 tracking-widest uppercase">TECH <span className="text-accent">ENVIRONMENT</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { 
                label: "Frontend", 
                val: "React / Next.js", 
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} className={`${props.className} text-[#61DAFB]`}>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <path d="M12 7c3.31 0 6 2.24 6 5s-2.69 5-6 5-6-2.24-6-5 2.69-5 6-5z"/>
                    <path d="M12 7c3.31 0 6 2.24 6 5s-2.69 5-6 5-6-2.24-6-5 2.69-5 6-5z" transform="rotate(60 12 12)"/>
                    <path d="M12 7c3.31 0 6 2.24 6 5s-2.69 5-6 5-6-2.24-6-5 2.69-5 6-5z" transform="rotate(120 12 12)"/>
                  </svg>
                )
              },
              { 
                label: "Backend", 
                val: "Node.js", 
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" {...props} className={`${props.className} text-[#339933]`}>
                    <path d="M11.992 0L3.18 5.087v10.174l8.812 5.087 8.812-5.087V5.087zm0 18.23l-7.05-4.07V6.027l7.05-4.07 7.05 4.07v8.133z"/>
                    <path d="M11.992 4.103L6.117 7.493v6.78l5.875 3.39 5.875-3.39V7.493z"/>
                  </svg>
                )
              },
              { 
                label: "Automation", 
                val: "n8n", 
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" {...props} className={`${props.className} text-[#FF6C5C]`}>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.5l-2.5-1.5-2.5 1.5V11l5 3v3.5zM7.5 6.5l2.5 1.5 2.5-1.5V13l-5-3V6.5z"/>
                  </svg>
                )
              },
              { 
                label: "Cloud", 
                val: "AWS", 
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" {...props} className={`${props.className} text-[#FF9900]`}>
                    <path d="M13.882 11.235c.01-.15.01-.301 0-.45l-.031-.15a.417.417 0 0 0-.15-.15c-.05-.031-.1-.05-.15-.05-.1 0-.2.05-.25.1a.456.456 0 0 0-.1.25c-.01.15-.01.301 0 .45l.031.15c.031.05.07.1.1.15.05.031.1.05.15.05.1 0 .2-.05.25-.1a.456.456 0 0 0 .1-.25z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.05 14.95l-1.45.6c-.15.05-.35.1-.55.1h-.25c-.35 0-.7-.1-.9-.35l-.35-.35c-.15-.15-.25-.3-.35-.5-.1-.2-.15-.4-.2-.65v-.7c.05-.25.1-.5.2-.75.1-.2.2-.4.35-.55l.35-.35c.2-.25.55-.35.9-.35h.25c.2 0 .4 0 .55.1l1.45.6c.15.05.25.15.25.3s-.05.25-.2.3l-1.4.65c-.05.05-.1.05-.1.1v.2c0 .05.05.05.1.1l1.4.65c.15.05.2.15.2.3 0 .15-.1.25-.25.3zM9.55 12.8c.05.1.05.2.1.3s.05.15.05.25v.1c0 .1-.05.2-.1.3-.05.1-.15.2-.25.25l-.45.2c-.15.05-.3.1-.45.1-.1 0-.2 0-.3-.05l-.35-.15-.3-.2c-.1-.1-.15-.2-.2-.3-.05-.1-.05-.2-.1-.3v-.1c0-.1.05-.2.1-.3.05-.1.15-.2.25-.25l.45-.2c.15-.05.3-.1.45-.1.1 0 .2 0 .3.05l.35.15.3.2z"/>
                  </svg>
                )
              },
              { 
                label: "Database", 
                val: "MongoDB / PostgreSQL", 
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" {...props} className={`${props.className} text-[#47A248]`}>
                    <path d="M12 0L3.18 5.087v10.174l8.812 5.087 8.812-5.087V5.087zm0 18.23l-7.05-4.07V6.027l7.05-4.07 7.05 4.07v8.133z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={viewportConfig}
                className="relative p-6 bg-background/50 border border-white/10 rounded-xl backdrop-blur-sm group hover:border-accent transition-all duration-500 overflow-hidden hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,80,0,0.25)] will-change-transform"
              >
                {/* Hover Image Layer */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-all duration-700 scale-110 group-hover:scale-105 pointer-events-none">
                  <img src="/demo-tech.webp" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute w-full h-[2px] bg-accent opacity-0 group-hover:opacity-100 animate-scan"></div>
                </div>

                {/* Live Status Dot */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse z-20 shadow-[0_0_8px_var(--accent)]"></div>

                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span className="text-[10px] font-orbitron uppercase tracking-widest text-accent group-hover:text-white transition-colors duration-300 group-hover:[text-shadow:0_0_10px_rgba(255,100,0,0.6)]">{item.label}</span>
                </div>
                <div className="relative z-10 text-white font-mono text-xs opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]">
                  {item.val}
                </div>

                {/* Micro Label */}
                <div className="absolute bottom-2 right-3 text-[8px] font-orbitron text-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-tighter">
                   &gt; MODULE ACTIVE
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.4 Live Signal */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
            className="mb-16"
          >
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// LIVE SIGNAL</span>
            <h2 className="font-orbitron text-4xl md:text-5 font-bold text-slate-800 dark:text-slate-400 tracking-tighter uppercase">
              ACTIVITY <span className="text-accent">FEED</span>
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2 space-y-4">
              {[
                { text: "Automation workflow deployed", time: "2d ago", img: "/demo-activity-1.png" },
                { text: "Client system updated", time: "5d ago", img: "/demo-activity-2.webp" },
                { text: "API integration completed", time: "1w ago", img: "/demo-activity-3.webp" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -40, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                  viewport={viewportConfig}
                  onMouseEnter={() => setActiveActivityImage(item.img)}
                  onMouseLeave={() => setActiveActivityImage(null)}
                  className="flex items-center justify-between p-4 bg-card/20 border-l-2 border-accent/30 hover:border-accent hover:bg-card/40 transition-all cursor-crosshair group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-white font-sans text-sm tracking-wide group-hover:text-accent transition-colors">{item.text}</span>
                  </div>
                  <span className="text-muted-foreground text-[10px] font-mono">{item.time}</span>
                </motion.div>
              ))}
            </div>

            {/* Preview Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={viewportConfig}
              className="hidden md:block w-1/2 relative group self-start"
            >
              {/* Glow in the background */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              
              <div className="relative h-[350px] w-full border border-white/5 rounded-lg overflow-hidden bg-black backdrop-blur-sm">
                {activeActivityImage ? (
                  <motion.img 
                    key={activeActivityImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={activeActivityImage} 
                    alt="Activity Preview"
                    className="w-full h-full object-cover relative z-10" 
                  />
                ) : (
                  <div className="w-full h-full bg-black relative z-10"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 z-30">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
                  <span className="text-[10px] font-orbitron text-accent tracking-[0.2em]">LIVE_PREVIEW_ACTIVE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Field Metrics */}
      <section className="relative z-20 py-24 border-y border-white/5 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "82+", text: "Projects Deployed" },
              { label: "29+", text: "Active Clients" },
              { label: "12", text: "Ongoing Builds" },
              { label: "96%", text: "Delivery Consistency" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                viewport={viewportConfig}
                className="space-y-2"
              >
                <div className="font-orbitron text-4xl md:text-6xl font-black text-white">
                  <motion.div
                    whileInView={{ 
                      textShadow: [
                        "0 0 0px rgba(255,59,0,0)",
                        "0 0 20px rgba(255,59,0,0.5)",
                        "0 0 0px rgba(255,59,0,0)"
                      ]
                    }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    viewport={viewportConfig}
                  >
                    <CountingNumber value={stat.label} />
                  </motion.div>
                </div>
                <div className="text-muted-foreground text-xs font-bold tracking-widest uppercase font-sans">
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Recent Deployments */}
      <section className="relative z-20 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
            className="mb-16"
          >
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// LIVE DATA</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-400 tracking-tighter uppercase">
              RECENT <span className="text-accent">DEPLOYMENTS</span>
            </h2>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth snap-x">
            {[
              { title: "Fintech Dashboard (India)", desc: "Real-time transaction monitoring system" },
              { title: "E-commerce Backend", desc: "Scalable API handling 10k+ daily requests" },
              { title: "Automation Suite", desc: "Reduced manual workload by ~40%" },
              { title: "Portfolio Platform", desc: "High-performance personal branding system" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={viewportConfig}
                className="min-w-[300px] md:min-w-[400px] snap-center group p-8 bg-card/40 border border-white/5 hover:border-accent/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-4 text-[10px] font-orbitron text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                  <Activity size={10} className="text-accent" /> DEPLOYED_STABLE
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-sans mb-6 leading-relaxed">{item.desc}</p>
                <div className="h-[1px] w-full bg-gradient-to-r from-accent/50 to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Workflow / Process */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
            className="mb-20"
          >
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM FLOW</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-400 tracking-tighter uppercase">
              OUR <span className="text-accent">WORKFLOW</span>
            </h2>
          </motion.div>

          <div className="relative overflow-hidden">
            {/* Continuous Motion Container */}
            <div className="flex animate-scroll-flow whitespace-nowrap py-10 will-change-transform">
              {[...Array(2)].map((_, listIndex) => (
                <div key={listIndex} className="flex gap-8 px-4">
                  {[
                    { step: "01", title: "ANALYZE" },
                    { step: "02", title: "ARCHITECT" },
                    { step: "03", title: "BUILD" },
                    { step: "04", title: "DEPLOY" }
                  ].map((item, i) => (
                    <div 
                      key={`${listIndex}-${i}`} 
                      className="relative z-10 group"
                    >
                      <div 
                        className="w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center bg-background border border-accent/30 group-hover:border-accent transition-all duration-500 shadow-lg group-hover:shadow-accent/40 group-hover:scale-110 group-hover:z-20 group-hover:-translate-y-2 backdrop-blur-md"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                      >
                        <span className="text-[10px] md:text-xs font-orbitron text-accent mb-2">{item.step}</span>
                        <span className="font-orbitron text-xs md:text-sm font-bold text-white tracking-[0.2em] group-hover:text-white transition-colors">{item.title}</span>
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      
                      {/* Connecting Line (Part of the item to maintain flow) */}
                      <div className="absolute top-1/2 -right-8 w-8 h-[1px] bg-gradient-to-r from-accent/30 to-accent/30 hidden md:block"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Trust Signal Section */}
      <section className="relative z-20 py-24 px-6 border-t border-white/5 bg-background/30 backdrop-blur-sm overflow-hidden">
        {/* Verification Badge Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
          <img src="/verification-badge.png" alt="" className="w-54 h-54 md:w-76 md:h-76 blur-[.5rem]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportConfig}
            className="md:max-w-md text-center md:text-left"
          >
             <h3 className="font-orbitron text-2xl font-bold text-slate-800 dark:text-slate-400 mb-6 uppercase tracking-[0.2em]">WHY <span className="text-accent">TRUST</span> US?</h3>
             <p className="text-muted-foreground text-sm font-sans leading-relaxed tracking-wide">
                We prioritize technical excellence and transparent communication for every deployment.
             </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-auto">
            {[
              "Projects delivered across 4+ domains",
              "Experience with international clients",
              "Clean code + long-term maintainability focus",
              "Transparent communication cycles"
            ].map((text, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                viewport={viewportConfig}
                className="flex items-start gap-4 text-grey-800 text-sm font-sans dark:text-slate-600"
              >
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="tracking-wide">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={viewportConfig}
            className="relative overflow-hidden bg-accent p-12 md:p-20 shadow-2xl shadow-accent/40 text-center"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-20" />
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={viewportConfig}
                className="font-orbitron text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none"
              >
                READY TO BUILD SOMETHING ELITE?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                viewport={viewportConfig}
                className="text-white/90 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto tracking-wide"
              >
                Let’s engineer your next system.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={viewportConfig}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-accent text-grey-foreground font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-accent/90 transition-all duration-300 shadow-xl dark:bg-white dark:text-accent dark:hover:bg-white/90"
                >
                  INITIATE CONTACT
                </Link>
                <Link 
                  href="/services"
                  className="w-full sm:w-auto px-10 py-5 bg-transparent border border-foreground/40 text-foreground font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-foreground/10 transition-all duration-300 backdrop-blur-sm dark:border-white/40 dark:text-white dark:hover:bg-white/10"
                >
                  VIEW SERVICES
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
