import { getThread } from "@/lib/threads";
import type { ThreadPost } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";
import http from "node:http";

export const dynamic = "force-dynamic";

const PB_HOST = "127.0.0.1";
const PB_PORT = 8090;

function pbGet(path: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const req = http.get({ host: PB_HOST, port: PB_PORT, path }, (res) => {
      let body = "";
      res.on("data", (chunk) => { body += chunk; });
      res.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode && res.statusCode >= 400) reject(Object.assign(new Error(parsed.message ?? "PB error"), { status: res.statusCode }));
          else resolve(parsed);
        } catch { reject(new Error("Parse error")); }
      });
    });
    req.on("error", reject);
    req.setTimeout(5000, () => { req.destroy(); reject(new Error("timeout")); });
  });
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
  const { slug } = await params;

  if (!getThread(slug)) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const perPage = Math.min(50, Math.max(1, parseInt(searchParams.get("perPage") ?? "20", 10)));

  try {
    const filter = encodeURIComponent(`thread_slug = "${slug}"`);
    const path = `/api/collections/thread_posts/records?page=${page}&perPage=${perPage}&sort=-created&filter=${filter}`;
    const data = await pbGet(path) as { items?: ThreadPost[]; page?: number; totalPages?: number; totalItems?: number };
    return NextResponse.json({
      items: data.items ?? [],
      page: data.page ?? page,
      totalPages: data.totalPages ?? 0,
      totalItems: data.totalItems ?? 0,
    });
  } catch (e: unknown) {
    const err = e as { status?: number; message?: string };
    console.error("[thread-api]", err?.status, err?.message);
    return NextResponse.json({ items: [], page: 1, totalPages: 0, totalItems: 0 }, { status: 500 });
  }
}
