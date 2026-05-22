import type { Metadata } from "next";
import Link from "next/link";
import MiningBadge from "@/components/MiningBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Raw Protocol — Manifesto",
  description:
    "Radical honesty. No profiles. No filters. No masks. Read the Raw Protocol — the founding manifesto of UnmaskedWords.",
  keywords: ["manifesto", "radical honesty", "anonymity", "raw protocol", "no filters", "unmasked", "anonymous writing", "brutalist web", "digital privacy", "free speech online"],
  alternates: { canonical: "https://unmaskedwords.com/about" },
  openGraph: {
    title: "The Raw Protocol — Manifesto | UnmaskedWords",
    description:
      "Take off the mask. Speak the truth. Even if your voice shakes.",
    url: "https://unmaskedwords.com/about",
    siteName: "UnmaskedWords",
    type: "article",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Manifesto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Raw Protocol — Manifesto | UnmaskedWords",
    description: "Take off the mask. Speak the truth. Even if your voice shakes. Read the Raw Protocol — the founding manifesto of UnmaskedWords.",
    images: ["/og-image.png"],
  },
};

const sections = [
  {
    num: "01",
    body: "In a world of synthetic perfection and algorithmic filters,\nthe truth has become rare — dressed up, toned down, made acceptable.",
  },
  {
    num: "02",
    body: "We wear masks to fit in. To be liked. To survive.\nThe mask becomes the face.\nThe face becomes the lie.",
  },
  {
    num: "03",
    body: "Unmasked Words is not a social network.\nIt is a confessional without absolution.\nA void that holds your words without judgment.",
  },
  {
    num: "04",
    body: "No profiles to polish. No followers to count.\nNo algorithm deciding if your truth deserves to be heard.\nEvery word floats in the same darkness.",
  },
  {
    num: "05",
    heading: "This platform runs on decentralized infrastructure — the same principles as Bitcoin.",
    body: "No single owner. No single point of failure. No single censor.",
  },
  {
    num: "06",
    label: "Anonymity as Shield",
    body: "Your identity belongs to you.\nYour words belong to the world.",
  },
  {
    num: "07",
    label: "Raw Honesty",
    body: "If it isn't real, it doesn't belong here.\nThe void rejects performance.",
  },
  {
    num: "08",
    label: "Decentralized Truth",
    body: "No server owns your confession.\nNo algorithm decides its worth.\nJust the words — free, equal, permanent.",
  },
];

export default function AboutPage() {
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

      {/* Content */}
      <article className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl text-center">

          {/* Title */}
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // the raw protocol
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] tracking-tight leading-none mb-20 cursor-blink-title"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", letterSpacing: "-0.03em" }}
          >
            MANI<span className="cursor-blink">|</span>FESTO
          </h1>

          {/* Manifesto sections */}
          <div className="flex flex-col gap-0">
            {sections.map((s, i) => (
              <div key={i} className="text-left border-t border-[#1a1a1a] pt-8">
                <p className="font-mono text-[#888888] text-[10px] tracking-widest mb-4">
                  [{s.num}]
                </p>
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
            <p className="font-mono text-[#888888] text-2xl mt-6 tracking-widest">
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
      <SiteFooter />
    </main>
  );
}
