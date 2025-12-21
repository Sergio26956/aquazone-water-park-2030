"use client"

import { useState } from "react"
import AdminLogin from "@/components/AdminLogin"
import AdminPanel from "@/components/AdminPanel"

export default function AdminPage() {
  const [auth, setAuth] = useState(false)

  return (
    <main style={{ padding: "120px 6vw" }}>
      {!auth ? <AdminLogin onAuth={() => setAuth(true)} /> : <AdminPanel />}
    </main>
  )
}
