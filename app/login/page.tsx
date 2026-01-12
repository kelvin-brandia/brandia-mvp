"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Login realizado com sucesso!");
    }
  }

  async function handleRegister() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Conta criada! Verifique seu e-mail.");
    }
  }

  return (
    <main style={{ padding: 40, maxWidth: 400 }}>
      <h1>Entrar no BrandIA</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: 20, width: "100%" }}
      />

      <button onClick={handleLogin} disabled={loading}>
        Entrar
      </button>

      <button
        onClick={handleRegister}
        disabled={loading}
        style={{ marginLeft: 10 }}
      >
        Criar conta
      </button>
    </main>
  );
}
