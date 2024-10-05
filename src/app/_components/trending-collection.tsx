import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export function TrendingCollection() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">
        Coleção de tendências
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Confira nossa coleção de tendências atualizada semanalmente.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-gray-800 rounded-lg p-4">
          <CardHeader className="relative h-64">
            <Image
              src="/items/Sanguine_Legs.png"
              alt="DSGN Animals"
              layout="fill"
              className="rounded-lg object-contain "
              style={{ imageRendering: "pixelated" }}
            />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mt-4">
              <CardTitle className="text-xl">Sanguine Legs</CardTitle>
              <div className="bg-purple-600 text-white px-3 py-1 rounded-md">
                R$ 127,00
              </div>
            </div>
            <CardDescription className="text-gray-400 mt-1">
              By MrFox
            </CardDescription>

            <div className="flex space-x-2 mt-4">
              <Image
                src="/items/Solar_Axe.png"
                alt="Solar Axe"
                width={64}
                height={64}
                className="rounded-lg"
              />
              <Image
                src="/items/Magic_Plate_Armor.png"
                alt="DSGN Animals Thumbnail 2"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 rounded-lg p-4">
          <CardHeader className="relative h-64">
            <Image
              src="/items/Golden_Helmet.png"
              alt="Golden Helmet"
              layout="fill"
              className="rounded-lg object-contain "
              style={{ imageRendering: "pixelated" }}
            />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mt-4">
              <CardTitle className="text-xl">Golden Helmet</CardTitle>
              <div className="bg-purple-600 text-white px-3 py-1 rounded-md">
                R$ 127,00
              </div>
            </div>
            <CardDescription className="text-gray-400 mt-1">
              By Shroomie
            </CardDescription>

            <div className="flex space-x-2 mt-4">
              <Image
                src="/items/Sanguine_Legs.png"
                alt="Magic Mushrooms Thumbnail 1"
                width={64}
                height={64}
                className="rounded-lg"
              />
              <Image
                src="/items/Magic_Plate_Armor.png"
                alt="Magic Mushrooms Thumbnail 2"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 rounded-lg p-4">
          <CardHeader className="relative h-64">
            <Image
              src="/items/Solar_Axe.png"
              alt="Solar Axe"
              layout="fill"
              className="rounded-lg object-contain "
              style={{ imageRendering: "pixelated" }}
            />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mt-4">
              <CardTitle className="text-xl">Solar Axe</CardTitle>
              <div className="bg-purple-600 text-white px-3 py-1 rounded-md">
                R$ 127,00
              </div>
            </div>
            <CardDescription className="text-gray-400 mt-1">
              By BeKind2Robots
            </CardDescription>

            <div className="flex space-x-2 mt-4">
              <Image
                src="/items/Sanguine_Legs.png"
                alt="Disco Machines Thumbnail 1"
                width={64}
                height={64}
                className="rounded-lg"
              />
              <Image
                src="/items/Golden_Helmet.png"
                alt="Disco Machines Thumbnail 2"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
