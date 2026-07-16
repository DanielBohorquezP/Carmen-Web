"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarHeart, Headphones, BookOpen, Video } from "lucide-react";

interface Option {
  href: string;
  kicker: string;
  title: string;
  text: string;
  image: string;
  icon: React.ElementType;
}

const options: Option[] = [
  {
    href: "#agenda",
    kicker: "Acompañamiento 1:1",
    title: "Asesoría 1:1",
    text: "Un plan diseñado contigo, no copiado de un feed.",
    image: "/photos/option-asesoria.jpg",
    icon: CalendarHeart,
  },
  {
    href: "#",
    kicker: "Podcast",
    title: "Escúchanos",
    text: "Conversaciones sobre neurociencia aplicada, en formato podcast.",
    image: "/photos/option-escuchanos.jpg",
    icon: Headphones,
  },
  {
    href: "/productos",
    kicker: "Guías gratuitas",
    title: "Recursos y e-books",
    text: "Guías gratuitas para empezar a aplicar hoy mismo.",
    image: "/photos/option-recursos.jpg",
    icon: BookOpen,
  },
  {
    href: "#",
    kicker: "Video",
    title: "Míranos",
    text: "Contenido en video para llevar la ciencia a tu día a día.",
    image: "/photos/option-miranos.jpg",
    icon: Video,
  },
];

export function OptionsGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-pastel-yellow px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-dark/60">
            Cuatro caminos, un mismo método
          </p>
          <h2 className="mt-3 text-center font-display text-5xl leading-tight text-dark md:text-6xl">
            Elige por dónde empezar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-dark/75">
            Ya sea que quieras un acompañamiento personalizado, escuchar, mirar
            o leer primero, hay una puerta de entrada pensada para vos.
          </p>
          <img
            src="/brand/sticker-mug.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 top-0 hidden w-24 rotate-12 drop-shadow-xl md:block lg:right-8"
          />
        </div>

        <div className="mt-10 flex flex-col gap-3 md:h-[460px] md:flex-row">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.a
                key={opt.title}
                href={opt.href}
                layout
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                style={{ flexGrow: hovered === i ? 3 : 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative h-[240px] w-full overflow-hidden rounded-[1.75rem] shadow-lg md:h-full md:min-w-[140px]"
              >
                <img
                  src={opt.image}
                  alt={opt.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/15 to-dark/10" />
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream shadow-md">
                  <Icon className="h-5 w-5 text-dark" strokeWidth={1.5} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
                    {opt.kicker}
                  </span>
                  <h3 className="mt-1 font-display text-2xl text-cream md:text-3xl">
                    {opt.title}
                  </h3>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-cream/90 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
                    {opt.text}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
