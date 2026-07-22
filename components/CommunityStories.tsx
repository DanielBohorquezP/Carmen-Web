"use client";

import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { StickerBadge } from "@/components/ui/sticker-badge";
import { cn } from "@/lib/utils";

interface Story {
  name: string;
  quote: string;
}

const STORIES: Story[] = [
  { name: "Ana G.", quote: "Por fin entendí por qué no podía concentrarme." },
  { name: "Diego M.", quote: "Dormir mejor cambió completamente mis días." },
  { name: "Sofía R.", quote: "Pequeños hábitos, resultados que sí se sienten." },
  { name: "Laura P.", quote: "Dejé de exigirme una disciplina perfecta." },
  { name: "Carlos T.", quote: "Ahora entiendo mi cerebro antes de exigirle cosas." },
  { name: "Valentina S.", quote: "La comunidad hizo que no me rindiera." },
];

export function CommunityStories() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 300, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <Image
        src="/photos/fondo-testimonios.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <FloatingSparkle className="absolute top-12 left-10 h-4 w-4 text-lavender/50" />
      <FloatingSparkle className="absolute right-12 bottom-24 h-5 w-5 text-pink/50" />
      <span className="absolute top-1/2 right-8 h-2 w-2 rounded-full bg-lavender/50" />
      <StickerBadge
        src="/brand/sticker-cd.png"
        className="absolute top-24 right-[4%] z-20 h-24 w-24 sm:top-28 sm:right-[8%] sm:h-32 sm:w-32"
        rotate={-10}
      />
      <StickerBadge
        src="/brand/sticker-card.png"
        className="absolute bottom-24 left-[4%] z-20 h-24 w-24 sm:bottom-28 sm:left-[8%] sm:h-32 sm:w-32"
        rotate={8}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <StickerBadge
          src="/brand/sticker-stars.png"
          className="absolute top-1/2 -left-8 z-20 h-24 w-24 -translate-y-1/2 sm:-left-20 sm:h-32 sm:w-32"
          rotate={-12}
        />
        <h2 className="font-heading text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
          Real Stories. <span className="text-[#9B6FEA]">Real Transformation.</span>
        </h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink/70 sm:text-xl">
          Los cambios más importantes no se miden solo en estadísticas. Se
          sienten en la vida diaria de quienes aplican el método — así lo
          cuentan, en sus propias palabras.
        </p>
      </motion.div>

      <div className="relative z-10 mt-16 lg:mt-20">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 sm:px-10 lg:px-24 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {STORIES.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
              className="w-[220px] shrink-0 snap-center sm:w-[240px]"
            >
              <div className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-[#C9B8EE] to-[#F2C9E4] transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_25px_45px_-15px_rgba(29,29,29,0.3)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </span>
                </div>
                <SparkleIcon className="absolute top-5 right-5 h-4 w-4 text-white/70" />
              </div>

              <div className="mt-3 px-1 text-center">
                <p className="font-heading text-base text-ink">{story.name}</p>
                <p className="mt-0.5 font-body text-sm text-ink/60">
                  {story.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Ver historias anteriores"
          onClick={() => scrollByCard(-1)}
          className="absolute top-[40%] left-0 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink/10 bg-cream text-ink shadow-md transition-colors hover:border-lavender hover:bg-lavender/20 lg:flex lg:-left-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Ver más historias"
          onClick={() => scrollByCard(1)}
          className="absolute top-[40%] right-0 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink/10 bg-cream text-ink shadow-md transition-colors hover:border-lavender hover:bg-lavender/20 lg:flex lg:-right-2"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative z-10 mt-16 flex justify-center lg:mt-20"
      >
        <CartoonButton
          label="Join the Community"
          href="/community"
          color="bg-pink"
          icon={<ArrowRight className="h-4 w-4" />}
        />
      </motion.div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0c.6 5.4 1.6 8.6 4 11 2.4 2.4 5.6 3.4 8 4-2.4.6-5.6 1.6-8 4-2.4 2.4-3.4 5.6-4 11-.6-5.4-1.6-8.6-4-11-2.4-2.4-5.6-3.4-8-4 2.4-.6 5.6-1.6 8-4 2.4-2.4 3.4-5.6 4-11Z" />
    </svg>
  );
}

function FloatingSparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn(className)} aria-hidden="true">
      <path d="M12 0c.6 5.4 1.6 8.6 4 11 2.4 2.4 5.6 3.4 8 4-2.4.6-5.6 1.6-8 4-2.4 2.4-3.4 5.6-4 11-.6-5.4-1.6-8.6-4-11-2.4-2.4-5.6-3.4-8-4 2.4-.6 5.6-1.6 8-4 2.4-2.4 3.4-5.6 4-11Z" />
    </svg>
  );
}
