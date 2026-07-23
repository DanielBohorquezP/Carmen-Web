"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CartoonButton } from "@/components/ui/cartoon-button";

export function EbookLeadMagnet() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <FloatingSparkle className="absolute top-16 left-8 h-4 w-4 text-pink/60 sm:left-16" />
      <FloatingSparkle className="absolute top-1/3 right-10 h-5 w-5 text-lavender/60" />
      <span className="absolute top-24 right-1/3 h-2 w-2 rounded-full bg-pink/50" />
      <span className="absolute bottom-20 left-1/4 h-2 w-2 rounded-full bg-lavender/60" />
      <MoleculeIcon className="absolute bottom-10 left-6 h-10 w-10 text-lavender/30 sm:left-12" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-2"
        >
          <p className="font-button text-xs tracking-[0.2em] text-[#9B6FEA] uppercase">
            Antes de seguir, un regalo
          </p>

          <h2 className="mt-4 font-heading text-3xl leading-tight text-ink italic sm:text-4xl">
            Free Brain Guide
          </h2>
          <h3 className="mt-2 font-heading text-5xl leading-[1.15] text-ink sm:text-6xl">
            7 hábitos respaldados por la ciencia para cuidar tu cerebro cada
            día.
          </h3>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink/70">
            Una guía práctica y sencilla, basada en evidencia científica, con
            pequeños cambios diarios para mejorar tu energía, tu enfoque y tu
            bienestar. Nada de teoría complicada: solo lo que realmente
            funciona.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start"
          >
            <div className="flex flex-1 flex-col gap-3 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Nombre</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  className="w-full rounded-lg border-2 border-ink/15 bg-white px-4 py-3 font-body text-ink placeholder:text-ink/40 focus:border-lavender focus:outline-none"
                />
              </label>
              <label className="flex-1">
                <span className="sr-only">Correo electrónico</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo"
                  required
                  className="w-full rounded-lg border-2 border-ink/15 bg-white px-4 py-3 font-body text-ink placeholder:text-ink/40 focus:border-lavender focus:outline-none"
                />
              </label>
            </div>
            <CartoonButton
              label="Download Free"
              icon={<ArrowRight className="h-4 w-4" />}
              className="sm:shrink-0"
            />
          </form>

          <p className="mt-4 flex items-start gap-2 font-body text-sm text-ink/60">
            <FloatingSparkle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lavender" />
            Recibirás la guía al instante en tu correo y pasarás a formar
            parte de la comunidad Well Brain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative order-1 flex justify-center lg:order-1"
        >
          <BookMockup />
        </motion.div>
      </div>
    </section>
  );
}

function BookMockup() {
  return (
    <motion.div
      className="relative aspect-[2/3] w-80 sm:w-[26rem]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/photos/libro.png"
        alt="WELL BRAIN Starter Guide"
        fill
        sizes="(min-width: 640px) 416px, 320px"
        className="object-contain drop-shadow-[0_25px_45px_rgba(29,29,29,0.3)]"
      />
    </motion.div>
  );
}

function FloatingSparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c.6 5.4 1.6 8.6 4 11 2.4 2.4 5.6 3.4 8 4-2.4.6-5.6 1.6-8 4-2.4 2.4-3.4 5.6-4 11-.6-5.4-1.6-8.6-4-11-2.4-2.4-5.6-3.4-8-4 2.4-.6 5.6-1.6 8-4 2.4-2.4 3.4-5.6 4-11Z" />
    </svg>
  );
}

function MoleculeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <line x1="12" y1="12" x2="24" y2="24" />
      <line x1="24" y1="24" x2="36" y2="14" />
      <line x1="24" y1="24" x2="20" y2="38" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="36" cy="14" r="4" />
      <circle cx="20" cy="38" r="4" />
      <circle cx="24" cy="24" r="3" />
    </svg>
  );
}
