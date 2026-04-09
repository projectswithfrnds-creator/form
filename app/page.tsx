"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import DailyBody from "@/components/DailyBody";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const regions = [
  { label: "Head & Neck", href: "/explore/head-neck" },
  { label: "Shoulders", href: "/explore/shoulders" },
  { label: "Back", href: "/explore/back" },
  { label: "Hips & Groin", href: "/explore/hips-groin" },
  { label: "Upper Arm", href: "/explore/upper-arm" },
  { label: "Forearm", href: "/explore/forearm" },
  { label: "Wrist & Hand", href: "/explore/wrist-hand" },
  { label: "Thigh", href: "/explore/thigh" },
  { label: "Lower Leg", href: "/explore/lower-leg" },
  { label: "Ankle & Foot", href: "/explore/ankle-foot" },
];

const systems = [
  "Skeletal", "Muscular", "Nervous", "Cardiovascular",
  "Respiratory", "Digestive", "Endocrine", "Immune",
  "Lymphatic", "Urinary", "Reproductive", "Integumentary",
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0B09", color: "#F0E8D8" }}>
      <Nav />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
        {/* Background ring motif */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, #C4724A0D 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full border pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderColor: "#2A2420",
            opacity: 0.6,
          }}
        />
        <div
          className="absolute rounded-full border pointer-events-none"
          style={{
            width: "900px",
            height: "900px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderColor: "#2A2420",
            opacity: 0.3,
          }}
        />

        <motion.p
          className="uppercase tracking-[0.3em] text-xs mb-6"
          style={{ color: "#C4724A" }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          Know your body
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl mb-8 max-w-3xl"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.05,
          }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Your body,<br />finally explained.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          style={{ color: "#A89880", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          Anatomy for the curious, not the clinical. No jargon.
          No memorization. Just a deeper understanding of what&apos;s inside you.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <Link
            href="/explore"
            className="px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              backgroundColor: "#C4724A",
              color: "#0D0B09",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
              letterSpacing: "0.15em",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#D4896A")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4724A")}
          >
            Explore the Body
          </Link>
          <Link
            href="/systems"
            className="px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 border"
            style={{
              borderColor: "#2A2420",
              color: "#F0E8D8",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 400,
              letterSpacing: "0.15em",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#C4724A55")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#2A2420")}
          >
            Body Systems
          </Link>
        </motion.div>
      </section>

      {/* Daily Body */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase tracking-[0.3em] text-xs mb-3" style={{ color: "#C4724A" }}>
            Daily
          </p>
          <h2 className="text-3xl md:text-4xl mb-12" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            Today&apos;s structure
          </h2>
          <DailyBody />
        </motion.div>
      </section>

      {/* Musculoskeletal regions */}
      <section className="px-6 py-24" style={{ backgroundColor: "#161310" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="uppercase tracking-[0.3em] text-xs mb-3" style={{ color: "#C4724A" }}>
              Musculoskeletal
            </p>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
              Explore by region
            </h2>
            <p className="mb-12 max-w-lg" style={{ color: "#7A6E64", fontWeight: 300 }}>
              Tap into any area of the body for a detailed breakdown of muscles, bones, tendons, and what they actually do for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {regions.map((region, i) => (
              <motion.div
                key={region.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={region.href}
                  className="block p-5 border transition-all duration-300 group"
                  style={{ borderColor: "#2A2420", backgroundColor: "#0D0B09" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#C4724A55";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#1E1A16";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2A2420";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#0D0B09";
                  }}
                >
                  <span
                    className="text-sm block"
                    style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400, color: "#F0E8D8" }}
                  >
                    {region.label}
                  </span>
                  <span
                    className="text-xs mt-2 block transition-colors duration-300"
                    style={{ color: "#3A342E" }}
                  >
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Body Systems */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase tracking-[0.3em] text-xs mb-3" style={{ color: "#D4A853" }}>
            Systems
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}>
            The 12 body systems
          </h2>
          <p className="mb-12 max-w-lg" style={{ color: "#7A6E64", fontWeight: 300 }}>
            Every system working in concert — from the breath you just took to the heartbeat underneath it.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px" style={{ backgroundColor: "#2A2420" }}>
          {systems.map((system, i) => (
            <motion.div
              key={system}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
            >
              <Link
                href={`/systems/${system.toLowerCase()}`}
                className="block p-6 transition-all duration-300"
                style={{ backgroundColor: "#0D0B09" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#161310")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0D0B09")}
              >
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400, color: "#F0E8D8" }}
                >
                  {system}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Form */}
      <section className="px-6 py-24" style={{ backgroundColor: "#161310" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl mb-8 leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400, fontStyle: "italic" }}
            >
              &ldquo;Most anatomy apps are built for doctors. This one is built for you.&rdquo;
            </h2>
            <p className="text-base leading-relaxed mb-12" style={{ color: "#7A6E64", fontWeight: 300 }}>
              Form translates the complexity of the human body into language that actually makes sense —
              connecting what&apos;s inside you to how you move, feel, and live.
            </p>
            <Link
              href="/explore"
              className="inline-block px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 border"
              style={{
                borderColor: "#D4A853",
                color: "#D4A853",
                fontFamily: "var(--font-dm-sans)",
                letterSpacing: "0.15em",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#D4A85322";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Start Exploring
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-12 border-t text-center"
        style={{ borderColor: "#2A2420" }}
      >
        <p
          className="text-sm"
          style={{ color: "#3A342E", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
        >
          Form — Know your body.
        </p>
      </footer>
    </div>
  );
}
