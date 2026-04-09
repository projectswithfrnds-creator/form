"use client";

import { motion } from "framer-motion";
import { use } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { getSystem } from "@/lib/anatomy-data";

export default function SystemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const system = getSystem(slug);

  if (!system) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0D0B09", color: "#F0E8D8" }}>
        <Nav />
        <div className="text-center">
          <p style={{ color: "#7A6E64" }}>This system page is coming soon.</p>
          <Link href="/systems" className="mt-4 block" style={{ color: "#D4A853" }}>
            ← Back to Systems
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0B09", color: "#F0E8D8" }}>
      <Nav />

      {/* Header */}
      <section className="pt-32 pb-16 px-6" style={{ borderBottom: "1px solid #2A2420" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/systems"
              className="text-xs uppercase tracking-widest mb-8 inline-block transition-colors duration-200"
              style={{ color: "#3A342E" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#7A6E64")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#3A342E")}
            >
              ← Systems
            </Link>
            <p className="uppercase tracking-[0.3em] text-xs mb-4 mt-4" style={{ color: "#D4A853" }}>
              Body System
            </p>
            <h1
              className="text-5xl md:text-6xl mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
            >
              {system.label}
            </h1>
            <p
              className="text-lg italic mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#7A6E64" }}
            >
              {system.tagline}
            </p>
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "#A89880", fontWeight: 300 }}
            >
              {system.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="px-6 py-16" style={{ backgroundColor: "#161310" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-sm uppercase tracking-widest mb-8"
              style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)" }}
            >
              Key facts
            </h2>
            <div className="flex flex-col gap-4">
              {system.keyFacts.map((fact, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-5"
                  style={{ backgroundColor: "#0D0B09", border: "1px solid #2A2420" }}
                >
                  <span
                    className="text-xs mt-1 shrink-0"
                    style={{ color: "#D4A853", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#A89880", fontWeight: 300 }}>
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Structures */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-sm uppercase tracking-widest mb-8"
              style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)" }}
            >
              Key structures
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {system.structures.map((structure) => (
                <div
                  key={structure}
                  className="p-4"
                  style={{ backgroundColor: "#161310", border: "1px solid #2A2420" }}
                >
                  <p className="text-sm" style={{ color: "#F0E8D8", fontWeight: 400 }}>
                    {structure}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
