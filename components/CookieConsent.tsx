"use client";

import { useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#020617",
      padding: 20
    }}>
      <span>Este sitio usa cookies.</span>
      <button
        onClick={() => setVisible(false)}
        style={{ marginLeft: 20 }}
      >
        Aceptar
      </button>
    </div>
  );
}
