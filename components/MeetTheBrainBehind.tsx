"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StickerBadge } from "@/components/ui/sticker-badge";

export function MeetTheBrainBehind() {
  return (
    <>
      <section className="relative flex h-screen w-full items-end overflow-hidden">
        <Image
          src="/photos/about.png"
          alt="Carmen Susana, fundadora de WELL BRAIN"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_18%]"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-[14%] text-center sm:px-10"
        >
          <h1 className="font-display text-3xl leading-tight whitespace-nowrap text-[#FDF0A8] uppercase sm:text-5xl lg:text-6xl">
            Meet the Brain Behind
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-body text-base text-white/80 sm:text-lg">
            Hola, soy Carmen Susana.
          </p>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="space-y-8 lg:order-1"
          >
            <p className="font-heading text-2xl leading-relaxed text-ink sm:text-3xl">
              Holaaa!! Soy la mente detrás de{" "}
              <em className="font-semibold not-italic text-[#9B6FEA]">
                WELL BRAIN
              </em>
              .
            </p>

            <div className="space-y-6 font-body text-lg leading-relaxed text-ink/70">
              <p>
                Este proyecto nació de mi curiosidad por descubrir cómo
                funciona el cerebro y cómo aprovechar ese conocimiento para
                construir hábitos que realmente transformen nuestra vida.
              </p>
              <p>
                He estudiado, investigado, probado… y sí, también me he
                equivocado.
              </p>
              <p>
                Hoy comparto contigo lo que me hubiera encantado saber desde
                el principio.
              </p>
              <p className="font-heading text-xl text-ink italic sm:text-2xl">
                No estás aquí por casualidad.
              </p>
              <div className="relative inline-block">
                <p>
                  Estás aquí porque llegó el momento de darle un giro
                  consciente y poderoso a tu historia.
                </p>
                <StickerBadge
                  src="/brand/sticker-dice.png"
                  className="absolute top-1/2 -right-20 z-20 h-20 w-20 -translate-y-1/2 sm:-right-28 sm:h-28 sm:w-28"
                  rotate={-10}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full lg:order-2 lg:mx-0 lg:h-full"
          >
            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <Image
                src="/photos/carmen123.png"
                alt="Moodboard de Carmen Susana para Well Brain"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
