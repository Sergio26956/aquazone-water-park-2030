import { useState } from "react";
import AdminPanel from "@/components/AdminPanel";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) setIsLogged(true);
    else alert("Contraseña incorrecta");
  };

  if (isLogged) return <AdminPanel />;
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="password"
        placeholder="Introduce contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", fontSize: "1rem" }}
      />
      <button onClick={handleLogin} style={{ marginLeft: "10px", padding: "10px" }}>
        Entrar
      </button>
    </div>
  );
}
