import { pbGet } from "@/lib/pb-http";
import type { Duel } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Props) {
  const { id } = await params;
  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  try {
    const duel = await pbGet(`/api/collections/duels/records/${encodeURIComponent(id)}`) as Duel;

    // If waiting, mask opponent's answer so no one can peek via API
    if (duel.status === "waiting") {
      return NextResponse.json({ ...duel, answer_b: "", alias_b: "" });
    }

    return NextResponse.json(duel);
  } catch {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
}
