"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import { systems } from "@/lib/anatomy-data";

const systemColors = [
  "#C4724A", "#D4A853", "#7A8C6E", "#C4724A", "#D4A853",
  "#7A8C6E", "#C4724A", "#D4A853", "#7A8C6E", "#C4724A",
  "#D4A853", "#7A8C6E",
];

export default function SystemsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0B09", color: "#F0E8D8" }}>
      <Nav />
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase tracking-[0.3em] text-xs mb-4" style={{ color: "#D4A853" }}>
            All systems
          </p>
          <h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontStyle: "italic" }}
          >
            The 12 body systems
          </h1>
          <p className="text-base max-w-xl mb-16" style={{ color: "#7A6E64", fontWeight: 300 }}>
            Everything working at once, all the time. Each system is interconnected — you can&apos;t understand one without understanding the others.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {systems.map((system, i) => (
            <motion.div
              key={system.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/systems/${system.slug}`}
                className="block p-8 border transition-all duration-300 group"
                style={{ borderColor: "#2A2420", backgroundColor: "#0D0B09" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = systemColors[i] + "44";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#161310";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2A2420";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0D0B09";
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className="text-xs uppercase tracking-widest block mb-2"
                      style={{ color: systemColors[i] }}
                    >
                      System {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className="text-2xl mb-2"
                      style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
                    >
                      {system.label}
                    </h2>
                    <p className="text-sm max-w-xl" style={{ color: "#7A6E64", fontWeight: 300 }}>
                      {system.tagline}
                    </p>
                  </div>
                  <span className="text-lg mt-1 transition-colors duration-300" style={{ color: "#3A342E" }}>
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
