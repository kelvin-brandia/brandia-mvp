"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-[#1E293B] bg-[#020617]">
      <Link href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="BrandIA" className="h-8 w-8" />
        <span className="text-xl font-semibold text-white">BrandIA</span>
      </Link>

      <nav className="flex items-center gap-6">
        {!isLoggedIn && (
          <Link
            href="/login"
            className="px-5 py-2 rounded-md bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white font-medium"
          >
            Entrar
          </Link>
        )}

        {isLoggedIn && (
          <>
            <Link
              href="/generate"
              className="text-[#94A3B8] hover:text-white transition"
            >
              Gerar imagem
            </Link>

            <button
              onClick={logout}
              className="px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 transition text-white font-medium"
            >
              Sair
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
