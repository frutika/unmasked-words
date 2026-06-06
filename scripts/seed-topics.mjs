// Seed script: generates 3 anonymous confessions per topic via Claude haiku
// and inserts them into PocketBase with random dates over the past 12 months.
// Run: node scripts/seed-topics.mjs

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";

const PB_URL = "http://127.0.0.1:8090";
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const ALIASES = [
  "Ghost Signal", "Static Soul", "Hollow Echo", "Quiet Noise", "Nameless",
  "Broken Clock", "Lost Signal", "Void Walker", "Silence Speaks", "No One",
  "Fade Out", "Buried Deep", "Unsent Draft", "Torn Page", "Erased",
  "Fading Ink", "The Witness", "Dark Matter", "Empty Room", "Scattered",
  "Unfinished", "The Residue", "Untitled", "Signal Lost", "Unnamed",
  "Fracture", "The Absent", "Grey Noise", "Hollow Ground", "Without Anchor",
  "The Weight", "Unspoken", "Barely There", "The Static", "Remnant",
  "Drifting", "The Unseen", "Cold Echo", "Shattered Lens", "The Void",
  "Unsettled", "Frayed Edge", "The Wreckage", "Wordless", "Spent",
];

function randomAlias() {
  return ALIASES[Math.floor(Math.random() * ALIASES.length)];
}

function randomDate() {
  // Random date between 12 months ago and 2 months ago
  const now = Date.now();
  const twelveMonthsAgo = now - 365 * 24 * 60 * 60 * 1000;
  const twoMonthsAgo = now - 60 * 24 * 60 * 60 * 1000;
  const ts = twelveMonthsAgo + Math.random() * (twoMonthsAgo - twelveMonthsAgo);
  return new Date(ts).toISOString().replace("T", " ").replace(/\.\d{3}Z/, ".000Z");
}

const TOPICS = [
  "absent-father", "addiction", "after-survival", "aging", "ambition",
  "anger", "anticipatory-grief", "anxiety", "approval-addiction", "attachment-wound",
  "avoidance", "before-after", "being-misunderstood", "belonging", "betrayal",
  "body", "body-dysmorphia", "breadcrumbing", "burnout", "caregiver-exhaustion",
  "catastrophizing", "change", "cheating", "childhood", "chosen-numbness",
  "chronic-apologizing", "chronic-boredom", "chronic-illness", "chronic-underachievement", "class-shame",
  "codependency", "comparison", "compulsive-honesty", "conditional-love", "confession",
  "confidence", "connection", "control", "creative-block", "cultural-displacement",
  "death", "deconstruction", "depression", "desire", "digital-withdrawal",
  "direction", "disappointment", "disordered-eating", "dissociation", "divorce",
  "doomscrolling", "emotional-abuse", "emotional-dependence", "emotional-exile", "emotional-flooding",
  "emotional-labor", "emotional-repression", "emotional-withholding", "emptiness", "enmeshment",
  "estrangement", "exhaustion", "existential-dread", "failure", "faith-loss",
  "false-memory", "family", "fawning", "fear", "fear-of-happiness",
  "fear-of-success", "femininity", "forgiveness", "free-will", "freedom",
  "friendship", "frustration", "ghosting", "grief", "growth",
  "guilt", "healing", "heartbreak", "hollow-victory", "homecoming",
  "hope", "hustle-culture", "hypervigilance", "identity", "impermanence",
  "imposter-love", "imposter-syndrome", "inherited-trauma", "insomnia", "intellectual-loneliness",
  "intrusive-thoughts", "invisible-achievement", "invisible-illness", "isolation", "jealousy",
  "late-diagnosis", "learned-helplessness", "living-grief", "loneliness", "loneliness-in-a-crowd",
  "longing", "loss", "love", "magical-thinking", "marriage",
  "masculinity", "meaning", "mistakes", "money", "mortality",
  "narcissistic-relationship", "nihilism", "nostalgia", "obsession", "overachievement",
  "overcaring", "overqualification", "oversharing", "overthinking", "parallel-lives",
  "parasocial-love", "parents", "people-pleasing", "perfectionism", "procrastination",
  "productivity-shame", "purpose", "regret", "rejection", "religious-trauma",
  "resentment", "rest-anxiety", "rumination", "second-hand-life", "secrets",
  "self-destruction", "self-doubt", "self-worth", "shame", "shrinking",
  "siblings", "situationship", "small-talk", "social-exhaustion", "social-media-pressure",
  "spiritual-bypassing", "success", "sunday-dread", "survivors-guilt", "the-almost",
  "the-apology-that-never-came", "the-dream-you-gave-up", "the-good-child", "the-past", "the-performing-body",
  "the-prodigal", "the-returning", "the-unfinished-conversation", "the-unlived-life", "the-unspoken-thing",
  "the-unwitnessed", "therapy", "toxic-loyalty", "trauma", "trust",
  "unchosen-role", "unrequited-love", "validation-hunger", "vulnerability", "work",
];

const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

async function generatePosts(topic) {
  const label = topic.replace(/-/g, " ");
  const msg = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 800,
    messages: [
      {
        role: "user",
        content: `Generate exactly 3 raw, anonymous confessions about "${label}". These are brief stream-of-consciousness thoughts — honest, emotionally unfiltered, 1-4 sentences each. No quotes, no headers. Write them as a real person would type in a moment of vulnerability. Separate each confession with a single blank line. Do not number them. Do not add any explanation.`,
      },
    ],
  });
  const raw = msg.content[0].text.trim();
  return raw
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 10)
    .slice(0, 3);
}

async function insertPost(content, topic) {
  const body = {
    content,
    alias: randomAlias(),
    created: randomDate(),
    topic,
    plus: 0,
    bang: 0,
  };
  const res = await fetch(`${PB_URL}/api/collections/posts_en/records`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`PocketBase error for topic "${topic}": ${err}`);
  }
  return res.json();
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  // Skip topics that already have content
  console.log("Fetching existing topics...");
  const existingRes = await fetch(
    `${PB_URL}/api/collections/posts_en/records?filter=topic+!%3D+''&perPage=200`
  );
  const existingData = await existingRes.json();
  const seeded = new Set(existingData.items.map((p) => p.topic));
  console.log(`Already seeded: ${[...seeded].join(", ") || "none"}`);

  const remaining = TOPICS.filter((t) => !seeded.has(t));
  console.log(`\nTopics to seed: ${remaining.length}\n`);

  let done = 0;
  for (const topic of remaining) {
    try {
      const posts = await generatePosts(topic);
      for (const content of posts) {
        await insertPost(content, topic);
      }
      done++;
      console.log(`[${done}/${remaining.length}] ✓ ${topic} (${posts.length} posts)`);
    } catch (err) {
      console.error(`[!] ${topic}: ${err.message}`);
    }
    // Small delay to avoid rate limits
    await sleep(300);
  }

  console.log(`\nDone. Seeded ${done} topics.`);
}

main();
