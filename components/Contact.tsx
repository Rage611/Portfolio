"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1200px] mx-auto bg-[#14141E]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative"
      >
        {/* Abstract Background Elements inside container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.5rem]">
          {/* Animated Network Lines / SVG Background */}
          <svg 
            className="absolute w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            <motion.circle 
              cx="20%" cy="30%" r="2" fill="#3b82f6"
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="80%" cy="70%" r="2" fill="#a855f7"
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.circle 
              cx="60%" cy="20%" r="2" fill="#ec4899"
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </svg>

          {/* Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold text-white mb-6 tracking-tight">
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Together</span>
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-400 font-inter max-w-2xl mx-auto mb-12">
              Have a project in mind? Let's create something extraordinary. I'm currently open for new opportunities and collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link 
                href="mailto:rrishabh301@gmail.com"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-medium text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </Link>
              
              <Link 
                href="/resume.pdf"
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                View Resume
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6">
              <Link 
                href="https://github.com" 
                target="_blank"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-zinc-400 group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </Link>
              
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-zinc-400 group-hover:fill-[#3b82f6] transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
  
              <Link 
                href="mailto:rrishabh301@gmail.com"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] group"
              >
                <Mail className="w-6 h-6 text-zinc-400 group-hover:text-pink-500 transition-colors" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
