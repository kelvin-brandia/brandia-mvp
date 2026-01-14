import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#020617] border-r border-[#1E293B] min-h-screen p-6">
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white">BrandIA</h2>
        <p className="text-sm text-[#94A3B8]">Dashboard</p>
      </div>

      <nav className="flex flex-col gap-4">
        <Link
          href="/dashboard"
          className="text-[#E5E7EB] hover:text-white transition"
        >
          📊 Dashboard
        </Link>

        <Link
          href="#"
          className="text-[#94A3B8] hover:text-white transition"
        >
          🎨 Gerar imagens
        </Link>

        <Link
          href="#"
          className="text-[#94A3B8] hover:text-white transition"
        >
          👤 Conta
        </Link>
      </nav>
    </aside>
  );
}
