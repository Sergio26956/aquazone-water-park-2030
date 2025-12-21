"use client"

import { useState } from "react"

export default function AdminLogin({
  onSuccess
}: {
  onSuccess: () => void
}) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      onSuccess()
    } else {
      setError(true)
    }
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 360 }}>
      <input
        type="password"
        placeholder="Contraseña admin"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button>Acceder</button>
      {error && <p style={{ color: "red" }}>Acceso denegado</p>}
    </form>
  )
}
