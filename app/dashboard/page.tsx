export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-[#E5E7EB]">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#020617] border-r border-[#1E293B] p-6">
        <h1 className="text-2xl font-bold text-[#7C3AED]">
          Brand<span className="text-[#2563EB]">IA</span>
        </h1>

        <nav className="mt-10 space-y-4 text-sm">
          <p className="text-[#94A3B8]">Dashboard</p>
          <p className="hover:text-white cursor-pointer">Gerar Imagem</p>
          <p className="hover:text-white cursor-pointer">Histórico</p>
          <p className="hover:text-white cursor-pointer">Planos</p>
          <p className="hover:text-white cursor-pointer">Conta</p>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-semibold mb-2">Dashboard</h2>
        <p className="text-[#94A3B8] mb-8">
          Bem-vindo à BrandIA, sua plataforma de criação visual por IA.
        </p>

        {/* Plano */}
        <div className="bg-[#020617] border border-[#1E293B] rounded-xl p-6 max-w-xl">
          <div className="flex justify-between mb-4">
            <span className="text-sm text-[#94A3B8]">Plano atual</span>
            <span className="text-sm font-semibold text-[#7C3AED]">
              Básico
            </span>
          </div>

          <p className="text-sm mb-2">Uso mensal</p>

          {/* Barra de progresso fake (visual) */}
          <div className="w-full h-3 bg-[#1E293B] rounded-full overflow-hidden mb-2">
            <div className="h-full w-[35%] bg-[#2563EB]" />
          </div>

          <p className="text-xs text-[#94A3B8]">
            14 de 40 imagens utilizadas
          </p>
        </div>

        {/* Geração */}
        <div className="mt-10 max-w-xl">
          <h3 className="text-xl font-semibold mb-3">
            Gerar nova imagem
          </h3>

          <textarea
            placeholder="Descreva a imagem que deseja gerar..."
            className="w-full h-28 bg-[#020617] border border-[#1E293B] rounded-lg p-4 text-sm resize-none focus:outline-none focus:border-[#7C3AED]"
          />

          <button className="mt-4 w-full bg-[#7C3AED] hover:bg-[#6D28D9] transition rounded-lg py-3 font-semibold">
            Gerar imagem
          </button>
        </div>
      </main>
    </div>
  );
}
