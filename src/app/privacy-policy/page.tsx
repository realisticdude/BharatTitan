"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            PRIVACY <span className="text-accent">POLICY</span>
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
              BharatTitan (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website and services.
            </p>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">01</span> Information We Collect
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground font-bold mb-3">a. Personal Information</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name, email address, phone number</li>
                  <li>Company details (if submitted via forms)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-3">b. Technical Data</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>IP address</li>
                  <li>Browser type & version</li>
                  <li>Device type</li>
                  <li>Operating system</li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-3">c. Usage Data</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pages visited</li>
                  <li>Time spent</li>
                  <li>Click interactions</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">02</span> How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>To deliver and improve our services</li>
              <li>To respond to inquiries or requests</li>
              <li>To enhance system performance and UX</li>
              <li>To maintain security and prevent misuse</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">03</span> Legal Basis
            </h2>
            <p className="mb-4">We process data based on:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>User consent</li>
              <li>Legitimate business interests</li>
              <li>Service fulfillment</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">04</span> Data Storage & Security
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Data is stored securely using cloud infrastructure</li>
              <li>Access is restricted to authorized systems only</li>
              <li>Industry-standard security practices are followed</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">05</span> Data Sharing
            </h2>
            <p className="mb-4 font-bold text-foreground italic">We do not sell data.</p>
            <p className="mb-4">We may share data with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cloud providers (AWS, hosting)</li>
              <li>Analytics tools</li>
              <li>Service integrations (only when required)</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">06</span> Data Retention
            </h2>
            <p className="mb-4">We retain data only as long as necessary for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Service delivery</li>
              <li>Legal compliance</li>
              <li>Security purposes</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">07</span> Your Rights
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Request access to your data</li>
              <li>Request correction/deletion</li>
              <li>Withdraw consent</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">08</span> Third-Party Links
            </h2>
            <p>
              We are not responsible for external websites linked from our platform.
            </p>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">09</span> Updates
            </h2>
            <p>
              We may update this policy periodically.
            </p>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
