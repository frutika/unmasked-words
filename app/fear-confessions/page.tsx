export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import SiteHeader from "@/components/SiteHeader";
import LandingPostsList from "@/components/LandingPostsList";
import MiningBadge from "@/components/MiningBadge";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Fear Confessions — Anonymous Fears Spoken Out Loud",
  description:
    "Name your fears anonymously. The things that keep you up at night, the fears you can't say in daylight. No account. No identity. Just the fear, finally named.",
  keywords: [
    "fear confessions",
    "anonymous fears",
    "confess your fears online",
    "things people are afraid of",
    "anonymous fear sharing",
    "name your fears anonymously",
    "what people fear most",
  ],
  alternates: { canonical: "https://unmaskedwords.com/fear-confessions" },
  openGraph: {
    title: "Fear Confessions — Anonymous Fears Spoken Out Loud | UnmaskedWords",
    description:
      "Name your fears anonymously. The things you can't say in daylight. No account. No identity. Just the fear, finally named.",
    url: "https://unmaskedwords.com/fear-confessions",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Fear Confessions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fear Confessions — Anonymous Fears Spoken Out Loud | UnmaskedWords",
    description:
      "Name your fears anonymously. No account. No identity. Just the fear, finally named.",
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

export default async function FearConfessionsPage() {
  const posts = await getPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Fear Confessions — Anonymous Fears Spoken Out Loud",
    description:
      "Name your fears anonymously. The fears you can't say in daylight. No account. No identity.",
    url: "https://unmaskedwords.com/fear-confessions",
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
            // fear confessions
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            NAME THE THING<br />
            <span className="text-[#ff3c00]">IN THE DARK</span>
          </h1>
        </div>
      </section>

      {/* SEO copy */}
      <section className="border-b border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            Fear changes shape in the dark.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            In daylight, it&apos;s manageable. You have your routines, your distractions, your practiced narrative about how you&apos;re handling things. The fear stays at a manageable distance — nameable, but not too loud.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            At night, or in certain quiet moments, it gets closer.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The fears people actually carry — not the acceptable ones, the ones that signal appropriate adult concern — are often the hardest to say. The fear that you&apos;ve fundamentally misunderstood your own life. The fear that the person you love doesn&apos;t actually know you. The fear that something is wrong with you in a way nothing can fix. The fear of being ordinary. The fear of being seen for exactly who you are.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            These are not fears people bring to conversation. They live in the interior, unnamed.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            UnmaskedWords is a place where fear can be named without consequence. No account. No profile. Your fear confession floats in the void without your name attached to it. No one reads it knowing it was you.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The act of naming a fear — even to a void — changes its relationship to you. It&apos;s no longer entirely internal. It exists somewhere outside your own head. That shift is small and sometimes surprisingly significant.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            People write their fears here regularly. Some are specific: &quot;I&apos;m afraid I made the wrong choice and there&apos;s no way to know.&quot; Some are vast: &quot;I&apos;m afraid nothing means anything and I&apos;ve been pretending otherwise for decades.&quot; Some are small and exact. All of them are real. All of them are posted without a face.
          </p>
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            If you have a fear that needs naming — one you can&apos;t say where people know you — post it here. No account required. The void receives it without judgment.
          </p>

          <div className="flex gap-4 pt-2">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
            >
              NAME YOUR FEAR →
            </Link>
            <Link
              href="/threads/fear"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-[#333333] text-[#888888] hover:text-[#f0f0f0] hover:border-[#888888] transition-colors duration-150"
            >
              FEAR THREAD →
            </Link>
          </div>
        </div>
      </section>

      {/* Live posts */}
      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // from the void — fears named anonymously
          </p>
          <LandingPostsList posts={posts} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
