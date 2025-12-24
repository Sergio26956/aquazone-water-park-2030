export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/34600000000"
      target="_blank"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#25D366",
        color: "#fff",
        padding: "14px 18px",
        borderRadius: "50px",
        fontWeight: "bold",
        zIndex: 999
      }}
    >
      WhatsApp
    </a>
  );
}
