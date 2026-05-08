"use client";

import { lazy, Suspense } from "react";

const VisitorCount = lazy(() => import("./VisitorCount"));

export default function LazyVisitorCount() {
  return (
    <Suspense fallback={null}>
      <VisitorCount />
    </Suspense>
  );
}
