"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!prompt) return;
    setLoading(true);

    // depois vamos ligar isso à API real
    setTimeout(() => {
      setLoading(false);
      alert("Imagem gerada (mock)");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard BrandIA
        </h1>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Descreva a imagem que deseja gerar
          </label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
            rows={4}
            placeholder="Ex: Logo minimalista para marca de camisetas..."
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Gerando..." : "Gerar imagem"}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-600">
            Plano: <strong>Básico</strong>
          </p>
          <p className="text-sm text-gray-600">
            Uso mensal: <strong>0 / 40 imagens</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
