import SectionTransition from "@/components/SectionTransition";
import FuturisticGallery from "@/components/FuturisticGallery";

export default function HomePage() {
  return (
    <main>
      <SectionTransition title="AQUAZONE Water Park">
        <p>Parques acuáticos móviles, flotantes y urbanos de nueva generación.</p>
      </SectionTransition>

      <FuturisticGallery />
    </main>
  );
}
