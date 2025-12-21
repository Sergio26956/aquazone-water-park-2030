"use client"

import { useState } from "react"

export default function AdminLogin({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      onAuth()
    } else {
      setError(true)
    }
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 400, margin: "auto" }}>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ padding: 14, width: "100%", borderRadius: 12 }}
      />
      <button style={{ marginTop: 20, padding: 14, width: "100%" }}>
        Acceder
      </button>
      {error && <p style={{ color: "red" }}>Acceso denegado</p>}
    </form>
  )
}
