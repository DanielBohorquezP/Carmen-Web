"use client";

import * as React from "react";
import { motion, type PanInfo } from "framer-motion";

export type Testimonial = {
  id: number;
  pillar: string;
  quote: string;
  initials: string;
  accent: string;
};

export type CardPosition = "front" | "middle" | "back";

interface TestimonialCardProps extends Testimonial {
  handleShuffle: () => void;
  position: CardPosition;
}

const ROTATION: Record<CardPosition, string> = {
  front: "-4deg",
  middle: "2deg",
  back: "6deg",
};

const OFFSET_X: Record<CardPosition, string> = {
  front: "0%",
  middle: "5%",
  back: "10%",
};

const OFFSET_Y: Record<CardPosition, string> = {
  front: "0%",
  middle: "4%",
  back: "8%",
};

const SHADOW: Record<CardPosition, string> = {
  front: "shadow-xl",
  middle: "shadow-lg",
  back: "shadow-md",
};

export function TestimonialCard({
  handleShuffle,
  pillar,
  quote,
  initials,
  accent,
  position,
}: TestimonialCardProps) {
  const dragStartX = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{ zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0 }}
      animate={{
        rotate: ROTATION[position],
        x: OFFSET_X[position],
        y: OFFSET_Y[position],
      }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(_, info: PanInfo) => {
        dragStartX.current = info.point.x;
      }}
      onDragEnd={(_, info: PanInfo) => {
        if (dragStartX.current - info.point.x > 100) {
          handleShuffle();
        }
        dragStartX.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 flex h-full w-full select-none flex-col justify-between rounded-[2rem] border border-dark/10 bg-white p-8 ${SHADOW[position]} ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">
          {pillar}
        </span>
        <blockquote className="mt-4 text-base leading-relaxed text-dark">
          “{quote}”
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${accent} text-xs font-semibold text-dark`}
        >
          {initials}
        </span>
        <span className="text-sm text-dark/60">Clienta Well Brain</span>
      </figcaption>
    </motion.div>
  );
}
