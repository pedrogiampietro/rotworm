import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { TrendingCollection } from "./_components/trending-collection";
import { TopCreators } from "./_components/top-creators";
import BrowseCategories from "./_components/browse-categories";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Trending Collection */}
      <div className="w-full">
        <TrendingCollection />
      </div>

      {/* Top Creators Section */}
      <div className="w-full">
        <TopCreators />
      </div>

      {/* Browse Categories Section */}
      <div className="w-full">
        <BrowseCategories />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
