"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Rotates daily based on date
const dailyStructures = [
  {
    name: "The Trapezius",
    region: "Back & Neck",
    href: "/explore/back",
    tagline: "The muscle carrying more than you know.",
    description:
      "A large, diamond-shaped muscle spanning your upper back and neck. It controls how you shrug, rotate your head, and pull your shoulder blades together. Most of us hold more tension here than anywhere else — it's where stress lives in the body.",
    relevance: "Feel it: roll your shoulders back. That squeeze between your shoulder blades? That's your trapezius doing its job.",
    color: "#C4724A",
  },
  {
    name: "The Diaphragm",
    region: "Respiratory System",
    href: "/systems/respiratory",
    tagline: "Your most essential muscle.",
    description:
      "A dome-shaped muscle sitting at the base of your ribcage. Every breath you take — consciously or not — is driven by this muscle contracting and releasing. It's also deeply connected to your nervous system, which is why deep breathing actually calms you down.",
    relevance: "Feel it: take a slow breath into your belly, not your chest. That expansion? The diaphragm dropping to create space.",
    color: "#7A8C6E",
  },
  {
    name: "The Achilles Tendon",
    region: "Ankle & Foot",
    href: "/explore/ankle-foot",
    tagline: "The strongest tendon in your body.",
    description:
      "Connecting your calf muscles to your heel bone, the Achilles tendon transfers the force of every step, jump, and push-off. It bears up to 8 times your body weight when you run. Despite its strength, it's one of the most commonly injured structures in the body.",
    relevance: "Feel it: stand on your tiptoes. The cord of tension running up the back of your ankle — that's it.",
    color: "#D4A853",
  },
  {
    name: "The Rotator Cuff",
    region: "Shoulders",
    href: "/explore/shoulders",
    tagline: "Four muscles. One shoulder. Infinite complexity.",
    description:
      "Not a single muscle but a group of four — supraspinatus, infraspinatus, teres minor, and subscapularis. Together they keep your shoulder joint stable as it moves through one of the widest ranges of motion of any joint in your body.",
    relevance: "Feel it: slowly rotate your arm in a full circle. Everything keeping that movement smooth and stable is your rotator cuff.",
    color: "#C4724A",
  },
  {
    name: "The Iliotibial Band",
    region: "Thigh",
    href: "/explore/thigh",
    tagline: "The source of more knee pain than people realize.",
    description:
      "A thick band of connective tissue running along the outside of your thigh from your hip to just below your knee. It doesn't stretch much — which is why tightness here can pull on the knee and cause pain. Common in runners and people who sit for long periods.",
    relevance: "Feel it: stand and press your fingertips into the outer side of your thigh. That firm, rope-like band is the IT band.",
    color: "#7A8C6E",
  },
  {
    name: "The Vagus Nerve",
    region: "Nervous System",
    href: "/systems/nervous",
    tagline: "Your body's internal communication highway.",
    description:
      "The longest cranial nerve in your body, running from your brainstem all the way to your gut. It regulates heart rate, digestion, breathing, and the relaxation response. When people talk about the 'gut-brain connection,' the vagus nerve is the literal pathway.",
    relevance: "Feel it: hum softly or gargle water. Vibration in your throat stimulates the vagus nerve — one reason humming feels calming.",
    color: "#D4A853",
  },
  {
    name: "The Psoas",
    region: "Hips & Groin",
    href: "/explore/hips-groin",
    tagline: "The muscle at the center of everything.",
    description:
      "Deep in your core, the psoas connects your lumbar spine to your femur (thigh bone). It's your primary hip flexor — essential for walking, running, and getting up from a chair. Hours of sitting shorten it, which tilts the pelvis forward and contributes to lower back pain.",
    relevance: "Feel it: lie on your back and pull one knee to your chest. The deep pull at the front of the opposite hip — that's the psoas stretching.",
    color: "#C4724A",
  },
];

function getDailyIndex() {
  const start = new Date("2026-01-01").getTime();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.floor((today.getTime() - start) / (1000 * 60 * 60 * 24));
  return days % dailyStructures.length;
}

export default function DailyBody() {
  const structure = dailyStructures[getDailyIndex()];

  return (
    <motion.div
      className="border p-8 md:p-12"
      style={{ borderColor: "#2A2420", backgroundColor: "#161310" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:gap-16">
        <div className="flex-1">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: structure.color, fontFamily: "var(--font-dm-sans)" }}
          >
            {structure.region}
          </p>
          <h3
            className="text-4xl md:text-5xl mb-3"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
          >
            {structure.name}
          </h3>
          <p
            className="text-base italic mb-6"
            style={{ color: "#7A6E64", fontFamily: "var(--font-playfair)" }}
          >
            {structure.tagline}
          </p>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "#A89880", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          >
            {structure.description}
          </p>
          <div
            className="p-4 border-l-2 mb-8"
            style={{ borderColor: structure.color, backgroundColor: "#0D0B09" }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#7A8C6E", fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
            >
              {structure.relevance}
            </p>
          </div>
          <Link
            href={structure.href}
            className="inline-block text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ color: structure.color, fontFamily: "var(--font-dm-sans)" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F0E8D8")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = structure.color)}
          >
            Explore {structure.region} →
          </Link>
        </div>

        {/* Visual accent */}
        <div className="hidden md:flex flex-col items-center justify-center mt-8 md:mt-0">
          <div
            className="rounded-full border flex items-center justify-center"
            style={{
              width: "180px",
              height: "180px",
              borderColor: "#2A2420",
            }}
          >
            <div
              className="rounded-full border flex items-center justify-center"
              style={{
                width: "120px",
                height: "120px",
                borderColor: structure.color + "44",
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: structure.color + "22",
                  border: `1px solid ${structure.color}66`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
