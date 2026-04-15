"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Eye, Zap, Cpu, Shield, Activity, Globe, Layout, Database, Server, Code, Layers, Rocket, CheckCircle2 } from 'lucide-react';

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

export default function About() {
  const viewportConfig = { once: true, margin: "-100px" };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative py-20 overflow-hidden"
        >
          {/* Visual Background Core */}
          <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
            <img src="/about-hero.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,0,0.15),transparent_60%)] -z-10"></div>
          
          <div className="relative z-10">
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
          </div>
        </motion.div>

        {/* 1. ORIGIN SIGNAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src="/origin-demo.jpg" 
              alt="Origin Visual" 
              className="rounded-xl opacity-80 w-full object-cover shadow-2xl shadow-accent/10 border border-white/5 group-hover:border-accent/30 transition-all duration-500" 
            />
          </motion.div>
        </div>

        {/* Content Grid (Mission/Vision/Energy) */}
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
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative group bg-card/40 backdrop-blur-md p-8 border border-white/5 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:-translate-y-[8px] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,80,0,0.2)]"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none scale-110 group-hover:scale-100">
                <img src="/demo-card.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              
              {/* Scan Effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-full h-[2px] bg-accent opacity-0 group-hover:opacity-100 animate-scan"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-background rounded-lg border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_20px_var(--accent)] transition-all duration-500">
                  <item.icon className="text-accent group-hover:text-white w-8 h-8 transition-colors duration-300" />
                </div>
                <h3 className="font-sans text-xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-sans group-hover:text-white/90 transition-colors">
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
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="p-6 bg-card/20 border border-white/5 hover:border-accent/20 transition-all flex flex-col gap-4 group relative overflow-hidden"
              >
                <principle.icon className="text-accent/50 group-hover:text-accent transition-colors duration-300" size={20} />
                <span className="text-white font-sans font-medium tracking-wide text-sm z-10">{principle.title}</span>
                {/* Glow Line Under Card */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-500 shadow-[0_0_10px_var(--accent)]"></div>
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
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-3 group relative p-4 rounded-lg hover:bg-white/5 transition-all duration-300 overflow-hidden"
              >
                {/* Image Placeholder Layer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10 scale-110 group-hover:scale-100">
                  <img src="/tech-demo.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex items-center gap-2 text-accent text-[10px] font-orbitron uppercase tracking-widest group-hover:scale-110 group-hover:translate-x-1 transition-all">
                  <stack.icon size={12} /> {stack.category}
                </div>
                <div className="text-white font-sans text-sm tracking-wide leading-relaxed font-mono opacity-80 group-hover:opacity-100 transition-opacity">{stack.items}</div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. SYSTEM PHILOSOPHY */}
        <section className="mb-32 py-20 text-center relative">
          {/* Central Core Effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-64 h-64 bg-accent blur-[120px] rounded-full"
            />
          </div>
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
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-muted-foreground font-sans text-sm uppercase tracking-[0.1em] border-l border-accent/30 pl-4 text-left hover:text-white transition-colors cursor-default"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. GLOBAL REACH & 6. CURRENT FOCUS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Global Reach */}
          <section className="relative">
            {/* Left Vertical Line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-accent/30 shadow-[0_0_10px_var(--accent)]"></div>
            <div className="pl-6">
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
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-card/20 border border-white/5 hover:bg-accent/5 hover:border-accent/30 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-muted-foreground font-sans text-sm group-hover:text-white transition-colors">{reach.label}</span>
                    <span className="text-accent font-orbitron text-xs font-bold group-hover:scale-110 transition-transform">{reach.val}</span>
                  </motion.div>
                ))}
              </div>
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
                { title: "Web application systems", icon: Layout },
                { title: "Automation tools", icon: Zap },
                { title: "Portfolio platforms", icon: Target },
                { title: "Backend architectures", icon: Server }
              ].map((focus, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 bg-accent/5 border border-accent/20 hover:bg-accent/10 hover:border-accent hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,80,0,0.3)] transition-all duration-300 group cursor-pointer"
                >
                   <div className="flex justify-between items-start mb-2">
                     <div className="text-white font-orbitron text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                     <focus.icon size={14} className="text-accent/50 group-hover:text-accent transition-colors" />
                   </div>
                   <div className="text-white font-sans text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">{focus.title}</div>
                   {/* Pulse Effect Background */}
                   <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:animate-pulse pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 7. TEAM STRUCTURE */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// EXECUTION</span>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase mb-6">TEAM <span className="text-accent">STRUCTURE</span></h2>
              <p className="text-muted-foreground text-base leading-relaxed font-sans mb-4">
                Small, focused, and execution-driven.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed font-sans">
                Projects are handled with a lean approach to maintain speed and clarity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="/team-demo.jpg" 
                alt="Team Visual Proof" 
                className="rounded-xl opacity-80 w-full object-cover border border-white/5 group-hover:border-accent/30 transition-all duration-500 shadow-2xl" 
              />
            </motion.div>
          </div>
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
                    <motion.div 
                      key={i} 
                      className="group cursor-default"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportConfig}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                        <div className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-accent transition-all duration-300 hover:[text-shadow:0_0_15px_rgba(255,80,0,0.6)]">
                          <CountingNumber value={stat.value} />
                        </div>
                        <div className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase font-sans">{stat.label}</div>
                    </motion.div>
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
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0.7, y: 0 }}
                  whileHover={{ opacity: 1, y: -5 }}
                  whileInView={{ opacity: 0.7 }}
                  viewport={viewportConfig}
                  className="group cursor-default transition-all duration-300"
                >
                    <div className="font-orbitron text-xl md:text-2xl font-bold text-white/70 mb-2 group-hover:text-accent transition-colors duration-300">{metric.value}</div>
                    <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase font-sans">{metric.label}</div>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
}
