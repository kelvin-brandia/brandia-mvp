import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // IMPORTANTE
);

export async function POST(req: Request) {
  try {
    const { prompt, userId } = await req.json();

    if (!prompt || !userId) {
      return NextResponse.json(
        { error: "Prompt ou usuário inválido" },
        { status: 400 }
      );
    }

    // 1️⃣ Buscar perfil do usuário
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("images_used, images_limit")
      .eq("id", userId)
      .single();

    if (error || !profile) {
      return NextResponse.json(
        { error: "Perfil não encontrado" },
        { status: 404 }
      );
    }

    // 2️⃣ Verificar limite
    if (profile.images_used >= profile.images_limit) {
      return NextResponse.json(
        { error: "Limite de imagens atingido" },
        { status: 403 }
      );
    }

    // 3️⃣ Gerar imagem com OpenAI
    const image = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    const imageUrl = image.data[0].url;

    // 4️⃣ Atualizar contador
    await supabase
      .from("profiles")
      .update({
        images_used: profile.images_used + 1,
      })
      .eq("id", userId);

    // 5️⃣ Retornar imagem
    return NextResponse.json({
      imageUrl,
      remaining:
        profile.images_limit - (profile.images_used + 1),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erro ao gerar imagem" },
      { status: 500 }
    );
  }
}
