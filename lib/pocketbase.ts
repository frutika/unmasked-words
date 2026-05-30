import PocketBase from "pocketbase";

const SERVER_URL = process.env.PB_INTERNAL_URL || "http://127.0.0.1:8090";
const CLIENT_URL = process.env.NEXT_PUBLIC_PB_URL || "https://unmaskedwords.com/pb";

export function createPocketBase() {
  const url = typeof window === "undefined" ? SERVER_URL : CLIENT_URL;
  return new PocketBase(url);
}

export interface Post {
  id: string;
  content: string;
  alias: string;
  created: string;
  plus: number;
  bang: number;
  topic?: string;
}

export interface Duel {
  id: string;
  question: string;
  question_index: number;
  answer_a: string;
  alias_a: string;
  answer_b: string;
  alias_b: string;
  votes_a: number;
  votes_b: number;
  status: "waiting" | "complete";
  created: string;
  updated: string;
}

export interface ThreadPost {
  id: string;
  thread_slug: string;
  content: string;
  alias: string;
  created: string;
  plus: number;
  bang: number;
}

export interface BoxVoice {
  id: string;
  fragment: string;
  thought_alias: string;
  original_length: number;
  extracted_at: string;
  created: string;
}
