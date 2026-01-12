import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(req: Request) {
  const { prompt, userId } = await req.json()

  if (!prompt || !userId) {
    return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
  }

  // Reset mensal (segurança)
  await supabase.rpc('reset_monthly_images')

  const { data: company } = await supabase
    .from('companies')
    .select('*')
    .eq('id', userId)
    .single()

  if (!company) {
    return NextResponse.json({ error: 'Empresa não encontrada' }, { status: 404 })
  }

  if (company.images_used >= company.images_limit) {
    return NextResponse.json(
      { error: 'Limite mensal de imagens atingido' },
      { status: 403 }
    )
  }

  const result = await openai.images.generate({
    model: 'gpt-image-1',
    prompt,
    size: '1024x1024',
  })

  const imageUrl = result.data[0].url

  await supabase
    .from('companies')
    .update({ images_used: company.images_used + 1 })
    .eq('id', company.id)

  return NextResponse.json({ image: imageUrl })
}
