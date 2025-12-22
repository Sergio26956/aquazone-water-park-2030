import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus("Mensaje enviado correctamente.");
      else setStatus("Error al enviar el mensaje.");
    } catch {
      setStatus("Error al enviar el mensaje.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Correo" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required />
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>}
    </form>
  );
}
