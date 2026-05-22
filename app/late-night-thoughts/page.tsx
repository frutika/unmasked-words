export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import SiteHeader from "@/components/SiteHeader";
import LandingPostsList from "@/components/LandingPostsList";
import MiningBadge from "@/components/MiningBadge";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Late Night Thoughts — Anonymous 3am Confessions",
  description:
    "Share late night thoughts anonymously. The things you think at 3am that disappear by morning. No account. No trace. A void that holds the night version of your mind.",
  keywords: [
    "late night thoughts",
    "3am thoughts",
    "thoughts at night anonymous",
    "can't sleep thoughts",
    "anonymous late night confessions",
    "share thoughts at 3am",
    "what to do when you can't sleep thoughts",
  ],
  alternates: { canonical: "https://unmaskedwords.com/late-night-thoughts" },
  openGraph: {
    title: "Late Night Thoughts — Anonymous 3am Confessions | UnmaskedWords",
    description:
      "The things you think at 3am that disappear by morning. Share late night thoughts anonymously. No account. No trace.",
    url: "https://unmaskedwords.com/late-night-thoughts",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Late Night Thoughts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Late Night Thoughts — Anonymous 3am Confessions | UnmaskedWords",
    description:
      "The things you think at 3am. Share late night thoughts anonymously. No account. No trace.",
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

export default async function LateNightThoughtsPage() {
  const posts = await getPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Late Night Thoughts — Anonymous 3am Confessions",
    description:
      "Share late night thoughts anonymously. The things you think at 3am that disappear by morning. No account. No trace.",
    url: "https://unmaskedwords.com/late-night-thoughts",
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
            // late night thoughts
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            3AM.<br />
            <span className="text-[#ff3c00]">THE UNEDITED MIND.</span>
          </h1>
        </div>
      </section>

      {/* SEO copy */}
      <section className="border-b border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            It&apos;s 3am. The rest of the world is asleep or pretending to be.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The thoughts that arrive at this hour are different. Daytime thinking has structure — tasks, responses, roles to play. Late night thinking has no such architecture. It&apos;s just you and the unedited version of your mind.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            The thoughts that come at 3am are the ones that have been waiting. The worry you&apos;ve been managing successfully all day finally surfaces. The memory you thought you&apos;d processed turns out not to be processed at all. The truth you&apos;ve been avoiding becomes unavoidable.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            These thoughts rarely survive until morning in their original form. By the time the alarm goes off, you&apos;ve softened them. Rationalized them. Made them something you can carry without too much difficulty.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            UnmaskedWords exists for the version before the softening.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            Thousands of people have typed their late night thoughts into this void. Not because they expected an answer. Not because they wanted to be seen. Because the thought needed to exist somewhere outside their own head before morning turned it into something else.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            What people write at night: the fear they can&apos;t name. The person they&apos;re still thinking about. The version of their life they thought they&apos;d have by now. The decision they know they have to make. The feeling they don&apos;t have a word for. The thing they almost said but didn&apos;t.
          </p>
          <p className="font-mono text-[#888888] text-sm leading-relaxed">
            No account. No username. No one to read it and know it was you. Just a text field, a void, and the strange relief of saying the thing.
          </p>
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
            If you&apos;re here because you can&apos;t sleep, you&apos;re in the right place. Type the thing that&apos;s keeping you awake. It&apos;s okay that it doesn&apos;t make sense at this hour. It doesn&apos;t have to.
          </p>

          <div className="flex gap-4 pt-2">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
            >
              POST INTO THE VOID →
            </Link>
            <Link
              href="/threads/solitude"
              className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-[#333333] text-[#888888] hover:text-[#f0f0f0] hover:border-[#888888] transition-colors duration-150"
            >
              SOLITUDE THREAD →
            </Link>
          </div>
        </div>
      </section>

      {/* Live posts */}
      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // from the void — real late night thoughts, posted without a face
          </p>
          <LandingPostsList posts={posts} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
