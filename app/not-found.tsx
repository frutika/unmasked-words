import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
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

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // 404
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-8"
            style={{ fontSize: "clamp(3rem, 10vw, 6rem)", letterSpacing: "-0.04em" }}
          >
            VOID<br />
            <span className="text-[#ff3c00]">NOT<span className="cursor-blink">|</span></span><br />
            FOUND
          </h1>
          <p className="font-mono text-[#888888] text-sm leading-relaxed mb-10 max-w-sm">
            This post has disappeared into the void.<br />
            Maybe it was deleted. Maybe it never existed.<br />
            The mask was removed.
          </p>
          <Link
            href="/"
            className="inline-block font-mono font-bold text-sm tracking-widest uppercase px-10 py-4 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
          >
            Heartbreak signals
          </Link>
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
