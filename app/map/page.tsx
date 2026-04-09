"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import BodyMap from "@/components/BodyMap";
import SymptomSearch from "@/components/SymptomSearch";

export default function MapPage() {
  const [highlightedSlugs, setHighlightedSlugs] = useState<string[]>([]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0B09", color: "#F0E8D8" }}>
      <Nav />

      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-xs mb-4" style={{ color: "#C4724A" }}>
            Body Map
          </p>
          <h1
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontStyle: "italic" }}
          >
            Where does it feel?
          </h1>
          <p className="text-base max-w-xl" style={{ color: "#7A6E64", fontWeight: 300 }}>
            Tap the body to explore a region, or describe what you&apos;re feeling and let Form map it for you.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Body Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 flex flex-col items-center"
          >
            <BodyMap highlightedSlugs={highlightedSlugs} />

            {/* Legend */}
            <div className="mt-8 flex flex-col gap-2 w-full max-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3" style={{ backgroundColor: "#C4724A" }} />
                <span className="text-xs" style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                  Matched region
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3" style={{ backgroundColor: "#2A241E" }} />
                <span className="text-xs" style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                  Tap to explore
                </span>
              </div>
            </div>
          </motion.div>

          {/* Symptom Search */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full"
          >
            <div className="mb-8">
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)" }}
              >
                AI Symptom Mapper
              </p>
              <SymptomSearch onResult={setHighlightedSlugs} />
            </div>

            {/* Divider */}
            <div className="my-10" style={{ borderTop: "1px solid #2A2420" }} />

            {/* Manual browse prompt */}
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)" }}
              >
                Or tap the body
              </p>
              <p className="text-sm" style={{ color: "#4A4038", fontWeight: 300 }}>
                Each region on the diagram is clickable — tap any part of the body to go straight to its anatomy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
