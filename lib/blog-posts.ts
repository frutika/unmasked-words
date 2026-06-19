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
