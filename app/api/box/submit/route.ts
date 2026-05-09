import { NextRequest, NextResponse } from "next/server";
import { createPocketBase } from "@/lib/pocketbase";
import { extractFragment } from "@/lib/box-extract";
import { pbGet } from "@/lib/pb-http";

const TTL_MS = 24 * 60 * 60 * 1000;

interface RawThought {
  id: string;
  content: string;
  alias: string;
  original_length: number;
}

async function runCleanup(pb: ReturnType<typeof createPocketBase>, token: string) {
  try {
    const now = new Date().toISOString();
    const filter = encodeURIComponent(`expires_at < "${now}"`);
    const data = await pbGet(
      `/api/collections/box_thoughts/records?filter=${filter}&perPage=50`,
      token
    ) as { items?: RawThought[] };

    const expired = data.items ?? [];
    for (const thought of expired) {
      const fragment = extractFragment(thought.content);
      await pb.collection("box_voices").create({
        fragment,
        thought_alias: thought.alias || "unknown",
        original_length: thought.original_length ?? 0,
        extracted_at: new Date().toISOString(),
      });
      await pb.collection("box_thoughts").delete(thought.id);
    }
  } catch {
    // cleanup is best-effort
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { content, alias, honeypot, math_a, math_b, math_answer } = body;

    if (honeypot) return NextResponse.json({ error: "no" }, { status: 400 });

    const expectedAnswer = Number(math_a) + Number(math_b);
    if (Number(math_answer) !== expectedAnswer) {
      return NextResponse.json({ error: "Wrong answer." }, { status: 400 });
    }

    if (!content || typeof content !== "string") {
      return NextResponse.json({ error: "Content required." }, { status: 400 });
    }

    const trimmed = content.trim();
    if (trimmed.length < 10) {
      return NextResponse.json({ error: "Too short." }, { status: 400 });
    }
    if (trimmed.length > 2000) {
      return NextResponse.json({ error: "Too long." }, { status: 400 });
    }

    const pb = createPocketBase();
    const authData = await pb.collection("_superusers").authWithPassword(
      process.env.PB_ADMIN_EMAIL!,
      process.env.PB_ADMIN_PASSWORD!
    );
    const token = authData.token;

    // Run cleanup before inserting
    await runCleanup(pb, token);

    const expiresAt = new Date(Date.now() + TTL_MS).toISOString();
    const cleanAlias = alias?.trim().slice(0, 30) || "";

    await pb.collection("box_thoughts").create({
      content: trimmed,
      alias: cleanAlias,
      original_length: trimmed.length,
      expires_at: expiresAt,
    });

    return NextResponse.json({ ok: true, expires_at: expiresAt });
  } catch (err) {
    console.error("[box/submit]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
