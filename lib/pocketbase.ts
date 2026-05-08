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
}
