"use client"

import ContactForm from "@/components/ContactForm"
import BudgetForm from "@/components/BudgetForm"
import { SectionTransition } from "@/components/SectionTransition"

export default function ContactPage() {
  return (
    <main style={{ padding: "140px 8vw" }}>
      <SectionTransition>
        <h1 style={{ textAlign: "center", marginBottom: 40 }}>Contacto</h1>
        <ContactForm />
      </SectionTransition>

      <SectionTransition>
        <h2 style={{ textAlign: "center", marginTop: 80, marginBottom: 40 }}>
          Solicitar Presupuesto
        </h2>
        <BudgetForm />
      </SectionTransition>
    </main>
  )
}
