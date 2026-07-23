"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CartoonButton } from "@/components/ui/cartoon-button";

const philosophy = [
  "No necesitas más fuerza de voluntad. Necesitas un mejor sistema.",
  "Los hábitos no se construyen con motivación. Se construyen con comprensión.",
  "Pequeñas acciones. Grandes cambios.",
];

export function WhatIsWellBrain() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:-ml-10"
        >
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/photos/fondomain.png"
              alt="Moodboard de Carmen Susana para Well Brain"
              fill
              sizes="(min-width: 1024px) 672px, 100vw"
              className="object-cover"
            />
          </div>
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
