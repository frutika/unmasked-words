"use client";

import { useEffect, useState } from "react";

export default function HashrateWidget() {
  const [ehs, setEhs] = useState<string | null>(null);
  const [stale, setStale] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetch_ = () =>
      fetch("/api/hashrate")
        .then((r) => r.json())
        .then((d) => {
          if (!mounted) return;
          if (d.ehs) { setEhs(d.ehs); setStale(false); }
          else setStale(true);
        })
        .catch(() => { if (mounted) setStale(true); });

    fetch_();
    const id = setInterval(fetch_, 60_000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  if (ehs === null && !stale) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 font-mono text-[10px] tracking-widest select-none">
      <div className="border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 flex flex-col gap-1">
        <span className="text-[#666666] uppercase">// btc network</span>
        <div className="flex items-center gap-2">
          {!stale && (
            <span
              className="inline-block w-1 h-1 rounded-full bg-[#f0f0f0]"
              style={{ animation: "mining-pulse 3s ease-in-out infinite" }}
            />
          )}
          <span className={stale ? "text-[#333333]" : "text-[#f0f0f0]"}>
            {stale ? "-- EH/s" : `${ehs} EH/s`}
          </span>
        </div>
      </div>
    </div>
  );
}
