"use client";

import { useState, useEffect } from "react";
import type { MirrorReflection } from "@/app/api/mirror/route";

const PROMPTS = [
  "WHAT ARE YOU ACTUALLY THINKING?",
  "SAY THE THING YOU WON'T SAY OUT LOUD.",
  "THE THOUGHT THAT KEEPS FINDING YOU.",
  "WHAT DO YOU KEEP CIRCLING AROUND?",
  "WRITE IT. THE MIRROR WILL READ IT.",
  "WHAT ARE YOU PRETENDING IS FINE?",
  "THE THING YOU HAVEN'T ADMITTED YET.",
];

function newMath() {
  return { a: Math.floor(Math.random() * 9) + 1, b: Math.floor(Math.random() * 9) + 1 };
}

type State = "idle" | "loading" | "done" | "error";

function LoadingMirror() {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d.length >= 3 ? "." : d + ".")), 500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="py-16 flex flex-col items-center gap-6">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#ff3c00] to-transparent mirror-pulse" />
      <p className="font-mono text-[#888888] text-xs tracking-widest uppercase">
        // the mirror is reading you{dots}
      </p>
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#ff3c00] to-transparent mirror-pulse" style={{ animationDelay: "0.9s" }} />
    </div>
  );
}

interface OutputProps {
  thought: string;
  reflection: MirrorReflection;
  onReset: () => void;
}

function MirrorOutput({ thought, reflection, onReset }: OutputProps) {
  return (
    <div className="w-full">
      {/* The original thought, echoed back dimly */}
      <div
        aria-hidden="true"
        className="mirror-reveal border-l-2 border-[#1a1a1a] pl-5 mb-10"
        style={{ animationDelay: "0ms" }}
      >
        <p className="font-mono text-[#2a2a2a] text-xs tracking-widest uppercase mb-2">
          // you wrote
        </p>
        <p className="font-mono text-[#444444] leading-relaxed text-sm italic">
          {thought}
        </p>
      </div>

      {/* Tone */}
      <div
        className="mirror-reveal mb-8"
        style={{ animationDelay: "200ms" }}
      >
        <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-2">
          // emotional tone
        </p>
        <p className="font-mono text-[#888888] text-sm leading-relaxed">
          {reflection.tone}
        </p>
      </div>

      {/* Subtext */}
      <div
        className="mirror-reveal mb-8"
        style={{ animationDelay: "600ms" }}
      >
        <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-2">
          // beneath the surface
        </p>
        <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
          {reflection.subtext}
        </p>
      </div>

      {/* Reveals */}
      <div
        className="mirror-reveal mb-10"
        style={{ animationDelay: "1000ms" }}
      >
        <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-2">
          // what this reveals
        </p>
        <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed">
          {reflection.reveals}
        </p>
      </div>

      {/* Divider line */}
      <div
        className="mirror-reveal mb-10 mirror-scan"
        style={{ animationDelay: "1400ms" }}
      />

      {/* The Question — the centrepiece */}
      <div
        className="mirror-reveal mb-12"
        style={{ animationDelay: "2000ms" }}
      >
        <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-4">
          // the question
        </p>
        <p
          className="font-mono text-[#f0f0f0] leading-snug"
          style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}
        >
          <span className="text-[#ff3c00] mr-3">→</span>
          {reflection.question}
        </p>
      </div>

      {/* Reset */}
      <div
        className="mirror-reveal"
        style={{ animationDelay: "2400ms" }}
      >
        <button
          onClick={onReset}
          className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
        >
          ← write another thought
        </button>
      </div>
    </div>
  );
}

