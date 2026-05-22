export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import SiteHeader from "@/components/SiteHeader";
import LandingPostsList from "@/components/LandingPostsList";
import MiningBadge from "@/components/MiningBadge";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Raw Thoughts — Unfiltered Anonymous Posts",
  description:
    "Post raw, unfiltered thoughts anonymously. No account. No algorithm. Just the thought, exactly as it is. A live feed of real, unedited human observations.",
  keywords: [
    "raw thoughts",
    "unfiltered thoughts online",
    "speak your mind anonymously",
    "post thoughts anonymously",
    "unedited thoughts online",
    "anonymous thoughts feed",
    "real thoughts no filter",
  ],
  alternates: { canonical: "https://unmaskedwords.com/raw-thoughts" },
  openGraph: {
    title: "Raw Thoughts — Unfiltered Anonymous Posts | UnmaskedWords",
    description:
      "Post raw, unfiltered thoughts anonymously. No account. No algorithm. Just the thought, exactly as it is.",
    url: "https://unmaskedwords.com/raw-thoughts",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Raw Thoughts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raw Thoughts — Unfiltered Anonymous Posts | UnmaskedWords",
    description:
      "Post raw, unfiltered thoughts anonymously. No account. No algorithm. Just the thought, exactly as it is.",
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

export default async function RawThoughtsPage() {
  const posts = await getPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Raw Thoughts — Unfiltered Anonymous Posts",
    description:
      "Post raw, unfiltered thoughts anonymously. No account. No algorithm. Just the thought, exactly as it is.",
    url: "https://unmaskedwords.com/raw-thoughts",
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
            // raw thoughts
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            BEFORE THE<br />
            <span className="text-[#ff3c00]">FILTER KICKS IN</span>
          </h1>
        </div>
      </section>

      {/* SEO copy */}
      <section className="border-b border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            Most of what you think never leaves your head in its original form.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            By the time a thought becomes something you say out loud or post online, it has passed through several layers of editing. Softened. Made acceptable. Shaped for the person receiving it. The raw version rarely survives the journey from brain to output.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            Raw thoughts are the ones that arrive before the editing begins. The observation you had in the elevator that was too odd to share. The feeling that doesn&apos;t have a socially acceptable name. The opinion you hold privately that contradicts the version of yourself you present to the world. The realization that arrived at an inconvenient moment and hasn&apos;t left.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            UnmaskedWords is where raw thoughts go when they can&apos;t go anywhere else. No account. No username. No algorithm deciding if your thought is engaging enough to show to people. You type the thought, post it, and it enters the feed exactly as it is — unoptimized, unperformed, just the thought.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The feed here is a cross-section of the unedited human mind. Someone writes a single sentence about a feeling they can&apos;t name. Someone posts an observation about the way memory distorts things over time. Someone writes about wanting something they&apos;re not supposed to want. Someone posts three words that somehow contain an entire year.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            There&apos;s no social context here — no one knows if you&apos;re having a good week, what your relationship status is, where you work. The thought exists without biography. It&apos;s not &quot;something a person like you would say.&quot; It&apos;s just the thought.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            Some people post here daily. Some post once and never return. Some post in the middle of the night when the raw version of their mind is closest to the surface. Some post first thing in the morning, before the editing has started.
          </p>
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            You don&apos;t need to have the full thought worked out. Post the fragment. The void receives fragments. The void receives everything.
          </p>

          <div className="flex gap-4 pt-2">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
            >
              POST A RAW THOUGHT →
            </Link>
            <Link
              href="/threads/identity"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-[#333333] text-[#888888] hover:text-[#f0f0f0] hover:border-[#888888] transition-colors duration-150"
            >
              IDENTITY THREAD →
            </Link>
          </div>
        </div>
      </section>

      {/* Live posts */}
      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // from the void — raw, unfiltered, anonymous
          </p>
          <LandingPostsList posts={posts} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
