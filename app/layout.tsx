import "./globals.css"
import type { Metadata } from "next"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"
import AdvancedNavigation from "@/components/AdvancedNavigation"

export const metadata: Metadata = {
  title: "AQUAZONE Water Park",
  description: "Water Park 2030 Experience"
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
      </body>
    </html>
  )
}
