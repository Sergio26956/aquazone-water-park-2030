'use client'

import React from 'react'
import ContactForm from '../../components/ContactForm'
import BudgetForm from '../../components/BudgetForm'
import SectionTransition from '../../components/SectionTransition'

const ContactoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SectionTransition title="Contacto y Presupuestos" />
      <div className="max-w-5xl mx-auto p-6 grid gap-10 md:grid-cols-2">
        <ContactForm />
        <BudgetForm />
      </div>
    </div>
  )
}

export default ContactoPage
