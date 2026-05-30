import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { TOPICS, SUPER_TOPICS } from "@/lib/topics";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Anonymous Thoughts — Browse by Topic",
  description:
    "Browse anonymous thoughts by topic. Love, Mind, Self, Existence — and more. Real confessions from strangers, no account required.",
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
      "Browse anonymous thoughts by topic. Love, heartbreak, anxiety, identity and more. Real confessions, no account required.",
    url: "https://unmaskedwords.com/anonymous-thoughts",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords — Anonymous Thoughts by Topic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anonymous Thoughts — Browse by Topic | UnmaskedWords",
    description: "Browse anonymous thoughts by topic. Love, heartbreak, anxiety, identity and more.",
    images: ["/og-image.png"],
  },
};

const superTopicTopics = new Set(SUPER_TOPICS.flatMap((st) => st.topics));

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
  const remainingTopics = TOPICS.filter((t) => !superTopicTopics.has(t.slug));

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

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // anonymous thoughts
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-4"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            THE<br />
            <span className="text-[#ff3c00]">VOIDS</span>
          </h1>
          <p className="font-mono text-[#888888] text-sm leading-relaxed max-w-sm">
            Four territories. Dozens of depths.<br />
            Enter where it&apos;s most honest.
          </p>
        </div>
      </section>

      {/* Super topics */}
      {SUPER_TOPICS.map((superTopic) => {
        const topics = superTopic.topics
          .map((slug) => TOPICS.find((t) => t.slug === slug))
          .filter(Boolean) as typeof TOPICS;

        return (
          <section key={superTopic.slug} className="border-b border-[#1a1a1a] px-6 py-8">
            <div className="max-w-2xl mx-auto">
              <h2
                className="font-mono font-black text-[#ff3c00] mb-6"
                style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", letterSpacing: "-0.02em" }}
              >
                {superTopic.slug}
              </h2>
              <div className="flex flex-col">
                {topics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/anonymous-thoughts/${topic.slug}`}
                    className="group border-b border-[#1a1a1a] py-4 flex items-start justify-between gap-4 -mx-2 px-2 hover:bg-[#0d0d0d] transition-colors duration-100 last:border-b-0"
                  >
                    <div className="min-w-0">
                      <span className="font-mono font-black text-[#f0f0f0] text-sm tracking-tight group-hover:text-[#ff3c00] transition-colors duration-100">
                        {topic.title}
                      </span>
                      <p className="font-mono text-[#555555] text-[10px] tracking-widest mt-0.5">
                        {topic.description}
                      </p>
                    </div>
                    <span className="font-mono text-[#555555] group-hover:text-[#ff3c00] text-xs transition-colors duration-100 flex-shrink-0 mt-0.5">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* All other voids */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // more voids
          </p>
          <div className="flex flex-col">
            {remainingTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/anonymous-thoughts/${topic.slug}`}
                className="group border-b border-[#1a1a1a] py-4 flex items-start justify-between gap-4 -mx-2 px-2 hover:bg-[#0d0d0d] transition-colors duration-100 last:border-b-0"
              >
                <div className="min-w-0">
                  <span className="font-mono font-black text-[#f0f0f0] text-sm tracking-tight group-hover:text-[#ff3c00] transition-colors duration-100">
                    {topic.title}
                  </span>
                  <p className="font-mono text-[#555555] text-[10px] tracking-widest mt-0.5">
                    {topic.description}
                  </p>
                </div>
                <span className="font-mono text-[#555555] group-hover:text-[#ff3c00] text-xs transition-colors duration-100 flex-shrink-0 mt-0.5">
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
