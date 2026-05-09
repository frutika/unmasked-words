import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export interface MirrorReflection {
  tone: string;
  subtext: string;
  reveals: string;
  question: string;
}

// Simple in-memory rate limiter: 8 req / 10 min per IP
const rateLimitMap = new Map<string, { count: number; reset: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 10 * 60 * 1000;
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + window });
    return true;
  }
  if (entry.count >= 8) return false;
  entry.count++;
  return true;
}

const SYSTEM_PROMPT = `You are a psychological mirror. Not a therapist. Not a friend. A mirror.

Your function: take an anonymous thought and reflect it back — precisely, truthfully, without softening.

You do not give advice.
You do not comfort.
You do not judge.
You observe.

Return ONLY a JSON object with these exact keys:

"tone": A 5–12 word articulation of the emotional state beneath the words. Not a simple label — an articulation. Examples: "grief held together by the effort of not naming it" or "controlled panic disguised as rational explanation" or "anger that has learned to call itself indifference".

"subtext": 2–3 sentences. What is the writer actually saying beneath the surface? What are they circling around without landing on? Be specific to their words — never generic.

"reveals": 2–3 sentences. What does this thought pattern reveal about the writer — their relationship with themselves, with others, or with control? This is observation, not diagnosis. Not judgment.

"question": One question. Not therapeutic. Not soft. A question the writer has been avoiding. Something that requires them to look directly at what they have been looking away from. It must be specific to what they wrote — never a generic introspective prompt.

Constraints:
- Never use phrases like "it sounds like", "perhaps you should", "I notice", "you might want to"
- Never give advice or direction
- Never comfort, validate, or reassure
- Use plain, direct, declarative language
- The question must be genuinely difficult — not deflectable with a simple yes or no
- Respond with valid JSON only — no preamble, no explanation, no markdown fences`;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many reflections. Rest. Come back." }, { status: 429 });
  }

  let body: { thought?: string; math_a?: number; math_b?: number; math_answer?: string; honeypot?: string };
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const { thought, math_a, math_b, math_answer, honeypot } = body;

  if (honeypot) return NextResponse.json({ error: "no" }, { status: 400 });

  if (Number(math_answer) !== Number(math_a) + Number(math_b)) {
    return NextResponse.json({ error: "Verification failed." }, { status: 400 });
  }

  if (!thought || typeof thought !== "string") {
    return NextResponse.json({ error: "A thought is required." }, { status: 400 });
  }

  const trimmed = thought.trim();
  if (trimmed.length < 10) {
    return NextResponse.json({ error: "Too short for the mirror to read." }, { status: 400 });
  }
  if (trimmed.length > 600) {
    return NextResponse.json({ error: "Too long. Cut to what matters." }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Mirror unavailable." }, { status: 503 });
  }

  try {
    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: trimmed }],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";
    // Strip markdown fences if model wraps anyway
    const jsonStr = raw.replace(/^```json?\s*/i, "").replace(/\s*```$/i, "").trim();
    const reflection: MirrorReflection = JSON.parse(jsonStr);

    if (!reflection.tone || !reflection.subtext || !reflection.reveals || !reflection.question) {
      throw new Error("Incomplete reflection");
    }

    return NextResponse.json(reflection);
  } catch (err) {
    console.error("[mirror]", err);
    return NextResponse.json({ error: "The mirror cracked. Try again." }, { status: 500 });
  }
}
