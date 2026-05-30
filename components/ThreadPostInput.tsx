"use client";

import { useState, useTransition, useEffect } from "react";
import { submitThreadPost } from "@/app/actions";

const RANDOM_ALIASES = [
  "SilentFox", "NeonGhost", "BrokenClock", "VoidWhisper", "IronMask",
  "LostSignal", "ColdFlame", "BlindOracle", "RustedKey", "FadedInk",
  "HollowEcho", "StormCipher", "MidnightPulse", "GhostThread", "AshVeil",
  "DarkMatter", "ObsidianVoice", "ShadowRoot", "EmptyFrame", "StaticSoul",
  "CryptoNomad", "ChainBreaker", "ZeroTrace", "GhostNode", "DeadDrop",
  "BurntBridge", "SilentProtocol", "UnknownCaller", "OfflineSpirit", "NullPointer",
];

function getRandomAlias() {
  return RANDOM_ALIASES[Math.floor(Math.random() * RANDOM_ALIASES.length)];
}

function newMath() {
  return { a: Math.floor(Math.random() * 9) + 1, b: Math.floor(Math.random() * 9) + 1 };
}

interface ThreadPostInputProps {
  slug: string;
  prompt: string;
}

export default function ThreadPostInput({ slug, prompt }: ThreadPostInputProps) {
  const [content, setContent] = useState("");
  const [alias, setAlias] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [math, setMath] = useState({ a: 0, b: 0 });
  const [mathAnswer, setMathAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [justPosted, setJustPosted] = useState(false);
  const [focused, setFocused] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => { setMath(newMath()); }, []);

  const charLimit = 500;
  const remaining = charLimit - content.length;
  const progress = (content.length / charLimit) * 100;
  const canSubmit = !!content.trim() && !!mathAnswer && !isPending;
  const showPrompt = !content && !focused;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setError(null);
    startTransition(async () => {
      try {
        await submitThreadPost(slug, content, alias, honeypot, math.a, math.b, mathAnswer);
        setContent("");
        setAlias("");
        setMathAnswer("");
        setMath(newMath());
        setJustPosted(true);
        setTimeout(() => setJustPosted(false), 3000);
        window.dispatchEvent(new CustomEvent("thread-post-submitted", { detail: { slug } }));
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Failed to submit. Try again.";
        setError(msg);
        setMathAnswer("");
        setMath(newMath());
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* honeypot */}
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

      <div className="border border-[#2a2a2a] bg-[#0d0d0d] focus-within:border-[#ff3c00] transition-colors duration-150">
        <div className="relative">
          {showPrompt && (
            <div
              aria-hidden="true"
              className="absolute inset-0 p-5 pointer-events-none font-mono text-[#333333] leading-relaxed select-none"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)", letterSpacing: "0.02em" }}
            >
              {prompt}
            </div>
          )}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value.slice(0, charLimit))}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder=""
            rows={5}
            disabled={isPending}
            aria-label="Write your anonymous thought"
            className="w-full bg-transparent p-5 text-[#f0f0f0] font-mono leading-relaxed resize-none focus:outline-none disabled:opacity-50"
            style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)", letterSpacing: "0.02em" }}
          />
        </div>

        <div className="h-[1px] bg-[#0f0f0f]">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundColor: progress > 90 ? "#ff3c00" : progress > 65 ? "#444444" : "#2a2a2a",
            }}
          />
        </div>

        <div className="border-t border-[#1a1a1a] px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value.slice(0, 40))}
              placeholder="Anonymous"
              disabled={isPending}
              aria-label="Your alias (optional)"
              className="bg-transparent text-[#888888] placeholder-[#888888] font-mono text-xs focus:outline-none focus:text-[#f0f0f0] transition-colors w-32 disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setAlias(getRandomAlias())}
              disabled={isPending}
              title="Random alias"
              aria-label="Generate random alias"
              className="font-mono text-xs text-[#888888] hover:text-[#ff3c00] transition-colors disabled:opacity-30 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                  disabled={isPending}
                  placeholder="?"
                  aria-label="Math answer"
                  className="w-10 bg-transparent border-b border-[#444444] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#888888] font-mono text-xs text-center focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>
            )}
            <span className={`font-mono text-xs tabular-nums ${remaining < 50 ? "text-[#ff3c00]" : "text-[#888888]"}`}>
              {remaining}
            </span>
            <button
              type="submit"
              disabled={!canSubmit}
              className="font-mono text-xs font-bold px-5 py-2 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] disabled:bg-[#1a1a1a] disabled:text-[#444444] transition-colors duration-100 disabled:cursor-not-allowed"
            >
              {isPending ? "..." : "SPEAK"}
            </button>
          </div>
        </div>
      </div>

      {justPosted && (
        <p className="mt-2 font-mono text-xs text-[#888888] tracking-widest animate-fadeIn">
          // the void received it.
        </p>
      )}
      {error && (
        <p className="mt-2 font-mono text-xs text-[#ff3c00]">{error}</p>
      )}
    </form>
  );
}
