"use client";

import AdminLogin from "../../components/AdminLogin";
import AdminPanel from "../../components/AdminPanel";

export default function AdminPage() {
  const isAuthenticated = true;

  return (
    <main>
      {isAuthenticated ? <AdminPanel /> : <AdminLogin />}
    </main>
  );
}
