import "./globals.css";

export const metadata = {
  title: "AQUAZONE Water Park",
  description: "Parques acuáticos modulares y urbanos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
