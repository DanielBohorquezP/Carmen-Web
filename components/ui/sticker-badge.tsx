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
  /** Desvanece los bordes hacia el fondo (default true). Desactivar para logos/stickers ya recortados. */
  fade?: boolean;
}

const FADE_MASK =
  "radial-gradient(circle, black 45%, transparent 78%)";

/**
 * Charm/sticker decorativo: la imagen se funde con el fondo por sus propios
 * bordes (máscara radial que la desvanece hacia afuera) — sin caja, sin
 * borde, sin sombra ni recorte cuadrado/circular que la "encierre".
 */
export function StickerBadge({
  src,
  alt = "",
  className,
  rotate = -8,
  delay = 0,
  fade = true,
}: StickerBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={cn("pointer-events-none relative select-none", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="200px"
        className={fade ? "object-cover" : "object-contain"}
        style={
          fade ? { maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK } : undefined
        }
      />
    </motion.div>
  );
}
