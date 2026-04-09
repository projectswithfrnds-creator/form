"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface HitZone {
  slug: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Non-overlapping hit zones across a 200x420 viewBox
const hitZones: HitZone[] = [
  { slug: "head-neck",   label: "Head & Neck",   x: 72,  y: 0,   width: 56,  height: 72  },
  { slug: "shoulders",   label: "Shoulders",     x: 0,   y: 72,  width: 72,  height: 72  },
  { slug: "shoulders",   label: "Shoulders",     x: 128, y: 72,  width: 72,  height: 72  },
  { slug: "back",        label: "Back",          x: 72,  y: 72,  width: 56,  height: 96  },
  { slug: "upper-arm",   label: "Upper Arm",     x: 28,  y: 80,  width: 44,  height: 68  },
  { slug: "upper-arm",   label: "Upper Arm",     x: 128, y: 80,  width: 44,  height: 68  },
  { slug: "hips-groin",  label: "Hips & Groin",  x: 68,  y: 168, width: 64,  height: 52  },
  { slug: "forearm",     label: "Forearm",       x: 18,  y: 148, width: 44,  height: 64  },
  { slug: "forearm",     label: "Forearm",       x: 138, y: 148, width: 44,  height: 64  },
  { slug: "wrist-hand",  label: "Wrist & Hand",  x: 12,  y: 212, width: 46,  height: 50  },
  { slug: "wrist-hand",  label: "Wrist & Hand",  x: 142, y: 212, width: 46,  height: 50  },
  { slug: "thigh",       label: "Thigh",         x: 68,  y: 220, width: 30,  height: 84  },
  { slug: "thigh",       label: "Thigh",         x: 102, y: 220, width: 30,  height: 84  },
  { slug: "lower-leg",   label: "Lower Leg",     x: 68,  y: 304, width: 30,  height: 80  },
  { slug: "lower-leg",   label: "Lower Leg",     x: 102, y: 304, width: 30,  height: 80  },
  { slug: "ankle-foot",  label: "Ankle & Foot",  x: 56,  y: 384, width: 46,  height: 36  },
  { slug: "ankle-foot",  label: "Ankle & Foot",  x: 98,  y: 384, width: 46,  height: 36  },
];

interface BodyMapProps {
  highlightedSlugs?: string[];
}

export default function BodyMap({ highlightedSlugs = [] }: BodyMapProps) {
  const router = useRouter();
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  function handleClick(slug: string) {
    router.push(`/explore/${slug}`);
  }

  function getFill(slug: string) {
    if (highlightedSlugs.includes(slug)) return "#C4724A44";
    if (hoveredSlug === slug) return "#C4724A33";
    return "transparent";
  }

  function getStroke(slug: string) {
    if (highlightedSlugs.includes(slug)) return "#C4724A";
    if (hoveredSlug === slug) return "#C4724A88";
    return "transparent";
  }

  const activeLabel = hoveredSlug
    ? hitZones.find(z => z.slug === hoveredSlug)?.label
    : null;

  return (
    <div className="flex flex-col items-center select-none">
      <div style={{ width: "200px" }}>
        <svg viewBox="0 0 200 420" width="200" height="420">

          {/* ── Decorative body outline ── */}
          {/* Head */}
          <ellipse cx="100" cy="33" rx="27" ry="30" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Neck */}
          <rect x="90" y="62" width="20" height="22" rx="3" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Left shoulder */}
          <ellipse cx="55" cy="90" rx="30" ry="20" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Right shoulder */}
          <ellipse cx="145" cy="90" rx="30" ry="20" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Torso */}
          <rect x="72" y="72" width="56" height="96" rx="6" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Left upper arm */}
          <rect x="34" y="84" width="22" height="68" rx="10" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Right upper arm */}
          <rect x="144" y="84" width="22" height="68" rx="10" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Left forearm */}
          <rect x="26" y="154" width="20" height="60" rx="10" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Right forearm */}
          <rect x="154" y="154" width="20" height="60" rx="10" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Left hand */}
          <ellipse cx="35" cy="230" rx="16" ry="20" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Right hand */}
          <ellipse cx="165" cy="230" rx="16" ry="20" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Hips */}
          <rect x="68" y="168" width="64" height="52" rx="8" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Left thigh */}
          <rect x="70" y="218" width="28" height="86" rx="10" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Right thigh */}
          <rect x="102" y="218" width="28" height="86" rx="10" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Left lower leg */}
          <rect x="72" y="306" width="24" height="78" rx="10" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Right lower leg */}
          <rect x="104" y="306" width="24" height="78" rx="10" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Left foot */}
          <ellipse cx="82" cy="394" rx="20" ry="14" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />
          {/* Right foot */}
          <ellipse cx="118" cy="394" rx="20" ry="14" fill="#1E1A16" stroke="#3A342E" strokeWidth="1" />

          {/* ── Highlight overlays (drawn over body) ── */}
          {hitZones.map((zone, i) => (
            <rect
              key={i}
              x={zone.x}
              y={zone.y}
              width={zone.width}
              height={zone.height}
              rx="6"
              fill={getFill(zone.slug)}
              stroke={getStroke(zone.slug)}
              strokeWidth="1"
              style={{
                cursor: "pointer",
                transition: "fill 0.15s ease, stroke 0.15s ease",
              }}
              onMouseEnter={() => setHoveredSlug(zone.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              onClick={() => handleClick(zone.slug)}
            />
          ))}
        </svg>
      </div>

      {/* Label */}
      <div className="mt-3 text-center" style={{ minHeight: "20px" }}>
        {activeLabel ? (
          <span className="text-xs uppercase tracking-widest" style={{ color: "#C4724A", fontFamily: "var(--font-dm-sans)" }}>
            {activeLabel} →
          </span>
        ) : (
          <span className="text-xs uppercase tracking-widest" style={{ color: "#2A2420", fontFamily: "var(--font-dm-sans)" }}>
            Tap a region
          </span>
        )}
      </div>
    </div>
  );
}
