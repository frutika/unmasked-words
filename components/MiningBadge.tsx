export default function MiningBadge() {
  return (
    <a
      href="https://gomining.com/?ref=CZF-4"
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      title="Join the mining network that powers this site"
      className="group inline-flex items-center gap-2 border border-[#2a2a2a] px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase text-[#888888] hover:text-[#f0c846] hover:border-[#f0c846] transition-colors duration-200"
      style={{ animation: "mining-pulse 3s ease-in-out infinite" }}
    >
      <span className="text-[#ff3c00] group-hover:text-[#f0c846] transition-colors duration-200">₿</span>
      <span>POWERED BY BITCOIN MINING</span>
      <span className="text-[#ff3c00] group-hover:text-[#f0c846] transition-colors duration-200">⚡</span>
    </a>
  );
}
