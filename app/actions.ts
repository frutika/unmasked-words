"use server";

import { createPocketBase } from "@/lib/pocketbase";
import { revalidatePath } from "next/cache";

export async function submitPost(content: string, alias: string) {
  if (!content.trim()) {
    throw new Error("Content cannot be empty.");
  }

  const pb = createPocketBase();
  await pb.collection("posts_en").create({
    content: content.trim(),
    alias: alias.trim() || "Anonymous",
    created: new Date().toISOString().replace("T", " "),
  });

  revalidatePath("/");
}
