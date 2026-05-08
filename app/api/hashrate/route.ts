import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  try {
    const res = await fetch("https://mempool.space/api/v1/mining/hashrate/1d", {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("upstream error");
    const data = await res.json();
    const ehs = (data.currentHashrate / 1e18).toFixed(1);
    return NextResponse.json({ ehs });
  } catch {
    return NextResponse.json({ ehs: null }, { status: 502 });
  }
}
