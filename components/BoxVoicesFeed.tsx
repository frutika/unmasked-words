"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { BoxVoice } from "@/lib/pocketbase";

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  if (h < 24) return `${h}h ago`;
  return `${d}d ago`;
}

interface Props {
  initialVoices: BoxVoice[];
  initialTotalPages: number;
}

export default function BoxVoicesFeed({ initialVoices, initialTotalPages }: Props) {
  const [voices, setVoices] = useState<BoxVoice[]>(initialVoices);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || page >= totalPages) return;
    setLoading(true);
    const nextPage = page + 1;
    try {
      const res = await fetch(`/api/box/voices?page=${nextPage}`);
      if (!res.ok) return;
      const data = await res.json();
      setVoices((prev) => [...prev, ...(data.voices ?? [])]);
      setPage(nextPage);
      setTotalPages(data.totalPages ?? 0);
    } finally {
      setLoading(false);
    }
  }, [loading, page, totalPages]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMore(); },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loadMore]);

  if (voices.length === 0) {
    return (
      <div className="border border-[#1a1a1a] p-10 text-center">
        <p className="font-mono text-[#888888] text-xs tracking-widest uppercase">
          // the box is empty. no voices yet.
        </p>
        <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-2">
          thoughts need 24 hours to become voices.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {voices.map((voice) => (
        <div key={voice.id} className="border-l-2 border-[#1a1a1a] pl-5 py-1">
          <p
            className="font-mono text-[#c0c0c0] leading-relaxed mb-2"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)" }}
          >
            &ldquo;{voice.fragment}&rdquo;
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-[#888888] text-[10px] tracking-widest">
              {voice.thought_alias || "Anonymous"}
            </span>
            <span aria-hidden="true" className="font-mono text-[#222222] text-[10px]">·</span>
            <span className="font-mono text-[#888888] text-[10px] tabular-nums">
              {timeAgo(voice.extracted_at || voice.created)}
            </span>
            {voice.original_length > 0 && (
              <>
                <span aria-hidden="true" className="font-mono text-[#222222] text-[10px]">·</span>
                <span aria-hidden="true" className="font-mono text-[#282828] text-[10px]">
                  from {voice.original_length}c thought
                </span>
              </>
            )}
          </div>
        </div>
      ))}

      <div ref={sentinelRef} className="h-4" />
      {loading && (
        <p className="font-mono text-[#888888] text-xs tracking-widest text-center py-4">
          // loading...
        </p>
      )}
    </div>
  );
}
