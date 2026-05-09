"use client";

import { useState, useEffect } from "react";
import type { CreedFormat, CreedResult } from "@/app/api/creed/route";

const FORMAT_OPTIONS: Array<{
  id: CreedFormat;
  symbol: string;
  label: string;
  desc: string;
}> = [
  { id: "short",       symbol: "—",    label: "SHORT",    desc: "3–5 lines" },
  { id: "medium",      symbol: "——",   label: "MEDIUM",   desc: "8–12 lines" },
  { id: "long",        symbol: "———",  label: "LONG",     desc: "15–25 lines" },
  { id: "fragmented",  symbol: "~",    label: "FRAGMENT", desc: "broken, poetic" },
  { id: "declarative", symbol: "∎",    label: "DECLARE",  desc: "I am / I carry / I refuse" },
];

const LOADING_STAGES = [
  "// reading the wound...",
  "// finding the desire...",
  "// locating the contradiction...",
  "// forming your creed...",
];

const INPUT_PROMPTS = [
  "WRITE THE THOUGHT YOU KEEP RETURNING TO.",
  "WHAT ARE YOU CARRYING THAT HAS NO NAME?",
  "THE THING THAT WON'T LEAVE YOU ALONE.",
  "WHAT WOULD YOU SAY IF NO ONE COULD TRACE IT BACK?",
  "THE FEELING YOU HAVEN'T BEEN ABLE TO ARTICULATE.",
  "WHAT KEEPS FINDING YOU IN QUIET MOMENTS?",
  "THE TRUTH YOU KEEP ALMOST SAYING.",
];

function newMath() {
  return { a: Math.floor(Math.random() * 9) + 1, b: Math.floor(Math.random() * 9) + 1 };
}

type State = "idle" | "loading" | "done" | "error";

// ── Loading ──────────────────────────────────────────────────────────────────

function CreedLoading() {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setStage((s) => (s + 1) % LOADING_STAGES.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="py-20 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-px bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent"
          style={{ height: "3rem" }}
        />
        <span
          className="font-mono font-black text-[#ff3c00] ritual-pulse select-none"
          style={{ fontSize: "clamp(2.5rem, 7vw, 3.5rem)" }}
        >
          §
        </span>
        <div
          className="w-px bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent"
          style={{ height: "3rem" }}
        />
      </div>
      <p
        className="font-mono text-[#888888] text-xs tracking-widest uppercase"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      >
        {LOADING_STAGES[stage]}
      </p>
    </div>
  );
}

// ── Declarative line: splits "I [verb]" prefix and colors it ─────────────────

function CreedDeclarativeLine({
  line,
  index,
  total,
}: {
  line: string;
  index: number;
  total: number;
}) {
  const delay = `${index * 160 + 500}ms`;
  const isLast = index === total - 1;

  // Match "I [one-or-two-word verb phrase]" followed by separator or end
  const match = line.match(
    /^(I (?:am|carry|refuse|know|have(?: been| always)?|will(?: no longer)?|cannot|was|told myself|told|am done|[a-z]+(?:\s[a-z]+)?))(\s*[—–-]+\s*|\s+)(.*)/i,
  );

  if (match) {
    const prefix = match[1];
    const sep = match[3];
    const rest = match[4];
    return (
      <p
        className="creed-line font-mono leading-relaxed"
        style={{
          animationDelay: delay,
          fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
          color: isLast ? "#888888" : "#d0d0d0",
        }}
      >
        <span className="text-[#ff3c00]">{prefix}</span>
        <span className="text-[#2a2a2a]" aria-hidden="true">{sep}</span>
        <span>{rest}</span>
      </p>
    );
  }

  return (
    <p
      className="creed-line font-mono leading-relaxed"
      style={{
        animationDelay: delay,
        fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
        color: isLast ? "#888888" : "#d0d0d0",
      }}
    >
      {line}
    </p>
  );
}

// ── Fragmented line: varies indent and size based on length ──────────────────

const FRAGMENT_INDENTS = ["pl-0", "pl-6", "pl-12", "pl-3", "pl-9", "pl-1", "pl-8"];

function CreedFragmentedLine({
  line,
  index,
  total,
}: {
  line: string;
  index: number;
  total: number;
}) {
  const charCount = line.replace(/[—.…\s]/g, "").length;
  const delay = `${index * 200 + 500}ms`;
  const isLast = index === total - 1;

  const isVeryShort = charCount < 12;
  const isShort = charCount < 28;
  const indent = isVeryShort
    ? FRAGMENT_INDENTS[(index * 3) % FRAGMENT_INDENTS.length]
    : isShort
    ? FRAGMENT_INDENTS[index % FRAGMENT_INDENTS.length]
    : "pl-0";

  return (
    <p
      className={`creed-line font-mono leading-loose ${indent}`}
      style={{
        animationDelay: delay,
        fontSize: isVeryShort
          ? "clamp(0.75rem, 1.8vw, 0.85rem)"
          : "clamp(0.9rem, 2.2vw, 1.05rem)",
        color: isVeryShort ? "#888888" : isLast ? "#888888" : "#d0d0d0",
        letterSpacing: isShort ? "0.06em" : "0.02em",
      }}
    >
      {line}
    </p>
  );
}

