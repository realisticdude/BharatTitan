"use client";

import React, { useEffect, useRef } from 'react';

export const DataStreamBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Resize handling
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      length: number;
      speed: number;
      color: string;
      width: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.length = Math.random() * 200 + 50; // Long streaks
        this.speed = Math.random() * 15 + 5; // Fast speed
        this.width = Math.random() * 2 + 0.5;
        
        // Colors extracted from the wolf image (Crimson/Orange Energy)
        const colors = [
          'rgba(220, 20, 60, ',   // Crimson
          'rgba(255, 80, 0, ',    // Deep Orange
          'rgba(255, 255, 255, '  // Silver White
        ];
        const selectedColor = colors[Math.floor(Math.random() * colors.length)];
        const opacity = Math.random() * 0.5 + 0.1;
        this.color = selectedColor + opacity + ')';
      }

      update() {
        if (!canvas) return;
        this.x += this.speed;
        // Reset when moving off screen
        if (this.x > canvas.width + this.length) {
          this.x = -this.length;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        // Create a gradient for the trail
        const gradient = ctx.createLinearGradient(this.x - this.length, this.y, this.x, this.y);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, this.color);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.x - this.length, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000); // Density
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(10, 15, 30, 0.2)'; // Trail effect (Deep void black with blue tint)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
};
