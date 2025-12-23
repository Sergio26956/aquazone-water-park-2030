import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import FuturisticGallery from "@/components/FuturisticGallery";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  return (
    <>
      <SectionTransition>
        <h1>AQUAZONE Water Park</h1>
        <p>Parques acuáticos premium 2030</p>
      </SectionTransition>

      <FuturisticGallery
        images={[
          "/images/urbanos/1.jpg",
          "/images/flotantes/1.jpg"
        ]}
      />

      <WhatsAppFloatingButton />
    </>
  );
}
