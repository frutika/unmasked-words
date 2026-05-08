"use client";

import { useState, useTransition } from "react";
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

function getRandomAlias(): string {
  return RANDOM_ALIASES[Math.floor(Math.random() * RANDOM_ALIASES.length)];
}

export default function PostInput() {
  const [content, setContent] = useState("");
  const [alias, setAlias] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const charLimit = 500;
  const remaining = charLimit - content.length;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;

    setError(null);
    startTransition(async () => {
      try {
        await submitPost(content, alias);
        setContent("");
        setAlias("");
      } catch {
        setError("Failed to submit. Try again.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
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
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            letterSpacing: "0.02em",
          }}
        />
        <div className="flex items-center justify-between border-t border-[#1f1f1f] px-5 py-3 gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value.slice(0, 40))}
              placeholder="Anonymous"
              disabled={isPending}
              className="bg-transparent text-[#555555] placeholder-[#333333] font-mono text-sm focus:outline-none focus:text-[#f0f0f0] transition-colors w-36 disabled:opacity-50 min-w-0"
            />
            <button
              type="button"
              onClick={() => setAlias(getRandomAlias())}
              disabled={isPending}
              title="Random alias"
              className="font-mono text-xs text-[#333333] hover:text-[#ff3c00] transition-colors disabled:opacity-30 flex-shrink-0"
            >
              ↺
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span
              className={`font-mono text-xs tabular-nums ${
                remaining < 50 ? "text-[#ff3c00]" : "text-[#333333]"
              }`}
            >
              {remaining}
            </span>
            <button
              type="submit"
              disabled={isPending || !content.trim()}
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
