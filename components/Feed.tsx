"use client";

import { useEffect, useState, useCallback } from "react";
import type { Post } from "@/lib/pocketbase";
import ShareMenu from "./ShareMenu";

type ReactedMap = Record<string, { plus: boolean; bang: boolean }>;

function getReacted(): ReactedMap {
  try {
    return JSON.parse(localStorage.getItem("uw_reacted") ?? "{}");
  } catch {
    return {};
  }
}

function setReacted(map: ReactedMap) {
  try {
    localStorage.setItem("uw_reacted", JSON.stringify(map));
  } catch {}
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const s = Math.floor(diff / 1000);
  if (s < 60) return `posted ${s} second${s !== 1 ? "s" : ""} ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `posted ${m} minute${m !== 1 ? "s" : ""} ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `posted ${h} hour${h !== 1 ? "s" : ""} ago`;
  const d = Math.floor(h / 24);
  return `posted ${d} day${d !== 1 ? "s" : ""} ago`;
}

export default function Feed({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const [reacted, setReactedState] = useState<ReactedMap>({});

  useEffect(() => {
    setReactedState(getReacted());
  }, []);

  const react = useCallback(async (postId: string, type: "+" | "!") => {
    const field = type === "+" ? "plus" : "bang";
    const current = reacted[postId]?.[field] ?? false;
    const action = current ? "remove" : "add";
    const delta = action === "add" ? 1 : -1;

    // optimistic update
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, [field]: Math.max(0, (p[field] ?? 0) + delta) } : p
      )
    );
    const next = {
      ...reacted,
      [postId]: { ...(reacted[postId] ?? { plus: false, bang: false }), [field]: !current },
    };
    setReactedState(next);
    setReacted(next);

    await fetch("/api/react", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId, type, action }),
    }).catch(() => {
      // revert on error
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId ? { ...p, [field]: Math.max(0, (p[field] ?? 0) - delta) } : p
        )
      );
      setReactedState(reacted);
      setReacted(reacted);
    });
  }, [reacted]);

  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) return;
        const latest: Post[] = await res.json();
        setPosts((prev) => {
          const prevIds = new Set(prev.map((p) => p.id));
          const fresh = latest.filter((p) => !prevIds.has(p.id));
          if (fresh.length === 0) return prev;
          setNewIds(new Set(fresh.map((p) => p.id)));
          setTimeout(() => setNewIds(new Set()), 2000);
          return [...fresh, ...prev];
        });
      } catch {
        // ignore transient errors
      }
    };

    const id = setInterval(poll, 10_000);
    return () => clearInterval(id);
  }, []);

  if (posts.length === 0) {
    return (
      <div className="border border-[#1a1a1a] p-8 text-center">
        <p className="font-mono text-[#333333] text-sm tracking-widest uppercase">
          No words yet. Be the first.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0">
      {posts.map((post, i) => (
        <article
          key={post.id}
          className={`border-b border-[#1a1a1a] p-6 transition-all duration-500 ${
            newIds.has(post.id)
              ? "bg-[#1a0a00] border-l-2 border-l-[#ff3c00]"
              : i % 2 === 0
              ? "bg-[#0a0a0a]"
              : "bg-[#0d0d0d]"
          }`}
        >
          <p
            className="font-mono text-[#f0f0f0] leading-relaxed whitespace-pre-wrap break-words"
            style={{
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              letterSpacing: "0.01em",
            }}
          >
            {post.content}
          </p>
          <div className="flex items-center justify-between mt-4 gap-4">
            <span className="font-mono text-[#ff3c00] text-xs font-bold tracking-wider uppercase">
              — {post.alias || "Anonymous"}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => react(post.id, "+")}
                className={`font-mono text-xs tabular-nums transition-opacity ${
                  reacted[post.id]?.plus ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                [ + {post.plus ?? 0} ]
              </button>
              <button
                onClick={() => react(post.id, "!")}
                className={`font-mono text-xs tabular-nums transition-opacity ${
                  reacted[post.id]?.bang ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                [ ! {post.bang ?? 0} ]
              </button>
              <span className="font-mono text-[#555555] text-xs tabular-nums">
                {timeAgo(post.created)}
              </span>
              <ShareMenu postId={post.id} content={post.content} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
