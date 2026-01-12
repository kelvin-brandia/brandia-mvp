'use client'

import { supabase } from '../../lib/supabase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkCompany() {
      const { data: userData } = await supabase.auth.getUser()

      if (!userData.user) {
        router.push('/login')
        return
      }

      const { data: company } = await supabase
        .from('companies')
        .select('*')
        .eq('user_id', userData.user.id)
        .single()

      if (!company) {
        router.push('/company')
      } else {
        setLoading(false)
      }
    }

    checkCompany()
  }, [])

  if (loading) return <p>Carregando...</p>

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard BrandIA</h1>
      <p>Sua empresa está configurada 🚀</p>
    </div>
  )
}
