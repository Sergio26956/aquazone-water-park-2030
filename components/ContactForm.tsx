"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) return <p>Mensaje enviado correctamente.</p>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input placeholder="Nombre" required />
      <br />
      <input placeholder="Email" required />
      <br />
      <textarea placeholder="Mensaje" required />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
