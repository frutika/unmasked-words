"use client";

import { useEffect, useState } from "react";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import Link from "next/link";
import ShareMenu from "@/components/ShareMenu";

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
    return null;
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
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#555555] text-[10px] tracking-widest">
                {post.alias || "Anonymous"}
              </span>
              <span className="font-mono text-[#333333] text-[10px]">·</span>
              <Link
                href={`/post/${post.id}`}
                className="font-mono text-[#333333] text-[10px] tabular-nums hover:text-[#555555] transition-colors"
              >
                {timeAgo(post.created)}
              </Link>
            </div>
            <ShareMenu postId={post.id} content={post.content} />
          </div>
        </article>
      ))}
    </div>
  );
}
