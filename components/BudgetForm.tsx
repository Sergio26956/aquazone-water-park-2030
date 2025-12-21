"use client"
import { useState } from "react"

export default function BudgetForm(){
  const [sent,setSent]=useState(false)

  async function submit(e:any){
    e.preventDefault()
    await fetch("/api/contact",{method:"POST",body:new FormData(e.target)})
    setSent(true)
  }

  if(sent) return <p>Solicitud enviada.</p>

  return (
    <form onSubmit={submit} className="card" style={{padding:24}}>
      <input name="name" placeholder="Nombre" required />
      <input name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Describe tu evento" />
      <button>Solicitar presupuesto</button>
    </form>
  )
}
