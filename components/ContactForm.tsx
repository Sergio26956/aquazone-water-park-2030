"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contacto", { method: "POST" });
    setLoading(false);
    alert("Mensaje enviado");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <input placeholder="Nombre" required />
      <input placeholder="Email" type="email" required />
      <textarea placeholder="Mensaje" required />
      <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
    </form>
  );
}
