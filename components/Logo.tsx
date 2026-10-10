export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Shammah Movers & Cleaners logo" role="img">
      <circle cx="32" cy="32" r="30" fill="#0a3a8f" stroke="#ffffff" strokeWidth="3" />
      <path d="M14 24h22v18H14z" fill="#ffffff" />
      <path d="M36 29h8l6 6v7H36z" fill="#ffffff" />
      <circle cx="22" cy="44" r="4" fill="#0a3a8f" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="43" cy="44" r="4" fill="#0a3a8f" stroke="#ffffff" strokeWidth="2.5" />
    </svg>
  );
}
