import { HeroSection } from "@/components/ui/hero-section-2";
import { Marquee } from "@/components/Marquee";
import { AboutIntro } from "@/components/AboutIntro";
import { WhatIsWellBrain } from "@/components/WhatIsWellBrain";
import { PodcastSocial } from "@/components/PodcastSocial";
import { OptionsGallery } from "@/components/ui/options-gallery";
import { AgendaComingSoon } from "@/components/AgendaComingSoon";
import { SubscribeForm } from "@/components/SubscribeForm";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Neurociencia aplicada a tu bienestar."
        subtitle="Well Brain traduce la ciencia del cerebro en hábitos que sí se sostienen: sueño, enfoque, estrés y energía, sin promesas vacías."
        primaryCta={{ text: "Agenda tu asesoría 1:1", href: "#agenda" }}
        secondaryCta={{ text: "Ver recursos", href: "/productos" }}
        backgroundImage="/photos/carmen-hero-2.png"
        credentials={[
          "Médica",
          "Epidemióloga clínica",
          "Neurociencia aplicada al bienestar",
        ]}
        imageOnLeft={false}
      />
      <Marquee />
      <WhatIsWellBrain />
      <AboutIntro />
      <PodcastSocial />
      <OptionsGallery />
      <AgendaComingSoon />
      <SubscribeForm />
      <TestimonialsSection />
    </main>
  );
}
