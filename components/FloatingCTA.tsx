"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-40 group"
    >
      <Link href="#contact" className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-60 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 animate-pulse"></div>
        <div className="relative flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-xl transform group-hover:scale-105 transition-transform duration-300 border border-white/10">
          <Mail size={18} />
          <span className="font-space-grotesk">Get in Touch</span>
        </div>
      </Link>
    </motion.div>
  );
}
