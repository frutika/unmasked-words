import { createPocketBase } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_COLLECTIONS = ["posts_en", "thread_posts"];

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const { postId, type, action, collection = "posts_en" } = body ?? {};

  if (
    typeof postId !== "string" ||
    (type !== "+" && type !== "!") ||
    (action !== "add" && action !== "remove") ||
    !ALLOWED_COLLECTIONS.includes(collection)
  ) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const field = type === "+" ? "plus" : "bang";
  const op = action === "add" ? `${field}+` : `${field}-`;

  try {
    const pb = createPocketBase();
    await pb.collection("_superusers").authWithPassword(
      process.env.PB_ADMIN_EMAIL!,
      process.env.PB_ADMIN_PASSWORD!
    );
    await pb.collection(collection).update(postId, { [op]: 1 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
