import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import BoxInput from "@/components/BoxInput";
import BoxVoicesFeed from "@/components/BoxVoicesFeed";
import { pbGet } from "@/lib/pb-http";
import type { BoxVoice } from "@/lib/pocketbase";
import SiteFooter from "@/components/SiteFooter";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Black Box — Write It, Watch It Vanish",
  description:
    "Anonymous thoughts that auto-delete after 24 hours. Before they vanish, one sentence is extracted and survives forever in the Voices from the Box.",
  keywords: ["black box", "ephemeral thoughts", "auto-delete", "anonymous writing", "disappearing messages", "confessions"],
  alternates: { canonical: "https://unmaskedwords.com/box" },
  openGraph: {
    title: "The Black Box — Write It, Watch It Vanish | UnmaskedWords",
    description: "Your thought disappears in 24 hours. Before it vanishes, the void pulls one sentence that survives forever in the Voices from the Box.",
    url: "https://unmaskedwords.com/box",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Black Box" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Black Box — Write It, Watch It Vanish | UnmaskedWords",
    description: "Your thought disappears in 24 hours. Before it vanishes, the void pulls one sentence that survives forever in the Voices from the Box.",
    images: ["/og-image.png"],
  },
};

async function getVoices(): Promise<{ voices: BoxVoice[]; totalPages: number }> {
  try {
    const data = await pbGet(
      `/api/collections/box_voices/records?sort=-extracted_at&page=1&perPage=20`
    ) as { items?: BoxVoice[]; totalPages?: number };
    return { voices: data.items ?? [], totalPages: data.totalPages ?? 0 };
  } catch {
    return { voices: [], totalPages: 0 };
  }
}

export default async function BoxPage() {
  const { voices, totalPages } = await getVoices();

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <SiteHeader
        right={
          <Link
            href="/"
            className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
          >
            ← feed
          </Link>
        }
      />

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // the black box
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 8vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            LEAVE A THOUGHT<br />
            LET IT VANISH<br />
            <span className="text-[#ff3c00]">ONE LINE SURVIVES<span className="cursor-blink">|</span></span>
          </h1>
          <p className="font-mono text-[#888888] text-sm leading-relaxed max-w-sm mb-6">
            Write anything. It lives for 24 hours.<br />
            The void reads it, pulls one sentence,<br />
            then deletes the rest forever.<br />
            The fragment joins the voices below.
          </p>
          <p aria-hidden="true" className="font-mono text-[#333333] text-[10px] tracking-widest mb-8">
            NO STORAGE. NO RECALL. ONLY THE ECHO.
          </p>
        </div>
      </section>

      {/* Input */}
      <section className="border-b border-[#1a1a1a] px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // your thought (disappears in 24h)
          </p>
          <BoxInput />
        </div>
      </section>

      {/* Voices feed */}
      <section className="flex-1 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // voices from the box — extracted fragments, survived forever
          </p>
          <BoxVoicesFeed initialVoices={voices} initialTotalPages={totalPages} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
