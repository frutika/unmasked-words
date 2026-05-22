export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import { TOPICS, getTopic } from "@/lib/topics";
import SiteHeader from "@/components/SiteHeader";
import LandingPostsList from "@/components/LandingPostsList";
import MiningBadge from "@/components/MiningBadge";
import SiteFooter from "@/components/SiteFooter";

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return { title: "Not Found" };

  const title = `Anonymous Thoughts About ${topic.title}`;
  const description = `Read real anonymous thoughts about ${topic.title.toLowerCase()}. ${topic.description.charAt(0).toUpperCase() + topic.description.slice(1)}. No accounts. No filters. Just the honest truth.`;

  return {
    title,
    description,
    keywords: [
      `anonymous thoughts about ${topic.title.toLowerCase()}`,
      `${topic.title.toLowerCase()} confessions`,
      `${topic.title.toLowerCase()} anonymous`,
      ...topic.keywords,
    ],
    alternates: { canonical: `https://unmaskedwords.com/anonymous-thoughts/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://unmaskedwords.com/anonymous-thoughts/${slug}`,
      siteName: "UnmaskedWords",
      type: "website",
      locale: "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Anonymous thoughts about ${topic.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

async function getPosts(): Promise<Post[]> {
  try {
    const pb = createPocketBase();
    const result = await pb.collection("posts_en").getList<Post>(1, 50, {
      sort: "-created",
    });
    return result.items;
  } catch {
    return [];
  }
}

export default async function TopicPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const posts = await getPosts();

  const relatedTopics = topic.related
    .map((r) => TOPICS.find((t) => t.slug === r))
    .filter(Boolean) as typeof TOPICS;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Anonymous Thoughts About ${topic.title}`,
    description: topic.description,
    url: `https://unmaskedwords.com/anonymous-thoughts/${slug}`,
    isPartOf: { "@type": "WebSite", name: "UnmaskedWords", url: "https://unmaskedwords.com" },
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://unmaskedwords.com" },
        { "@type": "ListItem", position: 2, name: "Anonymous Thoughts", item: "https://unmaskedwords.com/anonymous-thoughts" },
        { "@type": "ListItem", position: 3, name: topic.title, item: `https://unmaskedwords.com/anonymous-thoughts/${slug}` },
      ],
    },
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
            href="/anonymous-thoughts"
            className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
          >
            ← all topics
          </Link>
        }
      />

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // anonymous thoughts about
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-3"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            {topic.title.toUpperCase()}
          </h1>
          <p className="font-mono text-[#888888] text-sm">
            {topic.description}
          </p>
        </div>
      </section>

      {/* Intro copy */}
      <section className="border-b border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {topic.intro.split("\n\n").map((paragraph, i) => (
              <p key={i} className={`font-mono text-sm leading-relaxed ${i === 0 ? "text-[#aaaaaa]" : "text-[#888888]"}`}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
            >
              POST ANONYMOUSLY →
            </Link>
          </div>
        </div>
      </section>

      {/* Live posts */}
      <section className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // from the void — anonymous thoughts, posted without a face
          </p>
          <LandingPostsList posts={posts} />
        </div>
      </section>

      {/* Related topics — internal linking */}
      {relatedTopics.length > 0 && (
        <section className="border-t border-[#1a1a1a] px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
              // related topics
            </p>
            <div className="flex flex-wrap gap-2">
              {relatedTopics.map((related) => (
                <Link
                  key={related.slug}
                  href={`/anonymous-thoughts/${related.slug}`}
                  className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[#1a1a1a] text-[#888888] hover:text-[#f0f0f0] hover:border-[#333333] transition-colors duration-100"
                >
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
