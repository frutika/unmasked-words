import { createPocketBase } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

function sign(email: string): string {
  return createHmac("sha256", process.env.NEWSLETTER_SECRET!)
    .update(email)
    .digest("hex");
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const sig = searchParams.get("sig");

  if (!email || !sig || sig !== sign(email)) {
    return new NextResponse("Invalid unsubscribe link.", { status: 400 });
  }

  const pb = createPocketBase();
  await pb.collection("_superusers").authWithPassword(
    process.env.PB_ADMIN_EMAIL!,
    process.env.PB_ADMIN_PASSWORD!
  );

  const results = await pb.collection("subscribers").getFullList({
    filter: `email = "${email.replace(/"/g, "")}"`,
  });

  if (results.length > 0) {
    await pb.collection("subscribers").delete(results[0].id);
  }

  return new NextResponse(
    `<!DOCTYPE html><html lang="en">
<head><meta charset="UTF-8"><title>Unsubscribed</title></head>
<body style="background:#0a0a0a;color:#f0f0f0;font-family:monospace;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;">
  <div style="text-align:center;">
    <p style="color:#555;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 12px;">// unmaskedwords.com</p>
    <p style="font-size:16px;margin:0 0 8px;">You have been unsubscribed.</p>
    <p style="color:#555;font-size:12px;margin:0 0 24px;">${email}</p>
    <a href="https://unmaskedwords.com" style="color:#555;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;">← back to site</a>
  </div>
</body></html>`,
    { status: 200, headers: { "Content-Type": "text/html" } }
  );
}
