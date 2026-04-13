"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "TITAN ANALYTICS",
      tag: "Enterprise Data",
      status: "Coming Soon"
    },
    {
      id: 2,
      name: "BHARAT CLOUD",
      tag: "Infrastructure",
      status: "Beta Access"
    },
    {
      id: 3,
      name: "FORTRESS UI",
      tag: "Design System",
      status: "Available"
    },
    {
      id: 4,
      name: "NEXUS API",
      tag: "Connectivity",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide"
          >
            FLAGSHIP <span className="text-accent drop-shadow-[0_0_15px_var(--accent)]">PRODUCTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto font-sans text-lg"
          >
            In-house innovations designed to revolutionize the grid.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 bg-card/40 backdrop-blur-md border border-white/5 overflow-hidden hover:border-accent transition-colors duration-500 rounded-xl"
            >
              {/* Product Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background opacity-90"></div>
              
              {/* Animated Glow Blob */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>

              <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs font-bold tracking-wider uppercase mb-4 rounded">
                    {product.tag}
                  </div>
                  <h3 className="font-orbitron text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <span className={`text-sm font-medium font-sans tracking-wide ${product.status === 'Available' ? 'text-green-400' : 'text-gray-500'}`}>
                    {product.status}
                  </span>
                  <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-white hover:shadow-[0_0_10px_var(--accent)] transition-all duration-300">
                    <span className="text-xl leading-none mb-1">+</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
