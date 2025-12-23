export default function Presupuestos() {
  const budgets = [
    { id: 1, client: "Sergio", amount: "1000€", status: "Pendiente" }
  ];

  return (
    <div style={{ border: "2px solid #FFD700", padding: "20px", borderRadius: "15px" }}>
      <h3 style={{ color: "#FFD700" }}>Gestión de Presupuestos</h3>
      <ul>
        {budgets.map((b) => (
          <li key={b.id}>{b.client} - {b.amount} - {b.status}</li>
        ))}
      </ul>
    </div>
  );
}
