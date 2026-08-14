"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full pt-28 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* 3D-like Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Top-left sphere */}
        <motion.div 
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-1/4 w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-[2px] opacity-60 shadow-[0_0_30px_rgba(99,102,241,0.5)]"
        />
        {/* Bottom-right donut/torus replacement (circle with border) */}
        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [0, 20, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-12 md:right-32 w-24 h-24 rounded-full border-[16px] border-blue-500/30 blur-[2px] opacity-70"
        />
        {/* Right side cube replacement (rotated square) */}
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [45, 90, 45] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg blur-[2px] opacity-50 transform rotate-45"
        />
        {/* Left side cube */}
        <motion.div 
          animate={{ y: [15, -15, 15], rotate: [15, -15, 15] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-8 w-14 h-14 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg blur-[1px] opacity-40 transform rotate-12"
        />
        {/* Center-bottom tiny sphere */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/2 w-6 h-6 rounded-full bg-cyan-400 blur-[1px] opacity-50 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 gap-12 lg:gap-8 z-10">
        
        {/* Left Side - Video Avatar Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full lg:w-[45%] flex justify-center lg:justify-start"
        >
          {/* Main Card */}
          <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <video 
              src="/assets/j.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            {/* Inner Glow / Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] rounded-[2.5rem] pointer-events-none" />
          </div>

          {/* Decorative floating dots behind card */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:12px_12px] -z-10 opacity-50" />
        </motion.div>

        {/* Right Side - Typography & Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex flex-col items-start text-left"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="text-white/80 text-sm font-medium">Portfolio Projects</span>
          </div>
          
          {/* Massive Heading */}
          <div className="relative mb-6 w-full">
            <h1 className="font-space-grotesk font-extrabold uppercase tracking-tight text-white leading-[1.05] text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem]">
              Full Stack
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300">
                Developer
              </span>
            </h1>
            {/* Sparkle icon at top right of heading */}
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 right-10 text-purple-400 opacity-60 hidden md:block"
            >
              <Sparkles size={48} strokeWidth={1} />
            </motion.div>
          </div>

          {/* Paragraph */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-inter">
            Pre-final year Computer Science undergraduate at Bennett University with experience in Full-Stack Development and C++ algorithm optimization. Architecting serverless platforms prioritizing digital transformation, strict type safety, and distributed systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="#projects"
              className="group relative px-8 py-3.5 rounded-full overflow-hidden text-white font-medium flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-transform hover:scale-105"
            >
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 group-hover:scale-110" />
              <span className="relative z-10 flex items-center gap-2">
                View all projects
              </span>
            </Link>
            
            <Link 
              href="#experience"
              className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>

          {/* Small slider dots (decorative) */}
          <div className="flex items-center gap-2 mt-12 opacity-50">
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
