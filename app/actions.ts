"use server";

import { createPocketBase } from "@/lib/pocketbase";
import { revalidatePath } from "next/cache";

export async function submitPost(
  content: string,
  alias: string,
  honeypot: string,
  mathA: number,
  mathB: number,
  mathAnswer: string
) {
  if (!content.trim()) throw new Error("Content cannot be empty.");

  // bot filled the hidden field
  if (honeypot) return;

  // wrong math answer
  if (parseInt(mathAnswer, 10) !== mathA + mathB) {
    throw new Error("Verification failed.");
  }

  const pb = createPocketBase();
  await pb.collection("posts_en").create({
    content: content.trim(),
    alias: alias.trim() || "Anonymous",
    created: new Date().toISOString().replace("T", " "),
  });

  revalidatePath("/");
}