export default function MirrorClient() {
  const [state, setState] = useState<State>("idle");
  const [thought, setThought] = useState("");
  const [focused, setFocused] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [promptVisible, setPromptVisible] = useState(true);
  const [math, setMath] = useState({ a: 0, b: 0 });
  const [mathAnswer, setMathAnswer] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [reflection, setReflection] = useState<MirrorReflection | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submittedThought, setSubmittedThought] = useState("");

  useEffect(() => { setMath(newMath()); }, []);

  useEffect(() => {
    if (thought || focused || state !== "idle") return;
    const id = setInterval(() => {
      setPromptVisible(false);
      setTimeout(() => {
        setPromptIndex((i) => (i + 1) % PROMPTS.length);
        setPromptVisible(true);
      }, 400);
    }, 3800);
    return () => clearInterval(id);
  }, [thought, focused, state]);

  const charLimit = 600;
  const remaining = charLimit - thought.length;
  const canSubmit = thought.trim().length >= 10 && !!mathAnswer && state === "idle";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setError(null);
    setState("loading");
    setSubmittedThought(thought.trim());

    try {
      const res = await fetch("/api/mirror", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thought: thought.trim(),
          math_a: math.a,
          math_b: math.b,
          math_answer: mathAnswer,
          honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState("error");
        setError(data.error ?? "The mirror cracked. Try again.");
        setMathAnswer("");
        setMath(newMath());
        return;
      }
      setReflection(data);
      setState("done");
    } catch {
      setState("error");
      setError("Connection lost. Try again.");
      setMathAnswer("");
      setMath(newMath());
    }
  }

  function handleReset() {
    setState("idle");
    setThought("");
    setMathAnswer("");
    setMath(newMath());
    setReflection(null);
    setError(null);
    setSubmittedThought("");
  }

  if (state === "loading") return <LoadingMirror />;

  if (state === "done" && reflection) {
    return <MirrorOutput thought={submittedThought} reflection={reflection} onReset={handleReset} />;
  }

  const showPrompt = !thought && !focused;

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

      <div className="border border-[#1e1e1e] bg-[#0d0d0d] focus-within:border-[#333333] transition-colors duration-300">
        <div className="relative">
          {showPrompt && (
            <div
              className="absolute inset-0 p-6 pointer-events-none font-mono text-[#2a2a2a] leading-relaxed select-none" aria-hidden="true"
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                opacity: promptVisible ? 1 : 0,
                letterSpacing: "0.04em",
              }}
            >
              {PROMPTS[promptIndex]}
            </div>
          )}
          <textarea
            value={thought}
            onChange={(e) => setThought(e.target.value.slice(0, charLimit))}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder=""
            rows={7}
            className="w-full bg-transparent p-6 text-[#d0d0d0] font-mono leading-relaxed resize-none focus:outline-none"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
          />
        </div>

        {/* Progress bar — subtler than PostInput */}
        <div className="h-px bg-[#111111]">
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${(thought.length / charLimit) * 100}%`,
              backgroundColor: remaining < 60 ? "#ff3c00" : "#1e1e1e",
            }}
          />
        </div>

        <div className="border-t border-[#111111] px-6 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Math captcha */}
          <div className="flex items-center gap-1.5 flex-1">
            {math.a > 0 && (
              <>
                <span className="font-mono text-[#888888] text-xs tracking-wider">
                  // {math.a} + {math.b} =
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={mathAnswer}
                  onChange={(e) => setMathAnswer(e.target.value.replace(/\D/g, "").slice(0, 3))}
                  placeholder="?"
                  className="w-10 bg-transparent border-b border-[#333333] focus:border-[#888888] text-[#888888] placeholder-[#333333] font-mono text-xs text-center focus:outline-none transition-colors"
                />
              </>
            )}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span className={`font-mono text-xs tabular-nums ${remaining < 60 ? "text-[#ff3c00]" : "text-[#888888]"}`}>
              {remaining}
            </span>
            <button
              type="submit"
              disabled={!canSubmit}
              className="font-mono text-xs font-bold px-8 py-2.5 border border-[#2a2a2a] text-[#888888] hover:border-[#ff3c00] hover:text-[#f0f0f0] disabled:border-[#111111] disabled:text-[#222222] transition-colors duration-200 disabled:cursor-not-allowed tracking-widest uppercase"
            >
              REFLECT
            </button>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-3 font-mono text-xs text-[#ff3c00] tracking-widest">{error}</p>
      )}
    </form>
  );
}
