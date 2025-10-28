import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
}

export const CategoryCard = ({ title, image, link, description }: CategoryCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          {description && (
            <p className="text-sm text-white/90 mb-3">{description}</p>
          )}
          <div className="flex items-center text-sm font-medium group-hover:gap-2 transition-all">
            <span>Shop Now</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};
