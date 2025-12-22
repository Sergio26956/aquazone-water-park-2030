import { useState } from "react";

export default function BudgetForm() {
  const [formData, setFormData] = useState({ name: "", email: "", event: "", participants: "" });
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
      if (res.ok) setStatus("Solicitud de presupuesto enviada correctamente.");
      else setStatus("Error al enviar la solicitud.");
    } catch {
      setStatus("Error al enviar la solicitud.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Correo" value={formData.email} onChange={handleChange} required />
      <input type="text" name="event" placeholder="Tipo de evento" value={formData.event} onChange={handleChange} required />
      <input type="number" name="participants" placeholder="Número de participantes" value={formData.participants} onChange={handleChange} required />
      <button type="submit">Enviar Presupuesto</button>
      {status && <p>{status}</p>}
    </form>
  );
}
