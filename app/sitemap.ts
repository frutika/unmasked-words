import type { MetadataRoute } from "next";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import { THREADS } from "@/lib/threads";
import { TOPICS, SUPER_TOPICS } from "@/lib/topics";

export const dynamic = "force-dynamic";

const BASE = "https://unmaskedwords.com";

async function getPosts(): Promise<Post[]> {
  try {
    const pb = createPocketBase();
    const result = await pb.collection("posts_en").getFullList<Post>({
      sort: "-created",
      fields: "id,created",
    });
    return result;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "always", priority: 1 },
    { url: `${BASE}/about`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/how-it-works`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/privacy`,                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/creed`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/threads`,                 lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/duel`,                    lastModified: new Date(), changeFrequency: "always",  priority: 0.9 },
    { url: `${BASE}/box`,                     lastModified: new Date(), changeFrequency: "always",  priority: 0.9 },
    { url: `${BASE}/mirror`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/anonymous-confessions`,   lastModified: new Date(), changeFrequency: "hourly",  priority: 0.85 },
    { url: `${BASE}/deep-thoughts`,           lastModified: new Date(), changeFrequency: "hourly",  priority: 0.85 },
    { url: `${BASE}/late-night-thoughts`,     lastModified: new Date(), changeFrequency: "hourly",  priority: 0.85 },
    { url: `${BASE}/fear-confessions`,        lastModified: new Date(), changeFrequency: "hourly",  priority: 0.85 },
    { url: `${BASE}/emotional-journal`,       lastModified: new Date(), changeFrequency: "hourly",  priority: 0.85 },
    { url: `${BASE}/raw-thoughts`,            lastModified: new Date(), changeFrequency: "hourly",  priority: 0.85 },
  ];

  const topicIndexPage: MetadataRoute.Sitemap = [
    { url: `${BASE}/anonymous-thoughts`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  // Super topic hub pages (deduplicated — some slugs overlap with topic slugs e.g. "love")
  const superTopicSlugs = new Set(SUPER_TOPICS.map((st) => st.slug.toLowerCase()));
  const superTopicPages: MetadataRoute.Sitemap = SUPER_TOPICS.map((st) => ({
    url: `${BASE}/anonymous-thoughts/${st.slug.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const topicPages: MetadataRoute.Sitemap = TOPICS
    .filter((t) => !superTopicSlugs.has(t.slug))
    .map((t) => ({
      url: `${BASE}/anonymous-thoughts/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "hourly" as const,
      priority: 0.8,
    }));

  const threadPages: MetadataRoute.Sitemap = THREADS.map((t) => ({
    url: `${BASE}/threads/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "hourly" as const,
    priority: 0.8,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/post/${post.id}`,
    lastModified: post.created ? new Date(post.created) : new Date(),
    changeFrequency: "never" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...topicIndexPage, ...superTopicPages, ...topicPages, ...threadPages, ...postPages];
}
