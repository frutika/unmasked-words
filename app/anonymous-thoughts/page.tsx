import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { TOPICS } from "@/lib/topics";
import MiningBadge from "@/components/MiningBadge";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Anonymous Thoughts — Browse by Topic",
  description:
    "Browse anonymous thoughts by topic. Fear, love, regret, loneliness, anger, grief and more — real confessions from strangers, no account required.",
  keywords: [
    "anonymous thoughts by topic",
    "anonymous confessions by category",
    "browse anonymous thoughts",
    "topics for anonymous sharing",
  ],
  alternates: { canonical: "https://unmaskedwords.com/anonymous-thoughts" },
  openGraph: {
    title: "Anonymous Thoughts — Browse by Topic | UnmaskedWords",
    description:
      "Browse anonymous thoughts by topic. Fear, love, regret, loneliness and more. Real confessions, no account required.",
    url: "https://unmaskedwords.com/anonymous-thoughts",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords — Anonymous Thoughts by Topic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anonymous Thoughts — Browse by Topic | UnmaskedWords",
    description: "Browse anonymous thoughts by topic. Fear, love, regret, loneliness and more.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Anonymous Thoughts — Browse by Topic",
  description: "Browse anonymous thoughts by topic on UnmaskedWords.",
  url: "https://unmaskedwords.com/anonymous-thoughts",
  numberOfItems: TOPICS.length,
  itemListElement: TOPICS.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Anonymous Thoughts About ${t.title}`,
    description: t.description,
    url: `https://unmaskedwords.com/anonymous-thoughts/${t.slug}`,
  })),
};

export default function AnonymousThoughtsIndexPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

      <section className="border-b border-[#1a1a1a] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // anonymous thoughts
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-4"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            CHOOSE A<br />
            <span className="text-[#ff3c00]">TOPIC</span>
          </h1>
          <p className="font-mono text-[#888888] text-sm leading-relaxed max-w-sm">
            Every topic is a void built around a single human truth.<br />
            Enter. Read. Post anonymously. Disappear.
          </p>
        </div>
      </section>

      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-0">
            {TOPICS.map((topic) => (
              <Link
                key={topic.slug}
                href={`/anonymous-thoughts/${topic.slug}`}
                className="group border-b border-[#1a1a1a] py-4 flex items-start justify-between gap-4 -mx-2 px-2 hover:bg-[#0d0d0d] transition-colors duration-100"
              >
                <div className="min-w-0">
                  <span className="font-mono font-black text-[#f0f0f0] text-sm tracking-tight group-hover:text-[#ff3c00] transition-colors duration-100">
                    {topic.title}
                  </span>
                  <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-0.5">
                    {topic.description}
                  </p>
                </div>
                <span className="font-mono text-[#888888] group-hover:text-[#ff3c00] text-xs transition-colors duration-100 flex-shrink-0 mt-0.5">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
