import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import MirrorClient from "@/components/MirrorClient";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Mirror Mode — AI Reflection of Your Thoughts",
  description:
    "Write a thought. The mirror reflects back what you cannot see — your emotional tone, the hidden subtext, what it reveals about you, and one question you have been avoiding.",
  keywords: ["AI mirror", "emotional reflection", "self-awareness", "hidden subtext", "anonymous therapy", "thought analysis"],
  alternates: { canonical: "https://unmaskedwords.com/mirror" },
  openGraph: {
    title: "Mirror Mode — AI Reflection of Your Thoughts | UnmaskedWords",
    description: "Write a thought and the mirror reflects back what you cannot see — your emotional tone, the hidden subtext, and the question you have been avoiding.",
    url: "https://unmaskedwords.com/mirror",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UnmaskedWords Mirror Mode" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirror Mode — AI Reflection of Your Thoughts | UnmaskedWords",
    description: "Write a thought and the mirror reflects back what you cannot see — your emotional tone, the hidden subtext, and the question you have been avoiding.",
    images: ["/og-image.png"],
  },
};

export default function MirrorPage() {
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
      <section className="border-b border-[#111111] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // mirror mode
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 8vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            THE MIRROR<br />
            <span className="text-[#ff3c00]">DOESN&apos;T LIE<span className="cursor-blink">|</span></span>
          </h1>
          <p className="font-mono text-[#888888] text-sm leading-relaxed max-w-sm mb-4">
            Write a thought. Any thought.<br />
            The mirror reads what you wrote<br />
            and reflects back what you didn&apos;t.<br />
          </p>
          <p aria-hidden="true" className="font-mono text-[#333333] text-[10px] tracking-widest mb-2">
            NO ADVICE. NO JUDGMENT. NO COMFORT.
          </p>
          <p aria-hidden="true" className="font-mono text-[#222222] text-[10px] tracking-widest">
            NOTHING IS STORED. THE REFLECTION EXISTS ONLY FOR YOU.
          </p>
        </div>
      </section>

      {/* Mirror Input */}
      <section className="flex-1 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <MirrorClient />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
