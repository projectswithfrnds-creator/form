"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SymptomResult {
  regions: { slug: string; label: string; relevance: string }[];
  structures: string[];
  explanation: string;
  tip: string;
}

interface SymptomSearchProps {
  onResult?: (slugs: string[]) => void;
}

const examples = [
  "My neck aches after working at my computer all day",
  "Sharp pain in my lower back when I bend over",
  "My shoulder clicks when I raise my arm",
  "Tight feeling behind my knees when I run",
  "Numbness in my fingertips",
];

export default function SymptomSearch({ onResult }: SymptomSearchProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<SymptomResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(query?: string) {
    const text = query ?? input;
    if (!text.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);
    if (query) setInput(query);

    try {
      const res = await fetch("/api/symptom-map", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptom: text }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }

      setResult(data);
      if (onResult && data.regions) {
        onResult(data.regions.map((r: { slug: string }) => r.slug));
      }
    } catch {
      setError("Could not connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="w-full">
      {/* Search input */}
      <div
        className="flex items-stretch border transition-all duration-300"
        style={{
          borderColor: input ? "#C4724A55" : "#2A2420",
          backgroundColor: "#161310",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe what you're feeling..."
          className="flex-1 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-[#3A342E]"
          style={{
            color: "#F0E8D8",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
          }}
          maxLength={300}
        />
        <button
          onClick={() => handleSearch()}
          disabled={loading || !input.trim()}
          className="px-6 py-4 text-xs uppercase tracking-widest transition-all duration-200 disabled:opacity-30"
          style={{
            color: "#C4724A",
            fontFamily: "var(--font-dm-sans)",
            borderLeft: "1px solid #2A2420",
          }}
          onMouseEnter={(e) => {
            if (!loading && input.trim()) {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#C4724A22";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
          }}
        >
          {loading ? "..." : "Map it"}
        </button>
      </div>

      {/* Examples */}
      {!result && !loading && (
        <div className="mt-4 flex flex-wrap gap-2">
          {examples.map((ex) => (
            <button
              key={ex}
              onClick={() => handleSearch(ex)}
              className="text-xs px-3 py-2 border transition-all duration-200"
              style={{
                borderColor: "#2A2420",
                color: "#7A6E64",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C4724A55";
                (e.currentTarget as HTMLElement).style.color = "#F0E8D8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2A2420";
                (e.currentTarget as HTMLElement).style.color = "#7A6E64";
              }}
            >
              {ex}
            </button>
          ))}
        </div>
      )}

      {/* Loading */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-sm"
            style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          >
            Mapping your anatomy...
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-4 border text-sm"
            style={{ borderColor: "#6B1E2A44", color: "#A89880", backgroundColor: "#161310" }}
          >
            {error === "API key not configured." ? (
              <span>Add your Anthropic API key to <code className="text-xs" style={{ color: "#C4724A" }}>.env.local</code> to enable AI mapping.</span>
            ) : error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            {/* Explanation */}
            <div
              className="p-6 border mb-4"
              style={{ borderColor: "#2A2420", backgroundColor: "#161310" }}
            >
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#A89880", fontWeight: 300 }}
              >
                {result.explanation}
              </p>
              {result.tip && (
                <div
                  className="p-3 border-l-2"
                  style={{ borderColor: "#C4724A", backgroundColor: "#0D0B09" }}
                >
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#C4724A" }}>
                    Try this
                  </p>
                  <p className="text-sm" style={{ color: "#7A8C6E", fontWeight: 300 }}>
                    {result.tip}
                  </p>
                </div>
              )}
            </div>

            {/* Relevant regions */}
            {result.regions?.length > 0 && (
              <div className="mb-4">
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)" }}
                >
                  Relevant regions
                </p>
                <div className="flex flex-col gap-2">
                  {result.regions.map((region) => {
                    const isSystem = ["skeletal","muscular","nervous","cardiovascular","respiratory","digestive","endocrine","immune","lymphatic","urinary","reproductive","integumentary"].includes(region.slug);
                    const href = isSystem ? `/systems/${region.slug}` : `/explore/${region.slug}`;
                    return (
                      <Link
                        key={region.slug}
                        href={href}
                        className="flex items-start justify-between p-4 border transition-all duration-200 group"
                        style={{ borderColor: "#2A2420", backgroundColor: "#0D0B09" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "#C4724A55";
                          (e.currentTarget as HTMLElement).style.backgroundColor = "#161310";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "#2A2420";
                          (e.currentTarget as HTMLElement).style.backgroundColor = "#0D0B09";
                        }}
                      >
                        <div>
                          <p
                            className="text-sm mb-1"
                            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, color: "#F0E8D8" }}
                          >
                            {region.label}
                          </p>
                          <p className="text-xs" style={{ color: "#7A6E64", fontWeight: 300 }}>
                            {region.relevance}
                          </p>
                        </div>
                        <span className="text-sm mt-0.5" style={{ color: "#C4724A" }}>→</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Structures mentioned */}
            {result.structures?.length > 0 && (
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "#7A6E64", fontFamily: "var(--font-dm-sans)" }}
                >
                  Structures involved
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.structures.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5"
                      style={{
                        border: "1px solid #2A2420",
                        color: "#A89880",
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 300,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* New search */}
            <button
              onClick={() => {
                setResult(null);
                setInput("");
                if (onResult) onResult([]);
              }}
              className="mt-6 text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: "#3A342E" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#7A6E64")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3A342E")}
            >
              ← Search again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
