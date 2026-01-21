import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ background: "#0B0B0F" }}>
        {children}
      </body>
    </html>
  );
}
