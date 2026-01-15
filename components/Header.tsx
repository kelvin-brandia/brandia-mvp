import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="BrandIA"
            width={36}
            height={36}
          />
          <span className="text-xl font-semibold tracking-tight">
            Brand<span className="text-purple-500">IA</span>
          </span>
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <Link href="/login" className="hover:text-white transition">
            Login
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}
