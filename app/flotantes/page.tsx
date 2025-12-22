import SectionTransition from "@/components/SectionTransition";
import FuturisticGallery from "@/components/FuturisticGallery";

export default function FlotantesPage() {
  const images = [
    "/images/flotantes/piscina1.jpg",
    "/images/flotantes/playa1.jpg",
    "/images/flotantes/piscina2.jpg"
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center", color: "#00BFFF" }}>Parques Flotantes Modulares</h2>
      <SectionTransition>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          Piscinas y playas modulares flotantes con diseño futurista 2030, totalmente seguros y personalizables.
        </p>
      </SectionTransition>
      <SectionTransition>
        <FuturisticGallery images={images} />
      </SectionTransition>
    </div>
  );
}
