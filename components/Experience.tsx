"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "GuardGrid",
    role: "Software Engineer",
    period: "Jan 2026 – Present",
    points: [
      "Architected serverless B2B enterprise platform using Next.js App Router for 300+ personnel",
      "Configured PostgreSQL Row Level Security on Supabase",
      "Deployed edge-layer security via Next.js Middleware under 20ms",
      "Built secure data pipeline using React Server Components and TypeScript"
    ],
    color: "bg-blue-500",
    shadow: "shadow-blue-500/50"
  },
  {
    id: 2,
    company: "TMS Security Services",
    role: "Software Engineer (Contract)",
    period: "Dec 2025 – Present",
    points: [
      "Migrated legacy Node.js backend to serverless React.js on Vercel",
      "Designed direct-to-cloud storage with Cloudinary REST API",
      "Implemented Cloudflare Turnstile bot protection and EmailJS",
      "Accelerated unique traffic by 347%"
    ],
    color: "bg-purple-500",
    shadow: "shadow-purple-500/50"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1200px] mx-auto bg-[#14141E]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white">
            Experience
          </h2>
          <div className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
            Work
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-[21px] md:left-1/2 w-4 h-4 rounded-full ${exp.color} md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 ${exp.shadow} shadow-lg`} />
                  
                  {/* Desktop Empty Space */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'order-2' : 'order-1'}`} />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className={`w-full pl-14 md:pl-0 md:w-[45%] ${isEven ? 'order-1 md:pr-12 md:text-right' : 'order-2 md:pl-12 text-left'}`}
                  >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
                      
                      {/* Subtle hover gradient inside card */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/10 text-zinc-300 border border-white/10`}>
                          {exp.period}
                        </span>
                        
                        <h3 className="text-2xl font-space-grotesk font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className={`text-lg font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ${isEven ? 'md:bg-gradient-to-l' : ''}`}>
                          {exp.company}
                        </p>
                        
                        <ul className="space-y-3 font-inter text-zinc-400 text-sm md:text-base">
                          {exp.points.map((point, i) => (
                            <li key={i} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${exp.color} mt-2 flex-shrink-0 ${exp.shadow} shadow-sm`} />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
