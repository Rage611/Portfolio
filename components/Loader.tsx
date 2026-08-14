"use client";

import { useState, useEffect } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setCount(Math.round(value)),
      onComplete: () => {
        setTimeout(() => setShowWelcome(true), 200);
      }
    });

    return controls.stop;
  }, []);

  const handleWelcomeClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030712] overflow-hidden"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

          {/* Main Sci-Fi HUD Container */}
          <div className="relative flex items-center justify-center w-[350px] h-[150px] md:w-[500px] md:h-[200px]">
            
            {/* Outer Purple Wave */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-30%] border-[2px] border-purple/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-md shadow-[inset_0_0_30px_rgba(168,85,247,0.3)]"
            />
            {/* Inner Cyan Wave */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10%] border-[2px] border-blue/40 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] blur-sm shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            />
            {/* Core Pink Glow */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[10%] bg-pink/20 rounded-[50%] blur-2xl z-0 pointer-events-none"
            />

            {/* SVG HUD Geometry */}
            <svg 
              className="absolute inset-0 w-full h-full z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] pointer-events-none" 
              viewBox="0 0 500 200"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="hudGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="panelBg" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(15, 23, 42, 0.9)" />
                  <stop offset="100%" stopColor="rgba(3, 7, 18, 0.95)" />
                </linearGradient>
              </defs>

              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 100,20 Q 250,40 400,20" fill="none" stroke="#3b82f6" strokeWidth="2" 
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 100,180 Q 250,160 400,180" fill="none" stroke="#a855f7" strokeWidth="2" 
              />

              <motion.polygon 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                points="80,60 420,60 460,100 420,140 80,140 40,100" 
                fill="url(#panelBg)" stroke="url(#hudGradient)" strokeWidth="2"
              />

              <motion.polygon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} points="80,60 160,60 120,100" fill="rgba(255,255,255,0.03)" />
              <motion.polygon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} points="420,60 340,60 380,100" fill="rgba(255,255,255,0.03)" />
              <motion.polygon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} points="40,100 80,140 120,100" fill="rgba(255,255,255,0.01)" />
              <motion.polygon initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} points="460,100 420,140 380,100" fill="rgba(255,255,255,0.01)" />

              <motion.line
                initial={{ y1: 60, y2: 60 }}
                animate={{ y1: 140, y2: 140 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                x1="60" x2="440" stroke="rgba(59,130,246,0.3)" strokeWidth="1"
              />
            </svg>

            {/* Clickable Area & Content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
              {!showWelcome ? (
                <span 
                  className="font-mono text-5xl md:text-7xl font-bold italic tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {count.toString().padStart(2, '0')}
                </span>
              ) : (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(255,255,255,0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWelcomeClick}
                  className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-wider text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-pointer outline-none"
                >
                  Welcome
                </motion.button>
              )}
            </div>

            {/* Progress Bar (Only show while counting) */}
            <AnimatePresence>
              {!showWelcome && (
                <motion.div 
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-48 md:w-64 h-1 bg-gray-900 rounded-full overflow-hidden z-20 border border-gray-800 pointer-events-none"
                >
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue via-purple to-pink shadow-[0_0_10px_#a855f7]"
                    style={{ width: `${count}%` }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Corner Accents */}
            <div className="absolute top-1/4 left-4 w-2 h-2 border-t border-l border-blue z-20 opacity-50 pointer-events-none" />
            <div className="absolute top-1/4 right-4 w-2 h-2 border-t border-r border-blue z-20 opacity-50 pointer-events-none" />
            <div className="absolute bottom-1/4 left-4 w-2 h-2 border-b border-l border-blue z-20 opacity-50 pointer-events-none" />
            <div className="absolute bottom-1/4 right-4 w-2 h-2 border-b border-r border-blue z-20 opacity-50 pointer-events-none" />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
