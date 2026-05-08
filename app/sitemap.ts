import type { MetadataRoute } from "next";
import { createPocketBase, type Post } from "@/lib/pocketbase";

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
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/post/${post.id}`,
    lastModified: post.created ? new Date(post.created) : new Date(),
    changeFrequency: "never" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...postPages];
}
