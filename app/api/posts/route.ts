import { createPocketBase, type Post } from "@/lib/pocketbase";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const pb = createPocketBase();
    const result = await pb.collection("posts_en").getList<Post>(1, 50, {
      sort: "-created",
    });
    return NextResponse.json(result.items);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
