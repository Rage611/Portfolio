"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Top Left Blue Blob */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-blue rounded-full opacity-20 blur-[120px]"
      />

      {/* Bottom Right Purple Blob */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-purple rounded-full opacity-20 blur-[120px]"
      />

      {/* Center Pink Blob */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-pink rounded-full opacity-[0.15] blur-[120px]"
      />
    </div>
  );
}
