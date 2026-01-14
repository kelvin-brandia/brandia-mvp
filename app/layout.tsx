import "./globals.css";
import Header from "@/components/Header";
import { AuthProvider } from "@/app/context/AuthContext";

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
        <AuthProvider>
        <Header />
        {children}
        <AuthProvider>
      </body>
    </html>
  );
}
