"use client";

import { lazy, Suspense } from "react";
import type { Post } from "@/lib/pocketbase";

const Feed = lazy(() => import("./Feed"));

export default function LazyFeed({ initialPosts }: { initialPosts: Post[] }) {
  return (
    <Suspense fallback={<div className="font-mono text-[#333333] text-xs py-4">// loading...</div>}>
      <Feed initialPosts={initialPosts} />
    </Suspense>
  );
}
