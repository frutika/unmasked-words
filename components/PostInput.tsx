"use client";

import { useState, useTransition, useEffect, useCallback } from "react";
import { submitPost } from "@/app/actions";

const PROMPTS = [
  "SAY IT.",
  "WHAT ARE YOU AFRAID TO ADMIT?",
  "THE THOUGHT YOU KEEP SWALLOWING.",
  "SPEAK. NO ONE IS WATCHING.",
  "WHAT WOULD YOU SAY WITH NO FACE?",
  "THE TRUTH THAT MAKES YOU UNCOMFORTABLE.",
  "SAY THE THING. RIGHT NOW.",
  "NO ONE WILL KNOW IT'S YOU.",
  "WHAT HAVE YOU BEEN KEEPING INSIDE?",
  "DROP THE MASK. JUST FOR A SECOND.",
];

const RANDOM_ALIASES = [
  "SilentFox", "NeonGhost", "BrokenClock", "VoidWhisper", "IronMask",
  "LostSignal", "ColdFlame", "BlindOracle", "RustedKey", "FadedInk",
  "HollowEcho", "StormCipher", "MidnightPulse", "GhostThread", "AshVeil",
  "DarkMatter", "ObsidianVoice", "ShadowRoot", "EmptyFrame", "StaticSoul",
  "CryptoNomad", "ChainBreaker", "ZeroTrace", "GhostNode", "DeadDrop",
  "BurntBridge", "SilentProtocol", "UnknownCaller", "OfflineSpirit", "NullPointer",
  "WornPath", "MirrorShard", "QuantumDust", "BlurredFace", "InkStain",
  "ColdServer", "LonePacket", "VoidCast", "GrayArea", "BrokenRoute",
  "MaskedFrequency", "DeepNoise", "RawSignal", "AlterEgo", "DriftNode",
  "PhantomKey", "SaltedHash", "BurnerSoul", "OpenWound", "LastBroadcast",
];

function getRandomAlias() {
  return RANDOM_ALIASES[Math.floor(Math.random() * RANDOM_ALIASES.length)];
}

function newMath() {
  return {
    a: Math.floor(Math.random() * 9) + 1,
    b: Math.floor(Math.random() * 9) + 1,
  };
}

interface PostInputProps {
  topic?: string;
}

export default function PostInput({ topic }: PostInputProps) {
  const [content, setContent] = useState("");
  const [alias, setAlias] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [math, setMath] = useState({ a: 0, b: 0 });
  const [mathAnswer, setMathAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [justPosted, setJustPosted] = useState(false);
  const [focused, setFocused] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [promptVisible, setPromptVisible] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => { setMath(newMath()); }, []);

  // Rotate prompts only when textarea is empty and unfocused
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

  const charLimit = 500;
  const remaining = charLimit - content.length;
  const progress = (content.length / charLimit) * 100;
  const canSubmit = !!content.trim() && !!mathAnswer && !isPending;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setError(null);
    startTransition(async () => {
      try {
        await submitPost(content, alias, honeypot, math.a, math.b, mathAnswer, topic);
        setContent("");
        setAlias("");
        setMathAnswer("");
        setMath(newMath());
        setJustPosted(true);
        setTimeout(() => setJustPosted(false), 3000);
        window.dispatchEvent(new Event("post-submitted"));
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Failed to submit. Try again.";
        setError(msg);
        setMathAnswer("");
        setMath(newMath());
      }
    });
  }

  const showPrompt = !content && !focused;

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

      <div className="border border-[#2a2a2a] bg-[#111111] focus-within:border-[#ff3c00] transition-colors duration-150">

        {/* Textarea with animated placeholder overlay */}
        <div className="relative">
          {showPrompt && (
            <div
              aria-hidden="true"
              className="absolute inset-0 p-5 pointer-events-none font-mono text-[#444444] leading-relaxed select-none transition-opacity duration-300"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                letterSpacing: "0.02em",
                opacity: promptVisible ? 1 : 0,
              }}
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
            rows={6}
            disabled={isPending}
            aria-label="Write your anonymous thought"
            className="w-full bg-transparent p-5 text-[#f0f0f0] font-mono leading-relaxed resize-none focus:outline-none disabled:opacity-50"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", letterSpacing: "0.02em" }}
          />
        </div>

        {/* Progress bar */}
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
          {/* alias */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value.slice(0, 40))}
              placeholder="Anonymous"
              disabled={isPending}
              aria-label="Your alias (optional)"
              className="bg-transparent text-[#888888] placeholder-[#888888] font-mono text-sm focus:outline-none focus:text-[#f0f0f0] transition-colors w-36 disabled:opacity-50"
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

          {/* math + submit */}
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
                  className="w-10 bg-transparent border-b border-[#555555] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#888888] font-mono text-xs text-center focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>
            )}
            <span className={`font-mono text-xs tabular-nums ${remaining < 50 ? "text-[#ff3c00]" : "text-[#888888]"}`}>
              {remaining}
            </span>
            <button
              type="submit"
              disabled={!canSubmit}
              className="font-mono text-sm font-bold px-6 py-2 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] disabled:bg-[#1f1f1f] disabled:text-[#888888] transition-colors duration-100 disabled:cursor-not-allowed"
            >
              {isPending ? "SENDING..." : "POST"}
            </button>
          </div>
        </div>
      </div>

      {justPosted && (
        <p className="mt-2 font-mono text-xs text-[#888888] tracking-widest animate-fadeIn">
          // posted. the void received it.
        </p>
      )}
      {error && (
        <p className="mt-2 font-mono text-xs text-[#ff3c00]">{error}</p>
      )}
    </form>
  );
}
