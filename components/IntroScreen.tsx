"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [count, setCount] = useState(1);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Rapidly count from 1 to 100
    const duration = 2000; // 2 seconds
    const interval = 20; // update every 20ms
    const steps = duration / interval;
    const stepValue = 100 / steps;
    
    let currentCount = 1;
    const timer = setInterval(() => {
      currentCount += stepValue;
      if (currentCount >= 100) {
        setCount(100);
        setShowWelcome(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleWelcomeClick = () => {
    setIsExiting(true);
    // Delay the onComplete callback to allow the exit animation to play
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07090F] overflow-hidden"
        >
          {/* Background Sci-Fi Grid and Glows */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDB2NDBtNDAgMHYtNDBNMCAyMGg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-30" />
          
          {/* Glowing Orbs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Hexagon Container */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 border border-cyan-500/30 rounded-full border-dashed"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-56 h-56 border border-purple-500/40 rounded-full"
            />

            {/* Counter or Welcome Button */}
            <AnimatePresence mode="wait">
              {!showWelcome ? (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                  className="flex flex-col items-center"
                >
                  <span className="font-mono text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-widest">
                    {count.toString().padStart(2, "0")}
                  </span>
                  <span className="text-cyan-400 text-sm mt-4 font-space-grotesk uppercase tracking-[0.3em]">
                    Initializing...
                  </span>
                </motion.div>
              ) : (
                <motion.button
                  key="welcome-btn"
                  onClick={handleWelcomeClick}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-12 py-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,240,255,0.2),inset_0_0_20px_rgba(176,38,255,0.2)] overflow-hidden cursor-pointer"
                  style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 font-space-grotesk text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">
                    Welcome
                  </span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
