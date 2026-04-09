"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "#0D0B09F0" : "transparent",
        borderBottom: scrolled ? "1px solid #2A2420" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <Link
        href="/"
        className="text-lg tracking-[0.15em] uppercase"
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 400,
          color: "#F0E8D8",
          letterSpacing: "0.2em",
        }}
      >
        Form
      </Link>

      <div className="flex items-center gap-8">
        <Link
          href="/map"
          className="text-xs uppercase tracking-widest transition-colors duration-200"
          style={{ color: "#7A6E64", letterSpacing: "0.15em" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F0E8D8")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#7A6E64")}
        >
          Map
        </Link>
        <Link
          href="/explore"
          className="text-xs uppercase tracking-widest transition-colors duration-200"
          style={{ color: "#7A6E64", letterSpacing: "0.15em" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F0E8D8")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#7A6E64")}
        >
          Explore
        </Link>
        <Link
          href="/systems"
          className="text-xs uppercase tracking-widest transition-colors duration-200"
          style={{ color: "#7A6E64", letterSpacing: "0.15em" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F0E8D8")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#7A6E64")}
        >
          Systems
        </Link>
      </div>
    </nav>
  );
}
