import ContactForm from "@/components/ContactForm";
import BudgetForm from "@/components/BudgetForm";
import SectionTransition from "@/components/SectionTransition";

export default function ContactPage() {
  return (
    <div style={{ padding: "50px", display: "flex", flexDirection: "column", gap: "50px" }}>
      <h2 style={{ textAlign: "center", color: "#32CD32" }}>Contacto</h2>
      <SectionTransition>
        <ContactForm />
      </SectionTransition>

      <h2 style={{ textAlign: "center", color: "#FFD700" }}>Solicitar Presupuesto</h2>
      <SectionTransition>
        <BudgetForm />
      </SectionTransition>
    </div>
  );
}
