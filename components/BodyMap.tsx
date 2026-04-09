"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Region {
  slug: string;
  label: string;
  type: "explore" | "system";
  shape: "ellipse" | "rect" | "path";
  props: Record<string, number | string>;
}

const regions: Region[] = [
  // Head & Neck
  {
    slug: "head-neck", label: "Head & Neck", type: "explore",
    shape: "ellipse", props: { cx: 100, cy: 32, rx: 26, ry: 30 },
  },
  {
    slug: "head-neck", label: "Head & Neck", type: "explore",
    shape: "rect", props: { x: 89, y: 61, width: 22, height: 22, rx: 4 },
  },
  // Shoulders
  {
    slug: "shoulders", label: "Shoulders", type: "explore",
    shape: "ellipse", props: { cx: 58, cy: 84, rx: 24, ry: 16 },
  },
  {
    slug: "shoulders", label: "Shoulders", type: "explore",
    shape: "ellipse", props: { cx: 142, cy: 84, rx: 24, ry: 16 },
  },
  // Back (torso)
  {
    slug: "back", label: "Back", type: "explore",
    shape: "rect", props: { x: 72, y: 80, width: 56, height: 86, rx: 6 },
  },
  // Hips & Groin
  {
    slug: "hips-groin", label: "Hips & Groin", type: "explore",
    shape: "rect", props: { x: 68, y: 166, width: 64, height: 46, rx: 6 },
  },
  // Upper Arms
  {
    slug: "upper-arm", label: "Upper Arm", type: "explore",
    shape: "rect", props: { x: 34, y: 84, width: 22, height: 62, rx: 10 },
  },
  {
    slug: "upper-arm", label: "Upper Arm", type: "explore",
    shape: "rect", props: { x: 144, y: 84, width: 22, height: 62, rx: 10 },
  },
  // Forearms
  {
    slug: "forearm", label: "Forearm", type: "explore",
    shape: "rect", props: { x: 26, y: 150, width: 20, height: 54, rx: 10 },
  },
  {
    slug: "forearm", label: "Forearm", type: "explore",
    shape: "rect", props: { x: 154, y: 150, width: 20, height: 54, rx: 10 },
  },
  // Wrist & Hand
  {
    slug: "wrist-hand", label: "Wrist & Hand", type: "explore",
    shape: "rect", props: { x: 20, y: 207, width: 22, height: 42, rx: 8 },
  },
  {
    slug: "wrist-hand", label: "Wrist & Hand", type: "explore",
    shape: "rect", props: { x: 158, y: 207, width: 22, height: 42, rx: 8 },
  },
  // Thighs
  {
    slug: "thigh", label: "Thigh", type: "explore",
    shape: "rect", props: { x: 72, y: 212, width: 27, height: 82, rx: 8 },
  },
  {
    slug: "thigh", label: "Thigh", type: "explore",
    shape: "rect", props: { x: 101, y: 212, width: 27, height: 82, rx: 8 },
  },
  // Lower Legs
  {
    slug: "lower-leg", label: "Lower Leg", type: "explore",
    shape: "rect", props: { x: 74, y: 297, width: 23, height: 76, rx: 8 },
  },
  {
    slug: "lower-leg", label: "Lower Leg", type: "explore",
    shape: "rect", props: { x: 103, y: 297, width: 23, height: 76, rx: 8 },
  },
  // Ankle & Foot
  {
    slug: "ankle-foot", label: "Ankle & Foot", type: "explore",
    shape: "ellipse", props: { cx: 85, cy: 388, rx: 19, ry: 14 },
  },
  {
    slug: "ankle-foot", label: "Ankle & Foot", type: "explore",
    shape: "ellipse", props: { cx: 115, cy: 388, rx: 19, ry: 14 },
  },
];

// Group by slug for tooltip/highlight
const regionGroups: Record<string, Region[]> = {};
for (const r of regions) {
  if (!regionGroups[r.slug]) regionGroups[r.slug] = [];
  regionGroups[r.slug].push(r);
}

