"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Globe, Shield, Smartphone, Zap, Database, Search, Layout, Settings, Rocket, Activity, Server, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
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

// Section Transition Divider
const SectionTransition = () => (
  <div className="w-full h-32 bg-gradient-to-b from-transparent via-accent/5 to-transparent blur-2xl opacity-50 pointer-events-none"></div>
);

export default function Services() {
  const viewportConfig = { once: true, margin: "-100px" };
  
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "High-performance interfaces built with Next.js. Optimized for speed and conversion."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Fortify your digital assets with elite security protocols. We build vaults."
    },
    {
      icon: Zap,
      title: "Digital Strategy",
      description: "Data-driven roadmaps to accelerate transformation and outpace competition."
    },
    {
      icon: Database,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud architecture for high-traffic enterprise applications."
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailor-made solutions designed to solve unique business challenges."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
              OUR <span className="text-accent drop-shadow-[0_0_10px_var(--accent)]">SERVICES</span>
            </h2>
            <p className="text-muted-foreground max-w-xl font-sans text-lg">
              Precision-engineered solutions for the modern era.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-auto h-[1px] bg-gradient-to-r from-accent to-transparent flex-1 ml-10 hidden md:block"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-card/40 backdrop-blur-md p-8 border border-white/5 hover:border-accent relative overflow-hidden transition-all duration-500 rounded-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              {/* Interactive Depth Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,80,0,0.15),transparent_40%)]" />
              
              {/* Service Demo Image Placeholder */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none scale-110 group-hover:scale-100">
                <img src="/service-demo.jpg" alt="" className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon size={100} className="text-white" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-background border border-accent/30 flex items-center justify-center mb-6 rounded-lg group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_20px_var(--accent)] transition-all duration-500">
                  <service.icon className="text-accent group-hover:text-white transition-colors" size={24} />
                </div>
                
                <h3 className="font-sans text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-sans group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>

                <div className="flex items-center text-accent text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Access <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionTransition />

        {/* 1. SERVICE EXECUTION FLOW */}
        <section className="mb-32 relative overflow-hidden">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SERVICE FLOW</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">SERVICE <span className="text-accent">EXECUTION FLOW</span></h2>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Moving Pipeline Container */}
            <div className="flex animate-scroll-flow whitespace-nowrap py-10 will-change-transform">
              {[...Array(2)].map((_, listIndex) => (
                <div key={listIndex} className="flex gap-12 px-6 items-center">
                  {[
                    { step: "01", title: "REQUIREMENT ANALYSIS", desc: "Understanding project scope", icon: Search },
                    { step: "02", title: "SYSTEM DESIGN", desc: "Creating scalable architecture", icon: Layout },
                    { step: "03", title: "DEVELOPMENT", desc: "Building clean systems", icon: Code },
                    { step: "04", title: "TESTING", desc: "Ensuring stability", icon: Activity },
                    { step: "05", title: "DEPLOYMENT", desc: "Secure and monitored release", icon: Rocket }
                  ].map((item, i) => (
                    <div 
                      key={`${listIndex}-${i}`}
                      className="relative z-10 flex flex-col items-center text-center group cursor-default"
                    >
                      <div className="w-24 h-24 bg-background border border-accent/20 flex items-center justify-center mb-6 group-hover:border-accent transition-all duration-500 shadow-lg group-hover:shadow-accent/40 group-hover:scale-110 group-hover:z-20 group-hover:-translate-y-2 backdrop-blur-md relative overflow-hidden"
                           style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}>
                        <span className="font-orbitron text-xs text-accent group-hover:text-white transition-colors">{item.step}</span>
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h4 className="font-orbitron text-[10px] font-bold text-white tracking-widest mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-[8px] font-sans leading-relaxed opacity-0 group-hover:opacity-80 transition-opacity max-w-[120px] whitespace-normal">{item.desc}</p>
                      
                      {/* Animated Connecting Line */}
                      <div className="absolute top-1/2 -right-12 w-12 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse hidden lg:block"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionTransition />

        {/* 2. SERVICE METRICS */}
        <section className="mb-32 py-20 border-y border-white/5 relative overflow-hidden group">
          {/* Background Pulse */}
          <div className="absolute inset-0 bg-accent/5 animate-pulse group-hover:bg-accent/10 transition-colors duration-1000"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { label: "2–5 WKS", text: "Avg Delivery Time" },
              { label: "8–12", text: "Active Projects" },
              { label: "40%", text: "Client Retention" },
              { label: "<5%", text: "Bugs Post Delivery" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="space-y-2"
              >
                <div className="font-orbitron text-4xl md:text-5xl font-black text-white hover:text-accent transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,80,0,0.3)] tracking-tighter">
                  <CountingNumber value={stat.label} />
                </div>
                <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase font-sans">
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionTransition />

        {/* 3. TECH STACK SNAPSHOT */}
        <section className="mb-32 relative">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SYSTEM STACK</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">TECH STACK <span className="text-accent">SNAPSHOT</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { category: "Frontend", items: "React, Next.js", icon: Layout },
              { category: "Backend", items: "Node.js, Express", icon: Server },
              { category: "Mobile", items: "React Native", icon: Smartphone },
              { category: "Cloud", items: "AWS (EC2, S3)", icon: Server },
              { category: "Database", items: "MongoDB, PostgreSQL", icon: Database }
            ].map((stack, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="p-6 bg-card/20 border border-white/5 space-y-4 group hover:border-accent/30 transition-all relative overflow-hidden"
              >
                {/* Image Preview Layer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none -z-10 scale-110 group-hover:scale-100">
                  <img src="/tech-preview.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Scan Line Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute w-full h-[2px] bg-accent opacity-0 group-hover:opacity-100 animate-scan"></div>
                </div>

                <div className="flex items-center gap-2 text-accent text-[10px] font-orbitron uppercase tracking-widest relative z-10">
                  <stack.icon size={12} className="group-hover:scale-110 group-hover:rotate-6 transition-transform" /> {stack.category}
                </div>
                <div className="text-white font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity relative z-10 group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]">
                  {stack.items}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionTransition />

        {/* 4. SERVICE COVERAGE & 5. ENGAGEMENT MODELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 relative">
          {/* Flow Link Effect (Connecting Visual) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent blur-[1px] z-0"></div>
          
          {/* Coverage */}
          <section className="relative z-10">
            <div className="mb-10">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// OPERATION MODE</span>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">SERVICE <span className="text-accent">COVERAGE</span></h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Startup MVP development",
                "Business automation systems",
                "Admin dashboards & panels",
                "API development & integration",
                "Portfolio & branding platforms"
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card/10 border border-white/5 hover:border-accent/20 transition-all group hover:bg-accent/5"
                >
                   <CheckCircle2 size={14} className="text-accent/50 group-hover:text-accent transition-colors" />
                   <span className="text-muted-foreground font-sans text-sm group-hover:text-white transition-colors">{text}</span>
                   {/* Ripple Effect Glow */}
                   <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Engagement */}
          <section className="relative z-10">
            <div className="mb-10">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// EXECUTION CORE</span>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">ENGAGEMENT <span className="text-accent">MODELS</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Fixed scope projects",
                "Monthly retainers",
                "Feature-based development",
                "Consultation & planning"
              ].map((model, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 border border-white/5 bg-background hover:bg-accent/5 hover:border-accent/20 transition-all group relative overflow-hidden"
                >
                   <div className="w-8 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-500 mb-4 shadow-[0_0_10px_var(--accent)]"></div>
                   <span className="text-white font-orbitron text-[10px] tracking-widest uppercase block group-hover:text-accent transition-colors">{model}</span>
                   {/* Hover Highlight Shift */}
                   <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <SectionTransition />

        {/* 6. SUPPORT & MAINTENANCE & 7. DIFFERENTIATION BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
          {/* Why BharatTitan (Core Power Block) */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 bg-accent/10 border border-accent/20 relative overflow-hidden group rounded-xl"
          >
            {/* Core Background Zoom */}
            <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 scale-100 group-hover:scale-110 transition-transform duration-[10000ms] linear">
              <img src="/core-bg.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all duration-700"></div>
            <div className="mb-8 relative z-10">
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">WHY <span className="text-accent">BHARATTITAN</span></h2>
            </div>
            <div className="space-y-6 relative z-10">
              {[
                "Focus on system quality, not volume",
                "Clean and maintainable code",
                "Realistic timelines and delivery",
                "Direct communication, no layers"
              ].map((point, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_10px_var(--accent)] animate-pulse"></div>
                  <span className="text-white font-sans text-sm tracking-wide group-hover:translate-x-1 transition-transform duration-300 cursor-default">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Support */}
          <section className="flex flex-col justify-center pl-4 border-l border-white/5">
            <div className="mb-8">
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// RELIABILITY</span>
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">SUPPORT & <span className="text-accent">MAINTENANCE</span></h2>
            </div>
            <div className="space-y-4">
              {[
                "7 days post-delivery support",
                "Minor fixes included",
                "Optional extended maintenance plans"
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1 }}
                  className="text-muted-foreground font-sans text-sm flex items-center gap-3 hover:text-white transition-colors cursor-default"
                >
                   <div className="w-6 h-[1px] bg-white/10 group-hover:bg-accent transition-colors"></div> {text}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <SectionTransition />

        {/* 8. AUTOMATION SYSTEMS (Visual Split System) */}
        <section className="mb-32">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// AUTOMATION CORE</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">AUTOMATION <span className="text-accent">SYSTEMS</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "n8n Workflow", text: "Workflow automation using n8n" },
                { label: "API Tasking", text: "API-based task automation" },
                { label: "Data Sync", text: "Data sync between platforms" },
                { label: "Event Triggers", text: "Scheduled triggers" },
                { label: "CRM Lead Flow", text: "CRM automation" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-card/20 border border-white/5 hover:border-accent/30 transition-all group relative overflow-hidden"
                >
                  <div className="text-accent font-orbitron text-[10px] mb-2 tracking-widest uppercase relative z-10">{item.label}</div>
                  <div className="text-white font-sans text-sm tracking-wide group-hover:text-accent transition-colors relative z-10">{item.text}</div>
                  <div className="mt-4 text-[8px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                    &gt; executing workflow...
                  </div>
                  {/* Background Highlight Shift */}
                  <div className="absolute inset-0 bg-accent/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Visual Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8 }}
              className="relative group rounded-xl overflow-hidden border border-white/5"
            >
              <img src="/automation-demo.jpg" alt="Automation Demo" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              {/* Animated Signals */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="absolute w-1 h-1 bg-accent rounded-full blur-[1px]"
                    initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
                    animate={{ y: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <SectionTransition />

        {/* 9. AI SYSTEMS */}
        <section className="mb-32 p-8 md:p-12 bg-card/10 border border-white/5 relative overflow-hidden rounded-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none"></div>
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// AI SYSTEMS</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">AI AGENTS & <span className="text-accent">INTELLIGENT SYSTEMS</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: "AI Chat Assistants", desc: "Frontend-based or API integrated" },
                { title: "Task-specific AI Agents", desc: "Support, data handling" },
                { title: "Prompt-based Automation", desc: "Prompt-based workflow automation" },
                { title: "Decision Systems", desc: "Lightweight decision systems" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_10px_var(--accent)] group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h4 className="text-white font-sans text-sm font-bold tracking-wide mb-1 uppercase group-hover:text-accent transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground text-xs font-sans tracking-wide group-hover:text-white/80 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col justify-center relative">
              <p className="text-muted-foreground text-sm font-sans leading-relaxed tracking-wide italic z-10">
                Focused AI implementations for real use-cases, not experimental builds.
              </p>
              <div className="mt-6 flex gap-2 z-10">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
              {/* Background Nucleus */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-32 h-32 bg-accent blur-[60px] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <SectionTransition />

        {/* 10. SOCIAL & BUSINESS AUTOMATION (Switch System) */}
        <section className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// WORKFLOW ENGINE</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">SOCIAL & <span className="text-accent">BUSINESS AUTOMATION</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <motion.div 
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-card/20 border border-white/5 space-y-6 hover:border-accent/30 hover:bg-accent/5 transition-all group relative rounded-xl"
            >
              <h4 className="font-orbitron text-xs font-bold text-accent tracking-[0.3em] uppercase relative z-10">SOCIAL AUTOMATION</h4>
              <ul className="space-y-3 text-muted-foreground text-sm font-sans relative z-10">
                <li className="group-hover:text-white transition-colors duration-300">• Content scheduling workflows</li>
                <li className="group-hover:text-white transition-colors duration-300">• Auto-post pipelines</li>
                <li className="group-hover:text-white transition-colors duration-300">• Engagement tracking systems</li>
                <li className="group-hover:text-white transition-colors duration-300">• Basic analytics automation</li>
              </ul>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: -5 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-card/20 border border-white/5 space-y-6 hover:border-accent/30 hover:bg-accent/5 transition-all group relative rounded-xl"
            >
              <h4 className="font-orbitron text-xs font-bold text-accent tracking-[0.3em] uppercase relative z-10">BUSINESS AUTOMATION</h4>
              <ul className="space-y-3 text-muted-foreground text-sm font-sans relative z-10">
                <li className="group-hover:text-white transition-colors duration-300">• Invoice / report generation</li>
                <li className="group-hover:text-white transition-colors duration-300">• Internal task tracking systems</li>
                <li className="group-hover:text-white transition-colors duration-300">• Email automation flows</li>
                <li className="group-hover:text-white transition-colors duration-300">• Notification systems</li>
              </ul>
              <div className="absolute inset-0 bg-gradient-to-l from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            </motion.div>
          </div>
        </section>

        <SectionTransition />

        {/* 11. AUTOMATION METRICS */}
        <section className="mb-32 py-20 border-y border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 animate-pulse group-hover:bg-accent/10 transition-colors duration-1000"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { label: "20–40%", text: "Manual workload reduced" },
              { label: "2–5 DAYS", text: "Avg automation setup time" },
              { label: "10–25", text: "Supported integrations" },
              { label: "LOW", text: "Maintenance required" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="space-y-2"
              >
                <div className="font-orbitron text-4xl md:text-5xl font-black text-white hover:text-accent transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,80,0,0.3)] tracking-tighter">
                  <CountingNumber value={stat.label} />
                </div>
                <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase font-sans">
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8. CTA SECTION (Energy Burst Entry) */}
        <section className="mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative overflow-hidden bg-accent p-12 md:p-20 shadow-2xl shadow-accent/40 text-center hover:shadow-[0_0_60px_rgba(255,80,0,0.4)] transition-all duration-700"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-20"></div>
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-orbitron text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none"
              >
                READY TO INITIATE A BUILD?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/90 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto tracking-wide"
              >
                Let’s define your system and start execution.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-accent font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 shadow-xl"
                >
                  START PROJECT
                </Link>
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/40 text-white font-orbitron font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  CONTACT
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
