"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MethodHero() {
  return (
    <section className="relative flex h-screen w-full items-end overflow-hidden">
      <Image
        src="/photos/fondo-ppal.png"
        alt="Carmen Susana, fundadora de WELL BRAIN"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-ink/10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-[14%] text-center sm:px-10"
      >
        <h1 className="font-heading text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
          The WELL BRAIN <span className="text-lavender">Method</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-heading text-xl text-white/90 italic sm:text-2xl">
          No cambiamos vidas. Construimos sistemas.
        </p>
        <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/75 sm:text-lg">
          El cambio no depende de la fuerza de voluntad. Depende de entender
          cómo funciona tu cerebro y construir un sistema que trabaje a tu
          favor, no en tu contra.
        </p>
      </motion.div>
    </section>
  );
}
