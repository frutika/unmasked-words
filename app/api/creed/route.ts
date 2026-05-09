import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export type CreedFormat = "short" | "medium" | "long" | "fragmented" | "declarative";

export interface CreedResult {
  lines: string[];
  format: CreedFormat;
}

const FORMAT_INSTRUCTIONS: Record<CreedFormat, string> = {
  short: `FORMAT: short
Write exactly 3 to 5 lines. Not more.
Each line is a complete declaration or fragment that stands entirely alone.
No connective tissue between lines. No "and" or "but" linking them.
The silence between lines carries as much weight as the lines themselves.
Font: stark. Sparse. Every word chosen because no other word would do.`,

  medium: `FORMAT: medium
Write 8 to 12 lines. Rhythm must vary — some short (4–8 words), some longer (12–20 words).
The first line lands hard. It announces the wound without explaining it.
The middle lines layer and accumulate. They circle the thing without naming it directly.
The final line cuts — a closing that doesn't resolve, but lands.
Build toward something the reader doesn't see coming until it arrives.`,

  long: `FORMAT: long
Write 15 to 25 lines. Expand. Circle back. Return to the wound.
Every line must be necessary — no padding, no filler, no repetition without purpose.
The long form allows weight to accumulate across time. Use it.
Allow the tone to shift slightly in the middle — from statement to interrogation to vow.
End somewhere unexpected. Not comfort. Not resolution. Truth that leaves space.`,

  fragmented: `FORMAT: fragmented
Broken lines. Incomplete phrases used as deliberate tools.
Some lines are 2 to 4 words. Some are 10 to 15 words. Never more.
Use dashes (—) as breath. Use ellipses (...) as absence. Use single words as weight.
The visual breaks mirror the thought's internal fractures.
Do not smooth. Do not complete. Let the incompleteness stand as meaning.
No line should feel like it was cut accidentally — each break must feel inevitable.`,

  declarative: `FORMAT: declarative
Every single line begins with a first-person declaration. Examples of opening phrases:
"I am —", "I carry —", "I refuse —", "I know —", "I have been —", "I will no longer —",
"I have always —", "I cannot —", "I am done —", "I was told —", "I told myself —"
Do not repeat the same opening phrase more than once.
8 to 12 declarations total. Each one specific to the writer's wound and desire.
Structure it like a vow, a statement of war, or the reading of a verdict.
The last declaration must be the heaviest.`,
};

const SYSTEM_BASE = `You are a Manifesto Engine. Not a counselor. Not a poet. An engine that distills truth.

Your function: take a raw anonymous thought and return a personal manifesto.

A manifesto is not advice. Not comfort. Not therapy.
It is the truth the writer already knows, spoken back with precision and weight.
It reveals essence. It does not explain it.
It feels like something the writer didn't know they needed to hear.
It reads like a declaration, a wound that speaks, or a vow made in darkness.

Before writing, identify (internally — do not output this analysis):
— The CORE WOUND: what hurts, what has been lost, what is being carried
— The CORE DESIRE: what is wanted, what is reached for, often unnamed
— The CORE CONTRADICTION: what conflicts inside the writer, what they hold in both hands

The manifesto must:
— Use first person (I, I am, I carry, I refuse, I know)
— Be entirely specific to this writer's thought — never generic or applicable to anyone
— Sound true, not clever
— Have weight — each line must earn its place
— Never offer hope as resolution — only truth as foundation
— Not rhyme — this is declaration, not verse
— Never end on comfort — end on truth, or open silence

Forbidden words and phrases: "journey", "healing", "grow", "deserve", "worthy", "enough",
"should", "need to", "it's okay", "you are", "remember that", "know that", "just", "simply"

Return ONLY valid JSON in this exact shape:
{"lines": ["line 1", "line 2", "..."]}

No preamble. No analysis. No explanation. No markdown fences. JSON only.`;

const rateLimitMap = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 10 * 60 * 1000;
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + window });
    return true;
  }
  if (entry.count >= 6) return false;
  entry.count++;
  return true;
}

const VALID_FORMATS: CreedFormat[] = ["short", "medium", "long", "fragmented", "declarative"];

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many manifestos. The engine needs silence." },
      { status: 429 },
    );
  }

  let body: {
    thought?: string;
    format?: string;
    math_a?: number;
    math_b?: number;
    math_answer?: string;
    honeypot?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { thought, format, math_a, math_b, math_answer, honeypot } = body;

  if (honeypot) return NextResponse.json({ error: "no" }, { status: 400 });

  if (Number(math_answer) !== Number(math_a) + Number(math_b)) {
    return NextResponse.json({ error: "Verification failed." }, { status: 400 });
  }

  if (!thought || typeof thought !== "string") {
    return NextResponse.json({ error: "A thought is required." }, { status: 400 });
  }

  const trimmed = thought.trim();
  if (trimmed.length < 10) {
    return NextResponse.json({ error: "Too short for the engine." }, { status: 400 });
  }
  if (trimmed.length > 600) {
    return NextResponse.json({ error: "Too long. Cut to what matters." }, { status: 400 });
  }

  const chosenFormat: CreedFormat = VALID_FORMATS.includes(format as CreedFormat)
    ? (format as CreedFormat)
    : "medium";

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Engine offline." }, { status: 503 });
  }

  const maxTokens =
    chosenFormat === "long" ? 900
    : chosenFormat === "medium" || chosenFormat === "declarative" ? 650
    : 450;

  try {
    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: maxTokens,
      system: `${SYSTEM_BASE}\n\n${FORMAT_INSTRUCTIONS[chosenFormat]}`,
      messages: [{ role: "user", content: trimmed }],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";
    const jsonStr = raw.replace(/^```json?\s*/i, "").replace(/\s*```$/i, "").trim();
    const parsed = JSON.parse(jsonStr);

    if (!Array.isArray(parsed.lines) || parsed.lines.length === 0) {
      throw new Error("Invalid manifesto structure");
    }

    const result: CreedResult = { lines: parsed.lines as string[], format: chosenFormat };
    return NextResponse.json(result);
  } catch (err) {
    console.error("[manifesto]", err);
    return NextResponse.json(
      { error: "The engine failed. The truth escaped." },
      { status: 500 },
    );
  }
}
