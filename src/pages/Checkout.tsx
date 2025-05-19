
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useCart } from "../contexts/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Package, Truck } from "lucide-react";

// Constants for calculation
const DELIVERY_FEE_BASE = 20;
const DELIVERY_FEE_RATE = 0.015; // 1.5% of cart value

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Name must be at least 3 characters." }),
  address: z.string().min(5, { message: "Please enter a valid address." }),
  city: z.string().min(2, { message: "Please enter a valid city." }),
  zipCode: z.string().min(5, { message: "Please enter a valid ZIP code." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate delivery fee based on cart total
  const deliveryFee = Math.round((DELIVERY_FEE_BASE + (totalPrice * DELIVERY_FEE_RATE)) * 100) / 100;
  const finalTotal = totalPrice + deliveryFee;

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/menu");
      toast({
        title: "Your cart is empty",
        description: "Please add items to your cart before checkout",
      });
    }
  }, [cartItems, navigate, toast]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast({
        title: "Order placed successfully!",
        description: "Your order has been placed and will be delivered soon.",
      });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Delivery Information Form */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St, Apt 4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Mumbai" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input placeholder="400001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    <div className="border p-4 rounded-md flex items-center space-x-3">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentMethod"
                        checked
                        readOnly
                        className="h-4 w-4 text-food-orange"
                      />
                      <label htmlFor="cod" className="flex-1">
                        Cash on Delivery (COD)
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-food-orange hover:bg-food-orange/90 mt-6"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Place Order"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="max-h-60 overflow-y-auto mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between py-2 border-b">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded overflow-hidden mr-3">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center">
                      <Truck className="h-4 w-4 mr-1" />
                      Delivery Fee
                    </span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{finalTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Including all taxes</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Delivery Information</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Your order will be delivered within 30-45 minutes after confirmation.
                      The delivery person will contact you before arrival.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
