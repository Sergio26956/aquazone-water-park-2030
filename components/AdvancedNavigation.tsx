"use client"

import Link from "next/link"

export default function AdvancedNavigation() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 30,
        padding: "12px 30px",
        background: "rgba(5,7,12,0.6)",
        backdropFilter: "blur(10px)",
        borderRadius: 40,
        zIndex: 999
      }}
    >
      <Link href="/">Inicio</Link>
      <Link href="/urbanos">Terrestres</Link>
      <Link href="/flotantes">Flotantes</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  )
}
