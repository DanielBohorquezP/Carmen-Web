import { Hero } from "@/components/Hero";
import { WhatIsWellBrain } from "@/components/WhatIsWellBrain";
import { EbookLeadMagnet } from "@/components/EbookLeadMagnet";
import { SixPillars } from "@/components/SixPillars";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsWellBrain />
      <EbookLeadMagnet />
      <SixPillars />
    </main>
  );
}
