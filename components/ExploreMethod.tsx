"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { StickerBadge } from "@/components/ui/sticker-badge";
import { cn } from "@/lib/utils";

interface Program {
  name: string;
  month: string;
  description: string;
}

const PROGRAMS: Program[] = [
  {
    name: "Brain Foundations",
    month: "Month 1 · Foundations",
    description:
      "Aprende cómo funciona tu cerebro: los circuitos, los hábitos automáticos y la ciencia detrás de cada decisión que tomas sin darte cuenta.",
  },
  {
    name: "Nutrition",
    month: "Month 2 · Nutrition",
    description:
      "Alimenta tu mente con lo que realmente necesita. Descubre cómo la comida moldea tu energía, tu enfoque y tu estado de ánimo.",
  },
  {
    name: "Movement",
    month: "Month 3 · Movement",
    description:
      "El movimiento no solo transforma tu cuerpo: cambia la estructura y la química de tu cerebro cada vez que te mueves.",
  },
  {
    name: "Sleep",
    month: "Month 4 · Sleep",
    description:
      "Dormir mejor cambia todo. Aprende a proteger tu descanso como la base de cada hábito que quieres construir.",
  },
  {
    name: "Focus",
    month: "Month 5 · Focus",
    description:
      "Recupera tu atención en un mundo diseñado para distraerte. Entrena tu enfoque como quien entrena un músculo.",
  },
  {
    name: "Identity",
    month: "Month 6 · Identity",
    description:
      "Conviértete en la persona que quieres ser, un pequeño hábito a la vez, hasta que ya no sea un esfuerzo sino quien eres.",
  },
];

const BG_TONES = [
  "bg-cream",
  "bg-[#FDF2F8]",
  "bg-[#F5F1FF]",
  "bg-[#F5F1FF]",
  "bg-[#FDF2F8]",
  "bg-cream",
];

export function ExploreMethod() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  function goTo(index: number) {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }

  function next() {
    goTo((active + 1) % PROGRAMS.length);
  }

  const program = PROGRAMS[active];

  return (
    <section
      className={cn(
        "px-6 py-section-sm transition-colors duration-700 sm:px-10 lg:px-24 lg:py-section",
        BG_TONES[active],
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <StickerBadge
          src="/brand/sticker-stars.png"
          className="absolute top-1/2 -left-8 z-20 h-20 w-20 -translate-y-1/2 sm:-left-20 sm:h-28 sm:w-28"
          rotate={-12}
        />
        <StickerBadge
          src="/brand/sticker-card.png"
          className="absolute top-1/2 -right-8 z-20 h-20 w-20 -translate-y-1/2 sm:-right-20 sm:h-28 sm:w-28"
          rotate={10}
        />
        <h2 className="font-heading text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
          Descubre el método que se adapta a{" "}
          <span className="text-[#9B6FEA]">ti</span>
        </h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink/70 sm:text-xl">
          Cada persona empieza desde un lugar distinto. WELL BRAIN ofrece
          distintos recorridos según lo que necesites trabajar primero.
        </p>
      </motion.div>

      {/* Progress nav */}
      <div className="mx-auto mt-14 flex max-w-lg items-center justify-center lg:mt-16">
        {PROGRAMS.map((p, i) => (
          <div key={p.name} className="flex items-center">
            <button
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir al módulo ${i + 1}: ${p.name}`}
              aria-current={i === active}
              className={cn(
                "font-button text-sm tracking-[0.1em] transition-colors duration-300 sm:text-base",
                i === active ? "text-[#9B6FEA]" : "text-ink/25 hover:text-ink/50",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
            {i < PROGRAMS.length - 1 && (
              <span className="mx-2 h-px w-5 bg-ink/15 sm:mx-3 sm:w-8" />
            )}
          </div>
        ))}
      </div>

      {/* Single active card */}
      <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden lg:mt-14">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="rounded-3xl border border-ink/10 bg-white/70 px-8 py-12 backdrop-blur-sm sm:px-14 sm:py-16"
        >
          <span className="block font-heading text-7xl leading-none text-[#9B6FEA] sm:text-8xl">
            {String(active + 1).padStart(2, "0")}
          </span>

          <h3 className="mt-6 font-button text-2xl tracking-[0.12em] text-ink uppercase sm:text-3xl">
            {program.name}
          </h3>

          <span className="mt-6 block h-px w-24 bg-ink/15" />

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/70">
            {program.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <span className="font-body text-sm tracking-wide text-ink/45">
              {program.month}
            </span>
            <button
              type="button"
              onClick={next}
              className="group inline-flex items-center gap-2 font-button text-xs tracking-[0.2em] text-ink uppercase"
            >
              Next
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative mx-auto mt-20 max-w-xl text-center lg:mt-24"
      >
        <StickerBadge
          src="/brand/sticker-rocola.png"
          className="absolute -top-10 -right-16 z-20 h-24 w-24 sm:-top-14 sm:-right-24 sm:h-32 sm:w-32"
          rotate={-8}
        />
        <h3 className="font-heading text-4xl text-ink italic sm:text-5xl">
          Cada cambio empieza con una decisión consciente.
        </h3>
        <p className="mt-4 font-body text-lg text-ink/70">
          WELL BRAIN te ofrece un camino estructurado para acompañar ese
          proceso, paso a paso.
        </p>
        <div className="mt-8 flex justify-center">
          <CartoonButton
            label="Start Your Journey"
            href="/resources"
            icon={<ArrowRight className="h-4 w-4" />}
          />
        </div>
      </motion.div>
    </section>
  );
}
