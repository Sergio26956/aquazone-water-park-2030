import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SectionTransition from "@/components/SectionTransition";
import FuturisticGallery from "@/components/FuturisticGallery";
import { motion } from "framer-motion";

export default function HomePage() {
  const mainImages = [
    "/images/flotantes/piscina1.jpg",
    "/images/urbanos/actividad1.jpg",
    "/images/kamikaze/jump1.jpg"
  ];

  return (
    <div>
      {/* Video de fondo */}
      <video autoPlay loop muted style={{ width: "100%", height: "100vh", objectFit: "cover" }}>
        <source src="/videos/background_main.mp4" type="video/mp4" />
      </video>

      {/* Texto animado */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          top: "40%",
          width: "100%",
          textAlign: "center",
          color: "#00F0FF",
          fontSize: "4rem",
          textShadow: "0 0 20px #00F0FF"
        }}
      >
        AQUAZONE Water Park 2030
      </motion.h1>

      {/* Galería principal */}
      <SectionTransition>
        <FuturisticGallery images={mainImages} />
      </SectionTransition>

      {/* Botón WhatsApp flotante */}
      <WhatsAppFloatingButton />
    </div>
  );
}
