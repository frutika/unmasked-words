export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { createPocketBase, type Post } from "@/lib/pocketbase";

export const metadata: Metadata = {
  title: "UnmaskedWords — Say it without a face",
  description:
    "A brutalist anonymous platform to post raw thoughts in real-time. No account. No trace. No filters. Just unmasked honesty.",
  keywords: [
    "anonymous posting", "unmasked thoughts", "anonymous confession",
    "real-time feed", "brutalist social", "raw honesty", "speak without identity",
  ],
  alternates: { canonical: "https://unmaskedwords.com" },
  openGraph: {
    title: "UnmaskedWords — Say it without a face",
    description: "Post your unmasked truth. No account required. No trace left behind. No filters. Just raw, anonymous honesty in real time.",
    url: "https://unmaskedwords.com",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords — Say it without a face" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UnmaskedWords — Say it without a face",
    description: "Post your unmasked truth. No account required. No trace left behind. No filters. Just raw, anonymous honesty in real time.",
    images: ["/og-image.png"],
  },
};
import PostInput from "@/components/PostInput";
import MiningBadge from "@/components/MiningBadge";
import Link from "next/link";
import Feed from "@/components/Feed";
import VisitorCount from "@/components/VisitorCount";
import NewsletterForm from "@/components/NewsletterForm";
import SiteHeader from "@/components/SiteHeader";

const PER_PAGE = 20;

async function getPosts(): Promise<{ posts: Post[]; totalPages: number; totalItems: number }> {
  try {
    const pb = createPocketBase();
    const result = await pb.collection("posts_en").getList<Post>(1, PER_PAGE, {
      sort: "-created",
    });
    return { posts: result.items, totalPages: result.totalPages, totalItems: result.totalItems };
  } catch {
    return { posts: [], totalPages: 0, totalItems: 0 };
  }
}

export default async function HomePage() {
  const { posts, totalPages, totalItems } = await getPosts();

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SiteHeader
        subtitle="say it without a face"
        right={
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <VisitorCount />
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff3c00]" />
              <span className="font-mono text-[#888888] text-xs tabular-nums">
                {totalItems} post{totalItems !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        }
      />

      <section className="border-b border-[#1a1a1a] px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // your thought
          </p>
          <PostInput />
        </div>
      </section>

      {/* Mirror Mode promo strip */}
      <section className="border-b border-[#1a1a1a] px-6 py-5">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/mirror"
            className="group flex items-center justify-between gap-4 hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="font-mono text-[#ff3c00] text-lg font-black flex-shrink-0">◈</span>
              <div className="min-w-0">
                <p className="font-mono font-black text-[#f0f0f0] text-xs tracking-widest uppercase">
                  MIRROR MODE
                </p>
                <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-0.5">
                  // write a thought — the mirror reflects what you can&apos;t see in yourself
                </p>
              </div>
            </div>
            <span className="font-mono text-[#888888] group-hover:text-[#ff3c00] text-xs transition-colors flex-shrink-0">
              ENTER →
            </span>
          </Link>
        </div>
      </section>

      {/* Creed promo strip */}
      <section className="border-b border-[#1a1a1a] px-6 py-5">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/creed"
            className="group flex items-center justify-between gap-4 hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="font-mono text-[#ff3c00] text-lg font-black flex-shrink-0">§</span>
              <div className="min-w-0">
                <p className="font-mono font-black text-[#f0f0f0] text-xs tracking-widest uppercase">
                  CREED
                </p>
                <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-0.5">
                  // write a thought — the engine distills it into your creed
                </p>
              </div>
            </div>
            <span className="font-mono text-[#888888] group-hover:text-[#ff3c00] text-xs transition-colors flex-shrink-0">
              ENTER →
            </span>
          </Link>
        </div>
      </section>

      {/* Black Box promo strip */}
      <section className="border-b border-[#1a1a1a] px-6 py-5">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/box"
            className="group flex items-center justify-between gap-4 hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="font-mono text-[#ff3c00] text-lg font-black flex-shrink-0">▣</span>
              <div className="min-w-0">
                <p className="font-mono font-black text-[#f0f0f0] text-xs tracking-widest uppercase">
                  THE BLACK BOX
                </p>
                <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-0.5">
                  // leave a thought — it vanishes in 24h, but one sentence survives
                </p>
              </div>
            </div>
            <span className="font-mono text-[#888888] group-hover:text-[#ff3c00] text-xs transition-colors flex-shrink-0">
              ENTER →
            </span>
          </Link>
        </div>
      </section>

      {/* Anonymous Duel promo strip */}
      <section className="border-b border-[#1a1a1a] px-6 py-5">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/duel"
            className="group flex items-center justify-between gap-4 hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="font-mono text-[#ff3c00] text-lg font-black flex-shrink-0">VS</span>
              <div className="min-w-0">
                <p className="font-mono font-black text-[#f0f0f0] text-xs tracking-widest uppercase">
                  ANONYMOUS DUEL
                </p>
                <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-0.5">
                  // two strangers, one question — the void decides who's more honest
                </p>
              </div>
            </div>
            <span className="font-mono text-[#888888] group-hover:text-[#ff3c00] text-xs transition-colors flex-shrink-0">
              ENTER →
            </span>
          </Link>
        </div>
      </section>

      {/* Deep Threads promo strip */}
      <section className="border-b border-[#1a1a1a] px-6 py-5">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/threads"
            className="group flex items-center justify-between gap-4 hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="font-mono text-[#ff3c00] text-lg font-black flex-shrink-0">⊘</span>
              <div className="min-w-0">
                <p className="font-mono font-black text-[#f0f0f0] text-xs tracking-widest uppercase">
                  DEEP THREADS
                </p>
                <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-0.5">
                  // enter a themed void — shame, rage, grief, desire + more
                </p>
              </div>
            </div>
            <span className="font-mono text-[#888888] group-hover:text-[#ff3c00] text-xs transition-colors flex-shrink-0">
              ENTER →
            </span>
          </Link>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // live feed
          </p>
          <Feed initialPosts={posts} initialTotalPages={totalPages} />
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] px-6 py-8 mt-8">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <NewsletterForm />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#1a1a1a] pt-5">
            <p className="font-mono text-[#888888] text-xs tracking-widest">
              NO ACCOUNTS. NO TRACKING. NO FILTERS.
            </p>
            <div className="flex items-center gap-4">
              <MiningBadge />
              <Link
                href="/anonymous-thoughts"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                topics →
              </Link>
              <Link
                href="/mirror"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                mirror →
              </Link>
              <Link
                href="/creed"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                creed →
              </Link>
              <Link
                href="/box"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                box →
              </Link>
              <Link
                href="/duel"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                duel →
              </Link>
              <Link
                href="/threads"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                threads →
              </Link>
              <Link
                href="/how-it-works"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                how it works →
              </Link>
              <Link
                href="/privacy"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                privacy →
              </Link>
              <Link
                href="/about"
                className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
              >
                manifesto →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
