"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { StickerBadge } from "@/components/ui/sticker-badge";
import { cn } from "@/lib/utils";

interface Step {
  name: string;
  icon: string;
  description: string;
}

const STEPS: Step[] = [
  {
    name: "Brain Foundations",
    icon: "/icons/pillars/cerebro.png",
    description:
      "Entiende cómo funciona tu cerebro y por qué tus hábitos actuales son automáticos.",
  },
  {
    name: "Nutrition",
    icon: "/icons/pillars/manzana.png",
    description:
      "Alimenta tu mente para sostener energía, enfoque y claridad cada día.",
  },
  {
    name: "Movement",
    icon: "/icons/pillars/mancuernas.png",
    description:
      "Descubre cómo el movimiento cambia la estructura y química de tu cerebro.",
  },
  {
    name: "Sleep",
    icon: "/icons/pillars/luna.png",
    description:
      "Recupera un descanso profundo que sostiene cada hábito que construyes.",
  },
  {
    name: "Focus",
    icon: "/icons/pillars/arco.png",
    description:
      "Entrena tu atención en un mundo diseñado para distraerte a cada instante.",
  },
  {
    name: "Identity",
    icon: "/icons/pillars/corazon.png",
    description:
      "Conviértete, un pequeño hábito a la vez, en la persona que quieres ser.",
  },
];

export function MethodJourney() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
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
        className="relative mx-auto max-w-2xl text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <h2 className="font-heading text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
            The WELL BRAIN <span className="text-[#9B6FEA]">Method</span>
          </h2>
          <SparkleIcon className="hidden h-6 w-6 shrink-0 text-pink sm:block" />
        </div>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink/70 sm:text-xl">
          Un recorrido progresivo diseñado para transformar tu mente a través
          de pequeños cambios sostenibles, mes a mes.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-20 lg:grid-cols-6 lg:gap-5">
        {STEPS.map((step, index) => (
          <ModuleCard
            key={step.name}
            step={step}
            tone={index % 2 === 0 ? "lavender" : "pink"}
            index={index}
          />
        ))}
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
  tone: "lavender" | "pink";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 6) * 0.08 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-lavender hover:shadow-[0_20px_45px_-20px_rgba(155,111,234,0.35)]"
    >
      <div className="flex items-center gap-1.5 border-b-2 border-lavender bg-gradient-to-r from-lavender/80 via-pink/60 to-lavender/70 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#B79AFA]" />
        <span className="h-2 w-2 rounded-full bg-[#D8C4FF]" />
        <span className="h-2 w-2 rounded-full bg-[#F5C9E7]" />
      </div>

      <div
        className={cn(
          "relative aspect-square w-full shrink-0 p-6 transition-transform duration-500 group-hover:scale-105 sm:p-7",
          tone === "lavender" ? "bg-lavender" : "bg-pink",
        )}
      >
        <Image
          src={step.icon}
          alt=""
          fill
          sizes="(min-width: 1024px) 15vw, 40vw"
          className="object-contain p-4"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 py-5 text-center sm:py-6">
        <span className="font-button text-sm tracking-[0.15em] text-[#9B6FEA]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-button text-sm tracking-[0.06em] text-ink uppercase sm:text-base">
          {step.name}
        </h3>
        <p className="font-body text-xs leading-relaxed text-ink/60 sm:text-sm">
          {step.description}
        </p>
      </div>
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
