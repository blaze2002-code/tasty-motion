
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  category: string;
}

const CategoryCard = ({ title, image, count, category }: CategoryCardProps) => {
  return (
    <Link to={`/menu?category=${category.toLowerCase()}`}>
      <Card className="overflow-hidden hover-scale card-shadow group cursor-pointer">
        <div className="relative h-40">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:to-black/80 transition-colors duration-300 z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
            <h3 className="text-white font-bold text-lg">{title}</h3>
            <p className="text-white/80 text-sm">{count} items</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
