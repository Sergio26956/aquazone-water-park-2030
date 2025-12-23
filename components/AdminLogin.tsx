"use client";

import { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [pass, setPass] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Acceso Administrador</h2>
      <input
        type="password"
        placeholder="Contraseña"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={onLogin}>Entrar</button>
    </div>
  );
}
