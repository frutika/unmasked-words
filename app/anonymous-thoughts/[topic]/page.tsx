import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOPICS, SUPER_TOPICS, getTopic, getSuperTopicForTopic, type SuperTopicSlug } from "@/lib/topics";
import SiteHeader from "@/components/SiteHeader";
import TopicFeed from "@/components/TopicFeed";
import SiteFooter from "@/components/SiteFooter";

interface Props {
  params: Promise<{ topic: string }>;
}

// ── Super topic metadata ───────────────────────────────────────────────────

const SUPER_DESCRIPTIONS: Record<SuperTopicSlug, string> = {
  LOVE:        "what love actually does to people",
  MIND:        "what happens inside when no one is watching",
  SELF:        "who you are when the performance stops",
  EXISTENCE:   "the questions nobody wants to sit with",
  WOUND:       "the damage that came from people who were supposed to be safe",
  FAMILY:      "the system you were born into and everything it installed",
  PATTERN:     "the loops the mind runs to protect itself",
  PERFORMANCE: "the version of yourself performed for every room",
  FAITH:       "what you believed and what happened when you stopped",
  DIGITAL:     "what the connected world actually does to you",
  BODY:        "the skin you live in and the relationship you have with it",
  TIME:        "what memory keeps, what the past costs, what impermanence means",
  AMBITION:    "what you want, what it costs, and what happens when you arrive",
  TRUTH:       "the things that aren't said and the weight of not saying them",
};

const SUPER_SHORT: Record<SuperTopicSlug, string[]> = {
  LOVE: [
    "Not the version you talk about.",
    "The actual thing — what it felt like, what it cost, what it changed.",
    "This is where the unedited version goes.",
  ],
  MIND: [
    "The background process that never closes.",
    "The noise, the loops, the weight that doesn't announce itself.",
    "The honest account of what's actually happening inside.",
  ],
  SELF: [
    "The version of yourself before the presentation begins.",
    "The contradictions, the doubts, the desires that don't fit the narrative.",
    "Who you are when no one is building a picture of you.",
  ],
  EXISTENCE: [
    "The questions underneath everything.",
    "Deferred by routine, by work, by the next plan.",
    "What surfaces when there's nothing left to defer them with.",
  ],
  WOUND: [
    "The damage that came from people who were supposed to be safe.",
    "The relational injuries that don't show from the outside.",
    "What it costs to have loved people who hurt you.",
  ],
  FAMILY: [
    "The system you were born into and everything it installed.",
    "The roles assigned before you could speak and the patterns they became.",
    "The people you didn't choose and the self they shaped.",
  ],
  PATTERN: [
    "The loops the mind runs to protect itself.",
    "The defenses that made sense once and outlasted their purpose.",
    "What it costs to be someone whose nervous system never got the all-clear.",
  ],
  PERFORMANCE: [
    "Saying yes, shrinking, accommodating — until it becomes who you are.",
    "The version of yourself performed for every room.",
    "The self that exists underneath the performance.",
  ],
  FAITH: [
    "What you believed and what happened when you stopped.",
    "The framework that held everything and what came after it collapsed.",
    "The specific grief of losing something that was supposed to be certain.",
  ],
  DIGITAL: [
    "What the connected world actually does to you.",
    "The scroll, the feed, the parasocial intimacy, the ghost.",
    "The interior life shaped by systems designed to capture it.",
  ],
  BODY: [
    "The skin you live in and the relationship you have with it.",
    "The chronic, the invisible, the distorted, the performed.",
    "What it costs to exist inside something that doesn't always cooperate.",
  ],
  TIME: [
    "What memory keeps and what it gets wrong.",
    "The before and after, the parallel life, the unlived version.",
    "The specific weight of knowing that nothing is permanent.",
  ],
  AMBITION: [
    "What you want and what you're supposed to want.",
    "The drive, the block, the almost, the hollow arrival.",
    "What remains when you get there and it doesn't fix anything.",
  ],
  TRUTH: [
    "The things that aren't said and the weight of not saying them.",
    "The unspoken, the unwitnessed, the unfinished conversation.",
    "What it costs to be honest — and what it costs not to be.",
  ],
};

// ── Helpers ────────────────────────────────────────────────────────────────

function getSuperTopic(slug: string) {
  return SUPER_TOPICS.find((st) => st.slug.toLowerCase() === slug.toLowerCase()) ?? null;
}

// ── Static params ──────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const topicParams = TOPICS.map((t) => ({ topic: t.slug }));
  const superParams = SUPER_TOPICS.map((st) => ({ topic: st.slug.toLowerCase() }));
  // deduplicate (e.g. "love" exists as both a topic slug and a super topic slug)
  const seen = new Set<string>();
  return [...superParams, ...topicParams].filter(({ topic }) => {
    if (seen.has(topic)) return false;
    seen.add(topic);
    return true;
  });
}

// ── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: slug } = await params;

  const superTopic = getSuperTopic(slug);
  if (superTopic) {
    const key = superTopic.slug as SuperTopicSlug;
    const title = `Anonymous Thoughts About ${superTopic.slug}`;
    const description = `Explore anonymous thoughts about ${SUPER_DESCRIPTIONS[key]}. No accounts. No filters. Just the honest truth.`;
    return {
      title,
      description,
      alternates: { canonical: `https://unmaskedwords.com/anonymous-thoughts/${slug.toLowerCase()}` },
      openGraph: { title, description, url: `https://unmaskedwords.com/anonymous-thoughts/${slug.toLowerCase()}`, siteName: "UnmaskedWords", type: "website", locale: "en_US", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `UnmaskedWords — ${superTopic.slug}` }] },
      twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
    };
  }

  const topic = getTopic(slug);
  if (!topic) return { title: "Not Found" };

  const title = `Anonymous Thoughts About ${topic.title}`;
  const description = `Read real anonymous thoughts about ${topic.title.toLowerCase()}. ${topic.description.charAt(0).toUpperCase() + topic.description.slice(1)}. No accounts. No filters. Just the honest truth.`;

  return {
    title,
    description,
    keywords: [`anonymous thoughts about ${topic.title.toLowerCase()}`, `${topic.title.toLowerCase()} confessions`, `${topic.title.toLowerCase()} anonymous`, ...topic.keywords],
    alternates: { canonical: `https://unmaskedwords.com/anonymous-thoughts/${slug}` },
    openGraph: { title, description, url: `https://unmaskedwords.com/anonymous-thoughts/${slug}`, siteName: "UnmaskedWords", type: "website", locale: "en_US", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Anonymous thoughts about ${topic.title}` }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}

// ── Super topic page ───────────────────────────────────────────────────────

function SuperTopicPage({ slug, superSlug }: { slug: string; superSlug: SuperTopicSlug }) {
  const superTopic = SUPER_TOPICS.find((st) => st.slug === superSlug)!;
  const lines = SUPER_SHORT[superSlug];

  // Exclude any topic whose slug === slug (e.g. "love" on the LOVE page to avoid self-link)
  const topics = superTopic.topics
    .map((s) => TOPICS.find((t) => t.slug === s))
    .filter(Boolean)
    .filter((t) => t!.slug !== slug) as typeof TOPICS;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Anonymous Thoughts — ${superSlug}`,
    description: SUPER_DESCRIPTIONS[superSlug],
    url: `https://unmaskedwords.com/anonymous-thoughts/${slug}`,
    isPartOf: { "@type": "WebSite", name: "UnmaskedWords", url: "https://unmaskedwords.com" },
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://unmaskedwords.com" },
        { "@type": "ListItem", position: 2, name: "Anonymous Thoughts", item: "https://unmaskedwords.com/anonymous-thoughts" },
        { "@type": "ListItem", position: 3, name: superSlug, item: `https://unmaskedwords.com/anonymous-thoughts/${slug}` },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader
        right={
          <Link href="/anonymous-thoughts" className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors">
            ← all topics
          </Link>
        }
      />

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#ff3c00] text-[10px] tracking-widest uppercase mb-4">
            // anonymous thoughts
          </p>
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-none mb-8"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            {superSlug}
          </h1>
          <div className="flex flex-col gap-1 mb-10">
            {lines.map((line, i) => (
              <p key={i} className="font-mono text-[#888888] text-sm leading-relaxed">{line}</p>
            ))}
          </div>
          <Link
            href={`/?topic=${slug}`}
            className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
          >
            ENTER THE VOID →
          </Link>
        </div>
      </section>

      {/* Topics */}
      <section className="flex-1 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // {topics.length} voids
          </p>
          <div className="flex flex-col">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/anonymous-thoughts/${topic.slug}`}
                className="group border-b border-[#1a1a1a] py-5 flex items-start justify-between gap-4 -mx-2 px-2 hover:bg-[#0d0d0d] transition-colors duration-100 last:border-b-0"
              >
                <div className="min-w-0">
                  <p className="font-mono font-black text-[#f0f0f0] text-sm tracking-tight group-hover:text-[#ff3c00] transition-colors duration-100 mb-1">
                    {topic.title}
                  </p>
                  <p className="font-mono text-[#555555] text-[10px] tracking-widest mb-3">
                    {topic.description}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {topic.shortIntro.split("\n").map((line, i) => (
                      <p key={i} className="font-mono text-[#444444] text-[11px] leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
                <span className="font-mono text-[#555555] group-hover:text-[#ff3c00] text-xs transition-colors duration-100 flex-shrink-0 mt-0.5">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other super topics */}
      <section className="border-t border-[#1a1a1a] px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
            // other territories
          </p>
          <div className="flex flex-wrap gap-2">
            {SUPER_TOPICS.filter((st) => st.slug !== superSlug).map((st) => (
              <Link
                key={st.slug}
                href={`/anonymous-thoughts/${st.slug.toLowerCase()}`}
                className="font-mono font-black text-xs tracking-widest uppercase px-5 py-3 border border-[#1a1a1a] text-[#888888] hover:text-[#ff3c00] hover:border-[#ff3c00] transition-colors duration-100"
              >
                {st.slug}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

// ── Regular topic page ─────────────────────────────────────────────────────

function RegularTopicPage({ topic }: { topic: NonNullable<ReturnType<typeof getTopic>> }) {
  const relatedTopics = topic.related
    .map((r) => TOPICS.find((t) => t.slug === r))
    .filter(Boolean) as typeof TOPICS;

  const superTopicSlug = getSuperTopicForTopic(topic.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Anonymous Thoughts About ${topic.title}`,
    description: topic.description,
    url: `https://unmaskedwords.com/anonymous-thoughts/${topic.slug}`,
    isPartOf: { "@type": "WebSite", name: "UnmaskedWords", url: "https://unmaskedwords.com" },
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://unmaskedwords.com" },
        { "@type": "ListItem", position: 2, name: "Anonymous Thoughts", item: "https://unmaskedwords.com/anonymous-thoughts" },
        { "@type": "ListItem", position: 3, name: topic.title, item: `https://unmaskedwords.com/anonymous-thoughts/${topic.slug}` },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader
        right={
          <Link href="/anonymous-thoughts" className="font-mono text-[#888888] text-xs tracking-widest uppercase hover:text-[#f0f0f0] transition-colors">
            ← all topics
          </Link>
        }
      />

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {superTopicSlug && (
            <Link
              href={`/anonymous-thoughts/${superTopicSlug.toLowerCase()}`}
              className="inline-block font-mono text-[#ff3c00] text-[10px] tracking-widest uppercase mb-4 hover:underline"
            >
              {superTopicSlug}
            </Link>
          )}
          <h1
            className="font-mono font-black text-[#f0f0f0] leading-snug mb-8"
            style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Anonymous thoughts about {topic.title.toLowerCase()}.
          </h1>
          <div className="flex flex-col gap-1 mb-10">
            {topic.shortIntro.split("\n").map((line, i) => (
              <p key={i} className="font-mono text-[#888888] text-sm leading-relaxed">{line}</p>
            ))}
          </div>
          <Link
            href="#signals"
            className="font-mono font-bold text-xs tracking-widest uppercase px-6 py-3 bg-[#ff3c00] text-black hover:bg-[#f0f0f0] transition-colors duration-150"
          >
            {topic.title} signals
          </Link>
        </div>
      </section>

      {/* Topic feed */}
      <section id="signals" className="flex-1 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-6">
            // {topic.title.toLowerCase()} signals
          </p>
          <TopicFeed topic={topic.slug} />
        </div>
      </section>

      {/* Related voids */}
      {relatedTopics.length > 0 && (
        <section className="border-t border-[#1a1a1a] px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <p className="font-mono text-[#888888] text-xs tracking-widest uppercase mb-4">
              // related voids
            </p>
            <div className="flex flex-wrap gap-2">
              {relatedTopics.map((related) => (
                <Link
                  key={related.slug}
                  href={`/anonymous-thoughts/${related.slug}`}
                  className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[#1a1a1a] text-[#888888] hover:text-[#f0f0f0] hover:border-[#333333] transition-colors duration-100"
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO copy */}
      <section className="border-t border-[#1a1a1a] px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-4">
          {topic.intro.split("\n\n").map((paragraph, i) => (
            <p key={i} className="font-mono text-[#666666] text-xs leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

// ── Main export ────────────────────────────────────────────────────────────

export default async function TopicOrSuperTopicPage({ params }: Props) {
  const { topic: slug } = await params;

  const superTopic = getSuperTopic(slug);
  if (superTopic) {
    return <SuperTopicPage slug={slug} superSlug={superTopic.slug as SuperTopicSlug} />;
  }

  const topic = getTopic(slug);
  if (!topic) notFound();

  return <RegularTopicPage topic={topic} />;
}
