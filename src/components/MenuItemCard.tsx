
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

interface MenuItemCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  preparationTime: string;
  id: string;
}

const MenuItemCard = ({ 
  id,
  title, 
  description, 
  price, 
  image, 
  rating, 
  preparationTime 
}: MenuItemCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      image
    });
  };
  
  return (
    <Card className="overflow-hidden hover-scale card-shadow">
      <div className="relative h-48">
        <div className="absolute top-2 right-2 bg-white rounded-full py-1 px-3 flex items-center shadow-md z-10">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-sm font-bold">{rating}</span>
        </div>
        
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-food-orange text-lg">₹{price}</span>
          <span className="text-sm text-gray-500 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {preparationTime}
          </span>
        </div>
        
        <Button 
          className="w-full bg-food-orange hover:bg-food-orange/90 flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default MenuItemCard;
