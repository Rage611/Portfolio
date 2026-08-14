"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import BackgroundGlow from "@/components/BackgroundGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#030712] overflow-x-hidden text-white font-inter">
      <BackgroundGlow />
      
      <AnimatePresence mode="wait">
        {!showMainContent ? (
          <IntroScreen key="loader" onComplete={() => setShowMainContent(true)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 w-full"
          >
            <Navbar />
            <FloatingCTA />
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-24 md:gap-32 pb-20">
              <Hero />
              <Projects />
              <About />
              <TechStack />
              <Experience />
              <Contact />
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
