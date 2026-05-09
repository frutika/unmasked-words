import { createPocketBase, type Duel } from "@/lib/pocketbase";
import { pbGet } from "@/lib/pb-http";
import { getQuestion, randomQuestionIndex } from "@/lib/duel-questions";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// GET — returns a question (and join_duel_id if a waiting duel exists)
export async function GET() {
  try {
    // Look for the oldest waiting duel
    const filter = encodeURIComponent(`status = "waiting"`);
    const data = await pbGet(
      `/api/collections/duels/records?filter=${filter}&sort=created&perPage=1`
    ) as { items?: Duel[] };

    const waiting = data.items?.[0];
    if (waiting) {
      return NextResponse.json({
        question: waiting.question,
        question_index: waiting.question_index,
        join_duel_id: waiting.id,
        type: "join",
      });
    }

    // No waiting duel — return a fresh question
    const idx = randomQuestionIndex();
    return NextResponse.json({
      question: getQuestion(idx),
      question_index: idx,
      join_duel_id: null,
      type: "create",
    });
  } catch {
    const idx = randomQuestionIndex();
    return NextResponse.json({
      question: getQuestion(idx),
      question_index: idx,
      join_duel_id: null,
      type: "create",
    });
  }
}

// POST — submit answer (creates or joins a duel)
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const { question_index, answer, alias, join_duel_id, honeypot, math_a, math_b, math_answer } = body ?? {};

  if (honeypot) return NextResponse.json({ ok: true }); // silently ignore bots
  if (parseInt(math_answer, 10) !== math_a + math_b) {
    return NextResponse.json({ error: "Verification failed." }, { status: 400 });
  }
  if (!answer?.trim() || answer.trim().length < 3) {
    return NextResponse.json({ error: "Answer too short." }, { status: 400 });
  }
  if (answer.trim().length > 400) {
    return NextResponse.json({ error: "Answer too long." }, { status: 400 });
  }

  const pb = createPocketBase();
  await pb.collection("_superusers").authWithPassword(
    process.env.PB_ADMIN_EMAIL!,
    process.env.PB_ADMIN_PASSWORD!
  );

  // Try to join an existing waiting duel
  if (join_duel_id && typeof join_duel_id === "string") {
    try {
      const existing = await pb.collection("duels").getOne<Duel>(join_duel_id);
      if (existing.status === "waiting") {
        const updated = await pb.collection("duels").update<Duel>(join_duel_id, {
          answer_b: answer.trim(),
          alias_b: alias?.trim() || "Anonymous",
          status: "complete",
        });
        return NextResponse.json({ duel_id: updated.id, side: "b", status: "complete" });
      }
    } catch {
      // Duel was claimed by someone else — fall through to create new
    }
  }

  // Create new duel as side A
  const qi = typeof question_index === "number" ? question_index : randomQuestionIndex();
  const question = getQuestion(qi);
  const created = await pb.collection("duels").create<Duel>({
    question,
    question_index: qi,
    answer_a: answer.trim(),
    alias_a: alias?.trim() || "Anonymous",
    answer_b: "",
    alias_b: "",
    votes_a: 0,
    votes_b: 0,
    status: "waiting",
  });

  return NextResponse.json({ duel_id: created.id, side: "a", status: "waiting" });
}
