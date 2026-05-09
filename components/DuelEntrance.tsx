"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

const RANDOM_ALIASES = [
  "SilentFox", "NeonGhost", "BrokenClock", "VoidWhisper", "IronMask",
  "LostSignal", "ColdFlame", "BlindOracle", "RustedKey", "FadedInk",
  "HollowEcho", "StormCipher", "MidnightPulse", "GhostThread", "AshVeil",
  "DarkMatter", "ObsidianVoice", "ShadowRoot", "EmptyFrame", "StaticSoul",
  "PhantomKey", "SaltedHash", "BurnerSoul", "OpenWound", "LastBroadcast",
  "DeadDrop", "ZeroTrace", "GhostNode", "CryptoNomad", "MirrorShard",
];

function newMath() {
  return { a: Math.floor(Math.random() * 9) + 1, b: Math.floor(Math.random() * 9) + 1 };
}

type Phase = "idle" | "loading-question" | "writing" | "submitting" | "done";

interface QuestionData {
  question: string;
  question_index: number;
  join_duel_id: string | null;
}

export default function DuelEntrance() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [answer, setAnswer] = useState("");
  const [alias, setAlias] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [math, setMath] = useState({ a: 0, b: 0 });
  const [mathAnswer, setMathAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  useEffect(() => { setMath(newMath()); }, []);

  const charLimit = 400;
  const remaining = charLimit - answer.length;
  const progress = (answer.length / charLimit) * 100;
  const canSubmit = answer.trim().length >= 3 && !!mathAnswer;

  async function enterDuel() {
    setPhase("loading-question");
    setError(null);
    try {
      const res = await fetch("/api/duel/enter");
      if (!res.ok) throw new Error("Failed to load.");
      const data = await res.json();
      setQuestion(data);
      setPhase("writing");
    } catch {
      setError("Failed to connect to the void. Try again.");
      setPhase("idle");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || !question) return;
    setError(null);
    setPhase("submitting");

    startTransition(async () => {
      try {
        const res = await fetch("/api/duel/enter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question_index: question.question_index,
            answer: answer.trim(),
            alias: alias.trim() || "Anonymous",
            join_duel_id: question.join_duel_id,
            honeypot,
            math_a: math.a,
            math_b: math.b,
            math_answer: mathAnswer,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Failed to submit.");

        // Store in localStorage
        try {
          localStorage.setItem("uw_my_duel", JSON.stringify({
            id: data.duel_id,
            side: data.side,
            created: Date.now(),
          }));
        } catch {}

        setPhase("done");
        router.push(`/duel/${data.duel_id}`);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed. Try again.");
        setMathAnswer("");
        setMath(newMath());
        setPhase("writing");
      }
    });
  }

  // ── Idle ──
  if (phase === "idle" || phase === "loading-question") {
    return (
      <div className="text-center py-8">
        <button
          onClick={enterDuel}
          disabled={phase === "loading-question"}
          className="font-mono font-black text-sm tracking-widest uppercase px-10 py-4 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] disabled:opacity-50 transition-colors duration-150"
        >
          {phase === "loading-question" ? "ENTERING<span className='cursor-blink'>|</span>" : "ENTER THE DUEL"}
        </button>
        {error && (
          <p className="font-mono text-xs text-[#ff3c00] mt-4">{error}</p>
        )}
      </div>
    );
  }

  // ── Writing ──
  if (phase === "writing" || phase === "submitting") {
    return (
      <div className="w-full">
        {/* Question */}
        <div className="mb-8">
          <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-4">
            // the question
          </p>
          <blockquote className="border-l-2 border-[#ff3c00] pl-5">
            <p
              className="font-mono text-[#f0f0f0] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
            >
              {question?.question}
            </p>
          </blockquote>
          <p className="font-mono text-[#888888] text-[10px] tracking-widest mt-4">
            // your answer will be sealed until an opponent responds
          </p>
        </div>

        {/* Form */}
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
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value.slice(0, charLimit))}
              placeholder=""
              rows={6}
              autoFocus
              disabled={phase === "submitting"}
              className="w-full bg-transparent p-5 text-[#f0f0f0] font-mono leading-relaxed resize-none focus:outline-none disabled:opacity-50"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)", letterSpacing: "0.02em" }}
            />

            <div className="h-[2px] bg-[#0f0f0f]">
              <div
                className="h-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  backgroundColor: progress > 90 ? "#ff3c00" : progress > 65 ? "#555555" : "#2a2a2a",
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
                  disabled={phase === "submitting"}
                  className="bg-transparent text-[#888888] placeholder-[#888888] font-mono text-xs focus:outline-none focus:text-[#f0f0f0] transition-colors w-32 disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setAlias(RANDOM_ALIASES[Math.floor(Math.random() * RANDOM_ALIASES.length)])}
                  disabled={phase === "submitting"}
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
                      disabled={phase === "submitting"}
                      placeholder="?"
                      className="w-10 bg-transparent border-b border-[#444444] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#888888] font-mono text-xs text-center focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                )}
                <span className={`font-mono text-xs tabular-nums ${remaining < 50 ? "text-[#ff3c00]" : "text-[#888888]"}`}>
                  {remaining}
                </span>
                <button
                  type="submit"
                  disabled={!canSubmit || phase === "submitting"}
                  className="font-mono text-xs font-bold px-5 py-2 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] disabled:bg-[#1a1a1a] disabled:text-[#444444] transition-colors duration-100 disabled:cursor-not-allowed"
                >
                  {phase === "submitting" ? "SEALING..." : "SEAL + ENTER"}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <p className="mt-2 font-mono text-xs text-[#ff3c00]">{error}</p>
          )}
        </form>
      </div>
    );
  }

  return null;
}
