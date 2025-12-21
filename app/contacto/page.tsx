"use client"

import { motion } from "framer-motion"

export default function ContactoPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ padding: "140px 10vw" }}
    >
      <h1>Contacto</h1>
      <p style={{ marginTop: 20 }}>
        Solicitudes, presupuestos y contacto directo.
      </p>
    </motion.main>
  )
}
