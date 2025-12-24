import Link from "next/link";

export default function AdvancedNavigation() {
  return (
    <nav style={{ padding: 20, background: "#020617" }}>
      <Link href="/">Inicio</Link>{" | "}
      <Link href="/flotantes">Flotantes</Link>{" | "}
      <Link href="/urbanos">Urbanos</Link>{" | "}
      <Link href="/contacto">Contacto</Link>
    </nav>
  );
}
