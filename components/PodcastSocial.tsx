"use client";

import { motion } from "framer-motion";

export function PodcastSocial() {
  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="font-display text-6xl leading-tight text-dark md:text-7xl">
            Síguenos
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-dark/80 md:text-xl">
            Muy pronto vas a poder encontrar más contenido de Well Brain en
            nuestras redes y en un espacio dedicado a conversaciones sobre
            neurociencia aplicada.
          </p>
          <span className="mt-8 inline-block rounded-xl border-2 border-dark/25 px-6 py-3 text-base font-semibold tracking-wide text-dark/60">
            Próximamente
          </span>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-lg"
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="h-full w-full overflow-hidden rounded-[2rem] bg-pink p-6 shadow-2xl">
            <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-cream p-3">
              <img
                src="/photos/podcast-placeholder.jpg"
                alt="Well Brain — próximamente en podcast"
                className="h-full w-full rounded-[1rem] object-cover"
              />
            </div>
          </div>
          <img
            src="/brand/sticker-braincoders.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 -right-6 w-24 -rotate-6 drop-shadow-xl md:w-28"
          />
        </motion.div>
      </div>
    </section>
  );
}
