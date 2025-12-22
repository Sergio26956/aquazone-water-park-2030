import SectionTransition from "@/components/SectionTransition";
import FuturisticGallery from "@/components/FuturisticGallery";

export default function UrbanosPage() {
  const images = [
    "/images/urbanos/actividad1.jpg",
    "/images/urbanos/actividad2.jpg",
    "/images/urbanos/actividad3.jpg"
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center", color: "#FF4500" }}>Parques Urbanos Móviles</h2>
      <SectionTransition>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          Cinco actividades interactivas y dinámicas para parques acuáticos urbanos, adaptables a cualquier espacio.
        </p>
      </SectionTransition>
      <SectionTransition>
        <FuturisticGallery images={images} />
      </SectionTransition>
    </div>
  );
}
