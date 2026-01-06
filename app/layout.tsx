import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children} {/* Isso é obrigatório para o page.tsx aparecer */}
      </body>
    </html>
  );
}
