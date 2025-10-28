import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
}

export const ProductCard = ({ id, name, price, image, badge }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300">
          {/* Badge */}
          {badge && (
            <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
              {badge}
            </div>
          )}
          
          {/* Wishlist button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-sm"
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${isWishlisted ? 'fill-secondary text-secondary' : 'text-foreground'}`}
            />
          </button>

          {/* Image */}
          <div className="aspect-square overflow-hidden bg-muted">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-primary">
                ${price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Add to cart button - shows on hover */}
      <Button 
        className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-primary shadow-lg"
        onClick={(e) => {
          e.preventDefault();
          addToCart({ id, name, price, image });
        }}
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Add to Cart
      </Button>
    </div>
  );
};
