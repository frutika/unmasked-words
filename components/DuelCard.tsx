"use client";

import { useState, useCallback } from "react";
import type { Duel } from "@/lib/pocketbase";
import Link from "next/link";

interface DuelCardProps {
  duel: Duel;
  mySide?: "a" | "b" | null;
}

function getVoted(): Record<string, "a" | "b"> {
  try { return JSON.parse(localStorage.getItem("uw_voted_duels") ?? "{}"); }
  catch { return {}; }
}
function saveVoted(id: string, side: "a" | "b") {
  try {
    const all = getVoted();
    localStorage.setItem("uw_voted_duels", JSON.stringify({ ...all, [id]: side }));
  } catch {}
}

export default function DuelCard({ duel, mySide }: DuelCardProps) {
  const [votesA, setVotesA] = useState(duel.votes_a ?? 0);
  const [votesB, setVotesB] = useState(duel.votes_b ?? 0);
  const [voted, setVoted] = useState<"a" | "b" | null>(() => {
    if (typeof window === "undefined") return null;
    return getVoted()[duel.id] ?? null;
  });
  const [voting, setVoting] = useState(false);

  const total = votesA + votesB;
  const pctA = total > 0 ? Math.round((votesA / total) * 100) : 50;
  const pctB = 100 - pctA;

  const vote = useCallback(async (side: "a" | "b") => {
    if (voted || voting || mySide) return;
    setVoting(true);
    const prev = { a: votesA, b: votesB };
    if (side === "a") setVotesA((n) => n + 1);
    else setVotesB((n) => n + 1);
    setVoted(side);
    saveVoted(duel.id, side);

    const res = await fetch(`/api/duel/${duel.id}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ side }),
    }).catch(() => null);

    if (res?.ok) {
      const data = await res.json().catch(() => null);
      if (data) { setVotesA(data.votes_a); setVotesB(data.votes_b); }
    } else {
      // rollback
      setVotesA(prev.a);
      setVotesB(prev.b);
      setVoted(null);
      try { const all = getVoted(); delete all[duel.id]; localStorage.setItem("uw_voted_duels", JSON.stringify(all)); } catch {}
    }
    setVoting(false);
  }, [voted, voting, mySide, votesA, votesB, duel.id]);

  const isYourDuel = !!mySide;
  const canVote = !voted && !isYourDuel;

  return (
    <div className="border-b border-[#1a1a1a] py-8">
      {/* Question */}
      <Link href={`/duel/${duel.id}`} className="group block mb-6">
        <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-2">
          // the question
        </p>
        <p className="font-mono text-[#f0f0f0] text-sm leading-relaxed group-hover:text-[#ff3c00] transition-colors">
          "{duel.question}"
        </p>
      </Link>

      {/* Answers side-by-side */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-start">
        {/* Side A */}
        <div className={`border p-4 transition-colors ${
          voted === "a" ? "border-[#ff3c00] bg-[#1a0a00]" :
          voted === "b" ? "border-[#1a1a1a] opacity-50" :
          "border-[#1a1a1a] hover:border-[#2a2a2a]"
        }`}>
          <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-3">
            {mySide === "a" ? "// you" : "// side A"}
          </p>
          <p className="font-mono text-[#f0f0f0] text-sm leading-relaxed whitespace-pre-wrap break-words">
            {duel.answer_a}
          </p>
          <p className="font-mono text-[#ff3c00] text-[10px] font-bold tracking-wider uppercase mt-3">
            — {duel.alias_a || "Anonymous"}
          </p>
        </div>

        {/* VS divider */}
        <div className="flex sm:flex-col items-center justify-center gap-2 py-2 sm:py-4">
          <div className="hidden sm:block w-px h-8 bg-[#1a1a1a]" />
          <span className="font-mono font-black text-[#888888] text-xs">VS</span>
          <div className="hidden sm:block w-px h-8 bg-[#1a1a1a]" />
        </div>

        {/* Side B */}
        <div className={`border p-4 transition-colors ${
          voted === "b" ? "border-[#ff3c00] bg-[#1a0a00]" :
          voted === "a" ? "border-[#1a1a1a] opacity-50" :
          "border-[#1a1a1a] hover:border-[#2a2a2a]"
        }`}>
          <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-3">
            {mySide === "b" ? "// you" : "// side B"}
          </p>
          <p className="font-mono text-[#f0f0f0] text-sm leading-relaxed whitespace-pre-wrap break-words">
            {duel.answer_b}
          </p>
          <p className="font-mono text-[#ff3c00] text-[10px] font-bold tracking-wider uppercase mt-3">
            — {duel.alias_b || "Anonymous"}
          </p>
        </div>
      </div>

      {/* Vote bar + buttons */}
      <div className="mt-4">
        {voted || isYourDuel ? (
          <div>
            {/* Result bar */}
            <div className="h-[2px] bg-[#0f0f0f] overflow-hidden mb-2">
              <div
                className="h-full bg-[#ff3c00] transition-all duration-700"
                style={{ width: `${pctA}%` }}
              />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-[#888888] tracking-widest">
              <span>{pctA}% SIDE A · {votesA} {votesA === 1 ? "vote" : "votes"}</span>
              <span>{votesB} {votesB === 1 ? "vote" : "votes"} · {pctB}% SIDE B</span>
            </div>
            {isYourDuel && (
              <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-1">
                // you cannot vote on your own duel
              </p>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => vote("a")}
              disabled={voting}
              className="flex-1 font-mono text-xs font-bold py-2 border border-[#2a2a2a] text-[#888888] hover:border-[#ff3c00] hover:text-[#ff3c00] transition-colors duration-100 disabled:opacity-30"
            >
              VOTE A
            </button>
            <button
              onClick={() => vote("b")}
              disabled={voting}
              className="flex-1 font-mono text-xs font-bold py-2 border border-[#2a2a2a] text-[#888888] hover:border-[#ff3c00] hover:text-[#ff3c00] transition-colors duration-100 disabled:opacity-30"
            >
              VOTE B
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
