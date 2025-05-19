
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Search,
  ChevronDown,
  Star,
  Clock,
  Flame,
  Leaf,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItemCard from "@/components/MenuItemCard";

// Placeholder menu data
const menuData = [
  {
    id: 1,
    key: 1,
    title: "Butter Chicken",
    description: "Tender chicken in a rich buttery tomato sauce",
    price: 320,
    image: "/assets/butter-chicken.jpg",
    rating: 4.8,
    preparationTime: "25 mins",
    category: "mains",
    tags: ["popular", "spicy"],
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
    category: "starters",
    tags: ["vegetarian", "popular"],
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
    category: "breakfast",
    tags: ["vegetarian", "quick"],
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
    category: "mains",
    tags: ["popular", "spicy"],
  },
  {
    id: 5,
    key: 5,
    title: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 120,
    image: "/assets/samosa.jpg",
    rating: 4.5,
    preparationTime: "10 mins",
    category: "starters",
    tags: ["vegetarian", "quick"],
  },
  {
    id: 6,
    key: 6,
    title: "Chicken Tikka",
    description: "Grilled chicken pieces marinated in spices and yogurt",
    price: 280,
    image: "/assets/chicken-tikka.jpg",
    rating: 4.7,
    preparationTime: "22 mins",
    category: "starters",
    tags: ["popular", "spicy"],
  },
  {
    id: 7,
    key: 7,
    title: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in sugar syrup",
    price: 150,
    image: "/assets/gulab-jamun.jpg",
    rating: 4.8,
    preparationTime: "5 mins",
    category: "desserts",
    tags: ["sweet", "vegetarian"],
  },
  {
    id: 8,
    key: 8,
    title: "Palak Paneer",
    description: "Cottage cheese cubes in a creamy spinach sauce",
    price: 270,
    image: "/assets/palak-paneer.jpg",
    rating: 4.6,
    preparationTime: "25 mins",
    category: "mains",
    tags: ["vegetarian", "healthy"],
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(menuData);

  useEffect(() => {
    let result = menuData;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category (tab)
    if (activeTab !== "all") {
      result = result.filter((item) => item.category === activeTab);
    }

    setFilteredItems(result);
  }, [searchTerm, activeTab]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-food-beige dark:bg-gray-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-2">Our Menu</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Explore our wide range of delicious dishes
            </p>

            {/* Search and filters */}
            <div className="max-w-md mx-auto mb-8 relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search dishes..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category tabs */}
            <Tabs
              defaultValue="all"
              value={activeTab}
              onValueChange={setActiveTab}
              className="mb-8"
            >
              <TabsList className="flex justify-center flex-wrap h-auto p-1">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="starters">Starters</TabsTrigger>
                <TabsTrigger value="mains">Main Course</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
                <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Menu items */}
            {filteredItems.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 dark:text-gray-400">
                  No items found matching your search.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
