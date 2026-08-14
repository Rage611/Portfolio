import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-space-grotesk text-white font-bold leading-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">incredible</span> together.
            </h2>
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-space-grotesk font-semibold mb-2">Quick Links</h3>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors font-inter">Home</Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors font-inter">Projects</Link>
            <Link href="#experience" className="text-gray-400 hover:text-white transition-colors font-inter">Experience</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors font-inter">Contact</Link>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 items-start md:items-end">
            <h3 className="text-white font-space-grotesk font-semibold mb-2">Connect</h3>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:contact@example.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-white/10 mb-12"></div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mb-12 select-none group">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-marquee {
            animation: scroll-marquee 20s linear infinite;
          }
        `}} />
        <div className="animate-scroll-marquee flex items-center">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[8rem] md:text-[12rem] font-space-grotesk font-bold uppercase text-transparent tracking-tighter mx-8" style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.1)" }}>
              RISHABH SINGH
            </span>
          ))}
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm font-inter">
        &copy; {new Date().getFullYear()} Rishabh Singh. All rights reserved.
      </div>
    </footer>
  );
}
