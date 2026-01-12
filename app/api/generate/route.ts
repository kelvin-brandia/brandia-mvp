import { NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(req: Request) {
  const { request } = await req.json()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: company } = await supabase
    .from('companies')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (!company) {
    return NextResponse.json({ error: 'Company not found' }, { status: 404 })
  }

  const prompt = `
Você é a BrandIA, uma IA especialista em marketing e design.

Empresa:
Nome: ${company.name}
Segmento: ${company.segment}
Cidade: ${company.city}
Descrição: ${company.description}
Tom de voz: ${company.tone_of_voice}
Cores: ${company.primary_color}, ${company.secondary_color}

Pedido do usuário:
${request}

Responda com:
1) Texto do post
2) Prompt detalhado para geração de imagem
3) Sugestão de formato (feed, story, banner)
`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  })

  return NextResponse.json({
    result: completion.choices[0].message.content,
  })
}
