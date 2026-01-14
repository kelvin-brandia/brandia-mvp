import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "BrandIA",
  description: "Criação de imagens profissionais com IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#020617] text-[#E5E7EB]">
        <Header />
        {children}
      </body>
    </html>
  );
}
