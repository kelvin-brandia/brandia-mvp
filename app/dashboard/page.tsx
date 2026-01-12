'use client'

import { useState } from 'react'

export default function DashboardPage() {
  const [prompt, setPrompt] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function generateImage() {
    setLoading(true)
    setError('')
    setImageUrl('')

    try {
      const res = await fetch('/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao gerar imagem')
      }

      setImageUrl(data.image)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 40, maxWidth: 700 }}>
      <h1>BrandIA – Gerador de Imagens</h1>

<p style={{ marginTop: 10 }}>
  Plano: <strong>Básico</strong> — Uso mensal: <strong>23 / 40</strong>
</p>
      
      <textarea
        placeholder="Descreva a imagem que deseja gerar"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: '100%',
          height: 100,
          marginTop: 20,
          padding: 10,
        }}
      />

      <button
        onClick={generateImage}
        disabled={loading || !prompt}
        style={{
          marginTop: 20,
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Gerando...' : 'Gerar imagem'}
      </button>

      {error && (
        <p style={{ color: 'red', marginTop: 20 }}>
          {error}
        </p>
      )}

      {imageUrl && (
        <div style={{ marginTop: 30 }}>
          <h3>Resultado:</h3>
          <img
            src={imageUrl}
            alt="Imagem gerada"
            style={{ width: '100%', marginTop: 10 }}
          />
        </div>
      )}
    </div>
  )
}
