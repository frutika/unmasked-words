"use client";

import { useState, useTransition, useEffect } from "react";
import { submitPost } from "@/app/actions";

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

export default function PostInput() {
  const [content, setContent] = useState("");
  const [alias, setAlias] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [math, setMath] = useState({ a: 0, b: 0 });
  const [mathAnswer, setMathAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => { setMath(newMath()); }, []);

  const charLimit = 500;
  const remaining = charLimit - content.length;
  const canSubmit = !!content.trim() && !!mathAnswer && !isPending;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setError(null);
    startTransition(async () => {
      try {
        await submitPost(content, alias, honeypot, math.a, math.b, mathAnswer);
        setContent("");
        setAlias("");
        setMathAnswer("");
        setMath(newMath());
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
      {/* honeypot — hidden from humans, bots fill it */}
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

      <div
        className="border border-[#2a2a2a] bg-[#111111] focus-within:border-[#ff3c00] transition-colors duration-150"
        style={{ borderWidth: "1px" }}
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value.slice(0, charLimit))}
          placeholder="SAY IT."
          rows={6}
          disabled={isPending}
          className="w-full bg-transparent p-5 text-[#f0f0f0] placeholder-[#333333] font-mono text-lg leading-relaxed resize-none focus:outline-none disabled:opacity-50"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", letterSpacing: "0.02em" }}
        />

        <div className="border-t border-[#1f1f1f] px-5 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
          {/* alias row */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value.slice(0, 40))}
              placeholder="Anonymous"
              disabled={isPending}
              className="bg-transparent text-[#555555] placeholder-[#333333] font-mono text-sm focus:outline-none focus:text-[#f0f0f0] transition-colors w-36 disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setAlias(getRandomAlias())}
              disabled={isPending}
              title="Random alias"
              className="font-mono text-xs text-[#333333] hover:text-[#ff3c00] transition-colors disabled:opacity-30"
            >
              ↺
            </button>
          </div>

          {/* math challenge + submit */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {math.a > 0 && (
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[#333333] text-xs tracking-wider">
                  // {math.a} + {math.b} =
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={mathAnswer}
                  onChange={(e) => setMathAnswer(e.target.value.replace(/\D/g, "").slice(0, 3))}
                  disabled={isPending}
                  placeholder="?"
                  className="w-10 bg-transparent border-b border-[#333333] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#333333] font-mono text-xs text-center focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>
            )}
            <span className={`font-mono text-xs tabular-nums ${remaining < 50 ? "text-[#ff3c00]" : "text-[#333333]"}`}>
              {remaining}
            </span>
            <button
              type="submit"
              disabled={!canSubmit}
              className="font-mono text-sm font-bold px-6 py-2 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] disabled:bg-[#1f1f1f] disabled:text-[#555555] transition-colors duration-100 disabled:cursor-not-allowed"
            >
              {isPending ? "SENDING..." : "POST"}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-2 text-[#ff3c00] font-mono text-xs">{error}</p>
      )}
    </form>
  );
}
