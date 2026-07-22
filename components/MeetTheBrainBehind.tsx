"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EditorialWaveMarquee } from "@/components/ui/editorial-wave-marquee";
import { StickerBadge } from "@/components/ui/sticker-badge";

export function MeetTheBrainBehind() {
  return (
    <>
      <section className="relative flex h-screen w-full items-end overflow-hidden">
        <Image
          src="/photos/fondo-ppal.png"
          alt="Carmen Susana, fundadora de WELL BRAIN"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/10" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-[14%] text-center sm:px-10"
        >
          <h1 className="font-heading text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Meet the Brain Behind <span className="text-lavender">Well Brain</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/80 sm:text-lg">
            Hola, soy Carmen Susana.
          </p>
        </motion.div>
      </section>

      <section className="bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full lg:mx-0 lg:h-full"
          >
            <StickerBadge
              src="/brand/sticker-stars.png"
              className="absolute -top-10 -right-10 z-20 h-28 w-28 sm:-top-12 sm:-right-12 sm:h-36 sm:w-36"
              rotate={12}
            />
            <StickerBadge
              src="/icons/pillars/corazon.png"
              className="absolute -bottom-10 -left-10 z-20 h-28 w-28 sm:-bottom-12 sm:-left-12 sm:h-36 sm:w-36"
              rotate={-10}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0 translate-x-2 translate-y-3 rotate-[-6deg] scale-[0.96] overflow-hidden rounded-2xl border-2 border-pink bg-pink/55"
            >
              <div className="flex items-center gap-2 border-b-2 border-pink bg-pink/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#9B6FEA]/70" />
                <span className="h-3 w-3 rounded-full bg-[#9B6FEA]/70" />
                <span className="h-3 w-3 rounded-full bg-[#9B6FEA]/70" />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-0 z-[1] translate-x-[-8px] translate-y-[-5px] rotate-[4deg] scale-[0.975] overflow-hidden rounded-2xl border-2 border-lavender bg-lavender/60"
            >
              <div className="flex items-center gap-2 border-b-2 border-lavender bg-lavender/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-pink/70" />
                <span className="h-3 w-3 rounded-full bg-pink/70" />
                <span className="h-3 w-3 rounded-full bg-pink/70" />
              </div>
            </div>

            <div className="relative z-10 flex aspect-[3/4] w-full flex-col overflow-hidden rounded-2xl border-2 border-lavender/40 lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <div className="flex items-center gap-2 border-b-2 border-lavender bg-gradient-to-r from-lavender/80 via-pink/60 to-lavender/70 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#B79AFA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_1px_2px_rgba(29,29,29,0.15)]" />
                <span className="h-3 w-3 rounded-full bg-[#D8C4FF] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_1px_2px_rgba(29,29,29,0.15)]" />
                <span className="h-3 w-3 rounded-full bg-[#F5C9E7] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_1px_2px_rgba(29,29,29,0.15)]" />
              </div>
              <div className="relative flex-1">
                <Image
                  src="/photos/carmen-intro.jpg"
                  alt="Carmen Susana"
                  fill
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="space-y-8"
          >
            <p className="font-heading text-2xl leading-relaxed text-ink sm:text-3xl">
              <em className="font-semibold not-italic text-[#9B6FEA]">Médica</em>,{" "}
              <em className="font-semibold not-italic text-[#9B6FEA]">
                epidemióloga clínica
              </em>{" "}
              y apasionada por entender cómo funciona el cerebro (sí, soy de las
              personas que disfrutan leer estudios científicos por diversión).
            </p>

            <div className="space-y-6 font-body text-lg leading-relaxed text-ink/70">
              <p>
                Durante años descubrí que la ciencia no está hecha para quedarse
                encerrada en laboratorios. Está para ayudarnos a vivir mejor. Por
                eso creé Well Brain: un espacio donde traduzco la neurociencia en
                herramientas prácticas que cualquiera pueda aplicar.
              </p>
              <p>
                Aquí no encontrarás promesas milagrosas ni tendencias sin
                fundamento. Encontrarás evidencia, explicada de forma sencilla,
                sobre cómo el sueño, la nutrición, el ejercicio y los hábitos
                diarios pueden transformar tu cerebro y, con él, tu vida.
              </p>
              <p>
                Creo que no necesitas una fuerza de voluntad infinita para
                cambiar. Necesitas entender cómo funciona tu mente, construir
                hábitos sostenibles y confiar en el poder de los pequeños cambios
                repetidos.
              </p>
              <p className="font-heading text-xl text-ink italic sm:text-2xl">
                Mi misión es ayudarte a desarrollar una vida con más claridad,
                energía y bienestar, siempre respaldada por la ciencia.
              </p>
              <div className="relative inline-block">
                <p>Bienvenido a Well Brain. Me alegra que estés aquí.</p>
                <StickerBadge
                  src="/brand/sticker-dice.png"
                  className="absolute top-1/2 -right-20 z-20 h-20 w-20 -translate-y-1/2 sm:-right-28 sm:h-28 sm:w-28"
                  rotate={-10}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-14 sm:py-20">
        <span
          aria-hidden="true"
          className="absolute top-8 left-[10%] z-10 text-lg text-pink sm:text-xl"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          className="absolute right-[8%] bottom-8 z-10 text-lg text-lavender sm:text-xl"
        >
          ✦
        </span>
        <EditorialWaveMarquee
          text="Follow @wellbrainx"
          className="pointer-events-none select-none text-[clamp(3.5rem,14vw,9rem)] text-[#9B6FEA]"
        />
      </section>
    </>
  );
}
