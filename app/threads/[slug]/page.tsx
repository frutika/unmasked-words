import { createPocketBase, type ThreadPost } from "@/lib/pocketbase";
import { THREADS, getThread } from "@/lib/threads";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ThreadFeed from "@/components/ThreadFeed";
import ThreadPostInput from "@/components/ThreadPostInput";
import SiteFooter from "@/components/SiteFooter";

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
    title: thread.seoTitle,
    description: thread.seoDescription,
    keywords: thread.seoKeywords,
    alternates: { canonical: `https://unmaskedwords.com/threads/${slug}` },
    openGraph: {
      title: `${thread.seoTitle} | UnmaskedWords`,
      description: thread.seoDescription,
      url: `https://unmaskedwords.com/threads/${slug}`,
      siteName: "UnmaskedWords",
      type: "website",
      locale: "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `UnmaskedWords — ${thread.title} Thread` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${thread.seoTitle} | UnmaskedWords`,
      description: thread.seoDescription,
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

  const relatedThreads = thread.related
    .map((r) => THREADS.find((t) => t.slug === r))
    .filter(Boolean) as typeof THREADS;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: thread.seoTitle,
      description: thread.seoDescription,
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

      {/* SEO intro */}
      <section className="border-b border-[#1a1a1a] px-6 py-8">
        <div className="max-w-2xl mx-auto space-y-4">
          {thread.seoIntro.split("\n\n").map((paragraph, i) => (
            <p key={i} className={`font-mono text-sm leading-relaxed ${i === 0 ? "text-[#aaaaaa]" : "text-[#555555]"}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

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

      {/* Related threads — internal linking */}
      {relatedThreads.length > 0 && (
        <section className="border-t border-[#1a1a1a] px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-4">
              // related threads
            </p>
            <div className="flex flex-wrap gap-2">
              {relatedThreads.map((related) => (
                <Link
                  key={related.slug}
                  href={`/threads/${related.slug}`}
                  className="group flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[#1a1a1a] text-[#888888] hover:text-[#f0f0f0] hover:border-[#333333] transition-colors duration-100"
                >
                  <span className="text-[#ff3c00] group-hover:text-[#ff3c00]">{related.symbol}</span>
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
