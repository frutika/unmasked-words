import { createPocketBase, type Post } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const perPage = Math.min(50, Math.max(1, parseInt(searchParams.get("perPage") ?? "20", 10)));

  try {
    const pb = createPocketBase();
    const result = await pb.collection("posts_en").getList<Post>(page, perPage, {
      sort: "-created",
    });
    return NextResponse.json({
      items: result.items,
      page: result.page,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    });
  } catch {
    return NextResponse.json({ items: [], page: 1, totalPages: 0, totalItems: 0 }, { status: 500 });
  }
}
