"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Code, Globe, Shield, Smartphone, Zap, Database } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      </div>
    </div>
  );
}
