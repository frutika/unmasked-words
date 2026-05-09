"use client";

import { useState, useEffect, useCallback } from "react";

const PROMPTS = [
  "LEAVE YOUR THOUGHT. IT WON'T SURVIVE.",
  "SAY WHAT YOU CAN'T KEEP.",
  "THE VOID LISTENS. THEN FORGETS.",
  "WRITE IT. LET IT GO.",
  "24 HOURS. THEN NOTHING. EXCEPT ONE LINE.",
  "WHAT DO YOU NEED TO RELEASE?",
  "SPEAK INTO THE BOX.",
  "THIS DISAPPEARS. BUT IT ECHOES ONCE.",
];

const RANDOM_ALIASES = [
  "SilentFox", "NeonGhost", "BrokenClock", "VoidWhisper", "IronMask",
  "LostSignal", "ColdFlame", "BlindOracle", "RustedKey", "FadedInk",
  "HollowEcho", "StormCipher", "MidnightPulse", "GhostThread", "AshVeil",
  "DarkMatter", "ObsidianVoice", "ShadowRoot", "EmptyFrame", "StaticSoul",
];

function getRandomAlias() {
  return RANDOM_ALIASES[Math.floor(Math.random() * RANDOM_ALIASES.length)];
}

function newMath() {
  return { a: Math.floor(Math.random() * 9) + 1, b: Math.floor(Math.random() * 9) + 1 };
}

interface SubmittedState {
  submitted_at: string;
  expires_at: string;
}

function getSubmitted(): SubmittedState | null {
  try { return JSON.parse(localStorage.getItem("uw_box_submission") ?? "null"); }
  catch { return null; }
}

function timeLeft(expiresAt: string): string {
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return "expired";
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

export default function BoxInput() {
  const [content, setContent] = useState("");
  const [alias, setAlias] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [math, setMath] = useState({ a: 0, b: 0 });
  const [mathAnswer, setMathAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<SubmittedState | null>(null);
  const [focused, setFocused] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [promptVisible, setPromptVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMath(newMath());
    setSubmitted(getSubmitted());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (content || focused) return;
    const id = setInterval(() => {
      setPromptVisible(false);
      setTimeout(() => {
        setPromptIndex((i) => (i + 1) % PROMPTS.length);
        setPromptVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(id);
  }, [content, focused]);

  // Re-check expiry every minute
  useEffect(() => {
    if (!submitted) return;
    const id = setInterval(() => {
      const s = getSubmitted();
      if (!s || new Date(s.expires_at).getTime() <= Date.now()) {
        localStorage.removeItem("uw_box_submission");
        setSubmitted(null);
      } else {
        setSubmitted({ ...s }); // force re-render for countdown
      }
    }, 60000);
    return () => clearInterval(id);
  }, [submitted]);

  const charLimit = 2000;
  const remaining = charLimit - content.length;
  const progress = (content.length / charLimit) * 100;
  const canSubmit = !!content.trim() && !!mathAnswer && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/box/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          alias: alias.trim() || "",
          honeypot,
          math_a: math.a,
          math_b: math.b,
          math_answer: mathAnswer,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to submit.");
        setMathAnswer("");
        setMath(newMath());
        return;
      }
      const record: SubmittedState = {
        submitted_at: new Date().toISOString(),
        expires_at: data.expires_at,
      };
      localStorage.setItem("uw_box_submission", JSON.stringify(record));
      setSubmitted(record);
      setContent("");
      setAlias("");
      setMathAnswer("");
      setMath(newMath());
    } catch {
      setError("Network error. Try again.");
      setMathAnswer("");
      setMath(newMath());
    } finally {
      setSubmitting(false);
    }
  }

  if (!mounted) return null;

  if (submitted) {
    const left = timeLeft(submitted.expires_at);
    const isExpired = left === "expired";
    if (isExpired) {
      localStorage.removeItem("uw_box_submission");
    }
    return (
      <div className="border border-[#1a1a1a] p-8">
        <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-3">
          // your thought is in the box
        </p>
        <p className="font-mono text-[#f0f0f0] text-sm mb-2">
          It will vanish in{" "}
          <span className="text-[#ff3c00]">{isExpired ? "moments" : left}</span>.
        </p>
        <p className="font-mono text-[#888888] text-xs tracking-widest">
          before it goes, one sentence will be pulled and echo in the voices below.
        </p>
      </div>
    );
  }

  const showPrompt = !content && !focused;

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
      />

      <div className="border border-[#2a2a2a] bg-[#111111] focus-within:border-[#ff3c00] transition-colors duration-150">
        <div className="relative">
          {showPrompt && (
            <div
              aria-hidden="true"
              className="absolute inset-0 p-5 pointer-events-none font-mono text-[#444444] leading-relaxed select-none transition-opacity duration-300"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", opacity: promptVisible ? 1 : 0 }}
            >
              {PROMPTS[promptIndex]}
            </div>
          )}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value.slice(0, charLimit))}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder=""
            rows={7}
            disabled={submitting}
            className="w-full bg-transparent p-5 text-[#f0f0f0] font-mono leading-relaxed resize-none focus:outline-none disabled:opacity-50"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          />
        </div>

        <div className="h-[2px] bg-[#0f0f0f]">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundColor: progress > 90 ? "#ff3c00" : progress > 65 ? "#555555" : "#2a2a2a",
            }}
          />
        </div>

        <div className="border-t border-[#1f1f1f] px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value.slice(0, 30))}
              placeholder="Anonymous"
              disabled={submitting}
              className="bg-transparent text-[#888888] placeholder-[#555555] font-mono text-sm focus:outline-none focus:text-[#f0f0f0] transition-colors w-36 disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setAlias(getRandomAlias())}
              disabled={submitting}
              title="Random alias"
              className="font-mono text-xs text-[#888888] hover:text-[#ff3c00] transition-colors disabled:opacity-30"
            >
              ↺
            </button>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            {math.a > 0 && (
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[#888888] text-xs tracking-wider">
                  // {math.a} + {math.b} =
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={mathAnswer}
                  onChange={(e) => setMathAnswer(e.target.value.replace(/\D/g, "").slice(0, 3))}
                  disabled={submitting}
                  placeholder="?"
                  className="w-10 bg-transparent border-b border-[#555555] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#555555] font-mono text-xs text-center focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>
            )}
            <span className={`font-mono text-xs tabular-nums ${remaining < 100 ? "text-[#ff3c00]" : "text-[#888888]"}`}>
              {remaining}
            </span>
            <button
              type="submit"
              disabled={!canSubmit}
              className="font-mono text-sm font-bold px-6 py-2 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] disabled:bg-[#1f1f1f] disabled:text-[#888888] transition-colors duration-100 disabled:cursor-not-allowed"
            >
              {submitting ? "RELEASING..." : "RELEASE"}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-2 font-mono text-xs text-[#ff3c00]">{error}</p>
      )}
    </form>
  );
}
