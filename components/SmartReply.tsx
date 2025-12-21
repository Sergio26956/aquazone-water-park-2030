"use client"

import { useEffect, useState } from "react"

export default function SmartReply({ message }: { message: string }) {
  const [reply, setReply] = useState("")

  useEffect(() => {
    fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: `Genera una respuesta profesional y comercial para este mensaje: ${message}`
      })
    })
      .then(res => res.json())
      .then(data => setReply(data.result))
  }, [message])

  return <p>{reply}</p>
}