interface BodyMapProps {
  highlightedSlugs?: string[];
}

export default function BodyMap({ highlightedSlugs = [] }: BodyMapProps) {
  const router = useRouter();
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const activeSlug = hoveredSlug;

  function handleClick(slug: string, type: string) {
    const path = type === "explore" ? `/explore/${slug}` : `/systems/${slug}`;
    router.push(path);
  }

  function getFill(slug: string) {
    if (highlightedSlugs.includes(slug)) return "#C4724A";
    if (activeSlug === slug) return "#C4724A66";
    return "#2A241E";
  }

  function getStroke(slug: string) {
    if (highlightedSlugs.includes(slug)) return "#C4724A";
    if (activeSlug === slug) return "#C4724A";
    return "#3A342E";
  }

  const activeLabel = activeSlug
    ? regionGroups[activeSlug]?.[0]?.label
    : null;

  return (
    <div className="flex flex-col items-center select-none">
      <div
        className="relative"
        style={{
          width: "200px",
          height: "410px",
        }}
      >
        <svg
          viewBox="0 0 200 410"
          width="200"
          height="410"
          style={{ overflow: "visible" }}
        >
          {/* Body outline — decorative, non-interactive */}
          <ellipse cx="100" cy="32" rx="30" ry="34" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="87" y="60" width="26" height="26" rx="4" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <ellipse cx="56" cy="84" rx="27" ry="18" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <ellipse cx="144" cy="84" rx="27" ry="18" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="70" y="78" width="60" height="90" rx="8" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="32" y="82" width="26" height="66" rx="12" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="142" y="82" width="26" height="66" rx="12" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="24" y="146" width="22" height="58" rx="10" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="154" y="146" width="22" height="58" rx="10" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="18" y="202" width="24" height="46" rx="10" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="158" y="202" width="24" height="46" rx="10" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="66" y="164" width="68" height="50" rx="8" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="70" y="210" width="29" height="86" rx="12" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="101" y="210" width="29" height="86" rx="12" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="72" y="294" width="25" height="80" rx="10" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <rect x="103" y="294" width="25" height="80" rx="10" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <ellipse cx="84" cy="388" rx="22" ry="16" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />
          <ellipse cx="116" cy="388" rx="22" ry="16" fill="#1A1612" stroke="#2A241E" strokeWidth="1" />

          {/* Interactive hit areas */}
          {regions.map((region, i) => {
            const fill = getFill(region.slug);
            const stroke = getStroke(region.slug);
            const commonProps = {
              key: i,
              fill,
              stroke,
              strokeWidth: highlightedSlugs.includes(region.slug) ? 1.5 : 0.5,
              fillOpacity: 0.7,
              style: { cursor: "pointer", transition: "all 0.2s ease" },
              onMouseEnter: () => setHoveredSlug(region.slug),
              onMouseLeave: () => setHoveredSlug(null),
              onClick: () => handleClick(region.slug, region.type),
            };

            if (region.shape === "ellipse") {
              const { cx, cy, rx, ry } = region.props as { cx: number; cy: number; rx: number; ry: number };
              return <ellipse {...commonProps} cx={cx} cy={cy} rx={rx} ry={ry} />;
            }
            if (region.shape === "rect") {
              const { x, y, width, height, rx: rx2 } = region.props as { x: number; y: number; width: number; height: number; rx: number };
              return <rect {...commonProps} x={x} y={y} width={width} height={height} rx={rx2} />;
            }
            return null;
          })}
        </svg>
      </div>

      {/* Tooltip */}
      <div
        className="mt-4 text-center transition-all duration-200"
        style={{ minHeight: "24px" }}
      >
        {activeLabel ? (
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "#C4724A", fontFamily: "var(--font-dm-sans)" }}
          >
            {activeLabel} →
          </span>
        ) : (
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "#3A342E", fontFamily: "var(--font-dm-sans)" }}
          >
            Tap a region
          </span>
        )}
      </div>
    </div>
  );
}
