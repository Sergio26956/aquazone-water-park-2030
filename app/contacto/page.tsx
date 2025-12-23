import ContactForm from "@/components/ContactForm";
import BudgetForm from "@/components/BudgetForm";
import SectionTransition from "@/components/SectionTransition";

export default function Contacto() {
  return (
    <SectionTransition>
      <h1>Contacto</h1>
      <ContactForm />
      <BudgetForm />
    </SectionTransition>
  );
}
