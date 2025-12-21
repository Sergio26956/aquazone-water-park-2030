"use client"

import { useState } from "react"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  async function submit(e: any) {
    e.preventDefault()
    setLoading(true)

    const form = e.target

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      })
    })

    setLoading(false)
    form.reset()
    alert("Mensaje enviado")
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 500 }}>
      <input name="name" placeholder="Nombre" required />
      <input name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Mensaje" required />
      <button disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  )
}
