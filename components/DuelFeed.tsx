"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { Duel } from "@/lib/pocketbase";
import DuelCard from "./DuelCard";

const PER_PAGE = 10;

interface DuelFeedProps {
  initialDuels: Duel[];
  initialTotalPages: number;
  myDuelId?: string | null;
  mySide?: "a" | "b" | null;
}

export default function DuelFeed({ initialDuels, initialTotalPages, myDuelId, mySide }: DuelFeedProps) {
  const [duels, setDuels] = useState<Duel[]>(initialDuels);
  const [nextPage, setNextPage] = useState(2);
  const [hasMore, setHasMore] = useState(initialTotalPages > 1);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadedIds = useRef(new Set(initialDuels.map((d) => d.id)));
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    try {
      const res = await fetch(`/api/duel/feed?page=${nextPage}&perPage=${PER_PAGE}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      const fresh: Duel[] = (data.items ?? []).filter((d: Duel) => !loadedIds.current.has(d.id));
      fresh.forEach((d) => loadedIds.current.add(d.id));
      setDuels((prev) => [...prev, ...fresh]);
      setHasMore(nextPage < (data.totalPages ?? 0));
      setNextPage((n) => n + 1);
    } catch {
      // keep hasMore true so user can retry
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, hasMore, nextPage]);

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

  if (duels.length === 0) {
    return (
      <div className="border border-[#1a1a1a] p-10 text-center">
        <p className="font-mono text-[#888888] text-xs tracking-widest">
          // no completed duels yet. enter the duel to be first.
        </p>
      </div>
    );
  }

  return (
    <div>
      {duels.map((duel) => (
        <DuelCard
          key={duel.id}
          duel={duel}
          mySide={duel.id === myDuelId ? (mySide ?? null) : null}
        />
      ))}
      <div ref={sentinelRef} className="py-6 text-center">
        {loadingMore && (
          <span className="font-mono text-[#888888] text-xs tracking-widest">// loading...</span>
        )}
        {!hasMore && duels.length > 0 && (
          <span className="font-mono text-[#888888] text-xs tracking-widest">// end of duels</span>
        )}
      </div>
    </div>
  );
}
