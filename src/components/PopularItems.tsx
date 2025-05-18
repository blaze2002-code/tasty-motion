
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItemCard from "./MenuItemCard";
import { menuItems, getUniqueCategories } from "../data/menu_data/menuItems";
import { Link } from "react-router-dom";

const PopularItems = () => {
  const categories = getUniqueCategories();
  
  // Get top rated items for the "all" tab
  const popularItems = [...menuItems]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Popular Items</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our customers' favorite dishes from across all categories</p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="bg-food-gray">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <MenuItemCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
                preparationTime={item.preparationTime}
              />
            ))}
          </TabsContent>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <MenuItemCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    preparationTime={item.preparationTime}
                  />
                ))}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button className="bg-food-orange hover:bg-food-orange/90 px-8">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
