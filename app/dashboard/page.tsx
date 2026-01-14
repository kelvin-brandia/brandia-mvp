export default function DashboardPage() {
  const plan = "Básico";
  const usedImages = 12;
  const totalImages = 40;

  const percent = Math.round((usedImages / totalImages) * 100);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        color: "#E5E7EB",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
        BrandIA Dashboard
      </h1>

      <p style={{ color: "#94A3B8", marginBottom: "32px" }}>
        Bem-vindo ao seu painel de criação de imagens
      </p>

      {/* PLANO */}
      <div
        style={{
          background: "#020617",
          padding: "24px",
          borderRadius: "12px",
          maxWidth: "420px",
          marginBottom: "32px",
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>Plano atual</h2>

        <p>
          <strong>{plan}</strong>
        </p>

        <p style={{ marginTop: "8px", fontSize: "14px", color: "#CBD5F5" }}>
          {usedImages} de {totalImages} imagens usadas
        </p>

        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#1E293B",
            borderRadius: "8px",
            marginTop: "12px",
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              background: "#2563EB",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>

      {/* GERAR IMAGEM */}
      <div
        style={{
          background: "#020617",
          padding: "24px",
          borderRadius: "12px",
          maxWidth: "600px",
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>
          Gerar imagem com IA
        </h2>

        <textarea
          placeholder="Descreva a imagem que deseja gerar..."
          style={{
            width: "100%",
            height: "100px",
            borderRadius: "8px",
            border: "none",
            padding: "12px",
            resize: "none",
            marginBottom: "16px",
          }}
        />

        <button
          style={{
            background: "#2563EB",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Gerar imagem
        </button>
      </div>
    </main>
  );
}
