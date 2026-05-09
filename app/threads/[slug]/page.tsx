import { createPocketBase, type ThreadPost } from "@/lib/pocketbase";
import { THREADS, getThread } from "@/lib/threads";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ThreadFeed from "@/components/ThreadFeed";
import ThreadPostInput from "@/components/ThreadPostInput";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return THREADS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const thread = getThread(slug);
  if (!thread) return { title: "Thread not found — UnmaskedWords" };

  return {
    title: `${thread.title} — Anonymous ${thread.title} Thread`,
    description: `${thread.description}. Anonymous voices sharing their truth in the void. No profiles. No filters.`,
    keywords: [thread.title.toLowerCase(), "anonymous thread", "anonymous confession", thread.description],
    alternates: { canonical: `https://unmaskedwords.com/threads/${slug}` },
    openGraph: {
      title: `[${thread.symbol}] ${thread.title} — ${thread.description} | UnmaskedWords`,
      description: thread.description,
      url: `https://unmaskedwords.com/threads/${slug}`,
      siteName: "UnmaskedWords",
      type: "website",
      locale: "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `UnmaskedWords — ${thread.title} Thread` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `[${thread.symbol}] ${thread.title} — ${thread.description}`,
      description: thread.description,
      images: ["/og-image.png"],
    },
  };
}

async function getInitialPosts(slug: string): Promise<{ posts: ThreadPost[]; totalPages: number; totalItems: number }> {
  try {
    const pb = createPocketBase();
    const result = await pb.collection("thread_posts").getList<ThreadPost>(1, 20, {
      filter: `thread_slug = "${slug}"`,
      sort: "-created",
    });
    return { posts: result.items, totalPages: result.totalPages, totalItems: result.totalItems };
  } catch {
    return { posts: [], totalPages: 0, totalItems: 0 };
  }
}

export default async function ThreadPage({ params }: Props) {
  const { slug } = await params;
  const thread = getThread(slug);
  if (!thread) notFound();

  const { posts, totalPages, totalItems } = await getInitialPosts(slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${thread.title} — ${thread.description}`,
      description: thread.description,
      url: `https://unmaskedwords.com/threads/${slug}`,
      isPartOf: { "@type": "WebSite", name: "UnmaskedWords", url: "https://unmaskedwords.com" },
      inLanguage: "en-US",
      about: { "@type": "Thing", name: thread.title, description: thread.description },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://unmaskedwords.com" },
        { "@type": "ListItem", position: 2, name: "Deep Threads", item: "https://unmaskedwords.com/threads" },
        { "@type": "ListItem", position: 3, name: thread.title, item: `https://unmaskedwords.com/threads/${slug}` },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader
        right={
          <Link
            href="/threads"
            className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
          >
            ← threads
          </Link>
        }
      />

      {/* Thread header */}
      <div className="border-b border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-6">
            <span
              className="font-mono font-black text-[#ff3c00] flex-shrink-0 leading-none"
              style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)" }}
            >
              {thread.symbol}
            </span>
            <div className="min-w-0">
              <h1
                className="font-mono font-black text-[#f0f0f0] leading-none"
                style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                {thread.title}
              </h1>
              <p className="font-mono text-[#888888] text-sm mt-2 leading-relaxed">
                {thread.description}
              </p>
              <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-3 uppercase">
                // {totalItems} {totalItems === 1 ? "voice" : "voices"} in the void
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Post input */}
      <section className="border-b border-[#1a1a1a] px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-4">
            // your voice
          </p>
          <ThreadPostInput slug={slug} prompt={thread.prompt} />
        </div>
      </section>

      {/* Feed */}
      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-4">
            // the thread
          </p>
          <ThreadFeed
            slug={slug}
            symbol={thread.symbol}
            initialPosts={posts}
            initialTotalPages={totalPages}
          />
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
