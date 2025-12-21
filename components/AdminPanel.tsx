"use client"

import Calendar from "./Calendar"
import ContactList from "./ContactList"
import Presupuestos from "./Presupuestos"
import CampaignManager from "./CampaignManager"

export default function AdminPanel() {
  return (
    <main style={{ padding: "140px 8vw" }}>
      <h1>Panel Administrativo</h1>
      <Calendar />
      <ContactList />
      <Presupuestos />
      <CampaignManager />
    </main>
  )
}
