"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-[#1E293B] bg-[#020617]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-white">
          BrandIA
        </Link>

        <nav className="flex gap-6 text-sm text-[#94A3B8]">
          <Link href="/generate" className="hover:text-white">
            Gerar imagem
          </Link>
          <Link href="/login" className="hover:text-white">
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}
