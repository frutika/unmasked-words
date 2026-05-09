export interface Thread {
  slug: string;
  symbol: string;
  title: string;
  description: string;
  prompt: string;
}

export const THREADS: Thread[] = [
  {
    slug: "shame",
    symbol: "~",
    title: "SHAME",
    description: "what you can't look at in yourself",
    prompt: "Say the thing that makes you want to disappear.",
  },
  {
    slug: "rage",
    symbol: "!",
    title: "RAGE",
    description: "the anger you swallowed",
    prompt: "Let it out. No one will flinch.",
  },
  {
    slug: "fear",
    symbol: "?",
    title: "FEAR",
    description: "what keeps you up at 3am",
    prompt: "Name the thing in the dark.",
  },
  {
    slug: "grief",
    symbol: "×",
    title: "GRIEF",
    description: "what you're still mourning",
    prompt: "Speak the name of what you've lost.",
  },
  {
    slug: "confession",
    symbol: "//",
    title: "CONFESSION",
    description: "what you did and haven't forgiven",
    prompt: "No absolution. Just the truth.",
  },
  {
    slug: "longing",
    symbol: "…",
    title: "LONGING",
    description: "what you miss but can't name",
    prompt: "Reach for the thing that isn't there.",
  },
  {
    slug: "desire",
    symbol: "+",
    title: "DESIRE",
    description: "what you want but won't admit",
    prompt: "Say what you want without apology.",
  },
  {
    slug: "failure",
    symbol: "–",
    title: "FAILURE",
    description: "the thing you pretend didn't happen",
    prompt: "Stop pretending. Say it once.",
  },
  {
    slug: "doubt",
    symbol: "≈",
    title: "DOUBT",
    description: "the beliefs you've started to question",
    prompt: "What have you stopped believing in?",
  },
  {
    slug: "identity",
    symbol: "◌",
    title: "IDENTITY",
    description: "who you are when no one's watching",
    prompt: "Who are you with the mask off?",
  },
  {
    slug: "love",
    symbol: "∞",
    title: "LOVE",
    description: "what love actually did to you",
    prompt: "The truth about love. Not the version you tell.",
  },
  {
    slug: "solitude",
    symbol: "○",
    title: "SOLITUDE",
    description: "what it's like to be truly alone",
    prompt: "Describe your silence.",
  },
  {
    slug: "body",
    symbol: "□",
    title: "BODY",
    description: "what you think of the skin you're in",
    prompt: "What does your body hold that your mouth won't say?",
  },
  {
    slug: "childhood",
    symbol: "◁",
    title: "CHILDHOOD",
    description: "what you carry from the beginning",
    prompt: "What did they give you that you never asked for?",
  },
  {
    slug: "secrets",
    symbol: "⊘",
    title: "SECRETS",
    description: "the thing only you know",
    prompt: "Tell the void. It won't remember.",
  },
];

export function getThread(slug: string): Thread | undefined {
  return THREADS.find((t) => t.slug === slug);
}
