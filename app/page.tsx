"use client"

import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main style={{ height: "100vh", position: "relative" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
        src="/videos/background_main.mp4"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          backdropFilter: "blur(2px)"
        }}
      >
        <h1 style={{ fontSize: "clamp(2.5rem,6vw,6rem)" }}>
          AQUAZONE
        </h1>
        <p style={{ marginTop: 20, fontSize: "1.2rem", opacity: 0.85 }}>
          Water Park · Experiencia 2030
        </p>
      </motion.div>
    </main>
  )
}
