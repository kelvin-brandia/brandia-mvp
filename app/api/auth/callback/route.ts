import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('user_id')

  if (!userId) return NextResponse.redirect('/login')

  await supabase.from('companies').upsert({
    id: userId,
    plan: 'basic',
    images_used: 0,
    images_limit: 40,
    reset_at: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
  })

  return NextResponse.redirect('/dashboard')
}
