import "./globals.css"
import type { Metadata } from "next"
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton"

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
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
