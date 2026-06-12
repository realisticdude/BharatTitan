"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isCounting, setIsCounting] = useState(true);
  const [showInteraction, setShowInteraction] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startReveal = () => {
    if (showInteraction) {
      setShowInteraction(false);
      setShowLogo(true);
      
      // Play audio
      if (audioRef.current) {
        audioRef.current.volume = 1.0;
        audioRef.current.play().catch(e => console.warn("Audio play blocked:", e));
      }

      // Logo animation phase
      setTimeout(() => {
        setIsVisible(false);
        // Re-enable scrolling
        document.body.style.overflow = "";
      }, 2500); // 1.5s logo reveal + pause
    }
  };

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    // Counter logic
    const duration = 1200; // Total duration for counter (~1.2s)
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressValue = Math.min(elapsed / duration, 1);
      
      // Use easing for counter progress for a more fluid feel
      const easedProgress = progressValue === 1 ? 1 : 1 - Math.pow(2, -10 * progressValue);
      const nextProgress = Math.round(easedProgress * 100);

      setProgress(nextProgress);

      if (progressValue < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // At 100%
        setTimeout(() => {
          setIsCounting(false);
          setShowInteraction(true);
        }, 200); // Slight pause (100-200ms)
      }
    };

    requestAnimationFrame(updateCounter);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="loader-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden select-none touch-none cursor-pointer"
          onClick={startReveal}
        >
          {/* Audio element */}
          <audio ref={audioRef} src="/music.mp3" preload="auto" />

          <div className="relative w-full h-full">
            {/* Percentage Counter */}
            <AnimatePresence>
              {isCounting && (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [0.95, 1.05, 1],
                  }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{
                    scale: {
                      duration: 0.2,
                      repeat: 0,
                      ease: "easeOut"
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <h2 
                    className="font-orbitron text-7xl md:text-9xl font-bold tracking-wider text-steel-blade relative z-10"
                  >
                    {progress}%
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enter Experience Overlay */}
            <AnimatePresence>
              {showInteraction && (
                <motion.div
                  key="interaction"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                >
                  <motion.div
                    animate={{ 
                      opacity: [0.4, 1, 0.4],
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 20px rgba(255,255,255,0.5)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="font-orbitron text-lg md:text-xl tracking-[0.5em] text-white uppercase font-light">
                      Enter Experience
                    </span>
                    <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-white/40 uppercase">
                      Tap anywhere to continue
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Logo Reveal */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  key="logo"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-8"
                >
                  <div className="relative w-56 h-56 md:w-80 md:h-80 flex items-center justify-center">
                    {/* Main Logo with Reveal Mask */}
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        scale: 0.8, 
                        filter: "blur(20px) brightness(3)",
                        clipPath: "inset(50% 50% 50% 50%)"
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        filter: "blur(0px) brightness(1)",
                        clipPath: "inset(0% 0% 0% 0%)"
                      }}
                      transition={{ 
                        duration: 1.5, 
                        ease: [0.22, 1, 0.36, 1], // Cinematic ease-out
                      }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src="/company-logo.png"
                        alt="BharatTitan Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                    
                    {/* Subtle "Joining" Glitch/Light Effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: [0, 0.5, 0],
                        scale: [0.5, 1.2, 1.5],
                        filter: ["blur(0px)", "blur(20px)", "blur(40px)"]
                      }}
                      transition={{ 
                        duration: 1.2,
                        times: [0, 0.5, 1],
                        ease: "easeOut"
                      }}
                      className="absolute inset-0 bg-white/30 rounded-full mix-blend-overlay pointer-events-none"
                    />
                  </div>

                  <div className="overflow-hidden flex flex-col items-center">
                    <motion.h1 
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.5, 
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="font-orbitron text-3xl md:text-5xl font-bold tracking-[0.3em] text-white text-center"
                    >
                      BHARATTITAN
                    </motion.h1>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="h-[1px] w-full max-w-[300px] md:max-w-[500px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Background Ambient Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
