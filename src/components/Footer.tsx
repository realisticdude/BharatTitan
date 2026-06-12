import React from 'react';
import {Twitter, X, Linkedin, Instagram , Youtube, } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-white/5 py-12 relative overflow-hidden">
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-80 animate-bg-pan pointer-events-none"
        style={{
          backgroundImage: 'url(/footer-bg.png)',
          backgroundSize: '200% 100%',
          backgroundRepeat: 'repeat-x',
        }}
      ></div>

      {/* Footer Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
             <div className="relative w-8 h-8">
                <Image
                  src="/company-logo-header.jpg"
                  alt="Bharat Titan Logo"
                  width={32}
                  height={32}
                  className="rounded-md object-contain shadow-[0_0_10px_var(--accent)]"
                />
             </div>
            <span className="font-orbitron font-bold text-lg tracking-wider text-foreground">
              BHARAT<span className="text-accent">TITAN</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed font-sans">
            Forging the future of Indian technology with Precision. Power. Performance.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-orbitron text-foreground font-bold tracking-widest mb-6">EXPLORE</h4>
          <ul className="space-y-3 text-sm text-muted-foreground font-sans">
            <li>
              <Link href="/about" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 duration-300 inline-block">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 duration-300 inline-block">Services</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 duration-300 inline-block">Products</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 duration-300 inline-block">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-orbitron text-foreground font-bold tracking-widest mb-6">LEGAL</h4>
          <ul className="space-y-3 text-sm text-muted-foreground font-sans">
            <li>
              <Link href="/privacy-policy" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 duration-300 inline-block">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 duration-300 inline-block">Terms of Service</Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-accent transition-colors cursor-pointer hover:translate-x-1 duration-300 inline-block">Cookie Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
  <h4 className="font-orbitron text-foreground font-bold tracking-widest mb-6">
    CONNECT
  </h4>

  <div className="flex gap-4">
    {[
      { Icon: X, url: "https://x.com/BharatTitan" },
      { Icon: Linkedin, url: "https://www.linkedin.com/company/bharattitan" },
      { Icon: Instagram, url: "https://instagram.com/bharattitanofficial" },
      { Icon: Youtube, url: "https://www.youtube.com/@BharatTitanOfficial" },
    ].map(({ Icon, url }, i) => (
      <a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent hover:shadow-[0_0_15px_rgba(var(--accent),0.5)] transition-all duration-300 hover:scale-110"
      >
        <Icon size={18} />
      </a>
    ))}
  </div>
</div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-sans">
        <p suppressHydrationWarning>&copy; {new Date().getFullYear()} BharatTitan. All rights reserved.</p>
        <p>Designed for the Elite.</p>
      </div>
    </footer>
  );
};
