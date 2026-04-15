"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Phone, Mail, CheckCircle2, MessageCircle, Copy, ExternalLink, Activity } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState('Web / App Development');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast here if available
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* // OPERATION LIMIT */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <Activity size={12} className="text-accent animate-pulse" />
              <span className="text-[10px] font-orbitron text-accent font-bold tracking-[0.2em] uppercase">
                // OPERATION LIMIT: LIMITED SLOTS AVAILABLE
              </span>
            </div>

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
                { icon: MapPin, title: "Base of Operations", text: "Cyber City, Gurugram, India", action: null },
                { icon: Phone, title: "Secure Line", text: "+91 98765 43210", action: "copy" },
                { icon: Mail, title: "Data Stream", text: "hello@bharattitan.in", action: "email" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-card/40 flex items-center justify-center border border-white/5 group-hover:border-accent transition-colors duration-300 rounded-lg group-hover:shadow-[0_0_10px_var(--accent)] shrink-0">
                    <item.icon className="text-accent" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-sans text-white font-bold tracking-wide">{item.title}</h4>
                      {item.action && (
                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.action === 'copy' && (
                            <button onClick={() => copyToClipboard(item.text)} className="text-accent hover:text-white transition-colors" title="Copy to clipboard">
                              <Copy size={14} />
                            </button>
                          )}
                          {item.action === 'email' && (
                            <a href={`mailto:${item.text}`} className="text-accent hover:text-white transition-colors" title="Send email">
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground font-sans">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions & Communication Mode */}
            <div className="pt-8 border-t border-white/5 space-y-6">
              <div>
                <span className="text-[10px] font-orbitron text-accent/60 tracking-widest uppercase mb-4 block">// COMMUNICATION MODE</span>
                <p className="text-muted-foreground text-sm font-sans italic">
                  Email / WhatsApp / Call (based on request)
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-card/40 border border-white/5 hover:border-accent/40 transition-all rounded-xl group">
                  <MessageCircle size={18} className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-sans">WhatsApp Connect</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card/60 backdrop-blur-xl p-8 md:p-12 border border-white/5 relative rounded-2xl overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl"></div>

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                {/* // INQUIRY TYPES */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Select Your Request</label>
                  <div className="flex flex-wrap gap-2">
                    {['Web / App Development', 'Automation Systems', 'AI Agents / Tools', 'Custom Software'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedInquiry(type)}
                        className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest font-sans transition-all border rounded-full ${
                          selectedInquiry === type 
                            ? 'bg-accent border-accent text-white shadow-[0_0_10px_var(--accent)]' 
                            : 'bg-background/50 border-white/10 text-muted-foreground hover:border-accent/40'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-background/50 border border-white/10 p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_10px_var(--accent)] transition-all rounded-lg font-sans"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-background/50 border border-white/10 p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_10px_var(--accent)] transition-all rounded-lg font-sans"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Subject</label>
                  <input 
                    type="text" 
                    value={selectedInquiry}
                    readOnly
                    className="w-full bg-background/50 border border-white/10 p-4 text-white focus:outline-none rounded-lg font-sans opacity-70"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-accent uppercase tracking-wider font-sans">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-background/50 border border-white/10 p-4 text-white focus:outline-none focus:border-accent focus:shadow-[0_0_10px_var(--accent)] transition-all resize-none rounded-lg font-sans"
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-accent text-white font-sans font-bold py-4 hover:bg-accent/90 transition-all flex items-center justify-center gap-2 rounded-lg shadow-lg shadow-accent/30 hover:shadow-accent/50 cursor-pointer">
                    TRANSMIT MESSAGE <Send size={18} />
                  </button>
                  <p className="text-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    &gt; secure transmission enabled
                  </p>
                </div>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 z-20"
                    >
                      <CheckCircle2 size={48} className="text-accent mb-4 animate-bounce" />
                      <h3 className="font-orbitron text-xl font-bold text-white mb-2 uppercase tracking-widest">SIGNAL RECEIVED</h3>
                      <p className="text-muted-foreground font-sans text-sm tracking-wide">
                        &gt; message transmitted successfully
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* // PROCESS SIGNAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-card/30 border border-white/5 rounded-2xl"
            >
              <span className="text-accent text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase block mb-6">// PROCESS SIGNAL</span>
              <h3 className="font-orbitron text-lg font-bold text-white mb-6 tracking-widest uppercase">WHAT HAPPENS <span className="text-accent">NEXT</span></h3>
              <div className="space-y-4">
                {[
                  "Response within 12–24 hours",
                  "Initial discussion to understand scope",
                  "Clear execution plan shared",
                  "Project initiation after alignment"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:shadow-[0_0_5px_var(--accent)] transition-all"></div>
                    <span className="text-muted-foreground text-sm font-sans group-hover:text-white transition-colors">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* // SYSTEM TRUST STRIP */}
        <div className="w-full py-12 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="text-accent text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase block w-full text-center mb-4">// SYSTEM TRUST</span>
            {[
              "Projects across 4+ domains",
              "Experience with international clients",
              "Focus on clean, scalable systems"
            ].map((trust, i) => (
              <div key={i} className="flex items-center gap-4 text-muted-foreground/60 text-[10px] font-sans font-bold uppercase tracking-widest group">
                <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent transition-colors"></div>
                <span className="group-hover:text-white transition-colors">{trust}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
