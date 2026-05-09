import { pbGet } from "@/lib/pb-http";
import type { Duel } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const perPage = Math.min(20, Math.max(1, parseInt(searchParams.get("perPage") ?? "10", 10)));

  try {
    const filter = encodeURIComponent(`status = "complete"`);
    const data = await pbGet(
      `/api/collections/duels/records?filter=${filter}&sort=-created&page=${page}&perPage=${perPage}`
    ) as { items?: Duel[]; page?: number; totalPages?: number; totalItems?: number };

    return NextResponse.json({
      items: data.items ?? [],
      page: data.page ?? page,
      totalPages: data.totalPages ?? 0,
      totalItems: data.totalItems ?? 0,
    });
  } catch {
    return NextResponse.json({ items: [], page: 1, totalPages: 0, totalItems: 0 }, { status: 500 });
  }
}
