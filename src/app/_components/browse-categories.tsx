import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function BrowseCategories() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">
        Procurar por categorias
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Card key={category.name} className="bg-gray-800 rounded-lg relative">
            <div className="relative w-full h-48">
              <Image
                src={category.imageUrl}
                alt={category.name}
                fill
                className="rounded-lg object-contain "
                style={{ imageRendering: "pixelated" }}
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent">
              <CardTitle className="text-lg font-semibold">
                {category.name}
              </CardTitle>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

// Example data for the categories
const categories = [
  {
    name: "Shields",
    imageUrl: "/items/Blessed_Shield.png",
  },
  {
    name: "Boots",
    imageUrl: "/items/Golden_Boots.png",
  },
  {
    name: "Helmets",
    imageUrl: "/items/Golden_Helmet.png",
  },
  {
    name: "Armor",
    imageUrl: "/items/Magic_Plate_Armor.png",
  },
  {
    name: "Legs",
    imageUrl: "/items/Sanguine_Legs.png",
  },
  {
    name: "Axes",
    imageUrl: "/items/Solar_Axe.png",
  },
  {
    name: "Books",
    imageUrl: "/items/Spellbook_of_Ancient_Arcana.png",
  },
  {
    name: "Bows",
    imageUrl: "/items/Thorn_Spitter.png",
  },
];
