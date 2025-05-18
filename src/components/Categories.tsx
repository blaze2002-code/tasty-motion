
import CategoryCard from "./CategoryCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getCategoryCounts } from "../data/menu_data/menuItems";
import { Link } from "react-router-dom";

const categoryImages = {
  sauce: "https://upload.wikimedia.org/wikipedia/commons/1/13/Mint_sauce.jpg",
  papadum: "https://source.unsplash.com/400x300/?Papadum",
  bread: "https://source.unsplash.com/400x300/?Naan%20Bread",
  raita: "https://source.unsplash.com/400x300/?Raitha",
  rice: "https://source.unsplash.com/400x300/?Biryani%20Rice",
  salad: "https://source.unsplash.com/400x300/?Indian%20Salad",
  drinks: "https://source.unsplash.com/400x300/?Indian%20Drinks",
  appetizer: "https://source.unsplash.com/400x300/?Indian%20Appetizer",
  curry: "https://source.unsplash.com/400x300/?Indian%20Curry",
  fry: "https://source.unsplash.com/400x300/?Indian%20Fried%20Food"
};

const Categories = () => {
  const categoryCounts = getCategoryCounts();
  const categories = Object.keys(categoryCounts).map((category, index) => ({
    id: index + 1,
    title: category.charAt(0).toUpperCase() + category.slice(1),
    category: category,
    image: categoryImages[category as keyof typeof categoryImages] || "https://source.unsplash.com/400x300/?Indian%20Food",
    count: categoryCounts[category]
  }));

  return (
    <section className="py-16 bg-food-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Categories</h2>
            <p className="text-gray-600">Explore our wide variety of delicious Indian cuisine</p>
          </div>
          <Link to="/menu">
            <Button variant="outline" className="border-food-orange text-food-orange hover:bg-food-orange/10 hidden md:flex">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              category={category.category}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Link to="/menu">
            <Button variant="outline" className="border-food-orange text-food-orange hover:bg-food-orange/10">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
