import { createPocketBase } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const { postId, type, action } = body ?? {};

  if (
    typeof postId !== "string" ||
    (type !== "+" && type !== "!") ||
    (action !== "add" && action !== "remove")
  ) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const field = type === "+" ? "plus" : "bang";
  const op = action === "add" ? `${field}+` : `${field}-`;

  try {
    const pb = createPocketBase();
    await pb.collection("posts_en").update(postId, { [op]: 1 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
