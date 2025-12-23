"use client";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/34649002658"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#fff",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        boxShadow: "0 0 20px rgba(37,211,102,0.8)",
        zIndex: 9999,
        textDecoration: "none"
      }}
    >
      🟢
    </a>
  );
}
