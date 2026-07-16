"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard, type CardPosition, type Testimonial } from "@/components/ui/testimonial-cards";

const testimonials: Testimonial[] = [
  {
    id: 1,
    pillar: "Sueño",
    quote:
      "Dejé de despertarme cansada después de tres semanas aplicando el plan.",
    initials: "M.R.",
    accent: "bg-coral",
  },
  {
    id: 2,
    pillar: "Enfoque",
    quote:
      "Por primera vez en meses pude terminar un trabajo sin revisar el celular cada cinco minutos.",
    initials: "L.G.",
    accent: "bg-lilac",
  },
  {
    id: 3,
    pillar: "Hábitos",
    quote:
      "Entendí por qué mis intentos anteriores no se sostenían, y esta vez sí lo logré.",
    initials: "A.P.",
    accent: "bg-yellow",
  },
];

const POSITIONS: CardPosition[] = ["front", "middle", "back"];

export function TestimonialsSection() {
  const [order, setOrder] = useState(testimonials.map((t) => t.id));

  const handleShuffle = () => {
    setOrder((prev) => {
      const next = [...prev];
      next.push(next.shift()!);
      return next;
    });
  };

  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <motion.h2
            className="text-center font-display text-5xl leading-tight text-dark md:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Lo que dicen de Well Brain
          </motion.h2>
          <img
            src="/brand/sticker-badge-bolt.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 right-0 hidden w-20 -rotate-12 drop-shadow-xl md:block lg:w-24"
          />
        </div>

        <div className="relative mt-14 flex flex-col items-center gap-8">
          <img
            src="/brand/sticker-control.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -left-4 w-20 -rotate-6 drop-shadow-xl md:-bottom-8 md:-left-8 md:w-24"
          />
          <div className="relative mb-12 h-[340px] w-full max-w-md md:mb-16">
            {order.map((id, i) => {
              const testimonial = testimonials.find((t) => t.id === id)!;
              return (
                <TestimonialCard
                  key={testimonial.id}
                  {...testimonial}
                  position={POSITIONS[i]}
                  handleShuffle={handleShuffle}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-dark/60">
              Desliza la tarjeta hacia la izquierda para ver más reseñas
            </p>
            <button
              type="button"
              onClick={handleShuffle}
              className="rounded-xl bg-pink px-6 py-3 text-sm font-semibold tracking-wide text-dark transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Siguiente reseña
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
