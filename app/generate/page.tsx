'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function GeneratePage() {
  const [request, setRequest] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    setLoading(true)

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ request }),
    })

    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <div style={{ maxWidth: 700, margin: '40px auto' }}>
      <h1>Gerar conteúdo com BrandIA</h1>

      <textarea
        placeholder="O que você quer criar?"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        style={{ width: '100%', height: 120 }}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Gerando...' : 'Gerar com BrandIA'}
      </button>

      {result && (
        <pre style={{ whiteSpace: 'pre-wrap', marginTop: 20 }}>
          {result}
        </pre>
      )}
    </div>
  )
}
