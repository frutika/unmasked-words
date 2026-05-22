"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavLogo from "@/components/NavLogo";

interface SiteHeaderProps {
  subtitle?: string;
  right?: React.ReactNode;
}

export default function SiteHeader({ subtitle, right }: SiteHeaderProps) {
  const [ehs, setEhs] = useState<string | null>(null);
  const [stale, setStale] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchHashrate = () =>
      fetch("/api/hashrate")
        .then((r) => r.json())
        .then((d) => {
          if (!mounted) return;
          if (d.ehs) { setEhs(d.ehs); setStale(false); }
          else setStale(true);
        })
        .catch(() => { if (mounted) setStale(true); });

    fetchHashrate();
    const id = setInterval(fetchHashrate, 60_000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#1a1a1a] bg-[#0a0a0a] px-6 py-4">
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">

        {/* Left: NavLogo (its own Link) + title (separate Link) */}
        <div className="flex items-center gap-3 min-w-0">
          <NavLogo />
          <Link href="/" className="min-w-0 block group">
            <div
              className="font-mono font-black text-[#f0f0f0] tracking-tight leading-none"
              style={{ fontSize: "clamp(1rem, 3.5vw, 1.6rem)" }}
            >
              UNMASKED<span className="text-[#ff3c00]">WORDS</span>
            </div>
            {subtitle && (
              <p className="font-mono text-[#888888] text-[10px] mt-0.5 tracking-widest uppercase hidden sm:block">
                {subtitle}
              </p>
            )}
          </Link>
        </div>

        {/* Right: page-specific content + BTC */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/anonymous-thoughts"
            className="font-mono text-[#888888] text-[10px] tracking-widest uppercase hover:text-[#ff3c00] transition-colors hidden sm:inline"
          >
            topics
          </Link>
          {right}
          {(ehs !== null || stale) && (
            <div className="flex items-center gap-1.5 border-l border-[#1a1a1a] pl-3">
              <span className="font-mono text-[#888888] text-[10px] tracking-widest hidden sm:inline">// btc</span>
              {!stale && (
                <span
                  className="inline-block w-1 h-1 rounded-full bg-[#f0f0f0] flex-shrink-0"
                  style={{ animation: "mining-pulse 3s ease-in-out infinite" }}
                />
              )}
              <span className={`font-mono text-[10px] tabular-nums ${stale ? "text-[#888888]" : "text-[#f0f0f0]"}`}>
                <span className="hidden sm:inline">{stale ? "-- EH/s" : `${ehs} EH/s`}</span>
                <span className="sm:hidden">{stale ? "--" : ehs}</span>
              </span>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
