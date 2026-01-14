import Sidebar from "@/components/Sidebar";
import UsageCard from "@/components/UsageCard";

export default function Dashboard() {
  return (
    <div className="flex bg-[#020617] text-[#E5E7EB] min-h-screen">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <main className="flex-1 p-10">
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
