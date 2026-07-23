"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { FolderIcon } from "@/components/ui/folder-icon";
import { RetroWindowBar } from "@/components/ui/retro-window-bar";
import { StickerBadge } from "@/components/ui/sticker-badge";
import { PILLARS } from "@/lib/pillars";

export function MethodJourney() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastOpenedIndex = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  function openPillar(index: number, rect: DOMRect) {
    lastOpenedIndex.current = index;
    setOriginRect(rect);
    setOpenIndex(index);
  }

  function close() {
    setOpenIndex(null);
  }

  // Escape to close + basic focus trap while the card is open.
  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "Tab" && cardRef.current) {
        const focusables = cardRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  // Lock body scroll while the card is open.
  useEffect(() => {
    if (openIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [openIndex]);

  // Move focus into the card on open, back to the trigger folder on close.
  useEffect(() => {
    if (openIndex !== null) {
      cardRef.current?.focus();
    } else if (lastOpenedIndex.current !== null) {
      triggerRefs.current[lastOpenedIndex.current]?.focus();
    }
  }, [openIndex]);

  const pillar = openIndex !== null ? PILLARS[openIndex] : null;

  const originStyle =
    originRect && !shouldReduceMotion
      ? {
          transformOrigin: `${((originRect.left + originRect.width / 2) / window.innerWidth) * 100}% ${((originRect.top + originRect.height / 2) / window.innerHeight) * 100}%`,
        }
      : undefined;

  const cardMotionProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, scale: 0.05 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.05 },
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section className="relative overflow-hidden bg-lavender px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
      <StickerBadge
        src="/brand/sticker-rocola.png"
        className="absolute bottom-8 -right-10 z-0 h-56 w-56 sm:bottom-10 sm:-right-14 sm:h-72 sm:w-72"
        rotate={-6}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="font-heading text-4xl leading-tight text-ink/85 uppercase sm:text-5xl lg:text-[52px]">
          6 áreas para reprogramar tu mente
        </h2>
        <p className="mt-4 font-body text-lg text-ink/55">
          y construir hábitos que transforman tu vida.
        </p>
        <SparkleIcon className="mt-4 h-2.5 w-2.5 text-lavender" />
      </motion.div>

      <div className="relative mx-auto mt-14 flex max-w-4xl flex-wrap items-start justify-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mt-16 lg:max-w-none lg:flex-nowrap lg:justify-center lg:gap-x-6">
        {PILLARS.map((pillarItem, index) => (
          <motion.button
            key={pillarItem.name}
            type="button"
            ref={(el) => {
              triggerRefs.current[index] = el;
            }}
            onClick={(e) => openPillar(index, e.currentTarget.getBoundingClientRect())}
            aria-haspopup="dialog"
            aria-expanded={openIndex === index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.05 }}
            className="group flex flex-col items-center gap-3 rounded-md [touch-action:manipulation] focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <FolderIcon className="h-24 w-28 sm:h-28 sm:w-32 lg:h-28 lg:w-32" />
            <span className="font-button text-xs uppercase tracking-wider text-ink/70 sm:text-sm">
              {pillarItem.name}
            </span>
            <span className="rounded border border-ink/20 px-1.5 py-0.5 font-button text-[9px] tracking-[0.15em] text-ink/40 uppercase lg:hidden">
              Ver más
            </span>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="relative mt-16 flex justify-center lg:mt-20"
      >
        <CartoonButton
          label="Start Your Journey"
          href="/resources"
          color="bg-pink"
          icon={<ArrowRight className="h-4 w-4" />}
        />
      </motion.div>

      <AnimatePresence>
        {pillar && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.25 }}
              className="fixed inset-0 z-[60] bg-ink/50"
              onClick={close}
              aria-hidden="true"
            />
            <motion.div
              key="card"
              ref={cardRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="pillar-card-title"
              tabIndex={-1}
              style={originStyle}
              {...cardMotionProps}
              className="fixed inset-4 z-[70] overflow-y-auto overscroll-contain border-2 border-ink bg-cream shadow-[0_20px_60px_-15px_rgba(29,29,29,0.4)] focus:outline-none sm:inset-10 lg:inset-16"
            >
              <RetroWindowBar label={pillar.name} onClose={close} className="bg-lavender/40" />

              <div className="px-6 pt-16 pb-10 sm:px-12 sm:pt-20 sm:pb-14 lg:px-20 lg:pt-24">
                <span className="block font-heading text-6xl leading-none text-[#9B6FEA] sm:text-8xl">
                  {String((openIndex ?? 0) + 1).padStart(2, "0")}
                </span>

                <h3
                  id="pillar-card-title"
                  className="mt-6 font-button text-2xl tracking-[0.12em] text-ink uppercase sm:text-3xl"
                >
                  {pillar.name}
                </h3>

                <span className="mt-6 block h-px w-24 bg-ink/15" />

                <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/70 sm:text-xl">
                  {pillar.description}
                </p>

                <span className="mt-10 block font-body text-sm tracking-wide text-ink/45">
                  {pillar.month}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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
