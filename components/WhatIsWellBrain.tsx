"use client";

import { motion } from "framer-motion";

export function WhatIsWellBrain() {
  return (
    <section className="overflow-hidden bg-cream px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-6xl leading-[1.05] text-dark md:text-7xl">
            ¿Qué es
            <br />
            Well Brain?
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-dark/85 md:text-xl">
            Well Brain nació de una pregunta simple: ¿por qué sabemos tanto
            sobre el cerebro y aun así nos cuesta tanto aplicarlo? Es el
            espacio donde la neurociencia deja de ser teoría y se convierte
            en un <span className="font-semibold text-pink">método</span>:
            claro, personalizado y honesto, para dormir mejor, pensar con más
            claridad y sostener los hábitos que de verdad importan.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark">
            Ciencia, no tendencias
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.94, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="rounded-[2rem] bg-cream p-3 shadow-2xl">
            <img
              src="/photos/room.jpg"
              alt="Un espacio real, pensado para pensar mejor"
              className="h-[460px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <img
            src="/brand/sticker-habits.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -left-8 w-32 rotate-6 drop-shadow-xl md:w-36"
          />
        </motion.div>
      </div>
    </section>
  );
}
