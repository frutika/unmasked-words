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

  try {
    const pb = createPocketBase();
    await pb.collection("_superusers").authWithPassword(
      process.env.PB_ADMIN_EMAIL!,
      process.env.PB_ADMIN_PASSWORD!
    );
    if (action === "add") {
      await pb.collection(collection).update(postId, { [`${field}+`]: 1 });
    } else {
      // Decrement, ali nikad ispod 0 (PocketBase `field-` nema donju granicu).
      const rec = await pb.collection(collection).getOne(postId);
      const current = Number((rec as Record<string, unknown>)[field]) || 0;
      await pb.collection(collection).update(postId, { [field]: Math.max(0, current - 1) });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
