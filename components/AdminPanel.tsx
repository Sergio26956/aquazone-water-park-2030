"use client"

import { useState } from "react"
import Calendar from "./Calendar"
import ContactList from "./ContactList"
import Presupuestos from "./Presupuestos"
import CampaignManager from "./CampaignManager"

export default function AdminPanel() {
  const [section, setSection] = useState("calendar")

  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr" }}>
      <aside style={{ padding: 20 }}>
        <button onClick={() => setSection("calendar")}>Calendario</button>
        <button onClick={() => setSection("contacts")}>Contactos</button>
        <button onClick={() => setSection("budgets")}>Presupuestos</button>
        <button onClick={() => setSection("campaigns")}>Campañas</button>
      </aside>

      <main style={{ padding: 30 }}>
        {section === "calendar" && <Calendar />}
        {section === "contacts" && <ContactList />}
        {section === "budgets" && <Presupuestos />}
        {section === "campaigns" && <CampaignManager />}
      </main>
    </div>
  )
}
