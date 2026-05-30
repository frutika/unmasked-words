"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLogo from "@/components/NavLogo";
import { SUPER_TOPICS } from "@/lib/topics";

interface SiteHeaderProps {
  subtitle?: string;
  right?: React.ReactNode;
}

export default function SiteHeader({ subtitle, right }: SiteHeaderProps) {
  const [ehs, setEhs] = useState<string | null>(null);
  const [stale, setStale] = useState(false);
  const pathname = usePathname();

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

  const activeSuper = SUPER_TOPICS.find(
    (st) => pathname === `/anonymous-thoughts/${st.slug.toLowerCase()}`
  )?.slug;

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a] border-b border-[#1a1a1a]">

      {/* Main row */}
      <div className="px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">

          <div className="flex items-center gap-3 min-w-0">
            <NavLogo />
            <Link href="/" className="min-w-0 block">
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

          <div className="flex items-center gap-3 flex-shrink-0">
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
      </div>

      {/* Super topics nav strip */}
      <div className="border-t border-[#111111] overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-0 px-6 w-max min-w-full">
          {SUPER_TOPICS.map((st, i) => {
            const slug = st.slug.toLowerCase();
            const href = `/anonymous-thoughts/${slug}`;
            const active = activeSuper === st.slug;
            return (
              <Link
                key={st.slug}
                href={href}
                className={`
                  font-mono text-[10px] tracking-widest uppercase py-2.5 px-3 whitespace-nowrap transition-colors duration-100 border-r border-[#111111] flex-shrink-0
                  ${i === 0 ? "" : ""}
                  ${active
                    ? "text-[#ff3c00] bg-[#0f0f0f]"
                    : "text-[#444444] hover:text-[#f0f0f0]"
                  }
                `}
              >
                {st.slug}
              </Link>
            );
          })}
          <Link
            href="/anonymous-thoughts"
            className={`font-mono text-[10px] tracking-widest uppercase py-2.5 px-3 whitespace-nowrap transition-colors duration-100 flex-shrink-0 ${
              pathname === "/anonymous-thoughts"
                ? "text-[#ff3c00] bg-[#0f0f0f]"
                : "text-[#444444] hover:text-[#f0f0f0]"
            }`}
          >
            ALL
          </Link>
        </div>
      </div>

    </header>
  );
}
