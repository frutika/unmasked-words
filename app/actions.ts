"use server";

import { createPocketBase } from "@/lib/pocketbase";
import { getThread } from "@/lib/threads";
import { revalidatePath } from "next/cache";

export async function subscribeNewsletter(email: string) {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Invalid email.");
  }
  const pb = createPocketBase();
  await pb.collection("_superusers").authWithPassword(
    process.env.PB_ADMIN_EMAIL!,
    process.env.PB_ADMIN_PASSWORD!
  );
  try {
    await pb.collection("subscribers").create({ email: email.toLowerCase().trim() });
  } catch (err: unknown) {
    const msg = (err as { response?: { data?: { email?: { message?: string } } } })
      ?.response?.data?.email?.message ?? "";
    if (msg.toLowerCase().includes("unique")) throw new Error("Already subscribed.");
    throw new Error("Failed to subscribe.");
  }
}

export async function submitPost(
  content: string,
  alias: string,
  honeypot: string,
  mathA: number,
  mathB: number,
  mathAnswer: string,
  topic?: string
) {
  if (!content.trim()) throw new Error("Content cannot be empty.");

  if (honeypot) return;

  if (parseInt(mathAnswer, 10) !== mathA + mathB) {
    throw new Error("Verification failed.");
  }

  const pb = createPocketBase();
  await pb.collection("posts_en").create({
    content: content.trim(),
    alias: alias.trim() || "Anonymous",
    created: new Date().toISOString().replace("T", " "),
    topic: topic?.trim() || "",
  });

  revalidatePath("/");
  if (topic) revalidatePath(`/anonymous-thoughts/${topic}`);
}

export async function submitThreadPost(
  slug: string,
  content: string,
  alias: string,
  honeypot: string,
  mathA: number,
  mathB: number,
  mathAnswer: string
) {
  if (!getThread(slug)) throw new Error("Invalid thread.");
  if (!content.trim()) throw new Error("Content cannot be empty.");
  if (honeypot) return;
  if (parseInt(mathAnswer, 10) !== mathA + mathB) throw new Error("Verification failed.");

  const pb = createPocketBase();
  await pb.collection("thread_posts").create({
    thread_slug: slug,
    content: content.trim(),
    alias: alias.trim() || "Anonymous",
    plus: 0,
    bang: 0,
  });

  revalidatePath(`/threads/${slug}`);
}
