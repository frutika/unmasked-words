export const dynamic = "force-dynamic";

import { createPocketBase, type Post } from "@/lib/pocketbase";
import PostInput from "@/components/PostInput";
import NavLogo from "@/components/NavLogo";
import MiningBadge from "@/components/MiningBadge";
import Link from "next/link";
import Feed from "@/components/Feed";
import VisitorCount from "@/components/VisitorCount";

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

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-[#1a1a1a] px-6 py-5">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 min-w-0">
            <NavLogo />
            <div className="min-w-0">
              <h1
                className="font-mono font-black text-[#f0f0f0] tracking-tight leading-none"
                style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)" }}
              >
                UNMASKED<span className="text-[#ff3c00]">WORDS</span>
              </h1>
              <p className="font-mono text-[#555555] text-xs mt-1 tracking-widest uppercase hidden sm:block">
                say it without a face
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <VisitorCount />
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff3c00]" />
              <span className="font-mono text-[#555555] text-xs tabular-nums">
                {posts.length} post{posts.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-[#1a1a1a] px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#555555] text-xs tracking-widest uppercase mb-4">
            // your thought
          </p>
          <PostInput />
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#555555] text-xs tracking-widest uppercase mb-4">
            // live feed
          </p>
          <Feed initialPosts={posts} />
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] px-6 py-5 mt-8">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[#444444] text-xs tracking-widest">
            NO ACCOUNTS. NO TRACKING. NO FILTERS.
          </p>
          <div className="flex items-center gap-4">
            <MiningBadge />
            <Link
              href="/about"
              className="font-mono text-[#555555] text-xs tracking-widest uppercase hover:text-[#ff3c00] transition-colors"
            >
              manifesto →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
