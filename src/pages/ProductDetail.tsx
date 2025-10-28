import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { getProductById, allProducts } from "@/data/products";
import { useCart } from "@/hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  
  const product = getProductById(id || '');
  const relatedProducts = allProducts.slice(0, 4);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Product Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Images */}
            <div className="space-y-4 animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card bg-muted">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden border-2 border-primary cursor-pointer hover:opacity-75 transition-opacity">
                    <img 
                      src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&auto=format&fit=crop"
                      alt={`Thumbnail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {product.badge && (
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="ml-2 text-muted-foreground">(124 reviews)</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  <span className="text-xl text-muted-foreground line-through">$34.99</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-bold rounded-full">
                    30% OFF
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description || `Discover the joy of ${product.name}. Perfect for creative play and learning.`}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Safety Tested</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Easy Returns</p>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">In Stock</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-primary text-lg h-14"
                  onClick={() => {
                    for (let i = 0; i < quantity; i++) {
                      addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
                    }
                  }}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-14 w-14"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-secondary text-secondary' : ''}`} />
                </Button>
                <Button size="lg" variant="outline" className="h-14 w-14">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Additional Info */}
              <div className="space-y-2 text-sm border-t pt-6">
                <p><span className="font-medium">SKU:</span> TOY-RS-001</p>
                <p><span className="font-medium">Category:</span> Educational Toys, 0-2 Years</p>
                <p><span className="font-medium">Tags:</span> Stacking, Wooden Toys, Educational</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-20 animate-fade-in">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews (124)</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-8 max-w-3xl mx-auto">
                <div className="prose prose-sm max-w-none">
                  <h3 className="text-xl font-bold mb-4">Product Description</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our Rainbow Stacking Rings are designed to grow with your child. The simple act of stacking helps develop crucial motor skills while the bright colors stimulate visual development and encourage color recognition.
                  </p>
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Made from sustainable, FSC-certified wood</li>
                    <li>• Non-toxic, water-based paints</li>
                    <li>• Smooth, rounded edges for safe play</li>
                    <li>• Encourages problem-solving and spatial awareness</li>
                    <li>• Perfect size for little hands</li>
                    <li>• Easy to clean with damp cloth</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="mt-8 max-w-3xl mx-auto">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="border-b pb-2">
                      <span className="font-medium">Age Range:</span>
                      <p className="text-muted-foreground">18 months - 4 years</p>
                    </div>
                    <div className="border-b pb-2">
                      <span className="font-medium">Material:</span>
                      <p className="text-muted-foreground">Sustainable Wood</p>
                    </div>
                    <div className="border-b pb-2">
                      <span className="font-medium">Dimensions:</span>
                      <p className="text-muted-foreground">8" H x 4" W</p>
                    </div>
                    <div className="border-b pb-2">
                      <span className="font-medium">Weight:</span>
                      <p className="text-muted-foreground">1.2 lbs</p>
                    </div>
                    <div className="border-b pb-2">
                      <span className="font-medium">Number of Pieces:</span>
                      <p className="text-muted-foreground">7 rings + 1 base</p>
                    </div>
                    <div className="border-b pb-2">
                      <span className="font-medium">Care Instructions:</span>
                      <p className="text-muted-foreground">Wipe clean with damp cloth</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-8 max-w-3xl mx-auto">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b pb-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">Sarah M.</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">Verified Purchase</p>
                        </div>
                        <span className="text-sm text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-muted-foreground">
                        My toddler loves these! The colors are vibrant and the quality is excellent. Very happy with this purchase.
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
