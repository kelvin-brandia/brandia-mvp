import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
          Inteligência artificial que entende marcas e cria
          <span className="text-purple-500"> visuais profissionais</span>
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl">
          O BrandIA transforma sua identidade visual em artes,
          campanhas e conteúdos prontos para usar — com padrão
          profissional e consistência de marca.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/login"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
          >
            Começar agora
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 transition text-slate-300"
          >
            Ver como funciona
          </a>
        </div>
      </main>
    </>
  );
}
