"use client"

import { useState } from "react"

export default function AIContentGenerator() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  async function generate() {
    setLoading(true)
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    })
    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <div>
      <textarea
        placeholder="Describe el contenido que quieres generar…"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        style={{ width: "100%", minHeight: 120 }}
      />
      <button onClick={generate} disabled={loading}>
        {loading ? "Generando..." : "Generar con IA"}
      </button>
      {result && <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>}
    </div>
  )
}
