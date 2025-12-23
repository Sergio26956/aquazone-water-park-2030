"use client";

import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";
import SectionTransition from "../components/SectionTransition";

export default function HomePage() {
  return (
    <SectionTransition>
      <h1>AQUAZONE Water Park</h1>
      <WhatsAppFloatingButton />
    </SectionTransition>
  );
}
