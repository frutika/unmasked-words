import { createPocketBase, type Duel } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export async function POST(req: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const { side } = body ?? {};

  if (side !== "a" && side !== "b") {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  try {
    const pb = createPocketBase();
    await pb.collection("_superusers").authWithPassword(
      process.env.PB_ADMIN_EMAIL!,
      process.env.PB_ADMIN_PASSWORD!
    );

    const duel = await pb.collection("duels").getOne<Duel>(id);
    if (duel.status !== "complete") {
      return NextResponse.json({ error: "duel not complete" }, { status: 400 });
    }

    const field = side === "a" ? "votes_a" : "votes_b";
    const updated = await pb.collection("duels").update<Duel>(id, { [`${field}+`]: 1 });

    return NextResponse.json({ votes_a: updated.votes_a, votes_b: updated.votes_b });
  } catch {
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
