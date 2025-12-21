"use client"

import { useState } from "react"
import AdminLogin from "@/components/AdminLogin"
import AdminPanel from "@/components/AdminPanel"

export default function AdminPage() {
  const [ok, setOk] = useState(false)

  return (
    <main style={{ padding: "140px 8vw" }}>
      {!ok ? <AdminLogin onSuccess={() => setOk(true)} /> : <AdminPanel />}
    </main>
  )
}
