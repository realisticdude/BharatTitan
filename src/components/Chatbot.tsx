"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const LionIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Mane / Outer Structure */}
    <path d="M32 8C22 8 14 16 14 26C14 32 17 37 22 40L18 52L26 48C28 50 30 51 32 51C34 51 36 50 38 48L46 52L42 40C47 37 50 32 50 26C50 16 42 8 32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    {/* Face Outline */}
    <path d="M32 16C26 16 22 20 22 26C22 30 24 33 27 35L25 42L32 40L39 42L37 35C40 33 42 30 42 26C42 20 38 16 32 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Eyes - Glowing Dots */}
    <circle cx="28" cy="25" r="1.5" fill="currentColor" className="animate-pulse"/>
    <circle cx="36" cy="25" r="1.5" fill="currentColor" className="animate-pulse"/>
    {/* Nose/Snout */}
    <path d="M30 32L32 34L34 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 34V37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Ears */}
    <path d="M20 14L24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M44 14L40 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const RESPONSES = [
  {
    keywords: ["service", "what do you do", "offer"],
    response: "We provide web development, mobile apps, cloud systems, automation tools, and custom software solutions."
  },
  {
    keywords: ["product", "tools", "platform"],
    response: "Our products include Titan Analytics, Bharat Cloud, Fortress UI, and Nexus API. Some are in beta or development."
  },
  {
    keywords: ["contact", "reach", "email", "talk"],
    response: "You can connect with us via the Contact page. Navigate to 'Contact' from the menu to initiate."
  },
  {
    keywords: ["about", "who are you"],
    response: "BharatTitan is a digital engineering unit focused on building scalable and high-performance systems."
  },
  {
    keywords: ["price", "cost", "project"],
    response: "Pricing depends on project scope. You can reach out via the Contact page to discuss details."
  }
];

const DEFAULT_RESPONSE = "I can help with services, products, or contact info. Try asking something related.";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize first message on client side to avoid hydration mismatch
    setMessages([
      {
        id: '1',
        text: "Hello. I am the BT Assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    for (const item of RESPONSES) {
      if (item.keywords.some(keyword => input.includes(keyword))) {
        return item.response;
      }
    }
    return DEFAULT_RESPONSE;
  };

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const quickButtons = ["Services", "Products", "Contact"];

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 h-[500px] bg-background/80 backdrop-blur-xl border border-accent/20 rounded-2xl shadow-2xl shadow-accent/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-gradient-to-r from-accent/10 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-accent/30 flex items-center justify-center shadow-[0_0_15px_rgba(var(--accent),0.2)]">
                  <LionIcon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-orbitron font-bold tracking-wider uppercase">BT Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
                    <span className="text-[10px] text-green-500 uppercase tracking-widest font-orbitron font-bold">online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[80%]",
                    msg.sender === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "p-3 text-sm rounded-2xl",
                    msg.sender === 'user' 
                      ? "bg-accent text-white rounded-tr-none" 
                      : "bg-card/50 border border-white/5 text-muted-foreground rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex flex-col items-start max-w-[80%]">
                  <div className="p-3 bg-card/50 border border-white/5 text-muted-foreground rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Buttons */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
              {quickButtons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleSend(btn)}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/70 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all whitespace-nowrap"
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative"
              >
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask something..."
                  className="w-full bg-card/50 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-accent disabled:text-muted-foreground disabled:opacity-50 hover:scale-110 transition-all"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="flex flex-col items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 rounded-full bg-background/60 backdrop-blur-xl border border-accent/40 flex items-center justify-center shadow-[0_0_20px_rgba(var(--accent),0.15),inset_0_0_20px_rgba(var(--accent),0.05)] hover:border-accent/60 hover:shadow-[0_0_30px_rgba(var(--accent),0.3),inset_0_0_30px_rgba(var(--accent),0.1)] transition-all overflow-hidden"
        >
          {/* Glow ring effect */}
          <div className="absolute inset-0 rounded-full bg-accent/5 animate-pulse"></div>
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                className="relative z-10"
              >
                <X size={24} className="text-accent" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative z-10"
              >
                <LionIcon size={28} className="text-accent" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Label */}
        <span className="text-[10px] font-orbitron text-muted-foreground tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          Assistant
        </span>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-background/80 backdrop-blur-md border border-accent/30 rounded-lg text-accent text-[10px] font-orbitron tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(var(--accent),0.2)]">
            Ask the Lion
          </div>
        )}
      </div>
    </div>
  );
};
