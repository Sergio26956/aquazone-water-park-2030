"use client";

export default function BudgetForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "30px" }}>
      <input placeholder="Empresa / Ayuntamiento" required />
      <input placeholder="Teléfono" required />
      <select>
        <option>Parque Urbano</option>
        <option>Parque Flotante</option>
        <option>Kamikaze Jump</option>
      </select>
      <button>Solicitar presupuesto</button>
    </form>
  );
}
