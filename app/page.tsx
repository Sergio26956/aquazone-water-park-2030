"use client"

import { motion } from "framer-motion"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"
import { useState, useEffect } from "react"
import FuturisticGallery from "@/components/FuturisticGallery"
import SectionTransition from "@/components/SectionTransition"

export default function HomePage() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Galería principal con imágenes futuristas
    setImages([
      "/images/urbanos/1.jpg",
      "/images/urbanos/2.jpg",
      "/images/flotantes/1.jpg",
      "/images/kamikaze/1.jpg"
    ])
  }, [])

  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/background_main.mp4"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/videos/background_main.mp4" type="video/mp4" />
      </video>

      {/* SECCIÓN PRINCIPAL */}
      <SectionTransition>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            paddingTop: "120px",
            textAlign: "center",
            color: "#fff",
            textShadow: "0 0 15px rgba(0,0,0,0.6)"
          }}
        >
          <h1 style={{ fontSize: "4rem", fontWeight: 900 }}>
            AQUAZONE Water Park
          </h1>
          <p style={{ marginTop: 20, fontSize: "1.5rem" }}>
            La experiencia acuática más futurista 2030
          </p>

          {/* BOTONES FLOTANTES */}
          <div
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "center",
              gap: 30
            }}
          >
            <motion.a
              href="/urbanos"
              whileHover={{ scale: 1.1 }}
              style={{
                padding: "12px 28px",
                background: "rgba(5,7,12,0.8)",
                borderRadius: 40,
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(0,255,255,0.5)"
              }}
            >
              Parques Terrestres
            </motion.a>
            <motion.a
              href="/flotantes"
              whileHover={{ scale: 1.1 }}
              style={{
                padding: "12px 28px",
                background: "rgba(5,7,12,0.8)",
                borderRadius: 40,
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(0,255,255,0.5)"
              }}
            >
              Parques Flotantes
            </motion.a>
          </div>
        </motion.div>
      </SectionTransition>

      {/* GALERÍA PRINCIPAL */}
      <SectionTransition>
        <div style={{ marginTop: 80, padding: "0 8vw" }}>
          <FuturisticGallery images={images} />
        </div>
      </SectionTransition>

      {/* BOTÓN WHATSAPP */}
      <WhatsAppFloatingButton />
    </main>
  )
}
