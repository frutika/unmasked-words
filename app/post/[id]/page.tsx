import { createPocketBase, type Post } from "@/lib/pocketbase";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavLogo from "@/components/NavLogo";

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
    return { title: "Post not found — UnmaskedWords" };
  }

  const excerpt = post.content.slice(0, 100) + (post.content.length > 100 ? "..." : "");

  return {
    title: `Unmasked Truth #${id} — UnmaskedWords`,
    description: excerpt,
    openGraph: {
      title: `Unmasked Truth #${id}`,
      description: excerpt,
      url: `https://unmaskedwords.com/post/${id}`,
      siteName: "UnmaskedWords",
      type: "article",
      images: [
        {
          url: "https://unmaskedwords.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "UnmaskedWords",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Unmasked Truth #${id}`,
      description: excerpt,
      images: ["https://unmaskedwords.com/og-image.png"],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <header className="border-b border-[#1a1a1a] px-6 py-5">
        <div className="max-w-2xl mx-auto flex items-baseline justify-between">
          <div className="flex items-center gap-4">
            <NavLogo />
            <span className="font-mono font-black text-[#f0f0f0] tracking-tight" style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.6rem)" }}>
              UNMASKED<span className="text-[#ff3c00]">WORDS</span>
            </span>
          </div>
          <Link href="/" className="font-mono text-[#333333] text-xs tracking-widest uppercase hover:text-[#555555] transition-colors">
            ← back to feed
          </Link>
        </div>
      </header>

      <section className="flex-1 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#333333] text-xs tracking-widest uppercase mb-6">
            // unmasked truth #{id}
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
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#444444] text-xs text-center tracking-widest">
            NO ACCOUNTS. NO TRACKING. NO FILTERS.
          </p>
        </div>
      </footer>
    </main>
  );
}
