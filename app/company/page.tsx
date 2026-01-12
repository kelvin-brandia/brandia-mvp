'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function CompanyPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    segment: '',
    city: '',
    description: '',
    tone_of_voice: '',
    primary_color: '',
    secondary_color: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const { data: userData } = await supabase.auth.getUser()
    if (!userData.user) return

    await supabase.from('companies').insert({
      ...form,
      user_id: userData.user.id,
    })

    router.push('/dashboard')
  }

  return (
    <div style={{ maxWidth: 500, margin: '40px auto' }}>
      <h1>Cadastre sua empresa</h1>

      {Object.keys(form).map((field) => (
        <input
          key={field}
          placeholder={field}
          value={(form as any)[field]}
          onChange={(e) =>
            setForm({ ...form, [field]: e.target.value })
          }
          style={{ display: 'block', marginBottom: 10 }}
        />
      ))}

      <button onClick={handleSubmit}>
        Salvar empresa
      </button>
    </div>
  )
}
