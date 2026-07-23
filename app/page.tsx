import { Hero } from "@/components/Hero";
import { WhatIsWellBrain } from "@/components/WhatIsWellBrain";
import { MeetCarmenTeaser } from "@/components/MeetCarmenTeaser";
import { EbookLeadMagnet } from "@/components/EbookLeadMagnet";
import { SixPillars } from "@/components/SixPillars";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsWellBrain />
      <MeetCarmenTeaser />
      <EbookLeadMagnet />
      <SixPillars />
    </main>
  );
}
