import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Anonymous Expression, Digital Privacy & Raw Honesty | UnmaskedWords",
  description:
    "Essays and guides on anonymous expression, digital privacy, social media fatigue, and the philosophy behind faceless communication.",
  alternates: { canonical: "https://unmaskedwords.com/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Blog | UnmaskedWords",
    description: "Essays on anonymous expression, digital privacy, and raw honesty.",
    url: "https://unmaskedwords.com/blog",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | UnmaskedWords",
    description: "Essays on anonymous expression, digital privacy, and raw honesty.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "UnmaskedWords Blog",
  description: "Essays on anonymous expression, digital privacy, and raw honesty.",
  url: "https://unmaskedwords.com/blog",
  isPartOf: { "@type": "WebSite", name: "UnmaskedWords", url: "https://unmaskedwords.com" },
  inLanguage: "en-US",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
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

      <div className="flex-1 px-6 py-14">
        <div className="max-w-xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // blog
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-16"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            WORDS ABOUT<br />
            <span className="text-[#ff3c00]">THE WORDLESS.</span>
          </h1>

          <div className="flex flex-col gap-0">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border-t border-[#1a1a1a] pt-8 pb-8 block hover:bg-[#0d0d0d] transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <p className="font-mono text-[#555555] text-[10px] tracking-widest uppercase">
                    {formatDate(post.publishedAt)}
                  </p>
                  <p className="font-mono text-[#555555] text-[10px] tracking-widest uppercase flex-shrink-0">
                    {post.readingTime}
                  </p>
                </div>
                <h2 className="font-mono font-black text-[#f0f0f0] text-lg leading-snug mb-3 group-hover:text-[#ff3c00] transition-colors">
                  {post.headline.replace(/\n/g, " ")}
                </h2>
                <p className="font-mono text-[#888888] text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="font-mono text-[#ff3c00] text-xs tracking-widest uppercase">
                  read →
                </span>
              </Link>
            ))}
            <div className="border-t border-[#1a1a1a]" />
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
