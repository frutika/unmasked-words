import Link from "next/link";
import MiningBadge from "@/components/MiningBadge";

const LINKS = [
  { href: "/threads",           label: "deep threads" },
  { href: "/box",               label: "black box" },
  { href: "/mirror",            label: "mirror mode" },
  { href: "/creed",             label: "creed" },
  { href: "/duel",              label: "duel" },
  { href: "/anonymous-thoughts", label: "topics" },
  { href: "/how-it-works",      label: "how it works" },
  { href: "/about",             label: "manifesto" },
  { href: "/privacy",           label: "privacy" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#1a1a1a] px-6 py-8 mt-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-5">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[#555555] text-[10px] tracking-widest uppercase hover:text-[#ff3c00] transition-colors duration-100"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-[#111111] pt-4">
          <p className="font-mono text-[#333333] text-[10px] tracking-widest">
            NO ACCOUNTS. NO TRACKING. NO FILTERS.
          </p>
          <MiningBadge />
        </div>
      </div>
    </footer>
  );
}
