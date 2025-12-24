import React from "react";

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  return (
    <div className="admin-panel-container">
      <h2>Panel de Administración</h2>
      <button onClick={onLogout}>Cerrar sesión</button>
      {/* Aquí puedes agregar más funcionalidades de administración */}
    </div>
  );
};

export default AdminPanel;
