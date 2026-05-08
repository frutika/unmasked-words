"use client";

import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const es = new EventSource("/api/visitors");

    es.onmessage = (e) => {
      const n = parseInt(e.data, 10);
      if (!isNaN(n)) setCount(n);
    };

    es.onerror = () => {
      es.close();
    };

    return () => es.close();
  }, []);

  return (
    <div className={`flex items-center gap-1.5 ${count === null ? "invisible" : ""}`}>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
      <span className="font-mono text-[#555555] text-xs tabular-nums">
        {count} online
      </span>
    </div>
  );
}
