
import { useState } from "react";
import { Button } from "@/components/ui/button";
import MenuItemCard from "./MenuItemCard";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PopularItems = () => {
  const [category, setCategory] = useState<string>("all");
  const navigate = useNavigate();
  
  // Sample popular items data
  const popularItems = [
    {
      id: 1,
      key: 1,
      title: "Butter Chicken",
      description: "Tender chicken in a rich buttery tomato sauce",
      price: 320,
      image: "/assets/butter-chicken.jpg",
      rating: 4.8,
      preparationTime: "25 mins",
    },
    {
      id: 2,
      key: 2,
      title: "Paneer Tikka",
      description: "Marinated cottage cheese cubes grilled to perfection",
      price: 250,
      image: "/assets/paneer-tikka.jpg",
      rating: 4.6,
      preparationTime: "20 mins",
    },
    {
      id: 3,
      key: 3,
      title: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato mixture",
      price: 180,
      image: "/assets/masala-dosa.jpg",
      rating: 4.7,
      preparationTime: "15 mins",
    },
    {
      id: 4,
      key: 4,
      title: "Hyderabadi Biryani",
      description: "Fragrant basmati rice with tender meat and aromatic spices",
      price: 350,
      image: "/assets/biryani.jpg",
      rating: 4.9,
      preparationTime: "35 mins",
    },
  ];

  const filteredItems = popularItems.filter(
    (item) => category === "all" || item.title.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <section className="bg-food-beige dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Popular Dishes</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our most loved dishes that keep customers coming back for more
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant={category === "all" ? "default" : "outline"}
            className={`${
              category === "all" ? "bg-food-orange hover:bg-food-orange/90" : ""
            }`}
            onClick={() => setCategory("all")}
          >
            All
          </Button>
          <Button
            variant={category === "chicken" ? "default" : "outline"}
            className={`${
              category === "chicken" ? "bg-food-orange hover:bg-food-orange/90" : ""
            }`}
            onClick={() => setCategory("chicken")}
          >
            Chicken
          </Button>
          <Button
            variant={category === "paneer" ? "default" : "outline"}
            className={`${
              category === "paneer" ? "bg-food-orange hover:bg-food-orange/90" : ""
            }`}
            onClick={() => setCategory("paneer")}
          >
            Vegetarian
          </Button>
          <Button
            variant={category === "biryani" ? "default" : "outline"}
            className={`${
              category === "biryani" ? "bg-food-orange hover:bg-food-orange/90" : ""
            }`}
            onClick={() => setCategory("biryani")}
          >
            Rice & Biryani
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={item.rating}
              preparationTime={item.preparationTime}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/menu')} 
            className="bg-food-orange hover:bg-food-orange/90"
          >
            View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
