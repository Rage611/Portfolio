"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techStack = [
  { name: "C", color: "bg-blue-600" },
  { name: "C++", color: "bg-blue-700" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "HTML5", color: "bg-orange-500" },
  { name: "CSS3", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "TypeScript", color: "bg-blue-400" },
  { name: "React", color: "bg-cyan-400" },
  { name: "Next.js", color: "bg-white text-black" },
  { name: "Tailwind CSS", color: "bg-teal-400" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Express.js", color: "bg-gray-400" },
  { name: "Supabase", color: "bg-emerald-500" },
  { name: "PostgreSQL", color: "bg-blue-800" },
  { name: "MongoDB", color: "bg-green-600" },
  { name: "TensorFlow", color: "bg-orange-600" },
  { name: "OpenCV", color: "bg-red-500" },
  { name: "Docker", color: "bg-blue-500" },
  { name: "Git", color: "bg-orange-600" },
  { name: "Figma", color: "bg-purple-500" },
  { name: "Vercel", color: "bg-white text-black" },
  { name: "AWS", color: "bg-orange-400" },
  { name: "GraphQL", color: "bg-pink-600" },
  { name: "Redux", color: "bg-purple-600" },
];

export default function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDB2NDBtNDAgMHYtNDBNMCAyMGg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="relative h-[400px] md:h-[500px] w-full max-w-4xl mx-auto">
          {mounted && techStack.map((tech, index) => {
            // Generate deterministic but scattered positions
            const theta = (index * 137.5) * (Math.PI / 180); // Golden angle
            const radius = Math.sqrt(index) * 45; // Spread out
            const x = Math.cos(theta) * radius;
            const y = Math.sin(theta) * radius;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.05,
                  type: "spring",
                  bounce: 0.4
                }}
                className="absolute left-1/2 top-1/2 -ml-6 -mt-6 group"
                style={{
                  x,
                  y,
                }}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/20 backdrop-blur-md cursor-pointer transition-transform hover:scale-125 hover:z-50 ${tech.color} ${!tech.color.includes('text-black') ? 'text-white' : ''}`}>
                  {tech.name.substring(0, 2)}
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1 rounded-full text-white text-sm font-medium z-50 pointer-events-none">
                  {tech.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
