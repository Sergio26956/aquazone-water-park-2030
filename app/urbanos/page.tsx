"use client"

import { motion } from "framer-motion"
import FuturisticGallery from "@/components/FuturisticGallery"

export default function UrbanosPage() {
  const images = [
    "/images/urbanos/1.jpg",
    "/images/urbanos/2.jpg",
    "/images/urbanos/3.jpg",
    "/images/urbanos/4.jpg",
    "/images/urbanos/5.jpg"
  ]

  return (
    <main style={{ padding: "140px 8vw" }}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: 40 }}
      >
        Parques Urbanos / Terrestres
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ textAlign: "center", marginBottom: 60 }}
      >
        Disfruta de 5 actividades urbanas + Kamikaze Jump en nuestros parques
        futuristas 2030.
      </motion.p>

      <FuturisticGallery images={images} />

      <div style={{ marginTop: 60, display: "flex", justifyContent: "center" }}>
        <motion.a
          href="/contacto"
          whileHover={{ scale: 1.1 }}
          style={{
            padding: "14px 36px",
            background: "rgba(0,255,255,0.2)",
            borderRadius: 40,
            color: "#fff",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 0 25px rgba(0,255,255,0.6)"
          }}
        >
          Contactar / Presupuesto
        </motion.a>
      </div>
    </main>
  )
}
