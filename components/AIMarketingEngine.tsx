"use client"

export default function AIMarketingEngine() {
  async function generateCampaign() {
    await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: "Crea una campaña de marketing digital para un parque acuático premium en España."
      })
    })
  }

  return <button onClick={generateCampaign}>Generar campaña automática</button>
}
