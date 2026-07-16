"use client";

import { Sparkles } from "lucide-react";

const TAGLINE = "Better Habits, Stronger Mind";
const REPEATS = 6;

export function Marquee() {
  const items = Array.from({ length: REPEATS });

  return (
    <div className="overflow-hidden bg-lilac py-3">
      <div className="marquee-track flex w-max items-center gap-6">
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-6 font-display text-2xl tracking-wide text-dark md:text-3xl"
          >
            {TAGLINE}
            <Sparkles className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
          </span>
        ))}
      </div>
      <style>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
