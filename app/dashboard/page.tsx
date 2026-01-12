'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ImageIcon, LogOut } from "lucide-react";

export default function Dashboard() {
  const used = 12;
  const limit = 40;
  const percent = (used / limit) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">BrandIA</h1>
        <Button variant="outline"><LogOut className="w-4 h-4 mr-2" />Sair</Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <ImageIcon /> Gerar imagem
            </h2>
            <textarea
              placeholder="Descreva a imagem que você deseja gerar..."
              className="w-full h-32 border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button className="w-full">Gerar imagem</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Seu plano</h2>
            <p className="text-sm text-gray-500">Plano Básico</p>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uso mensal</span>
                <span>{used}/{limit}</span>
              </div>
              <Progress value={percent} />
            </div>

            <Button variant="outline" className="w-full">Upgrade para Premium</Button>
          </CardContent>
        </Card>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Últimas imagens</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-gray-200 rounded-xl h-40" />
          ))}
        </div>
      </section>
    </div>
  );
}
