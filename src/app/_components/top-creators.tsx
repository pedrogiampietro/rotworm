import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RocketIcon } from "@radix-ui/react-icons";

export function TopCreators() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">Top Vendedores</h2>
        <Button className="flex items-center gap-2 bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-lg">
          <RocketIcon className="w-4 h-4" />
          View Rankings
        </Button>
      </div>

      <p className="text-center text-gray-400 mb-12">
        Confira os vendedores mais bem avaliados no mercado Tibia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {topCreators.map((creator, index) => (
          <Card key={creator.name} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-center relative">
              <div className="absolute top-0 left-0 bg-gray-900 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                {index + 1}
              </div>
              <Avatar className="w-[110px] h-[120px]">
                <AvatarImage src={creator.imageUrl} alt={creator.name} />
                <AvatarFallback>{creator.initials}</AvatarFallback>
              </Avatar>
            </div>
            <CardContent className="text-center mt-4">
              <CardTitle className="text-xl font-semibold">
                {creator.name}
              </CardTitle>
              <p className="text-gray-400 mt-2">
                Total de Vendas: {creator.sales} BRL
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const topCreators = [
  {
    name: "Keepitreal",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "KR",
    sales: "34.53",
  },
  {
    name: "DigiLab",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "DL",
    sales: "34.53",
  },
  {
    name: "GravityOne",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "GO",
    sales: "34.53",
  },
  {
    name: "Juanie",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "JN",
    sales: "34.53",
  },
  {
    name: "BlueWhale",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "BW",
    sales: "34.53",
  },
  {
    name: "Mr Fox",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "MF",
    sales: "34.53",
  },
  {
    name: "Shroomie",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "SH",
    sales: "34.53",
  },
  {
    name: "Robotica",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "RO",
    sales: "34.53",
  },
  {
    name: "RustyRobot",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "RR",
    sales: "34.53",
  },
  {
    name: "Animakid",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "AK",
    sales: "34.53",
  },
  {
    name: "Dotgu",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "DG",
    sales: "34.53",
  },
  {
    name: "Ghiblier",
    imageUrl: "https://github.com/pedrogiampietro.png",
    initials: "GB",
    sales: "34.53",
  },
];
