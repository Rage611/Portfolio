"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  "Rishabh's approach is structured, and before developing or programming he thinks about the architecture in detail.",
  "He believes that a strong foundation in digital transformation and strict type safety is the key to scalable platforms.",
  "His passion for C++ algorithm optimization translates directly to highly performant serverless architectures.",
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="about" className="py-32 relative flex flex-col items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-purple-500/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-h-[150px] flex items-center justify-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {slides[currentSlide]}
          </h2>
        </motion.div>
        
        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-8 bg-white" 
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
