"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Duel } from "@/lib/pocketbase";

interface DuelWaitingProps {
  duel: Duel;
  mySide: "a" | "b";
}

export default function DuelWaiting({ duel, mySide }: DuelWaitingProps) {
  const router = useRouter();
  const [dots, setDots] = useState(".");

  const myAnswer = mySide === "a" ? duel.answer_a : duel.answer_b;
  const myAlias = mySide === "a" ? duel.alias_a : duel.alias_b;

  // Animate ellipsis
  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => d.length >= 3 ? "." : d + ".");
    }, 600);
    return () => clearInterval(id);
  }, []);

  // Poll for completion
  const checkStatus = useCallback(async () => {
    try {
      const res = await fetch(`/api/duel/${duel.id}`);
      if (!res.ok) return;
      const data: Duel = await res.json();
      if (data.status === "complete") {
        router.refresh();
      }
    } catch {}
  }, [duel.id, router]);

  useEffect(() => {
    const id = setInterval(checkStatus, 5000);
    return () => clearInterval(id);
  }, [checkStatus]);

  return (
    <div className="w-full">
      {/* Status */}
      <div className="border-b border-[#1a1a1a] pb-8 mb-8">
        <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-3">
          // status
        </p>
        <p
          className="font-mono font-black text-[#f0f0f0] leading-none"
          style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", letterSpacing: "-0.02em" }}
        >
          WAITING FOR
          <br />
          OPPONENT
          <span className="text-[#ff3c00]">{dots}</span>
        </p>
        <p className="font-mono text-[#888888] text-xs mt-3 tracking-widest">
          // checking every 5 seconds — come back anytime
        </p>
      </div>

      {/* Sealed answer */}
      <div>
        <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-3">
          // your answer is sealed
        </p>
        <div className="border border-[#1a1a1a] bg-[#0d0d0d] p-5 opacity-60">
          <p className="font-mono text-[#888888] text-sm leading-relaxed whitespace-pre-wrap break-words">
            {myAnswer}
          </p>
          <p className="font-mono text-[#ff3c00] text-[10px] font-bold tracking-wider uppercase mt-3">
            — {myAlias || "Anonymous"}
          </p>
        </div>
        <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-2">
          // sealed until opponent responds. then the void decides.
        </p>
      </div>
    </div>
  );
}
