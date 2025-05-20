
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the MenuItem type
type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
};

const Menu = () => {
  const { addToCart } = useCart();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and basil.",
      price: 12.99,
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
      category: "Pizza",
    },
    {
      id: "2",
      name: "Chicken Alfredo Pasta",
      description: "Creamy Alfredo sauce with grilled chicken and fettuccine.",
      price: 15.50,
      imageUrl:
        "https://images.unsplash.com/photo-1607013251379-e6e2716fa06c?q=80&w=1000&auto=format&fit=crop",
      category: "Pasta",
    },
    {
      id: "3",
      name: "Beef Burger",
      description: "Juicy beef patty with lettuce, tomato, and cheese.",
      price: 10.75,
      imageUrl:
        "https://images.unsplash.com/photo-1571091718767-18b763223a12?q=80&w=1000&auto=format&fit=crop",
      category: "Burgers",
    },
    {
      id: "4",
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with Caesar dressing and croutons.",
      price: 8.25,
      imageUrl:
        "https://images.unsplash.com/photo-1546793665-490e7b6538c4?q=80&w=1000&auto=format&fit=crop",
      category: "Salads",
    },
    {
      id: "5",
      name: "Chocolate Brownie",
      description: "Warm chocolate brownie with vanilla ice cream.",
      price: 6.00,
      imageUrl:
        "https://images.unsplash.com/photo-1630743252518-49b82d5d497c?q=80&w=1000&auto=format&fit=crop",
      category: "Desserts",
    },
    {
      id: "6",
      name: "Iced Coffee",
      description: "Refreshing iced coffee with a hint of vanilla.",
      price: 4.50,
      imageUrl:
        "https://images.unsplash.com/photo-1541167760496-1628856ab773?q=80&w=1000&auto=format&fit=crop",
      category: "Drinks",
    },
  ]);

  // Group menu items by category
  const groupedMenuItems = menuItems.reduce((acc: Record<string, MenuItem[]>, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>

      <Accordion type="single" collapsible className="w-full">
        {Object.entries(groupedMenuItems).map(([category, items]: [string, MenuItem[]]) => (
          <AccordionItem value={category} key={category}>
            <AccordionTrigger className="text-xl font-semibold py-2">
              {category}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 font-bold">
                          ${item.price.toFixed(2)}
                        </span>
                        <Button
                          onClick={() =>
                            addToCart({
                              id: item.id,
                              title: item.name,
                              price: item.price,
                              image: item.imageUrl,
                            })
                          }
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Menu;
