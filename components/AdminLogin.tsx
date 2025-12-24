"use client";

import { useState } from "react";

export default function AdminLogin({
  onLogin,
}: {
  onLogin: () => void;
}) {
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Acceso administrador</h2>

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => {
          if (password === "admin123") onLogin();
        }}
      >
        Entrar
      </button>
    </div>
  );
}
