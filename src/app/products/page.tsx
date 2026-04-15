"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Activity, Database, Globe, Layers, Layout, Lock, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const products = [
    {
      id: 1,
      name: "TITAN ANALYTICS",
      tag: "Enterprise Data",
      status: "Coming Soon",
      desc: "Lightweight analytics engine for tracking system performance and user behavior. Focused on clarity over complexity.",
      color: "rgba(255, 80, 0, 0.1)"
    },
    {
      id: 2,
      name: "BHARAT CLOUD",
      tag: "Infrastructure",
      status: "Beta Access",
      desc: "Modular cloud infrastructure designed for small to mid-scale deployments with cost efficiency.",
      color: "rgba(0, 120, 255, 0.1)"
    },
    {
      id: 3,
      name: "FORTRESS UI",
      tag: "Design System",
      status: "Available",
      desc: "Reusable UI component system built for speed, consistency, and futuristic interfaces.",
      color: "rgba(0, 255, 120, 0.1)"
    },
    {
      id: 4,
      name: "NEXUS API",
      tag: "Connectivity",
      status: "Coming Soon",
      desc: "Unified API layer enabling seamless communication between services and external platforms.",
      color: "rgba(255, 0, 120, 0.1)"
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const viewportConfig = { once: true, margin: "-100px" };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide"
          >
            FLAGSHIP <span className="text-accent drop-shadow-[0_0_15px_var(--accent)]">PRODUCTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-muted-foreground max-w-2xl mx-auto font-sans text-lg mb-12"
          >
            In-house innovations designed to revolutionize the grid.
          </motion.p>

          {/* 1. PRODUCT OVERVIEW STRIP */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-4 bg-card/20 border border-white/5 rounded-full backdrop-blur-sm"
          >
            {[
              { label: "Active Products", val: "4" },
              { label: "In Development", val: "2" },
              { label: "Beta Access", val: "1" },
              { label: "Stable Releases", val: "1" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 text-[10px] font-orbitron tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-muted-foreground">{stat.label}:</span>
                <span className="text-white">{stat.val}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* FLAGSHIP PRODUCTS VERTICAL STACK REVEAL */}
        <section ref={containerRef} className="relative h-[400vh] mb-32 hidden md:block">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            
            {/* Progress Indicator (Left Side) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
              {products.map((_, i) => {
                const start = i / products.length;
                const end = (i + 1) / products.length;
                const isActive = useTransform(smoothScrollY, [start, end], [1, 1.5]);
                const dotOpacity = useTransform(smoothScrollY, [start - 0.1, start, end, end + 0.1], [0.3, 1, 1, 0.3]);
                
                return (
                  <motion.div 
                    key={i}
                    style={{ scale: isActive, opacity: dotOpacity }}
                    className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
                  />
                );
              })}
            </div>

            <div className="relative w-full h-[80vh] max-w-6xl">
              {products.map((product, index) => {
                const start = index / products.length;
                const end = (index + 1) / products.length;
                
                // Entrance animation
                const yEntrance = useTransform(smoothScrollY, [start - 0.15, start], [600, 0]);
                const opacityEntrance = useTransform(smoothScrollY, [start - 0.1, start], [0, 1]);
                const scaleEntrance = useTransform(smoothScrollY, [start - 0.15, start], [0.9, 1]);
                
                // Exit animation (fade and blur for layering effect)
                const opacityExit = useTransform(smoothScrollY, [end, end + 0.1], [1, 0]);
                const blurExit = useTransform(smoothScrollY, [end, end + 0.1], ["blur(0px)", "blur(10px)"]);
                const yExit = useTransform(smoothScrollY, [end, end + 0.15], [0, -200]);

                return (
                  <motion.div
                    key={product.id}
                    style={{ 
                      y: index === products.length - 1 ? yEntrance : useTransform(smoothScrollY, [start - 0.15, start, end, end + 0.15], [600, 0, 0, -200]),
                      opacity: useTransform(smoothScrollY, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]),
                      scale: useTransform(smoothScrollY, [start - 0.15, start, end, end + 0.15], [0.9, 1, 1, 0.95]),
                      filter: useTransform(smoothScrollY, [end, end + 0.1], ["blur(0px)", "blur(10px)"]),
                      zIndex: index,
                      backgroundColor: product.color
                    }}
                    className="absolute inset-0 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex items-center shadow-2xl"
                  >
                    {/* Product Image Placeholder (Right Side) */}
                    <div className="absolute right-0 w-1/2 h-full opacity-30 pointer-events-none">
                      <img src="/product-demo.jpg" alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/40"></div>
                    </div>

                    <div className="relative z-10 w-full md:w-1/2 p-12 md:p-20">
                      <motion.div
                        style={{ 
                          x: useTransform(smoothScrollY, [start - 0.05, start], [-50, 0]),
                          opacity: useTransform(smoothScrollY, [start - 0.05, start], [0, 1])
                        }}
                      >
                        <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 text-accent text-xs font-bold tracking-[0.3em] uppercase rounded mb-8">
                          {product.tag}
                        </div>
                        <h3 className="font-orbitron text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-lg font-sans leading-relaxed max-w-md mb-12">
                          {product.desc}
                        </p>
                        
                        <div className="flex items-center gap-12 pt-8 border-t border-white/10">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-orbitron text-muted-foreground tracking-widest uppercase mb-1">Status</span>
                            <span className={`text-sm font-bold font-sans ${product.status === 'Available' ? 'text-green-400' : 'text-accent/70'}`}>
                              {product.status}
                            </span>
                          </div>
                          <Link 
                            href="/contact"
                            className="px-8 py-4 bg-white text-black font-orbitron font-bold text-xs tracking-widest uppercase hover:bg-accent hover:text-white transition-all duration-500 rounded-lg"
                          >
                            Access Module
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
                  <Link href="/contact" className="text-accent text-[10px] font-bold tracking-widest uppercase">&gt; INITIATE ACCESS</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. USE CASES */}
        <section className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM DATA</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">USE <span className="text-accent">CASES</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Internal dashboards", icon: Layout },
              { title: "SaaS foundations", icon: Layers },
              { title: "Business automation", icon: Zap },
              { title: "API-driven platforms", icon: Globe }
            ].map((use, i) => (
              <div key={i} className="p-8 bg-card/20 border border-white/5 hover:border-accent/20 transition-all group flex flex-col gap-4">
                <use.icon className="text-accent/50 group-hover:text-accent transition-colors" size={24} />
                <span className="text-white font-sans font-bold tracking-wide uppercase text-xs">{use.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DEVELOPMENT STATUS TRACKER */}
        <section className="mb-32 p-8 md:p-12 bg-card/10 border border-white/5 relative overflow-hidden">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// ACCESS CONTROL</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">SYSTEM <span className="text-accent">PROGRESSION</span></h2>
          </div>
          <div className="space-y-8 max-w-3xl">
            {[
              { name: "TITAN ANALYTICS", status: "In Development", progress: 60 },
              { name: "BHARAT CLOUD", status: "Beta (Open Access)", progress: 85 },
              { name: "FORTRESS UI", status: "Stable (v1.2)", progress: 100 },
              { name: "NEXUS API", status: "Planning Phase", progress: 15 }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-end text-[10px] font-orbitron uppercase tracking-widest">
                  <span className="text-white font-bold">{item.name}</span>
                  <span className="text-muted-foreground">{item.status}</span>
                </div>
                <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-accent shadow-[0_0_10px_var(--accent)]"
                  />
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
          <section>
            <div className="mb-8">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// PERMISSIONS</span>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">ACCESS <span className="text-accent">MODEL</span></h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Private builds for clients", icon: Lock },
                { label: "Limited beta access", icon: Activity },
                { label: "Internal development tools", icon: Terminal },
                { label: "Gradual public releases", icon: Globe }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-card/20 border border-white/5">
                  <item.icon className="text-accent" size={16} />
                  <span className="text-muted-foreground font-sans text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Integration Layer */}
          <section className="flex flex-col justify-center p-8 bg-accent/5 border border-accent/20 relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
            <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase mb-6">INTEGRATION <span className="text-accent">LAYER</span></h2>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed tracking-wide">
              All products are designed to work independently or integrate into a unified system stack for better performance and scalability.
            </p>
            <div className="mt-8 flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/30" />
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
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// AUTOMATION CORE</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">AUTOMATION <span className="text-accent">MODULES</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: "WORKFLOW ENGINE", 
                status: "Internal Use", 
                desc: "Lightweight automation system built using n8n for handling repetitive processes and integrations." 
              },
              { 
                name: "AI AGENT CORE", 
                status: "Early Development", 
                desc: "Basic AI agent system designed for handling user queries and structured automation tasks." 
              },
              { 
                name: "AUTOMATION API LAYER", 
                status: "In Progress", 
                desc: "Custom APIs designed to trigger workflows, connect services, and automate backend operations." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-card/20 border border-white/5 hover:border-accent/20 transition-all group relative overflow-hidden">
                <div className="mb-4 flex justify-between items-start">
                  <span className="text-[10px] font-orbitron text-accent tracking-widest uppercase">&gt; {item.status}</span>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors">{item.name}</h3>
                <p className="text-muted-foreground text-xs font-sans leading-relaxed mb-6">{item.desc}</p>
                <div className="text-[8px] font-mono text-muted-foreground opacity-40 group-hover:opacity-100 transition-opacity">
                   &gt; triggering automation...
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. AUTOMATION USE CASES (Extend existing) */}
        <section className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM DATA</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">AUTOMATION <span className="text-accent">USE CASES</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Lead capture → CRM", icon: Activity },
              { title: "Form → DB Sync", icon: Database },
              { title: "Social content scheduling", icon: Globe },
              { title: "Internal alerts → Notifications", icon: Zap }
            ].map((use, i) => (
              <div key={i} className="p-8 bg-card/20 border border-white/5 hover:border-accent/20 transition-all group flex flex-col gap-4">
                <use.icon className="text-accent/50 group-hover:text-accent transition-colors" size={24} />
                <span className="text-white font-sans font-bold tracking-wide uppercase text-xs">{use.title}</span>
                <div className="text-[8px] font-mono text-muted-foreground opacity-0 group-hover:opacity-60 transition-opacity">
                  &gt; executing workflow...
                </div>
              </div>
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
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM STACK</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">SYSTEM <span className="text-accent">INTEGRATIONS</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "REST APIs", icon: Terminal },
              { title: "Webhooks", icon: Activity },
              { title: "Third-party tools", icon: Layers },
              { title: "Backend connectors", icon: Database }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card/20 border border-white/5 space-y-4 group hover:border-accent/20 transition-all">
                <div className="flex items-center gap-2 text-accent text-[10px] font-orbitron uppercase tracking-widest">
                  <item.icon size={12} /> {item.title}
                </div>
                <div className="text-muted-foreground font-sans text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">
                  {i === 2 ? "e.g. n8n integration" : "Seamless system connection"}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 14. AI + AUTOMATION COMBINED */}
        <section className="mb-32 p-12 bg-accent/5 border border-accent/20 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all"></div>
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// HYBRID SYSTEMS</span>
            <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase mb-6">AI + <span className="text-accent">AUTOMATION</span></h2>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed tracking-wide mb-8">
              Combining structured workflows with lightweight AI agents to create semi-autonomous systems for business operations.
            </p>
            <div className="flex gap-4">
               <div className="w-1 h-1 bg-accent rounded-full animate-ping"></div>
               <div className="w-1 h-1 bg-accent rounded-full animate-ping [animation-delay:0.2s]"></div>
               <div className="w-1 h-1 bg-accent rounded-full animate-ping [animation-delay:0.4s]"></div>
            </div>
          </div>
        </section>

        {/* 9. CTA SECTION */}
        <section className="mb-12">
          <div 
            className="relative overflow-hidden bg-accent p-12 md:p-20 shadow-2xl shadow-accent/40 text-center"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                INTERESTED IN USING OUR SYSTEMS?
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto tracking-wide">
                Request access or integrate with your workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-accent font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 shadow-xl"
                >
                  REQUEST ACCESS
                </Link>
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/40 text-white font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  CONTACT TEAM
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

        <section className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM DATA</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">USE <span className="text-accent">CASES</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Internal dashboards", icon: Layout },
              { title: "SaaS foundations", icon: Layers },
              { title: "Business automation", icon: Zap },
              { title: "API-driven platforms", icon: Globe }
            ].map((use, i) => (
              <div key={i} className="p-8 bg-card/20 border border-white/5 hover:border-accent/20 transition-all group flex flex-col gap-4">
                <use.icon className="text-accent/50 group-hover:text-accent transition-colors" size={24} />
                <span className="text-white font-sans font-bold tracking-wide uppercase text-xs">{use.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DEVELOPMENT STATUS TRACKER */}
        <section className="mb-32 p-8 md:p-12 bg-card/10 border border-white/5 relative overflow-hidden">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// ACCESS CONTROL</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">SYSTEM <span className="text-accent">PROGRESSION</span></h2>
          </div>
          <div className="space-y-8 max-w-3xl">
            {[
              { name: "TITAN ANALYTICS", status: "In Development", progress: 60 },
              { name: "BHARAT CLOUD", status: "Beta (Open Access)", progress: 85 },
              { name: "FORTRESS UI", status: "Stable (v1.2)", progress: 100 },
              { name: "NEXUS API", status: "Planning Phase", progress: 15 }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-end text-[10px] font-orbitron uppercase tracking-widest">
                  <span className="text-white font-bold">{item.name}</span>
                  <span className="text-muted-foreground">{item.status}</span>
                </div>
                <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-accent shadow-[0_0_10px_var(--accent)]"
                  />
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
          <section>
            <div className="mb-8">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// PERMISSIONS</span>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">ACCESS <span className="text-accent">MODEL</span></h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Private builds for clients", icon: Lock },
                { label: "Limited beta access", icon: Activity },
                { label: "Internal development tools", icon: Terminal },
                { label: "Gradual public releases", icon: Globe }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-card/20 border border-white/5">
                  <item.icon className="text-accent" size={16} />
                  <span className="text-muted-foreground font-sans text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Integration Layer */}
          <section className="flex flex-col justify-center p-8 bg-accent/5 border border-accent/20 relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
            <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase mb-6">INTEGRATION <span className="text-accent">LAYER</span></h2>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed tracking-wide">
              All products are designed to work independently or integrate into a unified system stack for better performance and scalability.
            </p>
            <div className="mt-8 flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/30" />
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
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// AUTOMATION CORE</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">AUTOMATION <span className="text-accent">MODULES</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: "WORKFLOW ENGINE", 
                status: "Internal Use", 
                desc: "Lightweight automation system built using n8n for handling repetitive processes and integrations." 
              },
              { 
                name: "AI AGENT CORE", 
                status: "Early Development", 
                desc: "Basic AI agent system designed for handling user queries and structured automation tasks." 
              },
              { 
                name: "AUTOMATION API LAYER", 
                status: "In Progress", 
                desc: "Custom APIs designed to trigger workflows, connect services, and automate backend operations." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-card/20 border border-white/5 hover:border-accent/20 transition-all group relative overflow-hidden">
                <div className="mb-4 flex justify-between items-start">
                  <span className="text-[10px] font-orbitron text-accent tracking-widest uppercase">&gt; {item.status}</span>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors">{item.name}</h3>
                <p className="text-muted-foreground text-xs font-sans leading-relaxed mb-6">{item.desc}</p>
                <div className="text-[8px] font-mono text-muted-foreground opacity-40 group-hover:opacity-100 transition-opacity">
                   &gt; triggering automation...
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. AUTOMATION USE CASES (Extend existing) */}
        <section className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM DATA</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">AUTOMATION <span className="text-accent">USE CASES</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Lead capture → CRM", icon: Activity },
              { title: "Form → DB Sync", icon: Database },
              { title: "Social content scheduling", icon: Globe },
              { title: "Internal alerts → Notifications", icon: Zap }
            ].map((use, i) => (
              <div key={i} className="p-8 bg-card/20 border border-white/5 hover:border-accent/20 transition-all group flex flex-col gap-4">
                <use.icon className="text-accent/50 group-hover:text-accent transition-colors" size={24} />
                <span className="text-white font-sans font-bold tracking-wide uppercase text-xs">{use.title}</span>
                <div className="text-[8px] font-mono text-muted-foreground opacity-0 group-hover:opacity-60 transition-opacity">
                  &gt; executing workflow...
                </div>
              </div>
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
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM STACK</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">SYSTEM <span className="text-accent">INTEGRATIONS</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "REST APIs", icon: Terminal },
              { title: "Webhooks", icon: Activity },
              { title: "Third-party tools", icon: Layers },
              { title: "Backend connectors", icon: Database }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card/20 border border-white/5 space-y-4 group hover:border-accent/20 transition-all">
                <div className="flex items-center gap-2 text-accent text-[10px] font-orbitron uppercase tracking-widest">
                  <item.icon size={12} /> {item.title}
                </div>
                <div className="text-muted-foreground font-sans text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">
                  {i === 2 ? "e.g. n8n integration" : "Seamless system connection"}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 14. AI + AUTOMATION COMBINED */}
        <section className="mb-32 p-12 bg-accent/5 border border-accent/20 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all"></div>
          <div className="max-w-3xl">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// HYBRID SYSTEMS</span>
            <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase mb-6">AI + <span className="text-accent">AUTOMATION</span></h2>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed tracking-wide mb-8">
              Combining structured workflows with lightweight AI agents to create semi-autonomous systems for business operations.
            </p>
            <div className="flex gap-4">
               <div className="w-1 h-1 bg-accent rounded-full animate-ping"></div>
               <div className="w-1 h-1 bg-accent rounded-full animate-ping [animation-delay:0.2s]"></div>
               <div className="w-1 h-1 bg-accent rounded-full animate-ping [animation-delay:0.4s]"></div>
            </div>
          </div>
        </section>

        {/* 9. CTA SECTION */}
        <section className="mb-12">
          <div 
            className="relative overflow-hidden bg-accent p-12 md:p-20 shadow-2xl shadow-accent/40 text-center"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                INTERESTED IN USING OUR SYSTEMS?
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto tracking-wide">
                Request access or integrate with your workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-accent font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 shadow-xl"
                >
                  REQUEST ACCESS
                </Link>
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/40 text-white font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  CONTACT TEAM
                </Link>
              </div>
            </div>
          </div>
        </section>

