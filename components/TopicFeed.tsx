"use client";

import { useEffect, useState } from "react";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import Link from "next/link";

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export default function TopicFeed({ topic }: { topic: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pb = createPocketBase();
    pb.collection("posts_en")
      .getList<Post>(1, 50, {
        sort: "-created",
        filter: `topic="${topic}"`,
      })
      .then((r) => { setPosts(r.items); setLoading(false); })
      .catch(() => setLoading(false));

    // listen for new posts from this session
    const handler = () => {
      pb.collection("posts_en")
        .getList<Post>(1, 50, { sort: "-created", filter: `topic="${topic}"` })
        .then((r) => setPosts(r.items))
        .catch(() => {});
    };
    window.addEventListener("post-submitted", handler);
    return () => window.removeEventListener("post-submitted", handler);
  }, [topic]);

  if (loading) {
    return (
      <p className="font-mono text-[#444444] text-xs tracking-widest animate-pulse">
        // loading...
      </p>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="space-y-4">
        <p className="font-mono text-[#444444] text-xs leading-relaxed">
          No heartbreak signals yet.
        </p>
        <Link
          href={`/?topic=${topic}`}
          className="inline-block font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
        >
          Heartbreak signals
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0">
      {posts.map((post) => (
        <article
          key={post.id}
          className="border-b border-[#1a1a1a] py-5 last:border-b-0"
        >
          <p className="font-mono text-[#f0f0f0] text-sm leading-relaxed mb-3">
            {post.content}
          </p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[#555555] text-[10px] tracking-widest">
              {post.alias || "Anonymous"}
            </span>
            <span className="font-mono text-[#333333] text-[10px]">·</span>
            <span className="font-mono text-[#333333] text-[10px] tabular-nums">
              {timeAgo(post.created)}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
