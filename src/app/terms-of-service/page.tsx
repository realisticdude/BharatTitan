"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            TERMS OF <span className="text-accent">SERVICE</span>
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
              These Terms govern your use of BharatTitan services. By using our platform, you agree to comply.
            </p>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">01</span> Services Overview
            </h2>
            <p className="mb-4">We provide:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Web system development</li>
              <li>Automation solutions</li>
              <li>Backend architectures</li>
              <li>UI/UX design systems</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">02</span> User Responsibilities
            </h2>
            <p className="mb-4">You agree:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Not to misuse services</li>
              <li>Not to attempt unauthorized access</li>
              <li>To provide accurate information</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">03</span> Intellectual Property
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>All systems, code, and designs remain BharatTitan property unless transferred via agreement</li>
              <li>Unauthorized reuse is prohibited</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">04</span> Project Engagement Terms
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Scope defined before execution</li>
              <li>Timelines may vary based on complexity</li>
              <li>Revisions limited based on agreement</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">05</span> Payments
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Payments must be completed as agreed</li>
              <li>Delays may affect delivery timelines</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">06</span> Limitation of Liability
            </h2>
            <p className="mb-4">We are not responsible for:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Indirect losses</li>
              <li>Third-party failures</li>
              <li>Misuse of delivered systems</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">07</span> Termination
            </h2>
            <p className="mb-4">We reserve the right to:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Suspend services</li>
              <li>Terminate access in case of violations</li>
            </ul>
          </motion.section>

          <div className="h-px bg-border/30 w-full"></div>

          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-orbitron font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-accent text-sm">08</span> Modifications
            </h2>
            <p>
              Terms may be updated at any time.
            </p>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
