"use client";

import { useEffect, useId, useRef } from "react";

interface CurvedMarqueeTextProps {
  text?: string;
  className?: string;
  durationMs?: number;
  /** "hill" = una sola curva suave tipo colina (Hero). "waves" = varias montañitas suaves seguidas. */
  curve?: "hill" | "waves";
  fill?: string;
  fontSize?: number;
  italic?: boolean;
}

const CURVE_PATHS: Record<"hill" | "waves", string> = {
  hill: "M -200 200 Q 800 140 2000 200",
  waves:
    "M -200 200 Q -25 100 150 200 Q 325 100 500 200 Q 675 100 850 200 Q 1025 100 1200 200 Q 1375 100 1550 200 Q 1725 100 1900 200 Q 2075 100 2250 200",
};

export function CurvedMarqueeText({
  text = "WELL BRAIN",
  className,
  durationMs = 40000,
  curve = "hill",
  fill = "#FFFFFF",
  fontSize = 170,
  italic = true,
}: CurvedMarqueeTextProps) {
  const textPathRef = useRef<SVGTextPathElement>(null);
  const pathId = `marquee-curve-${useId()}`;

  useEffect(() => {
    let frameId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = ((now - start) % durationMs) / durationMs;
      textPathRef.current?.setAttribute("startOffset", `${-progress * 100}%`);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [durationMs]);

  const phrase = `${text}   •   `.repeat(10);

  return (
    <svg
      viewBox="0 0 1600 260"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d={CURVE_PATHS[curve]} fill="none" />
      </defs>
      <text
        style={{ fontFamily: "var(--font-display)" }}
        fontSize={fontSize}
        fontStyle={italic ? "italic" : "normal"}
        fontWeight="400"
        fill={fill}
        opacity="1"
      >
        <textPath ref={textPathRef} href={`#${pathId}`} startOffset="0%">
          {phrase}
        </textPath>
      </text>
    </svg>
  );
}
