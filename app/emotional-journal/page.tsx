export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import SiteHeader from "@/components/SiteHeader";
import LandingPostsList from "@/components/LandingPostsList";
import MiningBadge from "@/components/MiningBadge";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Anonymous Emotional Journal — Write Without an Identity",
  description:
    "An anonymous emotional journal online. No account. Write what you feel, release what you're carrying. No trace, no filters, no identity required.",
  keywords: [
    "anonymous emotional journal",
    "online journal no account",
    "vent online anonymously",
    "emotional release online",
    "anonymous diary online",
    "journal without account",
    "express emotions anonymously",
  ],
  alternates: { canonical: "https://unmaskedwords.com/emotional-journal" },
  openGraph: {
    title: "Anonymous Emotional Journal — Write Without an Identity | UnmaskedWords",
    description:
      "An anonymous emotional journal online. No account. Write what you feel. No trace, no filters, no identity required.",
    url: "https://unmaskedwords.com/emotional-journal",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Emotional Journal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anonymous Emotional Journal — Write Without an Identity | UnmaskedWords",
    description:
      "An anonymous emotional journal online. No account. Write what you feel. No trace, no filters.",
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

export default async function EmotionalJournalPage() {
  const posts = await getPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Anonymous Emotional Journal — Write Without an Identity",
    description:
      "An anonymous emotional journal online. No account. Write what you feel, release what you're carrying. No trace, no filters.",
    url: "https://unmaskedwords.com/emotional-journal",
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
            // emotional journal
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            WRITE THE TRUE<br />
            <span className="text-[#ff3c00]">VERSION</span>
          </h1>
        </div>
      </section>

      {/* SEO copy */}
      <section className="border-b border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            A journal with your name on it is a different thing.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The moment you write in something associated with your identity — a diary app, a Google Doc with your email, a notes file your family might access — the writing becomes aware of itself. It edits for potential readers. The raw emotional version doesn&apos;t quite make it onto the page.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            An anonymous emotional journal is different. When your name is removed, what remains is the actual emotional state. The thing you&apos;re really feeling, not the version you&apos;d want documented with your name attached. The grief you&apos;re still in when you thought you should be over it. The anger at someone you love. The confusion about your own desires. The slow accumulation of small sadnesses that make up a difficult period.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            UnmaskedWords is not a journaling app. There are no prompts, no mood trackers, no streaks to maintain. It&apos;s a void — a text field where you type the thing, submit it, and let it go. Your entry floats in the feed with everyone else&apos;s, anonymous. No one knows it was you.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            People use this platform as an emotional release valve. They post when they&apos;re overwhelmed and don&apos;t know who to call. They post when they&apos;ve processed something and want to mark that it happened. They post to say the specific, unsayable thing that has no appropriate venue in their actual life.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            What people write: the honest account of a difficult week. The thing they&apos;ve never said to the person they&apos;re thinking about. The realization they arrived at this morning and haven&apos;t told anyone. The feeling they&apos;ve been managing for months that is still there.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            No account. No login. No data collected. The emotional entry you write here doesn&apos;t belong to any platform. It&apos;s just words in the void.
          </p>
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            If you&apos;re carrying something — write it here. Not because anyone is waiting to hear it. Because writing the true thing, even once, even to a void, tends to help.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
            >
              WRITE NOW →
            </Link>
            <Link
              href="/threads/grief"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-[#333333] text-[#888888] hover:text-[#f0f0f0] hover:border-[#888888] transition-colors duration-150"
            >
              GRIEF THREAD →
            </Link>
            <Link
              href="/threads/longing"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-[#333333] text-[#888888] hover:text-[#f0f0f0] hover:border-[#888888] transition-colors duration-150"
            >
              LONGING THREAD →
            </Link>
          </div>
        </div>
      </section>

      {/* Live posts */}
      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // from the void — emotional entries posted without identity
          </p>
          <LandingPostsList posts={posts} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
