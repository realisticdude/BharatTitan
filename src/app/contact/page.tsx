"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
                GET IN <span className="text-accent drop-shadow-[0_0_10px_var(--accent)]">TOUCH</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-sans">
                Ready to forge something legendary? Signal our team and let's construct the future.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Base of Operations", text: "Cyber City, Gurugram, India" },
                { icon: Phone, title: "Secure Line", text: "+91 98765 43210" },
                { icon: Mail, title: "Data Stream", text: "hello@bharattitan.in" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-card/40 flex items-center justify-center border border-white/5 group-hover:border-accent transition-colors duration-300 rounded-lg group-hover:shadow-[0_0_10px_var(--accent)]">
                    <item.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans text-white font-bold tracking-wide mb-1">{item.title}</h4>
                    <p className="text-muted-foreground font-sans">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/60 backdrop-blur-xl p-8 md:p-12 border border-white/5 relative rounded-2xl overflow-hidden"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl"></div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-background/50 border border-white/10 p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_10px_var(--accent)] transition-all rounded-lg font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-background/50 border border-white/10 p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_10px_var(--accent)] transition-all rounded-lg font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-background/50 border border-white/10 p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_10px_var(--accent)] transition-all rounded-lg font-sans"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-background/50 border border-white/10 p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_10px_var(--accent)] transition-all resize-none rounded-lg font-sans"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <button className="w-full bg-accent text-white font-sans font-bold py-4 hover:bg-accent/90 transition-all flex items-center justify-center gap-2 rounded-lg shadow-lg shadow-accent/30 hover:shadow-accent/50 cursor-pointer">
                TRANSMIT MESSAGE <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
