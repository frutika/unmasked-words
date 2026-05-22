import type { Post } from "@/lib/pocketbase";
import Link from "next/link";

interface Props {
  posts: Post[];
}

export default function LandingPostsList({ posts }: Props) {
  if (posts.length === 0) return null;
  return (
    <div className="flex flex-col gap-0">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/post/${post.id}`}
          className="group border-b border-[#1a1a1a] py-5 -mx-2 px-2 hover:bg-[#0d0d0d] transition-colors duration-100 block"
        >
          <p className="font-mono text-[#aaaaaa] text-sm leading-relaxed group-hover:text-[#f0f0f0] transition-colors duration-100 whitespace-pre-wrap break-words">
            {post.content}
          </p>
          {post.alias && (
            <p className="font-mono text-[#555555] text-[10px] tracking-widest mt-2">
              — {post.alias}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}
