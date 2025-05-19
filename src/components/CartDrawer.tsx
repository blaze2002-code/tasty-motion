
import { useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalItems, 
    totalPrice,
    isCartOpen,
    setIsCartOpen
  } = useCart();
  const navigate = useNavigate();

  // Close drawer when ESC key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setIsCartOpen]);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="border-b">
          <DrawerTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Your Cart ({totalItems})
          </DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto max-h-[60vh] p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <ShoppingCart className="mx-auto mb-4 h-12 w-12 text-gray-400" />
              <h3 className="text-lg font-medium">Your cart is empty</h3>
              <p className="text-gray-500 mt-1">Add some delicious items to get started!</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 py-3 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-food-orange font-medium">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </>
          )}
        </div>
        <DrawerFooter className="border-t">
          {cartItems.length > 0 && (
            <div className="flex justify-between text-lg font-medium mb-4">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Button
              onClick={handleCheckout}
              className="bg-food-orange hover:bg-food-orange/90"
              disabled={cartItems.length === 0}
            >
              Checkout
            </Button>
            {cartItems.length > 0 && (
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-gray-500"
              >
                Clear Cart
              </Button>
            )}
            <DrawerClose asChild>
              <Button variant="ghost">Continue Shopping</Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
