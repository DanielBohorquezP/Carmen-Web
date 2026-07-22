export function HandDrawnUnderline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M2 8 C 40 2, 80 10, 100 6 C 130 2, 160 9, 198 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandDrawnCircle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 60"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M28 12 C 8 18, 4 40, 22 48 C 55 60, 165 58, 198 44 C 216 36, 210 12, 180 8 C 130 0, 60 2, 28 12 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
