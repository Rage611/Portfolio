"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  { id: 1, title: "Voicify", subtitle: "Real-time Sign Language Detection", tag: "AI/ML", gradient: "from-purple-600 to-indigo-900" },
  { id: 2, title: "GuardGrid", subtitle: "Serverless B2B Platform", tag: "Enterprise", gradient: "from-blue-600 to-cyan-900" },
  { id: 3, title: "TMS Security", subtitle: "Legacy Migration", tag: "Migration", gradient: "from-pink-600 to-rose-900" },
  { id: 4, title: "Data Pipeline", subtitle: "Type-Safe Architecture", tag: "Backend", gradient: "from-cyan-500 to-teal-900" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto bg-[#14141E]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white">
            Pinned projects
          </h2>
          <button className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
            Sign all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all cursor-pointer h-[320px] flex flex-col"
            >
              {/* Thumbnail Area (Top 2/3) */}
              <div className="relative h-2/3 w-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`} />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay" />
                
                {/* 3D-like floating abstract object placeholder */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full shadow-2xl border border-white/20 flex items-center justify-center">
                  <span className="font-space-grotesk font-bold text-white/50">{project.tag}</span>
                </div>
              </div>

              {/* Content Area (Bottom 1/3) */}
              <div className="flex-1 p-5 flex flex-col justify-center relative bg-black/20">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <p className="text-white/50 text-sm mt-1 truncate">{project.subtitle}</p>
                
                {/* Action button */}
                <button className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <span className="leading-none mb-2">...</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="#"
            className="px-12 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all"
          >
            View all projects <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
