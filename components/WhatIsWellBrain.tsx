"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { StickerBadge } from "@/components/ui/sticker-badge";

const philosophy = [
  "No necesitas más fuerza de voluntad. Necesitas un mejor sistema.",
  "Los hábitos no se construyen con motivación. Se construyen con comprensión.",
  "Pequeñas acciones. Grandes cambios.",
];

export function WhatIsWellBrain() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 rotate-[-7deg] scale-[0.95] translate-x-3 translate-y-4 overflow-hidden rounded-2xl border-[3px] border-pink bg-pink/55 shadow-[0_15px_40px_-15px_rgba(29,29,29,0.15)]"
          >
            <div className="flex items-center gap-2 border-b-2 border-pink bg-pink/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#9B6FEA]/70" />
              <span className="h-3 w-3 rounded-full bg-[#9B6FEA]/70" />
              <span className="h-3 w-3 rounded-full bg-[#9B6FEA]/70" />
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] rotate-[5deg] scale-[0.975] translate-x-[-10px] translate-y-[-6px] overflow-hidden rounded-2xl border-[3px] border-lavender bg-lavender/60 shadow-[0_15px_40px_-15px_rgba(29,29,29,0.15)]"
          >
            <div className="flex items-center gap-2 border-b-2 border-lavender bg-lavender/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-pink/70" />
              <span className="h-3 w-3 rounded-full bg-pink/70" />
              <span className="h-3 w-3 rounded-full bg-pink/70" />
            </div>
          </div>

          <div className="relative z-10 overflow-hidden rounded-2xl border-[3px] border-lavender bg-white shadow-[0_20px_50px_-15px_rgba(29,29,29,0.15)]">
            <div className="flex items-center gap-2 border-b-2 border-lavender bg-gradient-to-r from-lavender/80 via-pink/60 to-lavender/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#B79AFA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_1px_2px_rgba(29,29,29,0.15)]" />
              <span className="h-3 w-3 rounded-full bg-[#D8C4FF] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_1px_2px_rgba(29,29,29,0.15)]" />
              <span className="h-3 w-3 rounded-full bg-[#F5C9E7] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_1px_2px_rgba(29,29,29,0.15)]" />
            </div>
            <div className="bg-[#C9B8EE] p-3 sm:p-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border-2 border-white/50">
                <Image
                  src="/photos/carmen-intro.jpg"
                  alt="Carmen, fundadora de WELL BRAIN"
                  fill
                  sizes="(min-width: 1024px) 576px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <SparkleIcon className="absolute -top-4 -right-3 z-20 h-5 w-5 text-lavender/70" />
          <span className="absolute -top-6 left-8 z-20 h-2 w-2 rounded-full bg-pink/70" />

          <StickerBadge
            src="/brand/sticker-dice.png"
            className="absolute -top-10 -right-10 z-20 h-24 w-24 sm:-top-14 sm:-right-14 sm:h-32 sm:w-32"
            rotate={10}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="absolute -bottom-10 -left-10 z-20 w-40 drop-shadow-[0_10px_20px_rgba(29,29,29,0.15)] sm:w-48"
          >
            <Image
              src="/brand/sticker-better-habits.png"
              alt=""
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-6xl leading-tight text-ink sm:text-7xl lg:text-8xl">
              ¿Qué es <span className="text-[#9B6FEA] whitespace-nowrap">WELL BRAIN</span>?
            </h2>
            <SparkleIcon className="hidden h-7 w-7 shrink-0 text-pink sm:block" />
          </div>

          <p className="max-w-xl font-body text-lg leading-relaxed text-ink/80 sm:text-xl">
            La mayoría de las personas creen que necesitan más disciplina.
            Nosotros creemos que primero necesitan entender cómo funciona su
            cerebro. Porque cuando entiendes tu mente, cambiar tus hábitos
            deja de sentirse imposible.
          </p>

          <div className="relative rounded-xl border border-lavender/50 bg-lavender/25 px-7 py-7 sm:px-9 sm:py-8">
            <StickerBadge
              src="/brand/sticker-card.png"
              className="absolute -top-6 -right-5 z-20 h-16 w-16 sm:-top-7 sm:-right-6 sm:h-20 sm:w-20"
              rotate={9}
            />
            <ul className="space-y-4">
              {philosophy.map((line) => (
                <li
                  key={line}
                  className="font-heading text-xl leading-snug text-ink italic sm:text-2xl"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <CartoonButton
            label="Discover the Method"
            href="/method"
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
