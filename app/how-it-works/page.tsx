import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "How It Works — Anonymous Posting, Explained",
  description:
    "How UnmaskedWords works. Post anonymously in seconds. No account, no sign-up, no email. Your thought appears in the live feed and vanishes into the void.",
  keywords: ["how to post anonymously", "anonymous posting platform", "no account anonymous", "how unmaskedwords works"],
  alternates: { canonical: "https://unmaskedwords.com/how-it-works" },
  openGraph: {
    title: "How It Works — Anonymous Posting, Explained | UnmaskedWords",
    description: "Post anonymously in seconds. No account, no sign-up, no email. Just type and post.",
    url: "https://unmaskedwords.com/how-it-works",
    siteName: "UnmaskedWords",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How UnmaskedWords Works" }],
  },
};

const steps = [
  {
    num: "01",
    heading: "Type your thought",
    body: "Up to 500 characters. Say the thing you can't say anywhere else. No formatting required. No subject line. Just the thought.",
  },
  {
    num: "02",
    heading: "Choose an alias — or don't",
    body: "An alias is optional. If you use one, pick anything: a random word, a number, something that means nothing. It cannot be traced back to you. Or leave it blank.",
  },
  {
    num: "03",
    heading: "Post",
    body: "One click. Your thought appears in the live feed instantly, alongside everyone else's. No verification. No approval. No waiting.",
  },
  {
    num: "04",
    heading: "That's it",
    body: "No account created. No data attached to you. No email required. No cookies placed for tracking. The thought exists in the feed. You are not attached to it.",
  },
];

const faqs = [
  {
    q: "Can anyone see who posted what?",
    a: "No. Posts are stored with optional alias text — a random or chosen name that has no connection to any real identity. There is no account system. No IP address is stored with posts. There is no way to trace a post back to a person.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. There is no account system. You cannot create an account on UnmaskedWords. You open the site, type, and post.",
  },
  {
    q: "What happens to my post after I submit it?",
    a: "It appears in the live feed. It stays there. It can be reacted to by other users (+ or !). It will appear on the individual post page at /post/[id]. There is no automatic deletion.",
  },
  {
    q: "Can I delete my post?",
    a: "Because there are no accounts, there is no deletion mechanism for individual posts. If you have a specific concern, contact us at root@unmaskedwords.com.",
  },
  {
    q: "What are Deep Threads?",
    a: "Threads are themed anonymous feeds built around a single emotional topic — shame, rage, fear, grief, desire, and others. Each thread is a separate space with its own feed and posting input.",
  },
  {
    q: "Is there any moderation?",
    a: "Posts that contain illegal content or direct threats against specific individuals are removed. The threshold is high by design — this is a platform for honesty, including the kind that's uncomfortable.",
  },
];

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

      <article className="flex-1 px-6 py-14">
        <div className="max-w-xl mx-auto">

          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // how it works
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-16"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            THE THOUGHT MATTERS.<br />
            <span className="text-[#ff3c00]">NOT THE PERSON.</span>
          </h1>

          {/* Why it exists */}
          <div className="border-t border-[#1a1a1a] pt-12 mb-16">
            <p className="font-mono text-[#f0f0f0] text-sm leading-loose mb-8">
              Most people spend their lives performing.
            </p>
            <div className="flex flex-col gap-1 mb-8 pl-4 border-l-2 border-[#1a1a1a]">
              {["For friends.", "For family.", "For work.", "For algorithms."].map((line) => (
                <p key={line} className="font-mono text-[#555555] text-sm tracking-wide">{line}</p>
              ))}
            </div>
            <p className="font-mono text-[#f0f0f0] text-sm leading-loose mb-8">
              UnmaskedWords exists for the thoughts that survive when the performance ends.
            </p>
            <div className="flex flex-col gap-1 mb-8 pl-4 border-l-2 border-[#1a1a1a]">
              {["No profile.", "No audience to impress.", "No identity to defend."].map((line) => (
                <p key={line} className="font-mono text-[#555555] text-sm tracking-wide">{line}</p>
              ))}
            </div>
            <p className="font-mono text-[#ff3c00] text-sm leading-loose">
              Just the thing you actually wanted to say.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col mb-16">
            {steps.map((step) => (
              <div key={step.num} className="border-t border-[#1a1a1a] pt-8 pb-8">
                <p className="font-mono text-[#888888] text-[10px] tracking-widest mb-3">
                  [{step.num}]
                </p>
                <p className="font-mono font-black text-[#f0f0f0] text-base mb-2">
                  {step.heading}
                </p>
                <p className="font-mono text-[#888888] text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* What it is not */}
          <div className="border-t border-[#1a1a1a] pt-8 mb-16">
            <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
              // what this is not
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Not a social network. There are no followers, no profiles, no feed algorithm.",
                "Not a therapy service. The void listens. It does not respond.",
                "Not anonymous in the way that can be undone. There are no accounts to associate with posts.",
                "Not monetized through your data. There are no ads. There is no behavioral tracking.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="font-mono text-[#ff3c00] text-xs mt-0.5 flex-shrink-0">—</span>
                  <p className="font-mono text-[#888888] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-[#1a1a1a] pt-8 mb-16">
            <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-8">
              // frequently asked
            </p>
            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div key={i} className="border-t border-[#1a1a1a] pt-6 pb-6">
                  <p className="font-mono font-black text-[#f0f0f0] text-sm mb-3">
                    {faq.q}
                  </p>
                  <p className="font-mono text-[#888888] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/"
            className="inline-block font-mono font-bold text-sm tracking-widest uppercase px-10 py-4 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
          >
            Heartbreak signals
          </Link>

        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
