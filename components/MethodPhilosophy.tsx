"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StickerBadge } from "@/components/ui/sticker-badge";
import { HandDrawnCircle, HandDrawnUnderline } from "@/components/ui/hand-drawn";

export function MethodPhilosophy() {
  return (
    <section className="bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <StickerBadge
            src="/brand/sticker-cd.png"
            className="absolute -top-10 -left-10 z-20 h-24 w-24 sm:-top-12 sm:-left-12 sm:h-32 sm:w-32"
            rotate={-12}
          />
          <div className="relative aspect-[4/5] w-full border border-lavender/30">
            <Image
              src="/photos/method-moodboard.png"
              alt="Carmen Susana"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative space-y-6"
        >
          <p className="font-heading text-3xl leading-snug text-ink sm:text-4xl">
            Empecé a estudiar el cerebro por curiosidad científica. Terminé
            entendiendo por qué tantas personas fracasan al intentar cambiar.
          </p>

          <div className="space-y-6 font-body text-lg leading-relaxed text-ink/70">
            <p>
              Durante años vi el mismo patrón: personas brillantes,
              disciplinadas, motivadas... que aun así no lograban sostener un
              hábito más de unas semanas.{" "}
              <span className="relative inline-block whitespace-nowrap font-semibold text-ink">
                No era falta de voluntad
                <HandDrawnUnderline className="absolute -bottom-1 left-0 h-2 w-full text-pink" />
              </span>
              . Era falta de comprensión.
            </p>
            <p>
              La mayoría de los métodos de bienestar piden más esfuerzo.
              Nosotros pedimos algo distinto: entender primero{" "}
              <span className="relative inline-block whitespace-nowrap font-semibold text-ink">
                cómo funciona tu cerebro
                <HandDrawnCircle className="pointer-events-none absolute inset-0 h-full w-full scale-x-[1.08] scale-y-[1.15] text-lavender" />
              </span>
              , y después construir un sistema que trabaje a tu favor, no en
              tu contra.
            </p>
            <p>
              Por eso nació WELL BRAIN. No como una colección de consejos,
              sino como una metodología basada en evidencia, diseñada para
              adaptarse a la vida real — no a una versión idealizada de
              disciplina perfecta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
