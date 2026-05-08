export default function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="UnmaskedWords logo"
    >
      <rect width="512" height="512" fill="#0a0a0a" />

      {/* Left pillar — top (white/masked) */}
      <rect x="96" y="72" width="88" height="158" fill="#f0f0f0" />
      {/* Right pillar — top */}
      <rect x="328" y="72" width="88" height="158" fill="#f0f0f0" />

      {/* Orange reveal line */}
      <rect x="0" y="222" width="512" height="14" fill="#ff3c00" />

      {/* Left pillar — bottom (grey/revealed) */}
      <rect x="96" y="236" width="88" height="108" fill="#888888" />
      {/* Right pillar — bottom */}
      <rect x="328" y="236" width="88" height="108" fill="#888888" />

      {/* Bottom arc — grey */}
      <path
        d="M96,310 L96,360 C96,432 156,464 256,464 C356,464 416,432 416,360 L416,310 L328,310 L328,358 C328,394 298,410 256,410 C214,410 184,394 184,358 L184,310 Z"
        fill="#888888"
      />
    </svg>
  );
}
