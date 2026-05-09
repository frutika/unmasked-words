import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import DuelEntrance from "@/components/DuelEntrance";
import DuelFeed from "@/components/DuelFeed";
import { pbGet } from "@/lib/pb-http";
import type { Duel } from "@/lib/pocketbase";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Anonymous Duel — Two Strangers, One Question",
  description:
    "Two anonymous strangers. One question. Their raw answers, judged only by truth. Enter the duel — no identity, no mercy.",
  keywords: ["anonymous duel", "two strangers", "one question", "vote honesty", "anonymous debate", "truth challenge"],
  alternates: { canonical: "https://unmaskedwords.com/duel" },
  openGraph: {
    title: "Anonymous Duel — Two Strangers, One Question | UnmaskedWords",
    description: "Two anonymous strangers answer the same question, alone. Their raw answers face each other. The community votes on which feels more honest and human.",
    url: "https://unmaskedwords.com/duel",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Anonymous Duel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anonymous Duel — Two Strangers, One Question | UnmaskedWords",
    description: "Two anonymous strangers answer the same question, alone. Their raw answers face each other. The community votes on which feels more honest and human.",
    images: ["/og-image.png"],
  },
};

async function getFeed(): Promise<{ duels: Duel[]; totalPages: number }> {
  try {
    const filter = encodeURIComponent(`status = "complete"`);
    const data = await pbGet(
      `/api/collections/duels/records?filter=${filter}&sort=-created&page=1&perPage=10`
    ) as { items?: Duel[]; totalPages?: number };
    return { duels: data.items ?? [], totalPages: data.totalPages ?? 0 };
  } catch {
    return { duels: [], totalPages: 0 };
  }
}

export default async function DuelPage() {
  const { duels, totalPages } = await getFeed();

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
            // anonymous duel
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 8vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            TWO STRANGERS<br />
            ONE QUESTION<br />
            <span className="text-[#ff3c00]">THE VOID DECIDES<span className="cursor-blink">|</span></span>
          </h1>
          <p className="font-mono text-[#888888] text-sm leading-relaxed max-w-sm mb-8">
            You receive a question. You answer alone.<br />
            A stranger answers the same question, alone.<br />
            Your answers face each other. The community votes<br />
            which feels more honest, more human, more real.
          </p>
          <p aria-hidden="true" className="font-mono text-[#333333] text-[10px] tracking-widest mb-8">
            NO PROFILES. NO SCORES. NO WINNERS. ONLY TRUTH.
          </p>

          <DuelEntrance />
        </div>
      </section>

      {/* Feed */}
      <section className="flex-1 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // completed duels — vote on the most honest answer
          </p>
          <DuelFeed initialDuels={duels} initialTotalPages={totalPages} />
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <p aria-hidden="true" className="font-mono text-[#333333] text-xs text-center tracking-widest">
            NO ACCOUNTS. NO TRACKING. NO FILTERS.
          </p>
        </div>
      </footer>
    </main>
  );
}
