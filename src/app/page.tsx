"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Zap, CheckCircle2, Terminal, Globe, Layers, Layout, Shield, HelpCircle, Code, Server, Cpu, Rocket, Database } from 'lucide-react';
import { DataStreamBackground } from '@/components/DataStreamBackground';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      
      {/* 1. Canvas Data Stream Background - Hidden in Light Mode for clarity */}
      <div className="dark:block hidden">
        <DataStreamBackground />
      </div>

      {/* 2. Hero Image Integration (Blended) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-90 dark:opacity-60 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
            src="/hero-wolf.png" 
            alt="Futuristic Wolf Pack" 
            className="w-full h-full object-cover object-center mix-blend-normal dark:mix-blend-lighten opacity-50 dark:opacity-100"
        />
        {/* Color Overlay - Dark Mode Only */}
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 hidden dark:block"></div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-20 min-h-[90vh] flex flex-col items-center justify-center px-6 text-center pt-24 pb-12">
        
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
          className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-[0.9] mb-8 tracking-tighter"
        >
          <span className="block text-foreground dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-white/50">LEAD THE</span>
          <span className="relative inline-block">
             <span className="relative z-10 text-accent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-accent dark:via-accent/80 dark:to-accent/60">PACK</span>
             {/* Text Glow - Dark Mode Only */}
             <span className="absolute inset-0 text-accent opacity-50 blur-lg z-0 hidden dark:block">PACK</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-2xl max-w-2xl mb-12 font-sans tracking-wide"
        >
          We engineer elite digital systems that redefine performance. 
          BharatTitan is the force behind India's next-gen innovation.
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

      {/* 4. System Status Strip */}
      <div className="relative z-20 w-full border-y border-white/5 bg-background/50 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-[10px] font-orbitron tracking-[0.2em] text-muted-foreground uppercase">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>SYSTEM STATUS: <span className="text-white">STABLE</span></span>
          </div>
          <div>Latency: <span className="text-white">42ms</span></div>
          <div>Deployments This Month: <span className="text-white">18</span></div>
          <div>Active Nodes: <span className="text-white">63</span></div>
          <div>Last Update: <span className="text-white">2h ago</span></div>
        </div>
      </div>

      {/* 5. Core Capabilities */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// CORE MODULES</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
              CORE <span className="text-accent">CAPABILITIES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ENGINEERING SYSTEMS", desc: "Building scalable backend and cloud-native apps" },
              { title: "INTELLIGENT AUTOMATION", desc: "Reducing manual workflows with smart integrations" },
              { title: "DATA STREAM PROCESSING", desc: "Handling real-time pipelines with optimized flow" },
              { title: "INTERFACE DESIGN", desc: "Clean, high-performance UI with futuristic aesthetics" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
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
      <section className="relative z-20 py-32 px-6 border-t border-white/5 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// AUTOMATION CORE</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
              AUTOMATION & <span className="text-accent">AI SYSTEMS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Workflow Automation", desc: "n8n-based systems for seamless operations" },
              { title: "API Automation", desc: "API-triggered backend automation" },
              { title: "AI Agents", desc: "Intelligent agents for complex task handling" },
              { title: "Process Optimization", desc: "Business process optimization strategies" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
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
          <p className="mt-8 text-muted-foreground text-sm font-sans italic opacity-70">
            Reducing manual operations with structured systems.
          </p>
        </div>
      </section>

      {/* 5.2 Who We Build For */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// CLIENT TARGETING</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
              WHO WE <span className="text-accent">BUILD FOR</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Startups", desc: "Building high-performance MVPs", icon: Rocket },
              { title: "Businesses", desc: "Needing smart automation", icon: Zap },
              { title: "Founders", desc: "Scaling digital systems", icon: Layers },
              { title: "Personal Brands", desc: "Portfolios & branding", icon: Layout }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-card/20 border border-white/5 hover:border-accent/10 transition-all flex flex-col gap-4">
                <div className="w-10 h-10 bg-background border border-accent/20 flex items-center justify-center rounded-lg">
                  {i === 0 && <Activity size={18} className="text-accent" />}
                  {i === 1 && <Zap size={18} className="text-accent" />}
                  {i === 2 && <Layers size={18} className="text-accent" />}
                  {i === 3 && <Layout size={18} className="text-accent" />}
                </div>
                <div>
                  <h3 className="font-orbitron text-xs font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.3 Tech Stack Preview */}
      <section className="relative z-20 py-24 px-6 bg-accent/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM STACK</span>
            <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">TECH <span className="text-accent">ENVIRONMENT</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { label: "Frontend", val: "React / Next.js", icon: Layout },
              { label: "Backend", val: "Node.js", icon: Code },
              { label: "Automation", val: "n8n", icon: Activity },
              { label: "Cloud", val: "AWS", icon: Server },
              { label: "Database", val: "MongoDB / PostgreSQL", icon: Database }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background/50 border border-white/10 rounded-xl backdrop-blur-sm group hover:border-accent/30 transition-all">
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <item.icon size={14} />
                  <span className="text-[10px] font-orbitron uppercase tracking-widest">{item.label}</span>
                </div>
                <div className="text-white font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.4 Live Signal */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// LIVE SIGNAL</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
              ACTIVITY <span className="text-accent">FEED</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl">
            {[
              { text: "Automation workflow deployed", time: "2d ago" },
              { text: "Client system updated", time: "5d ago" },
              { text: "API integration completed", time: "1w ago" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-card/20 border-l-2 border-accent/30 hover:bg-card/30 transition-all"
              >
                <div className="flex items-center gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                   <span className="text-white font-sans text-sm tracking-wide">{item.text}</span>
                </div>
                <span className="text-muted-foreground text-[10px] font-mono">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 Operation Limit */}
      <div className="relative z-20 w-full bg-accent/10 border-y border-accent/20 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8">
           <div className="flex items-center gap-3">
              <span className="text-accent font-orbitron text-xs font-bold tracking-[0.3em] uppercase">// OPERATION LIMIT</span>
              <div className="h-[1px] w-12 bg-accent/30"></div>
           </div>
           <p className="text-white/80 font-sans text-sm tracking-wide">
             Currently handling <span className="text-accent font-bold">10–12 active systems</span>. New project slots open selectively.
           </p>
        </div>
      </div>

      {/* 5.6 Mini Product Teaser */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// INTERNAL SYSTEMS</span>
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
                SYSTEM <span className="text-accent">PREVIEW</span>
              </h2>
            </div>
            <Link 
              href="/products"
              className="group flex items-center gap-3 text-accent text-xs font-orbitron font-bold tracking-widest uppercase hover:text-white transition-colors"
            >
              VIEW ALL SYSTEMS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Titan Analytics", status: "In Development", val: "DEV" },
              { name: "Fortress UI", status: "Available", val: "LIVE" },
              { name: "Bharat Cloud", status: "Beta", val: "BETA" }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-card/20 border border-white/5 hover:border-accent/20 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] font-orbitron text-accent">{item.val}</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_var(--accent)]"></div>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">{item.name}</h3>
                <p className="text-muted-foreground text-[10px] uppercase tracking-widest">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.7 Quick FAQ */}
      <section className="relative z-20 py-32 px-6 border-t border-white/5 bg-background/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// QUICK ANSWERS</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">FAQ</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "Do you build custom systems?", a: "Yes, based on specific requirements." },
              { q: "Do you offer automation?", a: "Yes, including workflow and API automation." },
              { q: "How to start?", a: "Use the contact section to initiate." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card/10 border border-white/5 hover:border-white/10 transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <HelpCircle size={18} className="text-accent mt-1 shrink-0" />
                  <h4 className="text-white font-orbitron text-sm font-bold tracking-wide uppercase">{item.q}</h4>
                </div>
                <p className="text-muted-foreground text-sm font-sans pl-8 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.8 Final Micro CTA */}
      <div className="relative z-20 py-12 px-6 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
           <div className="text-[10px] font-mono text-accent/60 uppercase tracking-widest">
              &gt; system ready for deployment
           </div>
           <Link 
              href="/contact"
              className="px-8 py-3 bg-accent/10 border border-accent/40 text-white font-orbitron font-bold text-xs tracking-widest uppercase hover:bg-accent hover:shadow-[0_0_20px_rgba(var(--accent),0.4)] transition-all"
           >
              START PROJECT
           </Link>
        </div>
      </div>

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
              <div key={i} className="space-y-2">
                <div className="font-orbitron text-4xl md:text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(var(--accent),0.3)]">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-xs font-bold tracking-widest uppercase font-sans">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Recent Deployments */}
      <section className="relative z-20 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// LIVE DATA</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
              RECENT <span className="text-accent">DEPLOYMENTS</span>
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth snap-x">
            {[
              { title: "Fintech Dashboard (India)", desc: "Real-time transaction monitoring system" },
              { title: "E-commerce Backend", desc: "Scalable API handling 10k+ daily requests" },
              { title: "Automation Suite", desc: "Reduced manual workload by ~40%" },
              { title: "Portfolio Platform", desc: "High-performance personal branding system" }
            ].map((item, i) => (
              <div 
                key={i}
                className="min-w-[300px] md:min-w-[400px] snap-center group p-8 bg-card/40 border border-white/5 hover:border-accent/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-4 text-[10px] font-orbitron text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                  <Activity size={10} className="text-accent" /> DEPLOYED_STABLE
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-sans mb-6 leading-relaxed">{item.desc}</p>
                <div className="h-[1px] w-full bg-gradient-to-r from-accent/50 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Workflow / Process */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM FLOW</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
              OUR <span className="text-accent">WORKFLOW</span>
            </h2>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "ANALYZE" },
              { step: "02", title: "ARCHITECT" },
              { step: "03", title: "BUILD" },
              { step: "04", title: "DEPLOY" }
            ].map((item, i) => (
              <div key={i} className="relative z-10 group">
                <div 
                  className="w-24 h-24 flex flex-col items-center justify-center bg-background border border-accent/30 group-hover:border-accent transition-all duration-500 shadow-lg group-hover:shadow-accent/20"
                  style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                >
                  <span className="text-[10px] font-orbitron text-accent mb-1">{item.step}</span>
                  <span className="font-orbitron text-xs font-bold text-white tracking-widest">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Trust Signal Section */}
      <section className="relative z-20 py-24 px-6 border-t border-white/5 bg-background/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:max-w-md text-center md:text-left">
             <h3 className="font-orbitron text-2xl font-bold text-white mb-6 uppercase tracking-[0.2em]">WHY <span className="text-accent">TRUST</span> US?</h3>
             <p className="text-muted-foreground text-sm font-sans leading-relaxed tracking-wide">
                We prioritize technical excellence and transparent communication for every deployment.
             </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-auto">
            {[
              "Projects delivered across 4+ domains",
              "Experience with international clients",
              "Clean code + long-term maintainability focus",
              "Transparent communication cycles"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 text-muted-foreground text-sm font-sans">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative overflow-hidden bg-accent p-12 md:p-20 shadow-2xl shadow-accent/40 text-center"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                READY TO BUILD SOMETHING ELITE?
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto tracking-wide">
                Let’s engineer your next system.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
