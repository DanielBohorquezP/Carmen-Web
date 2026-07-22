"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { StickerBadge } from "@/components/ui/sticker-badge";
import { cn } from "@/lib/utils";

const mainPillars = [
  {
    index: 0,
    image: "/icons/pillars/cerebro.png",
    name: "Brain Foundations",
    description:
      "Entiende cómo funciona tu cerebro para transformar tu vida desde dentro.",
    bg: "bg-gradient-to-br from-[#D5C5FF] to-[#EDE5FF]",
    numColor: "#9B6FEA",
  },
  {
    index: 1,
    image: "/icons/pillars/manzana.png",
    name: "Nutrition",
    description:
      "Alimenta tu mente con lo que realmente necesita para rendir al máximo.",
    bg: "bg-gradient-to-br from-[#FFCCE6] to-[#FFEEF8]",
    numColor: "#C96FA0",
  },
  {
    index: 2,
    image: "/icons/pillars/mancuernas.png",
    name: "Movement",
    description:
      "El movimiento no solo transforma tu cuerpo, transforma tu cerebro.",
    bg: "bg-gradient-to-br from-[#E0D4FF] to-[#F2EEFF]",
    numColor: "#9B6FEA",
  },
];

const sidePillars = [
  {
    index: 3,
    image: "/icons/pillars/luna.png",
    name: "Sleep",
    bg: "bg-[#EBE0FF]",
    numColor: "#9B6FEA",
  },
  {
    index: 4,
    image: "/icons/pillars/arco.png",
    name: "Focus",
    bg: "bg-[#FFE2F3]",
    numColor: "#C96FA0",
  },
  {
    index: 5,
    image: "/icons/pillars/corazon.png",
    name: "Identity",
    bg: "bg-[#E5DAFF]",
    numColor: "#9B6FEA",
  },
];

export function SixPillars() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
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
            fade={false}
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

        {/* Bento Grid */}
        <div className="mt-16 flex flex-col gap-4 lg:mt-20 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-5">
          {/* Left column — large cards */}
          <div className="flex flex-col gap-4">
            {mainPillars.map((pillar, i) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.1 }}
                className="group cursor-default"
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-12px_rgba(155,111,234,0.22)]",
                    pillar.bg,
                  )}
                >
                  {/* Large ghost number */}
                  <span
                    className="pointer-events-none absolute top-5 left-7 select-none font-heading text-8xl leading-none sm:text-9xl"
                    style={{ color: pillar.numColor, opacity: 0.15 }}
                  >
                    {String(pillar.index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="relative mt-8 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:gap-10 sm:text-left">
                    <div className="relative h-44 w-44 shrink-0 transition-transform duration-500 group-hover:scale-[1.06] sm:h-52 sm:w-52">
                      <Image
                        src={pillar.image}
                        alt=""
                        fill
                        sizes="208px"
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    <div className="sm:pb-3">
                      <h3 className="font-button text-2xl tracking-[0.09em] text-ink uppercase sm:text-3xl">
                        {pillar.name}
                      </h3>
                      <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-ink/55">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column — small cards */}
          <div className="flex flex-col gap-4">
            {sidePillars.map((pillar, i) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2 + i * 0.09,
                }}
                className="group flex flex-1 cursor-default"
              >
                <div
                  className={cn(
                    "relative flex min-h-[180px] w-full flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(155,111,234,0.18)]",
                    pillar.bg,
                  )}
                >
                  {/* Ghost number top-left */}
                  <span
                    className="pointer-events-none select-none font-heading text-5xl leading-none"
                    style={{ color: pillar.numColor, opacity: 0.18 }}
                  >
                    {String(pillar.index + 1).padStart(2, "0")}
                  </span>

                  {/* Name + icon row at bottom */}
                  <div className="flex items-end justify-between">
                    <h3 className="font-button text-lg tracking-[0.1em] text-ink uppercase">
                      {pillar.name}
                    </h3>
                    <div className="relative h-20 w-20 transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={pillar.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0c.6 5.4 1.6 8.6 4 11 2.4 2.4 5.6 3.4 8 4-2.4.6-5.6 1.6-8 4-2.4 2.4-3.4 5.6-4 11-.6-5.4-1.6-8.6-4-11-2.4-2.4-5.6-3.4-8-4 2.4-.6 5.6-1.6 8-4 2.4-2.4 3.4-5.6 4-11Z" />
    </svg>
  );
}
