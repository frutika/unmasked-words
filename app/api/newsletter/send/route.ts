import { createPocketBase, type Post } from "@/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createHmac } from "crypto";

function unsubscribeUrl(email: string): string {
  const sig = createHmac("sha256", process.env.NEWSLETTER_SECRET!)
    .update(email)
    .digest("hex");
  return `https://unmaskedwords.com/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}&sig=${sig}`;
}

export const dynamic = "force-dynamic";

function buildEmail(posts: Post[], weekLabel: string, unsubLink: string): string {
  const rows = posts
    .map(
      (p, i) => `
      <tr>
        <td style="padding:24px 0;border-bottom:1px solid #1a1a1a;">
          <p style="font-family:monospace;font-size:13px;color:#555;margin:0 0 8px;">
            #${i + 1} &nbsp;—&nbsp; ${p.alias || "Anonymous"} &nbsp;
            <span style="color:#333;">[ + ${p.plus ?? 0} ] [ ! ${p.bang ?? 0} ]</span>
          </p>
          <p style="font-family:monospace;font-size:15px;color:#f0f0f0;margin:0 0 12px;line-height:1.6;">
            ${p.content.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>")}
          </p>
          <a href="https://unmaskedwords.com/post/${p.id}"
             style="font-family:monospace;font-size:11px;color:#555;text-decoration:none;letter-spacing:0.1em;">
            READ THREAD →
          </a>
        </td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="background:#0a0a0a;margin:0;padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
    <tr><td align="center" style="padding:40px 16px;">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- header -->
        <tr>
          <td style="border-bottom:1px solid #1a1a1a;padding-bottom:24px;margin-bottom:24px;">
            <p style="font-family:monospace;font-size:11px;color:#555;letter-spacing:0.15em;margin:0 0 8px;text-transform:uppercase;">
              // the weekly unmasking
            </p>
            <h1 style="font-family:monospace;font-size:24px;color:#f0f0f0;margin:0;font-weight:900;letter-spacing:-0.02em;">
              UNMASKED<span style="color:#ff3c00;">WORDS</span>
            </h1>
            <p style="font-family:monospace;font-size:11px;color:#333;margin:8px 0 0;letter-spacing:0.1em;">
              ${weekLabel}
            </p>
          </td>
        </tr>

        <!-- intro -->
        <tr>
          <td style="padding:24px 0 8px;">
            <p style="font-family:monospace;font-size:12px;color:#555;margin:0;letter-spacing:0.08em;text-transform:uppercase;">
              // 5 strongest thoughts this week
            </p>
          </td>
        </tr>

        <!-- posts -->
        ${rows}

        <!-- mining cta -->
        <tr>
          <td style="padding:32px 0 0;">
            <table width="100%" cellpadding="0" cellspacing="0"
              style="border:1px solid #2a2a2a;padding:20px;">
              <tr>
                <td>
                  <p style="font-family:monospace;font-size:11px;color:#555;margin:0 0 8px;letter-spacing:0.1em;text-transform:uppercase;">
                    // this newsletter is powered by
                  </p>
                  <a href="https://gomining.com/?ref=CZF-4"
                     style="font-family:monospace;font-size:13px;color:#f0f0f0;text-decoration:none;letter-spacing:0.05em;">
                    ₿ BITCOIN MINING — GOMINING.COM →
                  </a>
                  <p style="font-family:monospace;font-size:11px;color:#333;margin:8px 0 0;">
                    Mine Bitcoin without hardware. Referral link — helps keep this space free.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- footer -->
        <tr>
          <td style="padding:32px 0 0;border-top:1px solid #1a1a1a;margin-top:32px;">
            <p style="font-family:monospace;font-size:10px;color:#333;margin:0 0 8px;letter-spacing:0.1em;text-transform:uppercase;">
              NO ACCOUNTS. NO TRACKING. NO FILTERS. —
              <a href="https://unmaskedwords.com" style="color:#333;">UNMASKEDWORDS.COM</a>
            </p>
            <p style="font-family:monospace;font-size:10px;color:#222;margin:0;">
              <a href="${unsubLink}" style="color:#222;text-decoration:underline;">unsubscribe</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  // simple secret auth — curl -H "x-secret: ..." or ?secret=...
  const secret = req.headers.get("x-secret") ?? new URL(req.url).searchParams.get("secret");
  if (secret !== process.env.NEWSLETTER_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const pb = createPocketBase();
  await pb.collection("_superusers").authWithPassword(
    process.env.PB_ADMIN_EMAIL!,
    process.env.PB_ADMIN_PASSWORD!
  );

  // top 5 posts from last 7 days by total reactions
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().replace("T", " ");
  const result = await pb.collection("posts_en").getList<Post>(1, 100, {
    filter: `created >= "${since}"`,
    sort: "-plus,-bang,-created",
  });
  const top5 = result.items.slice(0, 5);

  if (top5.length === 0) {
    return NextResponse.json({ error: "no posts this week" }, { status: 404 });
  }

  // all subscribers
  const subs = await pb.collection("subscribers").getFullList<{ email: string }>();
  if (subs.length === 0) {
    return NextResponse.json({ error: "no subscribers" }, { status: 404 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const now = new Date();
  const weekLabel = `week of ${now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`.toUpperCase();

  let sent = 0;
  const errors: string[] = [];

  for (const sub of subs) {
    try {
      const html = buildEmail(top5, weekLabel, unsubscribeUrl(sub.email));
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: sub.email,
        subject: `The Weekly Unmasking — ${weekLabel}`,
        html,
      });
      sent++;
    } catch {
      errors.push(sub.email);
    }
  }

  return NextResponse.json({ sent, failed: errors.length, errors });
}
