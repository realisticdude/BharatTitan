"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from "next/image";

const AudioWaveform = ({ isPlaying, onClick }: { isPlaying: boolean; onClick: () => void }) => {
  return (
    <motion.div 
      className="flex items-center gap-[2px] h-6 mx-4 cursor-pointer"
      onClick={onClick}
      animate={isPlaying ? { scale: [1, 1.1, 1], opacity: 1 } : { scale: 1, opacity: 0.8 }}
      transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, opacity: 1 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-accent to-accent/50 rounded-full"
          animate={{
            height: isPlaying ? [4, 16, 8, 20, 12, 4] : [4, 12, 6, 16, 8, 4],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // Stop completely
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        // Start playing
        audioRef.current.volume = 0.2;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Audio playback failed:", err);
          setIsPlaying(false);
        });
      }
    }
  };

  const handleAudioEnded = () => {
    // When audio finishes, wait 5 seconds then replay
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      if (audioRef.current && isPlaying) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => {
          console.error("Audio replay failed:", err);
          setIsPlaying(false);
        });
      }
    }, 5000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" onEnded={handleAudioEnded} />
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/60 backdrop-blur-md border-b border-accent/10 shadow-lg shadow-accent/5' 
            : 'bg-transparent'
        }`}
      >
        {/* Top fiery motion strip - Only visible when scrolled or as an accent */}
        <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-transparent via-accent to-transparent animate-slide-right blur-[2px] opacity-80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo Section */}
          <div 
            onClick={toggleTheme}
            className="flex items-center gap-3 cursor-pointer group relative" 
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* ✅ REAL LOGO */}
            <div className="relative z-10 w-10 h-10 transition-transform duration-300 group-active:scale-95">
              <Image
                src="/company-logo.jpg"
                alt="Bharat Titan Logo"
                width={40}
                height={40}
                className={`rounded-md object-contain transition-all duration-300 ${
                  theme === 'dark' ? 'shadow-[0_0_10px_var(--accent)]' : 'shadow-lg'
                }`}
              />
            </div>
            
            {/* Text */}
            <div className="flex flex-col relative z-10">
              <span className="font-orbitron font-bold text-xl tracking-wider text-foreground leading-none">
                BHARAT<span className="text-accent">TITAN</span>
              </span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] font-sans">
                ELITE SYSTEMS
              </span>
            </div>
          </div>

          {/* Center Dynamic Wave (Lion Roar Visualization) */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
             <AudioWaveform isPlaying={isPlaying} onClick={toggleMusic} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-bold tracking-widest uppercase transition-all duration-300 group ${
                  pathname === link.href ? 'text-[#FF3B2F]' : 'text-[#BFCAD3] hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF3B2F] transition-all duration-300 group-hover:w-full ${
                  pathname === link.href ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0F14] md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-2xl font-orbitron font-bold tracking-wider ${
                      pathname === link.href ? 'text-[#FF3B2F]' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
