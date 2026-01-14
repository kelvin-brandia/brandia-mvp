export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#E5E7EB]">

      <section className="flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-md border border-[#1E293B] rounded-2xl p-10 bg-[#020617]">
          
          <h1 className="text-2xl font-bold text-center mb-2">
            Entrar no BrandIA
          </h1>

          <p className="text-center text-[#94A3B8] mb-8">
            Acesse sua conta para criar visuais inteligentes
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-[#94A3B8]">
                Email
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-[#94A3B8]">
                Senha
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white font-semibold"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-sm text-[#94A3B8] mt-6">
            Ainda não tem conta?{" "}
            <span className="text-[#7C3AED] hover:underline cursor-pointer">
              Criar conta
            </span>
          </p>
          <button
  className="w-full flex items-center justify-center gap-3 py-3 mb-6 rounded-lg border border-[#1E293B] hover:bg-[#020617] transition text-[#E5E7EB]"
>
  <img src="/google.svg" alt="Google" className="h-5 w-5" />
  Entrar com Google
</button>

        </div>
      </section>
    </main>
  );
}
