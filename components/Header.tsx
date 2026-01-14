import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-[#1E293B] bg-[#020617]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="BrandIA"
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold text-[#E5E7EB]">
            BrandIA
          </span>
        </Link>

        {/* MENU */}
        <nav className="flex items-center gap-6">
          <Link
            href="/generate"
            className="text-[#94A3B8] hover:text-white transition"
          >
            Gerar imagem
          </Link>

          <Link
            href="/login"
            className="px-5 py-2 rounded-md bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white font-medium"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}
