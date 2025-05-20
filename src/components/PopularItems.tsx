import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

type Item = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

const PopularItems = () => {
  const [items, setItems] = useState<Item[] | null>(null);
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setItems([
        {
          id: "1",
          title: "Margherita Pizza",
          description: "Classic pizza with tomato, mozzarella, and basil",
          price: 12.99,
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
        },
        {
          id: "2",
          title: "Chicken Caesar Salad",
          description: "Fresh romaine lettuce with grilled chicken and Caesar dressing",
          price: 9.99,
          image: "https://images.unsplash.com/photo-1546069901-ba9599d7e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        },
        {
          id: "3",
          title: "Beef Burger",
          description: "Juicy beef burger with lettuce, tomato, and cheese",
          price: 14.99,
          image: "https://images.unsplash.com/photo-1568901342037-24c7e8a7c15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleAddToCart = (item: Item) => {
    addToCart(item);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Items</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : items ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-500">{item.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
                  <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center">No items found.</p>
        )}
      </div>
    </section>
  );
};

export default PopularItems;
