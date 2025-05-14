
import CategoryCard from "./CategoryCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Pizza",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2340&auto=format&fit=crop",
    count: 42
  },
  {
    id: 2,
    title: "Burgers",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2340&auto=format&fit=crop",
    count: 36
  },
  {
    id: 3,
    title: "Sushi",
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=2340&auto=format&fit=crop",
    count: 28
  },
  {
    id: 4,
    title: "Pasta",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2340&auto=format&fit=crop",
    count: 31
  },
  {
    id: 5,
    title: "Desserts",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=2340&auto=format&fit=crop",
    count: 25
  },
  {
    id: 6,
    title: "Drinks",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=2340&auto=format&fit=crop",
    count: 22
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-food-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Categories</h2>
            <p className="text-gray-600">Explore our wide variety of delicious options</p>
          </div>
          <Button variant="outline" className="border-food-orange text-food-orange hover:bg-food-orange/10 hidden md:flex">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="border-food-orange text-food-orange hover:bg-food-orange/10">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
