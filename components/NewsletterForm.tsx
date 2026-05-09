"use client";

import { useState, useTransition } from "react";
import { subscribeNewsletter } from "@/app/actions";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("idle");
    startTransition(async () => {
      try {
        await subscribeNewsletter(email);
        setStatus("ok");
        setEmail("");
      } catch (err) {
        setStatus("error");
        setMsg(err instanceof Error ? err.message : "Failed.");
      }
    });
  }

  if (status === "ok") {
    return (
      <p className="font-mono text-xs text-[#f0f0f0] tracking-widest">
        // received. the void delivers sundays.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-3">
        // weekly digest — 5 raw truths, every sunday
      </p>
      <div className="flex gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          disabled={isPending}
          className="flex-1 bg-transparent border border-[#2a2a2a] border-r-0 px-4 py-2 font-mono text-xs text-[#f0f0f0] placeholder-[#333333] focus:outline-none focus:border-[#555555] transition-colors disabled:opacity-50 min-w-0"
        />
        <button
          type="submit"
          disabled={isPending || !email.trim()}
          className="font-mono text-xs font-bold px-4 py-2 border border-[#2a2a2a] text-[#888888] hover:text-[#f0f0f0] hover:border-[#555555] disabled:opacity-30 transition-colors flex-shrink-0"
        >
          {isPending ? "..." : "JOIN"}
        </button>
      </div>
      {status === "error" && (
        <p className="font-mono text-xs text-[#ff3c00] mt-1.5">{msg}</p>
      )}
    </form>
  );
}
