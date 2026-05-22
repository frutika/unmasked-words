export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import SiteHeader from "@/components/SiteHeader";
import LandingPostsList from "@/components/LandingPostsList";
import MiningBadge from "@/components/MiningBadge";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Deep Thoughts — Share Anonymous Philosophical Thoughts",
  description:
    "A place to share deep thoughts anonymously. Unfiltered ideas, philosophical reflections, and raw observations from strangers. No account required.",
  keywords: [
    "deep thoughts",
    "share deep thoughts anonymously",
    "anonymous philosophical thoughts",
    "deep thoughts to post online",
    "profound anonymous thoughts",
    "raw observations anonymous",
  ],
  alternates: { canonical: "https://unmaskedwords.com/deep-thoughts" },
  openGraph: {
    title: "Deep Thoughts — Share Anonymous Philosophical Thoughts | UnmaskedWords",
    description:
      "Share deep thoughts anonymously. Unfiltered ideas, philosophical reflections, and raw observations from strangers. No account required.",
    url: "https://unmaskedwords.com/deep-thoughts",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Deep Thoughts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Thoughts — Anonymous Philosophical Thoughts | UnmaskedWords",
    description:
      "Share deep thoughts anonymously. Unfiltered ideas, philosophical reflections, raw observations. No account.",
    images: ["/og-image.png"],
  },
};

async function getPosts(): Promise<Post[]> {
  try {
    const pb = createPocketBase();
    const result = await pb.collection("posts_en").getList<Post>(1, 30, {
      sort: "-created",
    });
    return result.items;
  } catch {
    return [];
  }
}

export default async function DeepThoughtsPage() {
  const posts = await getPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Deep Thoughts — Share Anonymous Philosophical Thoughts",
    description:
      "A place to share deep thoughts anonymously. Unfiltered ideas, philosophical reflections, and raw observations from strangers.",
    url: "https://unmaskedwords.com/deep-thoughts",
    isPartOf: { "@type": "WebSite", name: "UnmaskedWords", url: "https://unmaskedwords.com" },
    inLanguage: "en-US",
  };

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
            // deep thoughts
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            THE THOUGHT BEFORE<br />
            <span className="text-[#ff3c00]">THE EDIT</span>
          </h1>
        </div>
      </section>

      {/* SEO copy */}
      <section className="border-b border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            Most deep thoughts die before they reach anyone.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The observation you had at 2am about existence, about the way time moves differently depending on what you&apos;re doing, about the strange fact that everyone around you is living a completely interior life you&apos;ll never access — these thoughts arrive fully formed and disappear because there&apos;s nowhere to put them.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            Social media is the wrong place. You&apos;d need a caption. You&apos;d need it to be slightly less strange, slightly more relatable. You&apos;d need to worry about whether people would think you were performing depth, or going through something, or just weird.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            UnmaskedWords removes all of that. This is where deep thoughts go to exist without apology. Anonymous, unformatted, unfiltered. The philosophical observation you can&apos;t post elsewhere because it&apos;s too raw. The question you can&apos;t raise in conversation because it would take too long to set up. The reflection on something small — a childhood memory, a moment on public transport — that somehow means everything.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The feed here is a cross-section of the human interior. Someone writes about the specific sadness of Sunday evenings. Someone else writes about noticing they&apos;ve started to become their parents and not knowing how to feel about that. Someone posts three words that contain a whole year. Someone writes a paragraph about what it feels like to be truly alone in a crowd.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            No account required to post. No username attached. Your deep thought floats in the same feed as everyone else&apos;s — no signal about who you are, where you live, what you do. Just the thought.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            No engagement metrics. No algorithm. No performance required. You don&apos;t need to be a writer. You don&apos;t need to have the full idea worked out. Post the fragment. The void receives it.
          </p>
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            If you&apos;ve been carrying something in your head — an observation, a question, a realization — this is the place to put it down. Just the thought, exactly as it arrived.
          </p>

          <div className="flex gap-4 pt-2">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
            >
              POST YOUR THOUGHT →
            </Link>
            <Link
              href="/threads/doubt"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-[#333333] text-[#888888] hover:text-[#f0f0f0] hover:border-[#888888] transition-colors duration-150"
            >
              DOUBT THREAD →
            </Link>
          </div>
        </div>
      </section>

      {/* Live posts */}
      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // from the void — real deep thoughts, posted anonymously
          </p>
          <LandingPostsList posts={posts} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
