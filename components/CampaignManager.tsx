export default function CampaignManager() {
  const campaigns = [
    { name: "Promoción Verano 2030", status: "Activa" }
  ];

  return (
    <div style={{ border: "2px solid #FF69B4", padding: "20px", borderRadius: "15px" }}>
      <h3 style={{ color: "#FF69B4" }}>Gestión de Campañas</h3>
      <ul>
        {campaigns.map((c, i) => (
          <li key={i}>{c.name} - {c.status}</li>
        ))}
      </ul>
    </div>
  );
}
