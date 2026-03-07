// DW Logo SVG Component
// Matches the bold monogram style of the user's DW logo

export default function DWLogo({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DW Logo"
    >
      <defs>
        <linearGradient id="dw-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>

      {/* D letter shape */}
      <path
        d="M5 8 L5 72 L28 72 C44 72 56 62 56 40 C56 18 44 8 28 8 Z
           M18 20 L26 20 C36 20 42 28 42 40 C42 52 36 60 26 60 L18 60 Z"
        fill="url(#dw-gradient)"
        fillRule="evenodd"
      />

      {/* W letter shape */}
      <path
        d="M54 8 L63 52 L72 28 L81 52 L90 8 L100 8 L87 72 L78 72 L72 50 L66 72 L57 72 L44 8 Z"
        fill="url(#dw-gradient)"
      />
    </svg>
  );
}
