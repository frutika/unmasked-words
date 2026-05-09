import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { THREADS } from "@/lib/threads";
import { createPocketBase } from "@/lib/pocketbase";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Deep Threads — Anonymous Emotional Voids",
  description:
    "Enter a thread. Each one is a void built around a single emotional truth — shame, rage, grief, desire. No profiles. No filters. Just raw voices.",
  keywords: ["anonymous threads", "emotional voids", "shame thread", "rage thread", "grief", "confession", "anonymous voices"],
  alternates: { canonical: "https://unmaskedwords.com/threads" },
  openGraph: {
    title: "Deep Threads — Anonymous Emotional Voids | UnmaskedWords",
    description: "Enter a void built around a single emotional truth. Shame, rage, grief, desire. Anonymous voices speaking without a face. No profiles, no filters.",
    url: "https://unmaskedwords.com/threads",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Deep Threads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Threads — Anonymous Emotional Voids | UnmaskedWords",
    description: "Enter a void built around a single emotional truth. Shame, rage, grief, desire. Anonymous voices speaking without a face. No profiles, no filters.",
    images: ["/og-image.png"],
  },
};

async function getThreadCounts(): Promise<Record<string, number>> {
  try {
    const pb = createPocketBase();
    const counts: Record<string, number> = {};
    await Promise.all(
      THREADS.map(async (t) => {
        try {
          const result = await pb.collection("thread_posts").getList(1, 1, {
            filter: `thread_slug = "${t.slug}"`,
            fields: "id",
          });
          counts[t.slug] = result.totalItems;
        } catch {
          counts[t.slug] = 0;
        }
      })
    );
    return counts;
  } catch {
    return {};
  }
}

export default async function ThreadsPage() {
  const counts = await getThreadCounts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Deep Threads — Anonymous Emotional Voids",
    description: "Enter a thread. Each one is a void built around a single emotional truth.",
    url: "https://unmaskedwords.com/threads",
    numberOfItems: THREADS.length,
    itemListElement: THREADS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.title,
      description: t.description,
      url: `https://unmaskedwords.com/threads/${t.slug}`,
    })),
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

      <section className="flex-1 px-6 py-12">
        <div className="max-w-2xl mx-auto">

          <div className="mb-10">
            <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
              // deep threads
            </p>
            <h1
              className="font-mono font-black text-[#f0f0f0] leading-none mb-4"
              style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
            >
              ENTER A<br />
              <span className="text-[#ff3c00]">VOID<span className="cursor-blink">|</span></span>
            </h1>
            <p className="font-mono text-[#888888] text-sm leading-relaxed max-w-sm">
              Each thread is a single emotional frequency.<br />
              Enter. Speak. Disappear.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {THREADS.map((thread) => {
              const count = counts[thread.slug] ?? 0;
              return (
                <Link
                  key={thread.slug}
                  href={`/threads/${thread.slug}`}
                  className="group border-b border-[#1a1a1a] py-5 flex items-start gap-5 hover:bg-[#0d0d0d] transition-colors duration-100 -mx-2 px-2"
                >
                  <span
                    className="font-mono font-bold text-[#888888] group-hover:text-[#ff3c00] transition-colors duration-100 w-8 text-center flex-shrink-0 mt-0.5"
                    style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
                  >
                    {thread.symbol}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-mono font-black text-[#f0f0f0] text-sm tracking-tight group-hover:text-[#ff3c00] transition-colors duration-100">
                        {thread.title}
                      </span>
                      <span className="font-mono text-[#888888] text-[10px] tracking-widest">
                        // {count} {count === 1 ? "voice" : "voices"}
                      </span>
                    </div>
                    <p className="font-mono text-[#888888] text-xs mt-1 leading-relaxed">
                      {thread.description}
                    </p>
                  </div>
                  <span className="font-mono text-[#888888] group-hover:text-[#ff3c00] text-xs transition-colors duration-100 flex-shrink-0 mt-0.5">
                    →
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <p aria-hidden="true" className="font-mono text-[#333333] text-xs text-center tracking-widest">
            NO ACCOUNTS. NO TRACKING. NO FILTERS.
          </p>
        </div>
      </footer>
    </main>
  );
}
