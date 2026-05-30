export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import SiteHeader from "@/components/SiteHeader";
import LandingPostsList from "@/components/LandingPostsList";
import MiningBadge from "@/components/MiningBadge";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Anonymous Confessions — Speak Without Your Name",
  description:
    "Post anonymous confessions online. No account. No trace. The place where the truth arrives without a face.",
  keywords: [
    "anonymous confessions",
    "post confession anonymously",
    "anonymous confession site",
    "confess online without account",
    "anonymous truth online",
    "share secrets anonymously",
  ],
  alternates: { canonical: "https://unmaskedwords.com/anonymous-confessions" },
  openGraph: {
    title: "Anonymous Confessions — Speak Without Your Name | UnmaskedWords",
    description:
      "Post anonymous confessions online. No account. No trace. The place where truth arrives without a face.",
    url: "https://unmaskedwords.com/anonymous-confessions",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Anonymous Confessions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anonymous Confessions — Speak Without Your Name | UnmaskedWords",
    description:
      "Post anonymous confessions online. No account. No trace. The place where truth arrives without a face.",
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

export default async function AnonymousConfessionsPage() {
  const posts = await getPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Anonymous Confessions — Speak Without Your Name",
    description:
      "Post anonymous confessions online. No account. No trace. The place where truth arrives without a face.",
    url: "https://unmaskedwords.com/anonymous-confessions",
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
            // anonymous confessions
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            SPEAK WITHOUT<br />
            <span className="text-[#ff3c00]">YOUR NAME</span>
          </h1>
        </div>
      </section>

      {/* SEO copy */}
      <section className="border-b border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            There&apos;s a version of what happened that only you know.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The story you tell people about your life — the one shaped over years of repetition — isn&apos;t quite true. Not because you&apos;re lying. Because truth requires trust. And trust requires safety. And safety doesn&apos;t exist anywhere on the internet that knows your name.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            Anonymous confessions are different. When your name is removed, what remains is the actual thing you wanted to say. Not the sanitized version. Not the version that makes you look okay. The raw one.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            UnmaskedWords is a place where anonymous confession returns to its original form: unedited, unnamed, unfiltered. No account required. No username you&apos;ve been curating for years. No followers to lose. No algorithm deciding if your truth is engaging enough. Just a text field, a void that receives, and a feed where everyone floats equally in the dark.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The confessions posted here are real. People write what they&apos;ve kept locked for months — mistakes they made, feelings they&apos;re ashamed of, things they said and wish they hadn&apos;t, things they didn&apos;t say and wish they had. Truths about relationships, about themselves, about what they actually want and can&apos;t admit.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            There&apos;s no absolution here. No one comments to make you feel better. No reaction count measuring how relatable your pain is. The confession just exists — which is often exactly what was needed.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            This platform runs on the same principles as the early internet: open, anonymous, non-commercial. No behavioral tracking. No data sold. The confession you type here is the confession you type. Nothing more.
          </p>
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            If you have something you&apos;ve been carrying — something you can&apos;t say with your name attached — this is where it goes. No account. No trace. No filters. Just the truth.
          </p>

          <div className="flex gap-4 pt-2">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
            >
              Heartbreak signals
            </Link>
            <Link
              href="/threads/confession"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-[#333333] text-[#888888] hover:text-[#f0f0f0] hover:border-[#888888] transition-colors duration-150"
            >
              CONFESSION THREAD →
            </Link>
          </div>
        </div>
      </section>

      {/* Live posts */}
      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // from the void — real anonymous confessions
          </p>
          <LandingPostsList posts={posts} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
