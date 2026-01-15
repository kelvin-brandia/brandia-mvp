import Sidebar from "@/components/Sidebar";
import UsageCard from "@/components/UsageCard";

export default function Dashboard() {
  return (
    <div className="flex bg-[#020617] text-[#E5E7EB] min-h-screen">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <main className="flex-1 p-10">
        {/* STATUS DO PLANO */}
<div className="mb-10 border border-[#1E293B] rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
  <div>
    <p className="text-sm text-[#94A3B8]">Plano atual</p>
    <h2 className="text-xl font-semibold">Básico</h2>
    <p className="text-sm text-[#94A3B8] mt-1">
      3 de 20 imagens usadas este mês
    </p>
  </div>

  <button className="px-6 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] transition text-white font-medium">
    Fazer upgrade
  </button>
</div>

        <h1 className="text-3xl font-bold mb-6">
          Bem-vindo ao BrandIA 🚀
        </h1>

        <p className="text-[#94A3B8] mb-10">
          Gere imagens profissionais alinhadas à identidade da sua marca.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UsageCard />

          <div className="border border-[#1E293B] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Criar nova imagem
              </h3>
              <p className="text-[#94A3B8]">
                Comece a gerar imagens com inteligência artificial.
              </p>
            </div>

            <button className="mt-6 px-6 py-3 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white font-semibold">
              Gerar imagem
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
