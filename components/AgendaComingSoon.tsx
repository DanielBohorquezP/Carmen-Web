"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MailCheck, ClipboardList, Sparkles, Clock } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Elegís el horario",
    text: "Calendario con la disponibilidad real de Carmen, en tu zona horaria.",
  },
  {
    icon: MailCheck,
    title: "Confirmás tu sesión",
    text: "Recibís confirmación automática por correo o WhatsApp con el link.",
  },
  {
    icon: ClipboardList,
    title: "Diagnóstico inicial",
    text: "Analizamos tus objetivos, tu rutina y tus hábitos actuales.",
  },
  {
    icon: Sparkles,
    title: "Plan personalizado",
    text: "El plan se ajusta contigo a medida que avanzas.",
  },
];

export function AgendaComingSoon() {
  return (
    <section id="agenda" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-5xl leading-tight text-dark md:text-6xl">
            Agenda tu asesoría 1:1
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-dark/70">
            Así va a funcionar tu sesión en cuanto abramos el sistema de
            reservas en línea.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lilac">
                  <span className="font-display text-lg text-dark">{i + 1}</span>
                </div>
                <Icon className="mt-4 h-6 w-6 text-pink" strokeWidth={1.5} />
                <h3 className="mt-3 font-display text-2xl text-dark">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-dark/70">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="relative mx-auto mt-16 flex max-w-2xl flex-col items-center rounded-[2rem] border-2 border-dashed border-lilac px-8 py-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-dark">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
            Coming soon
          </span>
          <p className="mt-4 max-w-md text-base leading-relaxed text-dark/70">
            Estamos preparando el sistema de reservas en línea. Muy pronto vas
            a poder elegir día y hora directamente aquí.
          </p>
          <img
            src="/brand/sticker-magnifier.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-8 w-20 rotate-6 drop-shadow-xl md:w-24"
          />
        </motion.div>
      </div>
    </section>
  );
}
