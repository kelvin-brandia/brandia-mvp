export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        BrandIA
      </h1>

      <p style={{ maxWidth: "500px", fontSize: "1.1rem", opacity: 0.9 }}>
        A inteligência artificial especialista no seu negócio,
        criada para gerar artes, campanhas e ideias de divulgação
        com a identidade da sua marca.
      </p>

      <button style={{
        marginTop: "2rem",
        padding: "14px 32px",
        background: "#38bdf8",
        color: "#0f172a",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        fontWeight: "bold"
      }}>
        Em breve
      </button>
    </main>
  );
}
