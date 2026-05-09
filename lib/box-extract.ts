const EMOTIONAL_WORDS = new Set([
  "afraid", "anger", "angry", "ashamed", "betrayed", "broken", "cold", "confused",
  "dead", "desperate", "devastated", "disgusted", "empty", "exhausted", "failed",
  "fear", "forgotten", "grief", "guilty", "hate", "hopeless", "hurt", "invisible",
  "isolated", "jealous", "lonely", "lost", "love", "miserable", "miss", "numb",
  "pain", "panic", "rage", "regret", "rejected", "sad", "scared", "shame", "shattered",
  "sick", "silent", "sorrow", "suffer", "terrible", "terrified", "tired", "trapped",
  "ugly", "unloved", "weak", "worthless", "wrong",
]);

const PERSONAL_PRONOUNS = /\b(i|i've|i'm|i'll|i'd|i was|i am|i can't|i couldn't|i never|i always|me|my|myself|we|our)\b/gi;

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?…])\s+|(?<=[.!?…])$/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function scoreSentence(sentence: string, index: number, total: number): number {
  let score = 0;
  const lower = sentence.toLowerCase();
  const words = lower.split(/\s+/);

  // Emotional vocabulary
  for (const word of words) {
    const clean = word.replace(/[^a-z']/g, "");
    if (EMOTIONAL_WORDS.has(clean)) score += 2;
  }

  // Personal pronouns
  const pronounMatches = lower.match(PERSONAL_PRONOUNS);
  if (pronounMatches) score += Math.min(pronounMatches.length * 2, 6);

  // Questions feel raw and honest
  if (sentence.endsWith("?")) score += 2;

  // Exclamations feel urgent
  if (sentence.endsWith("!")) score += 1;

  // Length sweet spot: 8–25 words
  if (words.length >= 8 && words.length <= 25) score += 2;

  // Very short sentences lose points
  if (words.length < 4) score -= 3;

  // Slight bias toward later sentences (often the real confession)
  if (index === total - 1 && total > 1) score += 1;
  if (index >= Math.floor(total / 2)) score += 0.5;

  return score;
}

export function extractFragment(content: string): string {
  const sentences = splitSentences(content);
  if (sentences.length === 0) return content.slice(0, 120).trim();
  if (sentences.length === 1) return sentences[0].slice(0, 200).trim();

  let best = sentences[0];
  let bestScore = -Infinity;

  sentences.forEach((sentence, i) => {
    const s = scoreSentence(sentence, i, sentences.length);
    if (s > bestScore) {
      bestScore = s;
      best = sentence;
    }
  });

  return best.slice(0, 200).trim();
}
