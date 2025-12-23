"use client";

import { useState } from "react";
import AdminLogin from "@/components/AdminLogin";
import AdminPanel from "@/components/AdminPanel";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <main>
      {isAuthenticated ? (
        <AdminPanel />
      ) : (
        <AdminLogin
          onLogin={() => {
            setIsAuthenticated(true); // Cambia el estado cuando se inicia sesión
          }}
        />
      )}
    </main>
  );
}
