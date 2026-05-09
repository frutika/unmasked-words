"use client";

import { useState, useEffect, useCallback } from "react";
import type { Post } from "@/lib/pocketbase";
import ShareMenu from "./ShareMenu";

interface PostReactionsProps {
  post: Post;
}

type Reacted = { plus: boolean; bang: boolean };

function getReacted(postId: string): Reacted {
  try {
    const all = JSON.parse(localStorage.getItem("uw_reacted") ?? "{}");
    return all[postId] ?? { plus: false, bang: false };
  } catch { return { plus: false, bang: false }; }
}

function saveReacted(postId: string, r: Reacted) {
  try {
    const all = JSON.parse(localStorage.getItem("uw_reacted") ?? "{}");
    localStorage.setItem("uw_reacted", JSON.stringify({ ...all, [postId]: r }));
  } catch {}
}

export default function PostReactions({ post }: PostReactionsProps) {
  const [plus, setPlus] = useState(post.plus ?? 0);
  const [bang, setBang] = useState(post.bang ?? 0);
  const [reacted, setReacted] = useState<Reacted>({ plus: false, bang: false });

  useEffect(() => {
    setReacted(getReacted(post.id));
  }, [post.id]);

  const react = useCallback(async (type: "+" | "!") => {
    const field = type === "+" ? "plus" : "bang";
    const current = reacted[field];
    const action = current ? "remove" : "add";
    const delta = action === "add" ? 1 : -1;

    if (type === "+") setPlus((n) => Math.max(0, n + delta));
    else setBang((n) => Math.max(0, n + delta));

    const next: Reacted = { ...reacted, [field]: !current };
    setReacted(next);
    saveReacted(post.id, next);

    await fetch("/api/react", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: post.id, type, action }),
    }).catch(() => {
      if (type === "+") setPlus((n) => Math.max(0, n - delta));
      else setBang((n) => Math.max(0, n - delta));
      setReacted(reacted);
      saveReacted(post.id, reacted);
    });
  }, [reacted, post.id]);

  return (
    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#1a1a1a]">
      <button
        onClick={() => react("+")}
        title="resonates"
        className={`font-mono text-sm tabular-nums transition-opacity ${
          reacted.plus ? "opacity-100 text-[#f0f0f0]" : "opacity-60 text-[#f0f0f0] hover:opacity-90"
        }`}
      >
        [ + {plus} ]
      </button>
      <button
        onClick={() => react("!")}
        title="felt this"
        className={`font-mono text-sm tabular-nums transition-opacity ${
          reacted.bang ? "opacity-100 text-[#f0f0f0]" : "opacity-60 text-[#f0f0f0] hover:opacity-90"
        }`}
      >
        [ ! {bang} ]
      </button>
      <span className="text-[#2a2a2a] select-none" aria-hidden="true">|</span>
      <ShareMenu postId={post.id} content={post.content} />
    </div>
  );
}
