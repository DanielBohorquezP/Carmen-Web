"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickerBadgeProps {
  src: string;
  alt?: string;
  /** Posición y tamaño (ej. "absolute -top-6 -right-6 z-20 h-20 w-20"). */
  className?: string;
  rotate?: number;
  delay?: number;
}

/**
 * Charm/sticker decorativo: sin caja, sin borde, sin sombra ni recorte
 * cuadrado/circular que lo "encierre".
 */
export function StickerBadge({
  src,
  alt = "",
  className,
  rotate = -8,
  delay = 0,
}: StickerBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn("pointer-events-none relative select-none", className)}
    >
      <Image src={src} alt={alt} fill sizes="200px" className="object-contain" />
    </motion.div>
  );
}
