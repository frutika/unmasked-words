"use client";

import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center select-none group"
      aria-label="UnmaskedWords — home"
    >
      <span
        className="font-mono font-bold text-[#f0f0f0] tracking-tight"
        style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", letterSpacing: "-0.02em" }}
      >
        <span className="text-[#f0f0f0] group-hover:text-[#ff3c00] transition-colors duration-150">[</span>
        <span className="inline-block w-[0.55em] text-center text-[#ff3c00] cursor-blink">|</span>
        <span className="text-[#f0f0f0] group-hover:text-[#ff3c00] transition-colors duration-150">]</span>
      </span>
    </Link>
  );
}
