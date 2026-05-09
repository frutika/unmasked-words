import { pbGet } from "@/lib/pb-http";
import type { Duel } from "@/lib/pocketbase";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import DuelStateLoader from "@/components/DuelStateLoader";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

async function getDuel(id: string): Promise<Duel | null> {
  try {
    const duel = await pbGet(`/api/collections/duels/records/${encodeURIComponent(id)}`) as Duel;
    if (duel.status === "waiting") {
      return { ...duel, answer_b: "", alias_b: "" };
    }
    return duel;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const duel = await getDuel(id);
  if (!duel) return { title: "Duel not found — UnmaskedWords" };

  const questionExcerpt = duel.question.slice(0, 60) + (duel.question.length > 60 ? "..." : "");
  const descriptionText =
    duel.status === "complete"
      ? `Two anonymous answers to: "${duel.question}". Vote which feels more honest.`
      : "A duel in progress. Waiting for the opponent to answer anonymously.";

  return {
    title: `Duel: "${questionExcerpt}"`,
    description: descriptionText,
    keywords: ["anonymous duel", "vote honesty", "two answers", "anonymous debate"],
    alternates: { canonical: `https://unmaskedwords.com/duel/${id}` },
    openGraph: {
      title: `Anonymous Duel: "${questionExcerpt}" — UnmaskedWords`,
      description: descriptionText,
      url: `https://unmaskedwords.com/duel/${id}`,
      siteName: "UnmaskedWords",
      type: "website",
      locale: "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Anonymous Duel" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Anonymous Duel: "${questionExcerpt}"`,
      description: descriptionText,
      images: ["/og-image.png"],
    },
  };
}

export default async function DuelPage({ params }: Props) {
  const { id } = await params;
  const duel = await getDuel(id);
  if (!duel) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <SiteHeader
        right={
          <Link
            href="/duel"
            className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors"
          >
            ← duels
          </Link>
        }
      />

      <section className="flex-1 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-8">
            // anonymous duel
          </p>

          {duel.status === "complete" ? (
            <DuelStateLoader duelId={id} duel={duel} />
          ) : (
            <div>
              {/* Question (always visible) */}
              <div className="mb-10">
                <p className="font-mono text-[#888888] text-[10px] tracking-widest uppercase mb-3">
                  // the question
                </p>
                <blockquote className="border-l-2 border-[#ff3c00] pl-5">
                  <p
                    className="font-mono text-[#f0f0f0] leading-relaxed"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
                  >
                    {duel.question}
                  </p>
                </blockquote>
              </div>

              {/* Waiting state — client reads localStorage */}
              <DuelStateLoader duelId={id} duel={duel} waiting />
            </div>
          )}
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
