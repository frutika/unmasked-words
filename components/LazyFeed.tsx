"use client";

import { lazy, Suspense } from "react";
import type { Post } from "@/lib/pocketbase";

const Feed = lazy(() => import("./Feed"));

export default function LazyFeed({ initialPosts, initialTotalPages }: { initialPosts: Post[]; initialTotalPages: number }) {
  return (
    <Suspense fallback={<div className="font-mono text-[#888888] text-xs py-4">// loading...</div>}>
      <Feed initialPosts={initialPosts} initialTotalPages={initialTotalPages} />
    </Suspense>
  );
}
