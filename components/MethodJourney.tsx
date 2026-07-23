"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { IconArrowButton } from "@/components/ui/icon-arrow-button";
import { StickerBadge } from "@/components/ui/sticker-badge";

interface Step {
  name: string;
  icon: string;
  photo: string;
  description: string;
}

const STEPS: Step[] = [
  {
    name: "Brain Foundations",
    icon: "/icons/pillars/cerebro.png",
    photo: "/photos/pillars/journey-brain-foundations.png",
    description:
      "Entiende cómo funciona tu cerebro y por qué tus hábitos actuales son automáticos.",
  },
  {
    name: "Nutrition",
    icon: "/icons/pillars/manzana.png",
    photo: "/photos/pillars/journey-nutrition.png",
    description:
      "Alimenta tu mente para sostener energía, enfoque y claridad cada día.",
  },
  {
    name: "Movement",
    icon: "/icons/pillars/mancuernas.png",
    photo: "/photos/pillars/journey-movement.png",
    description:
      "Descubre cómo el movimiento cambia la estructura y química de tu cerebro.",
  },
  {
    name: "Sleep",
    icon: "/icons/pillars/luna.png",
    photo: "/photos/pillars/journey-sleep.png",
    description:
      "Recupera un descanso profundo que sostiene cada hábito que construyes.",
  },
  {
    name: "Focus",
    icon: "/icons/pillars/arco.png",
    photo: "/photos/pillars/journey-focus.png",
    description:
      "Entrena tu atención en un mundo diseñado para distraerte a cada instante.",
  },
  {
    name: "Identity",
    icon: "/icons/pillars/corazon.png",
    photo: "/photos/pillars/journey-identity.png",
    description:
      "Conviértete, un pequeño hábito a la vez, en la persona que quieres ser.",
  },
];

const ACCENTS = {
  lavender: { hex: "#9B6FEA", bg: "bg-lavender" },
  pink: { hex: "#C96FA0", bg: "bg-pink" },
} as const;

export function MethodJourney() {
  return (
    <section className="relative overflow-hidden bg-lavender px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <StickerBadge
        src="/brand/sticker-rocola.png"
        className="absolute bottom-8 -right-10 z-0 h-56 w-56 sm:bottom-10 sm:-right-14 sm:h-72 sm:w-72"
        rotate={-6}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="font-heading text-4xl leading-tight text-ink/85 sm:text-5xl lg:text-[52px]">
          6 áreas para reprogramar tu mente
        </h2>
        <p className="mt-4 font-body text-lg text-ink/55">
          y construir hábitos que transforman tu vida.
        </p>
        <SparkleIcon className="mt-4 h-2.5 w-2.5 text-lavender" />
      </motion.div>

      <div className="relative mx-auto mt-16 max-w-7xl lg:mt-20">
        <div className="relative grid grid-cols-1 gap-[18px] sm:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((step, index) => (
            <ModuleCard
              key={step.name}
              step={step}
              tone={index % 2 === 0 ? "lavender" : "pink"}
              index={index}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="relative mt-16 flex justify-center lg:mt-20"
      >
        <CartoonButton
          label="Start Your Journey"
          href="/resources"
          color="bg-pink"
          icon={<ArrowRight className="h-4 w-4" />}
        />
      </motion.div>
    </section>
  );
}

function ModuleCard({
  step,
  tone,
  index,
}: {
  step: Step;
  tone: keyof typeof ACCENTS;
  index: number;
}) {
  const accent = ACCENTS[tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 6) * 0.08 }}
      className="relative isolate flex h-full min-h-[440px] flex-col overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]"
    >
      {/* Photo */}
      <div className="relative h-[255px] shrink-0 bg-black/[0.03]">
        <Image
          src={step.photo}
          alt={step.name}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-1/2 z-10 flex h-[30px] w-[30px] -translate-x-1/2 items-center justify-center rounded-full bg-white/70 font-button text-xs font-semibold text-ink/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Overlapping medallion */}
      <div className="absolute top-[224px] left-1/2 z-20 flex h-[62px] w-[62px] -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <Image
          src={step.icon}
          alt=""
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center px-6 pt-[45px] pb-6 text-center">
        <h3 className="font-poppins text-[30px] leading-tight font-bold text-ink">
          {step.name}
        </h3>
        <span
          className="mt-3 h-[2px] w-[18px]"
          style={{ backgroundColor: accent.hex }}
        />
        <p className="mt-3 font-body text-[15px] leading-[1.6] text-ink/55 line-clamp-3">
          {step.description}
        </p>
        <div className="mt-auto flex justify-center pt-4">
          <IconArrowButton
            href="/method"
            label={`Descubre ${step.name}`}
            tone={accent.hex}
          />
        </div>
      </div>

      {/* Bottom-left organic notch */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-30 h-11 w-11 -translate-x-1/2 translate-y-1/2 rotate-45 rounded-lg bg-cream"
      />
    </motion.div>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c.6 5.4 1.6 8.6 4 11 2.4 2.4 5.6 3.4 8 4-2.4.6-5.6 1.6-8 4-2.4 2.4-3.4 5.6-4 11-.6-5.4-1.6-8.6-4-11-2.4-2.4-5.6-3.4-8-4 2.4-.6 5.6-1.6 8-4 2.4-2.4 3.4-5.6 4-11Z" />
    </svg>
  );
}
