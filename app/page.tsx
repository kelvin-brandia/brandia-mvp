import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#E5E7EB]">
      
      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 py-32 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Crie imagens profissionais para sua marca com IA
        </h1>

        <p className="mt-6 text-lg text-[#94A3B8] max-w-2xl">
          O BrandIA gera visuais inteligentes pensados para identidade de marca.
          Mais consistência, mais profissionalismo, menos esforço.
        </p>

        <Link
          href="/login"
          className="mt-10 px-8 py-4 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white font-semibold text-lg"
        >
          Começar agora
        </Link>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-[#1E293B] rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">⚡ Rápido</h3>
          <p className="text-[#94A3B8]">
            Gere imagens em segundos com inteligência artificial.
          </p>
        </div>

        <div className="border border-[#1E293B] rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">🎨 Profissional</h3>
          <p className="text-[#94A3B8]">
            Visuais pensados para marcas, não imagens genéricas.
          </p>
        </div>

        <div className="border border-[#1E293B] rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">🧠 Inteligente</h3>
          <p className="text-[#94A3B8]">
            A IA entende contexto, estilo e identidade visual.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="px-6 py-24 text-center border-t border-[#1E293B]">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para criar visuais que representam sua marca?
        </h2>

        <Link
          href="/login"
          className="inline-block mt-6 px-8 py-4 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white font-semibold text-lg"
        >
          Acessar BrandIA
        </Link>
      </section>

    </main>
  );
}
