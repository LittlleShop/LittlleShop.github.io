import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Truck, Gift, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";

const Index = () => {
  const categories = [
    {
      title: "STEM Collection",
      description: "Science, Technology, Engineering & Math",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop",
      link: "/categories/stem"
    },
    {
      title: "Fidgets & Gadgets",
      description: "Sensory toys for focus and fun",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      link: "/categories/fidgets"
    },
    {
      title: "Inclusive Play",
      description: "Toys for every child",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&auto=format&fit=crop",
      link: "/categories/inclusive"
    },
    {
      title: "Elegant Gifts",
      description: "Perfect presents for special moments",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&auto=format&fit=crop",
      link: "/categories/gifts"
    },
    {
      title: "Build Master",
      description: "Construction and building sets",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format&fit=crop",
      link: "/categories/building"
    },
    {
      title: "Outdoor Fun",
      description: "Active play for healthy kids",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop",
      link: "/categories/outdoor"
    }
  ];

  const newArrivals = getFeaturedProducts();

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Gift Wrapping",
      description: "Make it extra special"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe & Tested",
      description: "Quality guaranteed"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Curated Selection",
      description: "Hand-picked toys"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Where Play Meets Learning
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  Discover amazing toys that spark creativity, build skills, and bring endless joy to children of all ages.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                    <Link to="/shop">
                      Shop Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                    <Link to="/categories/stem">
                      Explore STEM
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-float hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop" 
                  alt="Happy children playing"
                  className="rounded-3xl shadow-glow"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTEwLTEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </section>

        {/* Features */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find the perfect toy for every interest, age, and developmental stage
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12 animate-fade-in">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals</h2>
                <p className="text-muted-foreground">
                  Check out our latest collection of exciting toys
                </p>
              </div>
              <Button asChild variant="outline">
                <Link to="/shop">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product, index) => (
                <div key={product.id} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-gradient-secondary p-12 md:p-20 text-center text-white animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Join Our Toy Community
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to get exclusive deals, early access to new arrivals, and parenting tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-3 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 rounded-full px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
