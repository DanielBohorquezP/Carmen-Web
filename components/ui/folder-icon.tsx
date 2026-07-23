export function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 10c0-2.2 1.8-4 4-4h13l4 5h31c2.2 0 4 1.8 4 4v4H4v-9z"
        fill="#C96FA0"
        stroke="#1D1D1D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <g className="origin-bottom translate-y-0 transition-transform duration-300 ease-out group-hover:-translate-y-[10px] group-focus-visible:-translate-y-[10px] motion-reduce:!translate-y-0 motion-reduce:transition-none">
        <rect
          x="16"
          y="17"
          width="32"
          height="26"
          rx="2"
          fill="#FFF9F2"
          stroke="#1D1D1D"
          strokeWidth="2"
        />
        <line x1="21" y1="25" x2="43" y2="25" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
        <line x1="21" y1="30" x2="43" y2="30" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
        <line x1="21" y1="35" x2="36" y2="35" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      </g>
      <rect
        x="4"
        y="15"
        width="56"
        height="37"
        rx="5"
        fill="#F5C9E7"
        stroke="#1D1D1D"
        strokeWidth="2"
      />
      <path
        d="M8 19h48c1.1 0 2 .9 2 2v3H6v-3c0-1.1.9-2 2-2z"
        fill="white"
        opacity="0.35"
      />
    </svg>
  );
}
