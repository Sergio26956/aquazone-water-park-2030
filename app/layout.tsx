import "./globals.css"
import type { Metadata } from "next"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"
import AdvancedNavigation from "@/components/AdvancedNavigation"
import CookieConsent from "@/components/CookieConsent"

export const metadata: Metadata = {
  title: "AQUAZONE Water Park",
  description: "Parques acuáticos premium · Experiencia 2030",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
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
  )
}
