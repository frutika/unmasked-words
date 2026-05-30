"use client";

import { useState } from "react";
import { Link, Share2, Copy } from "lucide-react";

interface ShareMenuProps {
  postId: string;
  content: string;
}

function Toast({ visible }: { visible: boolean }) {
  return (
    <span
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs bg-[#f0f0f0] text-black px-4 py-2 z-50 transition-all duration-200 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      Link copied!
    </span>
  );
}

const FacebookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ShareMenu({ postId, content }: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const url = `https://unmaskedwords.com/post/${postId}`;
  const excerpt = content.slice(0, 100) + (content.length > 100 ? "..." : "");
  const tweetText = encodeURIComponent(`"${excerpt}" — #UnmaskedWords #anonymous`);
  const encodedUrl = encodeURIComponent(url);
  const encodedExcerpt = encodeURIComponent(excerpt);

  const shareLinks = [
    {
      label: "X",
      icon: <span className="font-mono font-bold text-[11px] leading-none">𝕏</span>,
      href: `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodedUrl}`,
    },
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      icon: <LinkedinIcon />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedExcerpt}`,
    },
  ];

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    });
    setOpen(false);
  }

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1 font-mono text-[10px] text-[#888888] hover:text-[#aaaaaa] transition-colors min-h-[44px] px-1"
          title="Share"
          aria-label="Share this post"
        >
          <Share2 size={11} />
          <span className="tracking-widest uppercase">share</span>
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <div className="absolute bottom-6 right-0 z-20 flex items-center border border-[#2a2a2a] bg-[#0f0f0f]">
              {shareLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-9 h-9 text-[#888888] hover:text-[#f0f0f0] hover:bg-[#1a1a1a] transition-colors border-r border-[#2a2a2a]"
                  title={label}
                >
                  {icon}
                </a>
              ))}
              <button
                onClick={copyLink}
                className="flex items-center justify-center w-9 h-9 text-[#888888] hover:text-[#f0f0f0] hover:bg-[#1a1a1a] transition-colors"
                title="Copy link"
              >
                <Copy size={13} />
              </button>
            </div>
          </>
        )}
      </div>

      <Toast visible={toastVisible} />
    </>
  );
}
