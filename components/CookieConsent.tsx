"use client"

import { useEffect, useState } from "react"

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("cookies_ok")) setShow(true)
  }, [])

  if (!show) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(5,7,12,0.9)",
        padding: "16px 24px",
        borderRadius: 16,
        zIndex: 9999
      }}
    >
      <p style={{ marginBottom: 10 }}>
        Usamos cookies para mejorar la experiencia.
      </p>
      <button
        onClick={() => {
          localStorage.setItem("cookies_ok", "1")
          setShow(false)
        }}
      >
        Aceptar
      </button>
    </div>
  )
}
