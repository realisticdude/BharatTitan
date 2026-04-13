"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Zap } from 'lucide-react';

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

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group bg-card/40 backdrop-blur-md p-8 border border-white/5 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              {/* Card Hover Gradient */}
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

        {/* Stats / Divider */}
        <div className="relative py-16">
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

      </div>
    </div>
  );
}
