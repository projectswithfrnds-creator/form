"use client";

import { motion } from "framer-motion";
import { use } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { getRegion } from "@/lib/anatomy-data";

const typeColors: Record<string, string> = {
  muscle: "#C4724A",
  bone: "#D4A853",
  tendon: "#7A8C6E",
  ligament: "#7A8C6E",
  nerve: "#9B7EC8",
  other: "#7A6E64",
};

export default function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const region = getRegion(slug);

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0D0B09", color: "#F0E8D8" }}>
        <Nav />
        <div className="text-center">
          <p style={{ color: "#7A6E64" }}>This region is coming soon.</p>
          <Link href="/explore" className="mt-4 block" style={{ color: "#C4724A" }}>
            ← Back to Explore
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
              href="/explore"
              className="text-xs uppercase tracking-widest mb-8 inline-block transition-colors duration-200"
              style={{ color: "#3A342E" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#7A6E64")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#3A342E")}
            >
              ← Explore
            </Link>
            <p className="uppercase tracking-[0.3em] text-xs mb-4 mt-4" style={{ color: "#C4724A" }}>
              Musculoskeletal
            </p>
            <h1
              className="text-5xl md:text-6xl mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
            >
              {region.label}
            </h1>
            <p
              className="text-lg italic mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "#7A6E64" }}
            >
              {region.tagline}
            </p>
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "#A89880", fontWeight: 300 }}
            >
              {region.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Structures */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-sm uppercase tracking-widest mb-10"
            style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)" }}
          >
            Structures
          </h2>
          <div className="flex flex-col gap-6">
            {region.structures.map((structure, i) => (
              <motion.div
                key={structure.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="border p-8"
                style={{ borderColor: "#2A2420", backgroundColor: "#161310" }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div>
                    <span
                      className="text-xs uppercase tracking-widest block mb-1"
                      style={{ color: typeColors[structure.type] || "#7A6E64" }}
                    >
                      {structure.type}
                    </span>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
                    >
                      {structure.name}
                    </h3>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6" style={{ color: "#A89880", fontWeight: 300 }}>
                  {structure.plain}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4" style={{ backgroundColor: "#0D0B09", borderLeft: `2px solid ${typeColors[structure.type] || "#7A6E64"}` }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#7A6E64" }}>
                      Why it matters
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#A89880", fontWeight: 300 }}>
                      {structure.relevance}
                    </p>
                  </div>
                  <div className="p-4" style={{ backgroundColor: "#0D0B09", borderLeft: "2px solid #2A2420" }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#7A6E64" }}>
                      Feel it yourself
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#A89880", fontWeight: 300 }}>
                      {structure.feel}
                    </p>
                  </div>
                </div>

                {structure.commonIssues && (
                  <div className="mt-4 p-4" style={{ backgroundColor: "#0D0B09", border: "1px solid #2A2420" }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#7A6E64" }}>
                      Common issues
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#7A6E64", fontWeight: 300 }}>
                      {structure.commonIssues}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
