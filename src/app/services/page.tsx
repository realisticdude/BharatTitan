"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Code, Globe, Shield, Smartphone, Zap, Database, Search, Layout, Settings, Rocket, Activity, Server, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
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
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto h-[1px] bg-gradient-to-r from-accent to-transparent flex-1 ml-10 hidden md:block"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card/40 backdrop-blur-md p-8 border border-white/5 hover:border-accent relative overflow-hidden transition-all duration-300 rounded-xl"
            >
              {/* Background Noise/Effect */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
              
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon size={100} className="text-white" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-background border border-accent/30 flex items-center justify-center mb-6 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_10px_var(--accent)] group-hover:shadow-[0_0_20px_var(--accent)]">
                  <service.icon className="text-accent group-hover:text-white transition-colors" size={24} />
                </div>
                
                <h3 className="font-sans text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                <div className="flex items-center text-accent text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Access <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 1. SERVICE EXECUTION FLOW */}
        <section className="mb-32">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// SERVICE FLOW</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">SERVICE <span className="text-accent">EXECUTION FLOW</span></h2>
          </div>
          
          <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>
            
            {[
              { step: "01", title: "REQUIREMENT ANALYSIS", desc: "Understanding project scope and constraints", icon: Search },
              { step: "02", title: "SYSTEM DESIGN", desc: "Creating scalable architecture", icon: Layout },
              { step: "03", title: "DEVELOPMENT", desc: "Building clean and efficient systems", icon: Code },
              { step: "04", title: "TESTING", desc: "Ensuring stability and performance", icon: Activity },
              { step: "05", title: "DEPLOYMENT", desc: "Secure and monitored release", icon: Rocket }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 w-full lg:w-[18%] flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                <div className="w-20 h-20 bg-background border border-accent/20 flex items-center justify-center mb-6 group-hover:border-accent transition-all duration-500 shadow-lg group-hover:shadow-accent/20">
                  <span className="font-orbitron text-xs text-accent">{item.step}</span>
                </div>
                <h4 className="font-orbitron text-xs font-bold text-white tracking-widest mb-3 group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-muted-foreground text-[10px] font-sans leading-relaxed opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. SERVICE METRICS */}
        <section className="mb-32 py-20 border-y border-white/5 bg-accent/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "2–5 WKS", text: "Avg Delivery Time" },
              { label: "8–12", text: "Active Projects" },
              { label: "40%", text: "Client Retention" },
              { label: "<5%", text: "Bugs Post Delivery" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="font-orbitron text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(var(--accent),0.3)] tracking-tighter">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase font-sans">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TECH STACK SNAPSHOT */}
        <section className="mb-32">
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
              <div key={i} className="p-6 bg-card/20 border border-white/5 space-y-4 group hover:border-accent/20 transition-all">
                <div className="flex items-center gap-2 text-accent text-[10px] font-orbitron uppercase tracking-widest">
                  <stack.icon size={12} /> {stack.category}
                </div>
                <div className="text-white font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                  {stack.items}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SERVICE COVERAGE & 5. ENGAGEMENT MODELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Coverage */}
          <section>
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
                <div key={i} className="flex items-center gap-4 p-4 bg-card/10 border border-white/5 hover:border-accent/20 transition-all group">
                   <CheckCircle2 size={14} className="text-accent/50 group-hover:text-accent transition-colors" />
                   <span className="text-muted-foreground font-sans text-sm group-hover:text-white transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Engagement */}
          <section>
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
                <div key={i} className="p-6 border border-white/5 bg-background hover:bg-accent/5 hover:border-accent/20 transition-all group">
                   <div className="w-8 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-500 mb-4"></div>
                   <span className="text-white font-orbitron text-[10px] tracking-widest uppercase block">{model}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 6. SUPPORT & MAINTENANCE & 7. DIFFERENTIATION BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Differentiation */}
          <section className="p-8 md:p-12 bg-accent/10 border border-accent/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all"></div>
            <div className="mb-8">
              <h2 className="font-orbitron text-2xl font-bold text-white tracking-widest uppercase">WHY <span className="text-accent">BHARATTITAN</span></h2>
            </div>
            <div className="space-y-6">
              {[
                "Focus on system quality, not volume",
                "Clean and maintainable code",
                "Realistic timelines and delivery",
                "Direct communication, no layers"
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_5px_var(--accent)]"></div>
                  <span className="text-white font-sans text-sm tracking-wide">{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Support */}
          <section className="flex flex-col justify-center">
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
                <div key={i} className="text-muted-foreground font-sans text-sm flex items-center gap-3">
                   <div className="w-6 h-[1px] bg-white/10"></div> {text}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 8. AUTOMATION SYSTEMS */}
        <section className="mb-32">
          <div className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// AUTOMATION CORE</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">AUTOMATION <span className="text-accent">SYSTEMS</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "n8n Workflow", text: "Workflow automation using n8n" },
              { label: "API Tasking", text: "API-based task automation" },
              { label: "Data Sync", text: "Data sync between platforms" },
              { label: "Event Triggers", text: "Scheduled and event-based triggers" },
              { label: "CRM Lead Flow", text: "CRM and lead flow automation" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card/20 border border-white/5 hover:border-accent/30 transition-all group"
              >
                <div className="text-accent font-orbitron text-[10px] mb-2 tracking-widest uppercase">{item.label}</div>
                <div className="text-white font-sans text-sm tracking-wide group-hover:text-accent transition-colors">{item.text}</div>
                <div className="mt-4 text-[8px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  &gt; executing workflow...
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground text-sm font-sans italic">
            Reducing repetitive tasks through structured automation workflows.
          </p>
        </section>

        {/* 9. AI SYSTEMS */}
        <section className="mb-32 p-8 md:p-12 bg-card/10 border border-white/5 relative overflow-hidden">
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
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_5px_var(--accent)]"></div>
                  <div>
                    <h4 className="text-white font-sans text-sm font-bold tracking-wide mb-1 uppercase">{item.title}</h4>
                    <p className="text-muted-foreground text-xs font-sans tracking-wide">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground text-sm font-sans leading-relaxed tracking-wide italic">
                Focused AI implementations for real use-cases, not experimental builds.
              </p>
              <div className="mt-6 flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. SOCIAL & BUSINESS AUTOMATION */}
        <section className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">// WORKFLOW ENGINE</span>
            <h2 className="font-orbitron text-3xl font-bold text-white tracking-widest uppercase">SOCIAL & <span className="text-accent">BUSINESS AUTOMATION</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card/20 border border-white/5 space-y-6">
              <h4 className="font-orbitron text-xs font-bold text-accent tracking-[0.3em] uppercase">SOCIAL AUTOMATION</h4>
              <ul className="space-y-3 text-muted-foreground text-sm font-sans">
                <li>• Content scheduling workflows</li>
                <li>• Auto-post pipelines</li>
                <li>• Engagement tracking systems</li>
                <li>• Basic analytics automation</li>
              </ul>
            </div>
            <div className="p-8 bg-card/20 border border-white/5 space-y-6">
              <h4 className="font-orbitron text-xs font-bold text-accent tracking-[0.3em] uppercase">BUSINESS AUTOMATION</h4>
              <ul className="space-y-3 text-muted-foreground text-sm font-sans">
                <li>• Invoice / report generation</li>
                <li>• Internal task tracking systems</li>
                <li>• Email automation flows</li>
                <li>• Notification systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 11. AUTOMATION METRICS */}
        <section className="mb-32 py-20 border-y border-white/5 bg-accent/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "20–40%", text: "Manual workload reduced" },
              { label: "2–5 DAYS", text: "Avg automation setup time" },
              { label: "10–25", text: "Supported integrations" },
              { label: "LOW", text: "Maintenance required" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="font-orbitron text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(var(--accent),0.3)] tracking-tighter">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase font-sans">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CTA SECTION */}
        <section className="mb-12">
          <div 
            className="relative overflow-hidden bg-accent p-12 md:p-20 shadow-2xl shadow-accent/40 text-center"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0 15%)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                READY TO INITIATE A BUILD?
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-sans mb-12 max-w-2xl mx-auto tracking-wide">
                Let’s define your system and start execution.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
