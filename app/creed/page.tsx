import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import CreedClient from "@/components/CreedClient";

export const metadata: Metadata = {
  title: "Creed — Distill Your Truth",
  description:
    "Write a thought. The engine distills it into your personal creed — your wound, your desire, your contradiction. No advice. No comfort. Only declaration.",
  keywords: [
    "personal creed",
    "creed generator",
    "anonymous creed",
    "truth engine",
    "self declaration",
    "raw honesty",
    "creed writer",
    "anonymous truth",
  ],
  alternates: { canonical: "https://unmaskedwords.com/creed" },
  openGraph: {
    title: "Creed — Distill Your Truth | UnmaskedWords",
    description: "Write a thought. The engine distills it into your creed — your wound, your desire, your contradiction. No advice. No comfort. Only declaration.",
    url: "https://unmaskedwords.com/creed",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UnmaskedWords Creed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creed — Distill Your Truth | UnmaskedWords",
    description: "Write a thought. The engine distills it into your creed — your wound, your desire, your contradiction. No advice. No comfort. Only declaration.",
    images: ["/og-image.png"],
  },
};

export default function CreedPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <SiteHeader
        right={
          <Link
            href="/"
            className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
          >
            ← feed
          </Link>
        }
      />

      {/* Hero */}
      <section className="border-b border-[#111111] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // creed
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 8vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            DISTILL<br />
            <span className="text-[#ff3c00]">
              YOUR TRUTH<span className="cursor-blink">|</span>
            </span>
          </h1>
          <p className="font-mono text-[#888888] text-sm leading-relaxed max-w-sm mb-5">
            Write a thought. Any thought.<br />
            The engine reads the wound beneath it,<br />
            the desire behind it,<br />
            and returns your creed.
          </p>
          <div className="flex flex-col gap-1.5">
            <p aria-hidden="true" className="font-mono text-[#2e2e2e] text-[10px] tracking-widest uppercase">
              NO ADVICE. NO COMFORT. ONLY DECLARATION.
            </p>
            <p aria-hidden="true" className="font-mono text-[#1e1e1e] text-[10px] tracking-widest uppercase">
              NOTHING IS STORED. YOUR CREED BELONGS ONLY TO YOU.
            </p>
          </div>
        </div>
      </section>

      {/* Engine */}
      <section className="flex-1 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <CreedClient />
        </div>
      </section>

      <footer className="border-t border-[#111111] px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <p aria-hidden="true" className="font-mono text-[#1e1e1e] text-xs text-center tracking-widest">
            NO ACCOUNTS. NO TRACKING. NO FILTERS.
          </p>
        </div>
      </footer>
    </main>
  );
}
