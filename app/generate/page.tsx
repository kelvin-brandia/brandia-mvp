"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const { user, canGenerate, incrementUsage } = useAuth();

  if (!user) {
  alert("Faça login para gerar imagens");
  return;
}

  function handleGenerate() {
    if (!prompt) return;

    setLoading(true);
    setImage(null);

    // Simulação de geração
    setTimeout(() => {
      setImage("https://placehold.co/600x600/7C3AED/FFFFFF?text=BrandIA");
      setLoading(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-[#020617] text-[#E5E7EB] p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* FORM */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Gerar imagem com IA
          </h1>

          <p className="text-[#94A3B8] mb-8">
            Descreva a imagem que representa sua marca.
          </p>

          <label className="block mb-2 text-sm text-[#94A3B8]">
            Descrição da imagem
          </label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Logo minimalista para marca de tecnologia, tons roxos..."
            className="w-full h-32 p-4 rounded-lg bg-[#020617] border border-[#1E293B] focus:outline-none focus:border-[#7C3AED] mb-6"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] transition text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Gerando imagem..." : "Gerar imagem"}
          </button>
        </div>

        {/* PREVIEW */}
        <div className="flex items-center justify-center border border-[#1E293B] rounded-xl min-h-[400px]">
          {loading && (
            <span className="text-[#94A3B8] animate-pulse">
              Criando sua imagem com IA...
            </span>
          )}

          {!loading && image && (
            <img
              src={image}
              alt="Imagem gerada"
              className="rounded-lg"
            />
          )}

          {!loading && !image && (
            <span className="text-[#94A3B8]">
              A prévia da imagem aparecerá aqui
            </span>
          )}
        <button
  disabled={!canGenerate}
  onClick={() => {
    incrementUsage();
    handleGenerate();
  }}
  className={`w-full py-4 rounded-lg font-semibold transition ${
    canGenerate
      ? "bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
      : "bg-gray-700 text-gray-400 cursor-not-allowed"
  }`}
>
  {canGenerate
    ? "Gerar imagem"
    : "Limite mensal do plano atingido"}
</button>

          
        </div>

      </div>
    </main>
  );
}