// ── Creed output ─────────────────────────────────────────────────────────────

interface OutputProps {
  thought: string;
  result: CreedResult;
  onReset: () => void;
  onAnotherFormat: () => void;
}

function CreedOutput({ thought, result, onReset, onAnotherFormat }: OutputProps) {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();
  const formatInfo = FORMAT_OPTIONS.find((f) => f.id === result.format);

  const lineCount = result.lines.length;
  const baseDelay = 500;
  const perLine =
    result.format === "short" ? 280
    : result.format === "fragmented" ? 210
    : 175;
  const actionsDelay = `${baseDelay + lineCount * perLine + 400}ms`;
  const footerDelay = `${baseDelay + lineCount * perLine + 200}ms`;

  function handleCopy() {
    navigator.clipboard.writeText(result.lines.join("\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const isShort = result.format === "short";
  const isLong = result.format === "long";
  const isFragmented = result.format === "fragmented";
  const isDeclarative = result.format === "declarative";

  const lineGap =
    isShort ? "gap-6"
    : isLong ? "gap-2.5"
    : isFragmented ? "gap-1.5"
    : "gap-4";

  return (
    <div className="w-full">
      {/* Original thought echoed back, dimly */}
      <div
        aria-hidden="true"
        className="creed-line border-l-2 border-[#161616] pl-5 mb-10"
        style={{ animationDelay: "0ms" }}
      >
        <p className="font-mono text-[#222222] text-[10px] tracking-widest uppercase mb-2">
          // you wrote
        </p>
        <p className="font-mono text-[#2e2e2e] text-sm leading-relaxed italic">{thought}</p>
      </div>

      {/* Ritual divider */}
      <div
        className="creed-line flex items-center gap-4 mb-10"
        style={{ animationDelay: "250ms" }}
      >
        <div className="flex-1 h-px bg-[#111111] ritual-sweep" />
        <span
          className="font-mono font-black text-[#ff3c00] ritual-pulse flex-shrink-0"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)" }}
        >
          §
        </span>
        <div className="flex-1 h-px bg-[#111111] ritual-sweep" />
      </div>

      {/* The creed lines */}
      <div className={`flex flex-col ${lineGap} mb-12`}>
        {result.lines.map((line, i) => {
          const delay = `${baseDelay + i * perLine}ms`;

          if (isDeclarative) {
            return (
              <CreedDeclarativeLine key={i} line={line} index={i} total={lineCount} />
            );
          }

          if (isFragmented) {
            return (
              <CreedFragmentedLine key={i} line={line} index={i} total={lineCount} />
            );
          }

          if (isShort) {
            return (
              <p
                key={i}
                className="creed-line font-mono leading-snug"
                style={{
                  animationDelay: delay,
                  fontSize: "clamp(1.15rem, 3.2vw, 1.5rem)",
                  color: i === lineCount - 1 ? "#888888" : "#e8e8e8",
                  letterSpacing: "0.01em",
                }}
              >
                {line}
              </p>
            );
          }

          return (
            <p
              key={i}
              className="creed-line font-mono leading-relaxed"
              style={{
                animationDelay: delay,
                fontSize: isLong
                  ? "clamp(0.85rem, 2vw, 1rem)"
                  : "clamp(0.9rem, 2.2vw, 1.05rem)",
                color: i === lineCount - 1 ? "#888888" : "#d0d0d0",
              }}
            >
              {line}
            </p>
          );
        })}
      </div>

      {/* Format label */}
      <div
        className="creed-line border-t border-[#0e0e0e] pt-5 mb-6"
        style={{ animationDelay: footerDelay }}
      >
        <span aria-hidden="true" className="font-mono text-[#1e1e1e] text-[10px] tracking-widest uppercase">
          § {formatInfo?.label ?? result.format.toUpperCase()} — {year}
        </span>
      </div>

      {/* Actions */}
      <div
        className="creed-line flex flex-wrap items-center gap-5"
        style={{ animationDelay: actionsDelay }}
      >
        <button
          onClick={handleCopy}
          className="font-mono text-xs tracking-widest uppercase border border-[#252525] px-5 py-2 text-[#888888] hover:border-[#ff3c00] hover:text-[#f0f0f0] transition-colors duration-200"
        >
          {copied ? "COPIED." : "COPY"}
        </button>
        <button
          onClick={onAnotherFormat}
          className="font-mono text-xs tracking-widest uppercase text-[#888888] hover:text-[#f0f0f0] transition-colors duration-200"
        >
          ANOTHER FORMAT →
        </button>
        <button
          onClick={onReset}
          className="font-mono text-xs tracking-widest uppercase text-[#888888] hover:text-[#f0f0f0] transition-colors duration-200"
        >
          NEW THOUGHT
        </button>
      </div>
    </div>
  );
}

// ── Format selector ───────────────────────────────────────────────────────────

function CreedFormatSelector({
  selected,
  onChange,
}: {
  selected: CreedFormat;
  onChange: (f: CreedFormat) => void;
}) {
  return (
    <div className="mb-6">
      <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-3">
        // format
      </p>
      <div className="flex flex-wrap gap-2">
        {FORMAT_OPTIONS.map((opt) => {
          const active = selected === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`font-mono text-xs tracking-wider border px-3 py-1.5 transition-colors duration-150 flex items-center gap-1.5 ${
                active
                  ? "border-[#ff3c00] text-[#f0f0f0] bg-[#0e0e0e]"
                  : "border-[#181818] text-[#888888] hover:border-[#333333] hover:text-[#f0f0f0]"
              }`}
            >
              <span
                className={`font-black ${active ? "text-[#ff3c00]" : "text-[#888888]"}`}
                style={{ letterSpacing: "-0.04em" }}
              >
                {opt.symbol}
              </span>
              {opt.label}
              <span
                aria-hidden="true"
                className="text-[9px] tracking-widest"
                style={{ color: active ? "#444444" : "#1e1e1e" }}
              >
                {opt.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function CreedClient() {
  const [state, setState] = useState<State>("idle");
  const [thought, setThought] = useState("");
  const [format, setFormat] = useState<CreedFormat>("medium");
  const [focused, setFocused] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [promptVisible, setPromptVisible] = useState(true);
  const [math, setMath] = useState({ a: 0, b: 0 });
  const [mathAnswer, setMathAnswer] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [result, setResult] = useState<CreedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submittedThought, setSubmittedThought] = useState("");

  useEffect(() => {
    setMath(newMath());
  }, []);

  useEffect(() => {
    if (thought || focused || state !== "idle") return;
    const id = setInterval(() => {
      setPromptVisible(false);
      setTimeout(() => {
        setPromptIndex((i) => (i + 1) % INPUT_PROMPTS.length);
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
      const res = await fetch("/api/creed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thought: thought.trim(),
          format,
          math_a: math.a,
          math_b: math.b,
          math_answer: mathAnswer,
          honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState("error");
        setError(data.error ?? "The engine failed.");
        setMathAnswer("");
        setMath(newMath());
        return;
      }
      setResult(data as CreedResult);
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
    setResult(null);
    setError(null);
    setSubmittedThought("");
  }

  function handleAnotherFormat() {
    setState("idle");
    setMathAnswer("");
    setMath(newMath());
    setResult(null);
    setError(null);
    // thought is preserved — user just picks a different format
  }

  if (state === "loading") return <CreedLoading />;

  if (state === "done" && result) {
    return (
      <CreedOutput
        thought={submittedThought}
        result={result}
        onReset={handleReset}
        onAnotherFormat={handleAnotherFormat}
      />
    );
  }

  const showPrompt = !thought && !focused;

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Honeypot */}
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

      {/* Format selector */}
      <CreedFormatSelector selected={format} onChange={setFormat} />

      {/* Textarea input */}
      <div className="border border-[#1e1e1e] bg-[#0d0d0d] focus-within:border-[#2a2a2a] transition-colors duration-300 mb-1">
        <div className="relative">
          {showPrompt && (
            <div
              className="absolute inset-0 p-6 pointer-events-none font-mono text-[#252525] leading-relaxed select-none"
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                opacity: promptVisible ? 1 : 0,
                transition: "opacity 0.4s ease",
                letterSpacing: "0.04em",
              }}
            >
              {INPUT_PROMPTS[promptIndex]}
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

        {/* Character progress bar */}
        <div className="h-px bg-[#0e0e0e]">
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${(thought.length / charLimit) * 100}%`,
              backgroundColor: remaining < 60 ? "#ff3c00" : "#1a1a1a",
            }}
          />
        </div>

        {/* Footer: captcha + counter + submit */}
        <div className="border-t border-[#111111] px-6 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
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
                  className="w-10 bg-transparent border-b border-[#2a2a2a] focus:border-[#666666] text-[#888888] placeholder-[#2a2a2a] font-mono text-xs text-center focus:outline-none transition-colors"
                />
              </>
            )}
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <span
              className={`font-mono text-xs tabular-nums ${
                remaining < 60 ? "text-[#ff3c00]" : "text-[#888888]"
              }`}
            >
              {remaining}
            </span>
            <button
              type="submit"
              disabled={!canSubmit}
              className="font-mono text-xs font-bold px-8 py-2.5 border border-[#252525] text-[#777777] hover:border-[#ff3c00] hover:text-[#f0f0f0] disabled:border-[#111111] disabled:text-[#1e1e1e] transition-colors duration-200 disabled:cursor-not-allowed tracking-widest uppercase"
            >
              GENERATE
            </button>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-3 font-mono text-xs text-[#ff3c00] tracking-widest">{error}</p>
      )}

      {state === "error" && !error && (
        <p className="mt-3 font-mono text-xs text-[#ff3c00] tracking-widest">
          Something failed. Try again.
        </p>
      )}
    </form>
  );
}
