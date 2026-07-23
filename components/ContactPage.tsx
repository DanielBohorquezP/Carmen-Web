"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { CartoonButton } from "@/components/ui/cartoon-button";
import { StickerBadge } from "@/components/ui/sticker-badge";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/wellbrainx" },
  { label: "TikTok", href: "https://tiktok.com/@wellbrainx" },
  { label: "YouTube", href: "https://youtube.com/@wellbrainx" },
  { label: "Spotify", href: "#" },
];

export function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden">
        <Image
          src="/photos/fondo-ppal.png"
          alt="Carmen Susana"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_20%]"
        />

        <SparkleIcon className="absolute top-32 right-[14%] h-5 w-5 text-white/30" />
        <SparkleIcon className="absolute right-[26%] bottom-32 h-3 w-3 text-lavender/50" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full px-6 pb-16 sm:px-10 lg:px-24 lg:pb-24"
        >
          <h1 className="font-display text-5xl leading-tight text-white uppercase sm:text-6xl lg:text-7xl">
            Let&apos;s Build
            <br />
            <span className="text-lavender">Your Brain.</span>
          </h1>
          <p className="mt-5 max-w-lg font-body text-base text-white/65 sm:text-lg">
            Tienes una pregunta, una idea o simplemente quieres decir hola.
            Estoy aquí.
          </p>
        </motion.div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-cream px-6 py-section-sm sm:px-10 lg:px-24 lg:py-section">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_280px] lg:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {status === "sent" ? (
              <div className="flex flex-col gap-6 py-10">
                <SparkleIcon className="h-10 w-10 text-lavender" />
                <h2 className="font-heading text-4xl text-ink sm:text-5xl">
                  ¡Mensaje enviado!
                </h2>
                <p className="font-body text-lg text-ink/65">
                  Gracias por escribirme. Te respondo pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="w-fit font-button text-xs tracking-[0.18em] text-[#9B6FEA] uppercase underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Nombre" name="name" placeholder="Tu nombre" />
                  <Field
                    label="Correo"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-button text-xs tracking-[0.16em] text-ink/45 uppercase"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Cuéntame en qué puedo ayudarte..."
                    required
                    className="w-full resize-none rounded-xl border-2 border-ink/10 bg-white px-5 py-4 font-body text-base text-ink placeholder:text-ink/30 transition-colors focus:border-lavender focus:outline-none"
                  />
                </div>

                <CartoonButton
                  label={status === "sending" ? "Enviando..." : "Enviar mensaje"}
                  icon={<ArrowRight className="h-4 w-4" />}
                />
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="relative flex flex-col gap-10"
          >
            <StickerBadge
              src="/brand/sticker-stars.png"
              className="absolute -top-10 -right-6 z-10 h-24 w-24 sm:-top-12 sm:-right-8 sm:h-28 sm:w-28"
              rotate={14}
            />

            {/* Email */}
            <div className="flex flex-col gap-3">
              <p className="font-button text-xs tracking-[0.2em] text-ink/40 uppercase">
                Correo
              </p>
              <a
                href="mailto:hola@wellbrain.co"
                className="flex items-center gap-2 font-body text-base text-ink underline decoration-ink/20 underline-offset-4 transition-all hover:decoration-ink/70"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#9B6FEA]" />
                hola@wellbrain.co
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <p className="font-button text-xs tracking-[0.2em] text-ink/40 uppercase">
                Sígueme
              </p>
              <ul className="flex flex-col gap-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-base text-ink underline decoration-ink/20 underline-offset-4 transition-all hover:decoration-ink/70"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote decorativa */}
            <div className="rounded-xl border border-lavender/40 bg-lavender/15 px-6 py-6">
              <p className="font-heading text-lg leading-snug text-ink italic sm:text-xl">
                "Tu cerebro cambia todos los días. La pregunta es: ¿lo hace por
                accidente o con intención?"
              </p>
              <p className="mt-3 font-button text-xs tracking-[0.15em] text-[#9B6FEA] uppercase">
                — Carmen Susana
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-button text-xs tracking-[0.16em] text-ink/45 uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border-2 border-ink/10 bg-white px-5 py-4 font-body text-base text-ink placeholder:text-ink/30 transition-colors focus:border-lavender focus:outline-none"
      />
    </div>
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
