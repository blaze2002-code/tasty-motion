
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItemCard from "./MenuItemCard";

const popularItems = [
  {
    id: 1,
    title: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil leaves",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2340&auto=format&fit=crop",
    rating: 4.8,
    preparationTime: "20 min",
    category: "pizza"
  },
  {
    id: 2,
    title: "Classic Cheeseburger",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2340&auto=format&fit=crop",
    rating: 4.6,
    preparationTime: "15 min",
    category: "burger"
  },
  {
    id: 3,
    title: "Rainbow Sushi Roll",
    description: "Colorful roll with salmon, tuna, avocado, and cucumber",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=2340&auto=format&fit=crop",
    rating: 4.9,
    preparationTime: "25 min",
    category: "sushi"
  },
  {
    id: 4,
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2340&auto=format&fit=crop",
    rating: 4.7,
    preparationTime: "18 min",
    category: "pasta"
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=2340&auto=format&fit=crop",
    rating: 4.9,
    preparationTime: "15 min",
    category: "dessert"
  },
  {
    id: 6,
    title: "Strawberry Smoothie",
    description: "Refreshing smoothie with fresh strawberries, banana, and yogurt",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=2340&auto=format&fit=crop",
    rating: 4.5,
    preparationTime: "5 min",
    category: "drink"
  }
];

const PopularItems = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Popular Items</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our customers' favorite dishes from across all categories</p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-food-gray">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pizza">Pizza</TabsTrigger>
              <TabsTrigger value="burger">Burgers</TabsTrigger>
              <TabsTrigger value="sushi">Sushi</TabsTrigger>
              <TabsTrigger value="pasta">Pasta</TabsTrigger>
              <TabsTrigger value="dessert">Desserts</TabsTrigger>
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
          
          {["pizza", "burger", "sushi", "pasta", "dessert", "drink"].map((category) => (
            <TabsContent key={category} value={category} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularItems
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
          <Button className="bg-food-orange hover:bg-food-orange/90 px-8">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
