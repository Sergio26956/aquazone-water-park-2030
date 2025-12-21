"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      })
      setStatus("sent")
      setName(""); setEmail(""); setMessage("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        maxWidth: 500,
        margin: "0 auto",
        background: "rgba(5,7,12,0.85)",
        padding: 30,
        borderRadius: 20,
        color: "#fff"
      }}
    >
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ padding: 12, borderRadius: 12, border: "none" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ padding: 12, borderRadius: 12, border: "none" }}
      />
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        style={{ padding: 12, borderRadius: 12, border: "none", minHeight: 120 }}
      />
      <button
        type="submit"
        style={{
          padding: 14,
          borderRadius: 40,
          border: "none",
          background: "rgba(0,255,255,0.3)",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(0,255,255,0.5)"
        }}
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>
      {status === "sent" && <p style={{ color: "#0f0" }}>Enviado correctamente</p>}
      {status === "error" && <p style={{ color: "#f00" }}>Error al enviar</p>}
    </motion.form>
  )
}
