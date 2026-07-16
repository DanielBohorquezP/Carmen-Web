"use client";

import { motion } from "framer-motion";

export function AboutIntro() {
  return (
    <section className="bg-turquoise px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          className="relative mx-auto aspect-square w-full max-w-md"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-[2.5rem] bg-pastel-yellow shadow-2xl" />
          <div
            className="absolute inset-6 -rotate-6 overflow-hidden shadow-[0_25px_50px_-8px_rgba(0,0,0,0.45)] md:inset-8"
            style={{ borderRadius: "62% 38% 35% 65% / 58% 42% 58% 42%" }}
          >
            <img
              src="/photos/carmen-hero.jpg"
              alt="Carmen Susana"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <img
            src="/brand/sticker-badge-oval.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 -right-4 w-24 rotate-12 drop-shadow-xl md:w-28"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">
            About
          </p>
          <h2 className="mt-3 font-display text-5xl leading-tight text-dark md:text-6xl">
            Hola, soy Carmen.
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-dark/80">
            Soy médica y epidemióloga clínica, especializada en neurociencia
            aplicada al bienestar. Pero antes que nada, soy alguien que
            también tuvo que reaprender a usar su propio cerebro: el
            cansancio, la dispersión y el estancamiento los viví en carne
            propia antes de convertirlos en mi campo de estudio. Hoy acompaño
            a personas que se sienten así a encontrar, con evidencia real, el
            camino de vuelta a su enfoque y su energía.
          </p>
          <a
            href="/sobre-carmen"
            className="mt-8 inline-block rounded-xl bg-pink px-6 py-3 text-sm font-semibold tracking-wide text-dark transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Conoce mi historia completa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
