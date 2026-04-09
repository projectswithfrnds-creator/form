"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import { regions } from "@/lib/anatomy-data";

const allRegions = [
  ...regions,
  { slug: "hips-groin", label: "Hips & Groin", tagline: "The center of power and the source of a lot of pain." },
  { slug: "upper-arm", label: "Upper Arm", tagline: "More than biceps — the full picture." },
  { slug: "forearm", label: "Forearm", tagline: "The muscles behind every grip and rotation." },
  { slug: "wrist-hand", label: "Wrist & Hand", tagline: "27 bones. Infinite precision." },
  { slug: "thigh", label: "Thigh", tagline: "The powerhouse of the lower body." },
  { slug: "lower-leg", label: "Lower Leg", tagline: "From knee to ankle — what keeps you upright." },
  { slug: "ankle-foot", label: "Ankle & Foot", tagline: "26 bones absorbing every step you take." },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0B09", color: "#F0E8D8" }}>
      <Nav />
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase tracking-[0.3em] text-xs mb-4" style={{ color: "#C4724A" }}>
            Musculoskeletal
          </p>
          <h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontStyle: "italic" }}
          >
            Explore by region
          </h1>
          <p className="text-base max-w-xl mb-16" style={{ color: "#7A6E64", fontWeight: 300 }}>
            Tap into any area of the body. Plain language. No jargon. Just what&apos;s there and why it matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allRegions.map((region, i) => (
            <motion.div
              key={region.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/explore/${region.slug}`}
                className="block p-8 border transition-all duration-300 group"
                style={{ borderColor: "#2A2420", backgroundColor: "#0D0B09" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#C4724A55";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#161310";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2A2420";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0D0B09";
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2
                      className="text-xl mb-2"
                      style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
                    >
                      {region.label}
                    </h2>
                    <p className="text-sm" style={{ color: "#7A6E64", fontWeight: 300 }}>
                      {region.tagline}
                    </p>
                  </div>
                  <span style={{ color: "#3A342E" }} className="text-lg mt-1 transition-colors duration-300 group-hover:text-[#C4724A]">
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
