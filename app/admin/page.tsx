"use client";

import { useState } from "react";
import AdminLogin from "@/components/AdminLogin";
import AdminPanel from "@/components/AdminPanel";

export default function AdminPage() {
  const [logged, setLogged] = useState(false);

  return logged ? <AdminPanel /> : <AdminLogin onLogin={() => setLogged(true)} />;
}
