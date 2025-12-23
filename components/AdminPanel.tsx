import Calendar from "./Calendar";
import ContactList from "./ContactList";
import Presupuestos from "./Presupuestos";
import CampaignManager from "./CampaignManager";

export default function AdminPanel() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#FF1493" }}>Panel de Administración</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginTop: "30px" }}>
        <Calendar />
        <ContactList />
        <Presupuestos />
        <CampaignManager />
      </div>
    </div>
  );
}
