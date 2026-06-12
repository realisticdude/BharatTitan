"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  const lastUpdated = "April 21, 2026";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-accent font-orbitron text-sm tracking-[0.3em] mb-4">// LEGAL DOCUMENT</p>
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            COOKIE <span className="text-accent">POLICY</span>
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span>Last Updated: {lastUpdated}</span>
            <div className="h-px flex-1 bg-border/50"></div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-12 text-muted-foreground leading-relaxed font-sans">
          
          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">00</span> Introduction
            </h2>
            <p>
              We use cookies to improve user experience and analyze performance.
            </p>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">01</span> What Are Cookies
            </h2>
            <p>
              Small data files stored on your browser.
            </p>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">02</span> Types of Cookies
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground font-bold mb-3">a. Essential Cookies</h3>
                <p>Required for site functionality</p>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-3">b. Performance Cookies</h3>
                <p>Track site usage and performance</p>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-3">c. Analytics Cookies</h3>
                <p>Help understand user behavior</p>
              </div>
            </div>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">03</span> How We Use Cookies
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Improve navigation</li>
              <li>Optimize performance</li>
              <li>Analyze traffic</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">04</span> Third-Party Cookies
            </h2>
            <p className="mb-4">We may use:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Analytics tools</li>
              <li>Hosting/CDN services</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">05</span> Managing Cookies
            </h2>
            <p className="mb-4">Users can:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Disable cookies via browser</li>
              <li>Clear stored cookies anytime</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">06</span> Consent
            </h2>
            <p>
              By using the site, you agree to cookie usage.
            </p>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
