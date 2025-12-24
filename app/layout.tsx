import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import AdvancedNavigation from "@/components/AdvancedNavigation";
import CookieConsent from "@/components/CookieConsent";

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
        <AdvancedNavigation />
        {children}
        <WhatsAppFloatingButton />
        <CookieConsent />
      </body>
    </html>
  );
}
