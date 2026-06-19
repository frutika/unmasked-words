import type { MetadataRoute } from "next";
import { execSync } from "child_process";
import { createPocketBase, type Post } from "@/lib/pocketbase";
import { THREADS } from "@/lib/threads";
import { TOPICS, SUPER_TOPICS } from "@/lib/topics";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const dynamic = "force-dynamic";

const BASE = "https://unmaskedwords.com";

function gitDate(file: string): Date {
  try {
    const iso = execSync(`git log -1 --format="%cI" -- ${file}`, { encoding: "utf8" }).trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

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
    { url: BASE,                             lastModified: gitDate("app/page.tsx"),                   changeFrequency: "always",  priority: 1 },
    { url: `${BASE}/about`,                  lastModified: gitDate("app/about/page.tsx"),             changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,                   lastModified: gitDate("app/blog/page.tsx"),               changeFrequency: "weekly",  priority: 0.8 },
    ...BLOG_POSTS.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    { url: `${BASE}/how-it-works`,           lastModified: gitDate("app/how-it-works/page.tsx"),      changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/privacy`,                lastModified: gitDate("app/privacy/page.tsx"),           changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/creed`,                  lastModified: gitDate("app/creed/page.tsx"),             changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/threads`,                lastModified: gitDate("lib/threads.ts"),                 changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/duel`,                   lastModified: gitDate("app/duel/page.tsx"),              changeFrequency: "always",  priority: 0.9 },
    { url: `${BASE}/box`,                    lastModified: gitDate("app/box/page.tsx"),               changeFrequency: "always",  priority: 0.9 },
    { url: `${BASE}/mirror`,                 lastModified: gitDate("app/mirror/page.tsx"),            changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/anonymous-confessions`,  lastModified: gitDate("app/anonymous-confessions/page.tsx"), changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/deep-thoughts`,          lastModified: gitDate("app/deep-thoughts/page.tsx"),    changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE}/late-night-thoughts`,    lastModified: gitDate("app/late-night-thoughts/page.tsx"), changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/fear-confessions`,       lastModified: gitDate("app/fear-confessions/page.tsx"), changeFrequency: "weekly",  priority: 0.85 },
    { url: `${BASE}/emotional-journal`,      lastModified: gitDate("app/emotional-journal/page.tsx"), changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/raw-thoughts`,           lastModified: gitDate("app/raw-thoughts/page.tsx"),     changeFrequency: "weekly",  priority: 0.85 },
  ];

  const topicsLastModified = gitDate("lib/topics.ts");

  const topicIndexPage: MetadataRoute.Sitemap = [
    { url: `${BASE}/anonymous-thoughts`, lastModified: topicsLastModified, changeFrequency: "weekly", priority: 0.9 },
  ];

  const superTopicSlugs = new Set(SUPER_TOPICS.map((st) => st.slug.toLowerCase()));

  const superTopicPages: MetadataRoute.Sitemap = SUPER_TOPICS.map((st) => ({
    url: `${BASE}/anonymous-thoughts/${st.slug.toLowerCase()}`,
    lastModified: topicsLastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const topicPages: MetadataRoute.Sitemap = TOPICS
    .filter((t) => !superTopicSlugs.has(t.slug))
    .map((t) => ({
      url: `${BASE}/anonymous-thoughts/${t.slug}`,
      lastModified: topicsLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const threadsLastModified = gitDate("lib/threads.ts");
  const threadPages: MetadataRoute.Sitemap = THREADS.map((t) => ({
    url: `${BASE}/threads/${t.slug}`,
    lastModified: threadsLastModified,
    changeFrequency: "weekly" as const,
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
