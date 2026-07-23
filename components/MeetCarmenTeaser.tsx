"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { StickerBadge } from "@/components/ui/sticker-badge";

export function MeetCarmenTeaser() {
  return (
    <section className="relative overflow-hidden bg-lavender/40 px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <SparkleIcon className="absolute top-16 right-[10%] h-6 w-6 text-white/60" />
      <SparkleIcon className="absolute bottom-20 left-[8%] h-4 w-4 text-ink/20" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:order-2"
        >
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/photos/carmen123.png"
              alt="Carmen Susana, fundadora de Well Brain"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>
          <StickerBadge
            src="/brand/sticker-stars.png"
            className="absolute -top-8 -right-8 z-20 h-20 w-20"
            rotate={12}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col items-center gap-6 text-center lg:order-1 lg:items-start lg:text-left"
        >
          <span className="font-button text-xs uppercase tracking-[0.2em] text-ink/60">
            La mente detrás de Well Brain
          </span>
          <h2 className="font-heading text-5xl leading-tight text-ink sm:text-6xl">
            Hola, soy Carmen.
          </h2>
          <p className="max-w-md font-body text-lg leading-relaxed text-ink/70">
            Médica y epidemióloga clínica. Durante años pensé que necesitaba
            más disciplina — hasta que entendí que el verdadero cambio empieza
            por comprender tu cerebro.
          </p>
          <CartoonButton
            label="More About Carmen"
            href="/about"
            color="bg-cream"
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
