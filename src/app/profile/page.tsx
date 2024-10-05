import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "../_components/header";
import { Footer } from "../_components/footer";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-gray-900 text-white py-12 px-6 mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          {/* Avatar e nome */}
          <div className="flex items-center md:items-start">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="https://github.com/pedrogiampietro.png"
                alt="Avatar do usuário"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="ml-6">
              <h1 className="text-4xl font-bold">Animakid</h1>
              <div className="flex flex-wrap gap-4 mt-4">
                <div>
                  <p className="text-lg font-semibold">250k+</p>
                  <p className="text-gray-400 text-sm">Ofertas</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">50+</p>
                  <p className="text-gray-400 text-sm">Items vendidos</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">3000+</p>
                  <p className="text-gray-400 text-sm">Seguidores</p>
                </div>
              </div>
            </div>
          </div>

          {/* Botões e informações adicionais */}
          <div className="flex flex-col md:flex-row items-center justify-center md:ml-auto mt-8 md:mt-0">
            <Button className="bg-purple-600 hover:bg-purple-500 text-white py-3 px-8 rounded-lg mb-4 md:mb-0 md:mr-4">
              Enviar mensagem
            </Button>
            <Button className="bg-transparent border border-white hover:bg-gray-700 text-white py-3 px-8 rounded-lg">
              Seguir
            </Button>
          </div>
        </div>

        {/* Bio e links sociais */}
        <div className="mb-12">
          <p className="text-gray-400 mb-6">
            O Vendedor mais diversificado do Rotworm!
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-500">
              🌐
            </a>
            <a href="#" className="hover:text-purple-500">
              🎮
            </a>
            <a href="#" className="hover:text-purple-500">
              🐦
            </a>
            <a href="#" className="hover:text-purple-500">
              📷
            </a>
          </div>
        </div>

        {/* Navegação de abas */}
        <div className="border-b border-gray-700 mb-8">
          <nav className="flex space-x-8">
            <button className="text-white border-b-2 border-purple-600 pb-2">
              Ofertas criadas (302)
            </button>
            <button className="text-gray-400 hover:text-white">
              Ofertas compradas (67)
            </button>
            <button className="text-gray-400 hover:text-white">
              em abertos (4)
            </button>
          </nav>
        </div>

        {/* Grid de itens criados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="https://via.placeholder.com/500x300"
              alt="Distant Galaxy"
              width={500}
              height={300}
              className="rounded-lg mx-auto"
              style={{ imageRendering: "pixelated", objectFit: "contain" }}
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold">Distant Galaxy</h3>
              <p className="text-gray-400">Por Animakid</p>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-lg">0.33 R$</p>
                  <p className="text-gray-400 text-sm">Novo preço</p>
                </div>
                <div>
                  <p className="text-lg line-through">1.83 R$</p>
                  <p className="text-gray-400 text-sm ">Preço antigo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Repetir estrutura de item para outros NFTs */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="https://via.placeholder.com/500x300"
              alt="Distant Galaxy"
              width={500}
              height={300}
              className="rounded-lg mx-auto"
              style={{ imageRendering: "pixelated", objectFit: "contain" }}
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold">Life On Edena</h3>
              <p className="text-gray-400">Por Animakid</p>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-lg">1.83 R$</p>
                  <p className="text-gray-400 text-sm">Preço</p>
                </div>
                <div>
                  <p className="text-lg">0.33 R$</p>
                  <p className="text-gray-400 text-sm">Maior Lance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemplo de item 3 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="https://via.placeholder.com/500x300"
              alt="Distant Galaxy"
              width={500}
              height={300}
              className="rounded-lg mx-auto"
              style={{ imageRendering: "pixelated", objectFit: "contain" }}
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold">AstroFiction</h3>
              <p className="text-gray-400">Por Animakid</p>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-lg">1.83 R$</p>
                  <p className="text-gray-400 text-sm">Preço</p>
                </div>
                <div>
                  <p className="text-lg">0.33 R$</p>
                  <p className="text-gray-400 text-sm">Maior Lance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
