import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "../../../lib/supabase";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const supabase = createClient();

    // usuário logado
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    // buscar identidade da marca
    const { data: company } = await supabase
      .from("company_profile")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!company) {
      return NextResponse.json(
        { error: "Perfil da marca não configurado" },
        { status: 400 }
      );
    }

    // prompt inteligente
    const fullPrompt = `
Crie uma imagem publicitária profissional com base nas informações:

Nome da marca: ${company.brand_name}
Estilo da marca: ${company.brand_style}
Público-alvo: ${company.target_audience}
Paleta de cores: ${company.color_palette}
Tipografia: ${company.typography}

Pedido do usuário:
${prompt}

A imagem deve ser moderna, coerente com a identidade visual,
ideal para redes sociais e com aparência profissional.
    `;

    const image = await openai.images.generate({
      model: "gpt-image-1",
      prompt: fullPrompt,
      size: "1024x1024",
    });

    return NextResponse.json({
      image: image.data[0].url,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao gerar imagem" },
      { status: 500 }
    );
  }
}
