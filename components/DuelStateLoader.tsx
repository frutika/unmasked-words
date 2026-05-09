"use client";

import { useEffect, useState } from "react";
import type { Duel } from "@/lib/pocketbase";
import DuelCard from "./DuelCard";
import DuelWaiting from "./DuelWaiting";

interface MyDuelRecord {
  id: string;
  side: "a" | "b";
  created: number;
}

function getMyDuel(): MyDuelRecord | null {
  try { return JSON.parse(localStorage.getItem("uw_my_duel") ?? "null"); }
  catch { return null; }
}

interface Props {
  duelId: string;
  duel?: Duel;
  waiting?: boolean;
  children?: React.ReactNode;
}

export default function DuelStateLoader({ duelId, duel, waiting, children }: Props) {
  const [mySide, setMySide] = useState<"a" | "b" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const record = getMyDuel();
    if (record?.id === duelId) setMySide(record.side);
    setMounted(true);
  }, [duelId]);

  if (!mounted) {
    // SSR/hydration placeholder — renders the children directly (no mySide)
    if (waiting && duel) {
      return (
        <div className="opacity-0">
          <DuelWaiting duel={duel} mySide="a" />
        </div>
      );
    }
    return <>{children}</>;
  }

  if (waiting && duel) {
    if (!mySide) {
      // Someone else viewing a waiting duel (not a participant)
      return (
        <div className="border border-[#1a1a1a] p-10 text-center">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-2">
            // duel in progress
          </p>
          <p className="font-mono text-[#888888] text-xs tracking-widest">
            waiting for opponent to answer...
          </p>
        </div>
      );
    }
    return <DuelWaiting duel={duel} mySide={mySide} />;
  }

  // Complete duel — pass mySide to the DuelCard via clone
  if (duel) {
    return <DuelCard duel={duel} mySide={mySide} />;
  }

  // children path (complete duel page passes duel via SSR in children prop — unused now)
  return <>{children}</>;
}
