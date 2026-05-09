import { createPocketBase, type Post } from "@/lib/pocketbase";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import PostReactions from "@/components/PostReactions";

interface Props {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post | null> {
  try {
    const pb = createPocketBase();
    return await pb.collection("posts_en").getOne<Post>(id);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return { title: "Post not found" };
  }

  const excerpt = post.content.slice(0, 155) + (post.content.length > 155 ? "..." : "");
  const titleExcerpt = post.content.slice(0, 60) + (post.content.length > 60 ? "..." : "");
  const publishedTime = post.created ? new Date(post.created).toISOString() : undefined;

  return {
    title: titleExcerpt,
    description: excerpt,
    keywords: ["anonymous thought", "unmasked", "confession", "raw truth"],
    alternates: { canonical: `https://unmaskedwords.com/post/${id}` },
    openGraph: {
      title: titleExcerpt,
      description: excerpt,
      url: `https://unmaskedwords.com/post/${id}`,
      siteName: "UnmaskedWords",
      type: "article",
      locale: "en_US",
      publishedTime,
      images: [{ url: "https://unmaskedwords.com/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords — Say it without a face" }],
    },
    twitter: {
      card: "summary_large_image",
      title: titleExcerpt,
      description: excerpt,
      images: ["https://unmaskedwords.com/og-image.png"],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.content.slice(0, 110),
      description: post.content.slice(0, 155),
      url: `https://unmaskedwords.com/post/${id}`,
      datePublished: post.created ? new Date(post.created).toISOString() : undefined,
      author: { "@type": "Person", name: post.alias || "Anonymous" },
      publisher: { "@type": "Organization", name: "UnmaskedWords", url: "https://unmaskedwords.com" },
      inLanguage: "en-US",
      isPartOf: { "@type": "WebSite", name: "UnmaskedWords", url: "https://unmaskedwords.com" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://unmaskedwords.com" },
        { "@type": "ListItem", position: 2, name: "Post", item: `https://unmaskedwords.com/post/${id}` },
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
            href="/"
            className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
          >
            ← feed
          </Link>
        }
      />

      <section className="flex-1 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // truth #{id}
          </p>
          <blockquote className="border-l-2 border-[#ff3c00] pl-6">
            <p
              className="font-mono text-[#f0f0f0] leading-relaxed whitespace-pre-wrap break-words"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", letterSpacing: "0.02em" }}
            >
              {post.content}
            </p>
            <footer className="mt-6 font-mono text-[#ff3c00] text-sm font-bold tracking-wider uppercase">
              — {post.alias || "Anonymous"}
            </footer>
          </blockquote>
          <PostReactions post={post} />
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <p aria-hidden="true" className="font-mono text-[#444444] text-xs text-center tracking-widest">
            NO ACCOUNTS. NO TRACKING. NO FILTERS.
          </p>
        </div>
      </footer>
    </main>
  );
}
