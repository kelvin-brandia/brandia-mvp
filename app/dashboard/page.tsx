'use client'

import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push('/login')
      }
    })
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard BrandIA</h1>
      <p>Login realizado com sucesso 🚀</p>
    </div>
  )
}
