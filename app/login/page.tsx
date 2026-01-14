"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  function handleLogin() {
    login();
    router.push("/generate");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020617] text-[#E5E7EB] px-6">
      <div className="w-full max-w-md border border-[#1E293B] rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Entrar no BrandIA
        </h1>
{/* GOOGLE */}
        <button className="w-full flex items-center justify-center gap-3 py-3 mb-6 rounded-lg border border-[#1E293B] hover:bg-[#020617] transition">
          <img src="/google.svg" alt="Google" className="h-5 w-5" />
          Entrar com Google
        </button>

{/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-[#020617] border border-[#1E293B] focus:border-[#7C3AED] outline-none"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-6 p-3 rounded-lg bg-[#020617] border border-[#1E293B] focus:border-[#7C3AED] outline-none"
        />
        
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white font-semibold"
        >
          Entrar
        </button>
      </div>
    </main>
  );
}


        
