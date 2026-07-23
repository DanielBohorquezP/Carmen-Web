"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { IconArrowButton } from "@/components/ui/icon-arrow-button";
import { RetroWindowBar } from "@/components/ui/retro-window-bar";
import { StickerBadge } from "@/components/ui/sticker-badge";
import { WindowStack } from "@/components/ui/window-stack";
import { cn } from "@/lib/utils";

interface Pillar {
  index: number;
  photo: string;
  name: string;
  description: string;
  numColor: string;
  accentBg: string;
}

const PILLARS: Pillar[] = [
  {
    index: 0,
    photo: "/photos/pillars/brain-foundations.png",
    name: "Brain Foundations",
    description:
      "Entiende cómo funciona tu cerebro para transformar tu vida desde dentro.",
    numColor: "#9B6FEA",
    accentBg: "bg-lavender/25",
  },
  {
    index: 1,
    photo: "/photos/pillars/nutrition.png",
    name: "Nutrition",
    description:
      "Alimenta tu mente con lo que realmente necesita para rendir al máximo.",
    numColor: "#C96FA0",
    accentBg: "bg-pink/25",
  },
  {
    index: 2,
    photo: "/photos/pillars/movement.png",
    name: "Movement",
    description:
      "El movimiento no solo transforma tu cuerpo, transforma tu cerebro.",
    numColor: "#9B6FEA",
    accentBg: "bg-lavender/25",
  },
  {
    index: 3,
    photo: "/photos/pillars/sleep.png",
    name: "Sleep",
    description:
      "Recupera un descanso profundo que sostiene cada hábito que construyes.",
    numColor: "#9B6FEA",
    accentBg: "bg-lavender/25",
  },
  {
    index: 4,
    photo: "/photos/pillars/focus.png",
    name: "Focus",
    description:
      "Entrena tu atención en un mundo diseñado para distraerte a cada instante.",
    numColor: "#C96FA0",
    accentBg: "bg-pink/25",
  },
  {
    index: 5,
    photo: "/photos/pillars/identity.png",
    name: "Identity",
    description:
      "Conviértete, un pequeño hábito a la vez, en la persona que quieres ser.",
    numColor: "#9B6FEA",
    accentBg: "bg-lavender/25",
  },
];

export function SixPillars() {
  return (
    <section className="relative overflow-hidden bg-pink px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <StickerBadge
        src="/brand/sticker-rocola.png"
        className="absolute bottom-12 -right-12 z-0 h-72 w-72 sm:bottom-16 sm:-right-16 sm:h-96 sm:w-96"
        rotate={-6}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <StickerBadge
            src="/brand/sticker-stars.png"
            className="absolute top-1/2 -left-16 z-20 h-24 w-24 -translate-y-1/2 sm:-left-28 sm:h-36 sm:w-36"
            rotate={-12}
          />
          <StickerBadge
            src="/brand/logo-wellbrain.png"
            className="absolute top-1/2 -right-24 z-20 h-20 w-20 -translate-y-1/2 sm:-right-40 sm:h-32 sm:w-32"
            rotate={10}
          />
          <div className="flex items-center justify-center gap-4">
            <h2 className="font-heading text-6xl leading-tight text-ink sm:text-7xl lg:text-8xl">
              The WELL BRAIN <span className="text-[#9B6FEA]">Method</span>
            </h2>
            <SparkleIcon className="hidden h-7 w-7 shrink-0 text-pink sm:block" />
          </div>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink/80 sm:text-xl">
            Un programa de seis módulos, uno por mes, donde cada pilar
            construye sobre el conocimiento del anterior.
          </p>
        </motion.div>

        {/* Pillar grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-16">
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: (pillar.index % 3) * 0.08,
              }}
              className="relative h-full cursor-default"
            >
              <WindowStack variant="stacked-right" />
              <div className="relative z-10 flex h-full min-h-[380px] flex-col overflow-hidden border-2 border-ink bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
                {/* Photo area */}
                <div
                  className={cn("relative h-[220px] shrink-0", pillar.accentBg)}
                >
                  <RetroWindowBar
                    label={`${String(pillar.index + 1).padStart(2, "0")}_${pillar.name
                      .toUpperCase()
                      .replace(/\s+/g, "-")}.PNG`}
                  />
                  <Image
                    src={pillar.photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-poppins text-[28px] leading-tight font-bold text-ink">
                    {pillar.name}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-ink/55 line-clamp-3">
                    {pillar.description}
                  </p>

                  {/* Arrow link */}
                  <div className="mt-auto flex justify-end pt-4">
                    <IconArrowButton
                      href="/method"
                      label={`Descubre ${pillar.name}`}
                      tone={pillar.numColor}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mt-16 flex justify-center lg:mt-20"
        >
          <CartoonButton
            label="Explore the Method"
            href="/method"
            color="bg-lavender"
            icon={<ArrowRight className="h-4 w-4" />}
          />
        </motion.div>
      </div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c.6 5.4 1.6 8.6 4 11 2.4 2.4 5.6 3.4 8 4-2.4.6-5.6 1.6-8 4-2.4 2.4-3.4 5.6-4 11-.6-5.4-1.6-8.6-4-11-2.4-2.4-5.6-3.4-8-4 2.4-.6 5.6-1.6 8-4 2.4-2.4 3.4-5.6 4-11Z" />
    </svg>
  );
}
