"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/34649002658"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        boxShadow: "0 0 25px rgba(37,211,102,0.6)"
      }}
    >
      <FaWhatsapp size={32} color="#fff" />
    </a>
  )
}
