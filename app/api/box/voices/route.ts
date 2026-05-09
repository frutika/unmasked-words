import { NextRequest, NextResponse } from "next/server";
import { createPocketBase } from "@/lib/pocketbase";
import { extractFragment } from "@/lib/box-extract";
import { pbGet } from "@/lib/pb-http";

interface RawThought {
  id: string;
  content: string;
  alias: string;
  original_length: number;
}

async function runCleanup() {
  try {
    const pb = createPocketBase();
    const authData = await pb.collection("_superusers").authWithPassword(
      process.env.PB_ADMIN_EMAIL!,
      process.env.PB_ADMIN_PASSWORD!
    );
    const token = authData.token;

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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const perPage = 20;

  // Lazy cleanup on every read
  runCleanup().catch(() => {});

  try {
    const data = await pbGet(
      `/api/collections/box_voices/records?sort=-extracted_at&page=${page}&perPage=${perPage}`
    ) as { items?: unknown[]; totalPages?: number };

    return NextResponse.json({
      voices: data.items ?? [],
      totalPages: data.totalPages ?? 0,
    });
  } catch (err) {
    console.error("[box/voices]", err);
    return NextResponse.json({ voices: [], totalPages: 0 });
  }
}
