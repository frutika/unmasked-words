"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { Post } from "@/lib/pocketbase";
import ShareMenu from "./ShareMenu";

const PER_PAGE = 20;

type ReactedMap = Record<string, { plus: boolean; bang: boolean }>;

function getReacted(): ReactedMap {
  try { return JSON.parse(localStorage.getItem("uw_reacted") ?? "{}"); }
  catch { return {}; }
}
function setReacted(map: ReactedMap) {
  try { localStorage.setItem("uw_reacted", JSON.stringify(map)); } catch {}
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const s = Math.floor(diff / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

interface FeedProps {
  initialPosts: Post[];
  initialTotalPages: number;
}

export default function Feed({ initialPosts, initialTotalPages }: FeedProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const [reacted, setReactedState] = useState<ReactedMap>({});
  const [nextPage, setNextPage] = useState(2);
  const [hasMore, setHasMore] = useState(initialTotalPages > 1);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadedIds = useRef<Set<string>>(new Set(initialPosts.map((p) => p.id)));
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setReactedState(getReacted()); }, []);

  const poll = useCallback(async () => {
    try {
      const res = await fetch(`/api/posts?page=1&perPage=${PER_PAGE}`);
      if (!res.ok) return;
      const data = await res.json();
      const fresh: Post[] = (data.items ?? []).filter(
        (p: Post) => !loadedIds.current.has(p.id)
      );
      if (fresh.length === 0) return;
      fresh.forEach((p) => loadedIds.current.add(p.id));
      setNewIds(new Set(fresh.map((p) => p.id)));
      setTimeout(() => setNewIds(new Set()), 2500);
      setPosts((prev) => [...fresh, ...prev]);
    } catch {}
  }, []);

  // Interval poll
  useEffect(() => {
    const id = setInterval(poll, 10_000);
    return () => clearInterval(id);
  }, [poll]);

  // Immediate poll on post-submitted event
  useEffect(() => {
    window.addEventListener("post-submitted", poll);
    return () => window.removeEventListener("post-submitted", poll);
  }, [poll]);

  // load next page
  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    try {
      const res = await fetch(`/api/posts?page=${nextPage}&perPage=${PER_PAGE}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      const items: Post[] = (data.items ?? []).filter(
        (p: Post) => !loadedIds.current.has(p.id)
      );
      items.forEach((p) => loadedIds.current.add(p.id));
      setPosts((prev) => [...prev, ...items]);
      const more = nextPage < (data.totalPages ?? 0);
      setHasMore(more);
      setNextPage((n) => n + 1);
    } catch {
      // leave hasMore true so user can retry
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, hasMore, nextPage]);

  // IntersectionObserver sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMore(); },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  // reactions
  const react = useCallback(async (postId: string, type: "+" | "!") => {
    const field = type === "+" ? "plus" : "bang";
    const current = reacted[postId]?.[field] ?? false;
    const action = current ? "remove" : "add";
    const delta = action === "add" ? 1 : -1;

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
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId ? { ...p, [field]: Math.max(0, (p[field] ?? 0) - delta) } : p
        )
      );
      setReactedState(reacted);
      setReacted(reacted);
    });
  }, [reacted]);

  if (posts.length === 0) {
    return (
      <div className="border border-[#1a1a1a] p-12 text-center">
        <p className="font-mono text-[#888888] text-sm tracking-widest uppercase mb-2">
          // the void is silent.
        </p>
        <p className="font-mono text-[#888888] text-xs tracking-widest">
          be the first to speak.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0">
      {posts.map((post, i) => {
        const isShort = post.content.trim().length < 100;
        return (
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
              className={`font-mono text-[#f0f0f0] whitespace-pre-wrap break-words ${isShort ? "font-bold" : "leading-relaxed"}`}
              style={
                isShort
                  ? { fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)", letterSpacing: "0.01em", lineHeight: "1.5" }
                  : { fontSize: "clamp(0.875rem, 2vw, 1rem)", letterSpacing: "0.01em", lineHeight: "1.75" }
              }
            >
              {post.content}
            </p>
            <div className="flex items-center justify-between mt-4 gap-4">
              <span className="font-mono text-[#ff3c00] text-xs font-bold tracking-wider uppercase truncate min-w-0 max-w-[40%]">
                — {post.alias || "Anonymous"}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => react(post.id, "+")}
                  title="resonates"
                  className={`font-mono text-xs tabular-nums transition-opacity ${
                    reacted[post.id]?.plus ? "opacity-100" : "opacity-60 hover:opacity-85"
                  }`}
                >
                  [ + {post.plus ?? 0} ]
                </button>
                <button
                  onClick={() => react(post.id, "!")}
                  title="felt this"
                  className={`font-mono text-xs tabular-nums transition-opacity ${
                    reacted[post.id]?.bang ? "opacity-100" : "opacity-60 hover:opacity-85"
                  }`}
                >
                  [ ! {post.bang ?? 0} ]
                </button>
                <span className="font-mono text-[#888888] text-xs tabular-nums">
                  {timeAgo(post.created)}
                </span>
                <ShareMenu postId={post.id} content={post.content} />
              </div>
            </div>
          </article>
        );
      })}

      {/* sentinel + status */}
      <div ref={sentinelRef} className="py-6 text-center">
        {loadingMore && (
          <span className="font-mono text-[#888888] text-xs tracking-widest">
            // loading...
          </span>
        )}
        {!hasMore && posts.length > 0 && (
          <span className="font-mono text-[#888888] text-xs tracking-widest">
            // end of feed
          </span>
        )}
      </div>
    </div>
  );
}
