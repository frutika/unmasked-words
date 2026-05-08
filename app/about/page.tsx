import type { Metadata } from "next";
import Link from "next/link";
import NavLogo from "@/components/NavLogo";
import MiningBadge from "@/components/MiningBadge";

export const metadata: Metadata = {
  title: "The Manifesto | Unmasked Words",
  description:
    "Radical honesty. No profiles. No filters. No masks. Read the Raw Protocol — the founding manifesto of UnmaskedWords.",
  openGraph: {
    title: "The Manifesto | Unmasked Words",
    description:
      "Take off the mask. Speak the truth. Even if your voice shakes.",
    url: "https://unmaskedwords.com/about",
    siteName: "UnmaskedWords",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Manifesto | Unmasked Words",
    description: "Take off the mask. Speak the truth. Even if your voice shakes.",
  },
};

const sections = [
  {
    body: "In a world of synthetic perfection and algorithmic filters, the truth has become a luxury.",
  },
  {
    body: "We wear masks to fit in, to be liked, to survive.\nBut masks are heavy.",
  },
  {
    body: "Unmasked Words is not a social network.\nIt is a digital void.",
  },
  {
    body: "Here, there are no profiles to polish, no followers to impress, and no filters to hide behind.",
  },
  {
    heading: "This platform is powered by the same decentralization that fuels Bitcoin.",
    body: null,
  },
  {
    label: "Anonymity as a Shield",
    body: "Your identity belongs to you; your words belong to the world.",
  },
  {
    label: "Raw Honesty",
    body: "If it's not real, it doesn't belong here.",
  },
  {
    label: "Decentralized Truth",
    body: "Hosted on independent infrastructure, fueled by mining, governed by transparency.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Nav */}
      <header className="border-b border-[#1a1a1a] px-6 py-5">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <NavLogo />
          <Link
            href="/"
            className="font-mono text-[#555555] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
          >
            ← feed
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl text-center">

          {/* Title */}
          <p className="font-mono text-[#555555] text-xs tracking-widest uppercase mb-6">
            // the raw protocol
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] tracking-tight leading-none mb-20 cursor-blink-title"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", letterSpacing: "-0.03em" }}
          >
            MANI<span className="cursor-blink">|</span>FESTO
          </h1>

          {/* Manifesto sections */}
          <div className="flex flex-col gap-12">
            {sections.map((s, i) => (
              <div key={i}>
                {s.heading && (
                  <p className="font-mono text-[#f0f0f0] text-base leading-relaxed">
                    {s.heading}
                  </p>
                )}
                {s.label && (
                  <p className="font-mono text-[#ff3c00] text-xs tracking-widest uppercase mb-2">
                    — {s.label}
                  </p>
                )}
                {s.body && (
                  <p className="font-mono text-[#aaaaaa] text-base leading-relaxed whitespace-pre-line">
                    {s.body}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Closing line */}
          <div className="mt-16 mb-20">
            <p className="font-mono font-black text-[#f0f0f0] text-xl leading-relaxed">
              Take off the mask.<br />
              Speak the truth.<br />
              <span className="text-[#ff3c00]">Even if your voice shakes.</span>
            </p>
            <p className="font-mono text-[#333333] text-2xl mt-6 tracking-widest">
              [<span className="cursor-blink text-[#ff3c00]">|</span>]
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/"
            className="inline-block font-mono font-bold text-sm tracking-widest uppercase px-10 py-4 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
          >
            ENTER THE VOID
          </Link>

          {/* Mining badge */}
          <div className="mt-10">
            <MiningBadge />
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#444444] text-xs text-center tracking-widest">
            NO ACCOUNTS. NO TRACKING. NO FILTERS.
          </p>
        </div>
      </footer>
    </main>
  );
}
