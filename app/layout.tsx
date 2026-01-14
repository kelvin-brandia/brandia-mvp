import "./globals.css";

export const metadata = {
  title: "BrandIA",
  description: "IA que entende marcas e cria visuais profissionais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#020617] text-[#E5E7EB] antialiased">
        {children}
      </body>
    </html>
  );
}
