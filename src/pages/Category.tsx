import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

const Category = () => {
  const { slug } = useParams();

  const categoryData: Record<string, { title: string; description: string; hero: string }> = {
    'stem': {
      title: 'STEM Collection',
      description: 'Science, Technology, Engineering & Math toys that inspire future innovators',
      hero: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop'
    },
    'fidgets': {
      title: 'Fidgets & Gadgets',
      description: 'Sensory toys designed for focus, calm, and endless fun',
      hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop'
    },
    'inclusive': {
      title: 'Inclusive Play',
      description: 'Toys designed for every child, celebrating diversity and accessibility',
      hero: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1200&auto=format&fit=crop'
    },
    'gifts': {
      title: 'Elegant Gifts',
      description: 'Beautiful, timeless toys perfect for special occasions',
      hero: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&auto=format&fit=crop'
    },
    'building': {
      title: 'Build Master',
      description: 'Construction toys that develop spatial awareness and creativity',
      hero: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&auto=format&fit=crop'
    },
    'outdoor': {
      title: 'Outdoor Fun',
      description: 'Active play toys for healthy, happy kids',
      hero: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=1200&auto=format&fit=crop'
    },
    '0-2-years': {
      title: '0-2 Years',
      description: 'Safe, developmental toys for babies and toddlers',
      hero: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&auto=format&fit=crop'
    },
    '3-5-years': {
      title: '3-5 Years',
      description: 'Imaginative play for preschool adventures',
      hero: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1200&auto=format&fit=crop'
    },
    '6-8-years': {
      title: '6-8 Years',
      description: 'Educational toys for growing minds',
      hero: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&auto=format&fit=crop'
    },
    '9-plus': {
      title: '9+ Years',
      description: 'Challenging toys for advanced play',
      hero: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=1200&auto=format&fit=crop'
    }
  };

  const category = categoryData[slug || 'stem'];
  const products = getProductsByCategory(slug || 'stem');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden">
          <img 
            src={category.hero}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white animate-fade-in">
                <h1 className="text-5xl font-bold mb-4">{category.title}</h1>
                <p className="text-xl text-white/90">{category.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">{products.length} products found</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={product.id} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
