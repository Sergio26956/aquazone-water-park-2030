import "../styles/globals.css";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

export const metadata = {
  title: "AQUAZONE Water Park",
  description: "Parques acuáticos premium 2030"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
