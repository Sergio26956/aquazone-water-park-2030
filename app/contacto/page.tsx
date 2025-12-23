"use client";

import ContactForm from "../../components/ContactForm";
import BudgetForm from "../../components/BudgetForm";
import SectionTransition from "../../components/SectionTransition";

export default function ContactoPage() {
  return (
    <SectionTransition>
      <ContactForm />
      <BudgetForm />
    </SectionTransition>
  );
}
