import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-12 px-6 bg-gray-900 text-white max-w-7xl mx-auto">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl font-bold mb-6">
          Compre e Venda Itens Raros de Tibia OTServer
        </h1>
        <p className="text-lg mb-8 max-w-lg">
          Marketplace exclusivo para venda de itens raros e lendários de Tibia.
          Garanta seu Ferumbras' Hat, Magic Plate Armor e muito mais!
        </p>
        <Button className="bg-purple-600 hover:bg-purple-500 text-white py-3 px-8 rounded-lg mb-8">
          Comece Agora
        </Button>

        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">240k+</h2>
            <p className="text-gray-400">Itens Vendidos</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">100k+</h2>
            <p className="text-gray-400">Leilões</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">50k+</h2>
            <p className="text-gray-400">Jogadores Ativos</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full h-[320px] md:h-auto">
          <Image
            src="/hero-image.webp"
            alt="Marketplace de Tibia"
            layout="responsive"
            width={700}
            height={500}
            className="rounded-lg object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-60 px-4 py-2 rounded-md">
            <p className="text-white text-lg font-semibold">
              Marketplace de Tibia
            </p>
            <p className="text-gray-400">Itens Raros e Lendários</p>
          </div>
        </div>
      </div>
    </section>
  );
}
