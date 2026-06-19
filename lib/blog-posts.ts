export interface BlogPostMeta {
  slug: string;
  seoTitle: string;
  headline: string;
  metaDescription: string;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "anonymous-vs-pseudonymous-whats-the-real-difference",
    seoTitle: "Anonymous vs. Pseudonymous: What's the Real Difference?",
    headline: "Anonymous vs.\nPseudonymous:\nWhat's the Real Difference?",
    metaDescription:
      "Anonymity and pseudonymity aren't the same thing — and the difference matters more than most people realize. A complete guide to both concepts and why they shape online expression.",
    publishedAt: "2026-06-20",
    readingTime: "8 min read",
    excerpt:
      "Most people use \"anonymous\" and \"pseudonymous\" as if they mean the same thing. They don't. The distinction is subtle on the surface but enormous in practice.",
  },
  {
    slug: "no-account-no-name-no-face-required",
    seoTitle: "No Account. No Name. No Face Required: UnmaskedWords",
    headline: "No Account.\nNo Name.\nNo Face Required.",
    metaDescription:
      "Post anonymously with no account, name, or face required. Raw, honest expression in a judgment-free void. Discover UnmaskedWords today.",
    publishedAt: "2026-06-19",
    readingTime: "9 min read",
    excerpt:
      "In a world obsessed with identity, branding, and digital footprints, there's something liberating about a space where none of that matters.",
  },
];
