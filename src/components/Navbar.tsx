
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-food-orange flex items-center justify-center">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <span className="font-bold text-xl text-food-orange">FoodieHub</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-food-orange transition-colors">Home</a>
          <a href="#" className="hover:text-food-orange transition-colors">Menu</a>
          <a href="#" className="hover:text-food-orange transition-colors">About</a>
          <a href="#" className="hover:text-food-orange transition-colors">Contact</a>
          
          <Button className="bg-food-orange hover:bg-food-orange/90">
            Order Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-12">
                <a href="#" className="text-lg hover:text-food-orange transition-colors px-4 py-2">Home</a>
                <a href="#" className="text-lg hover:text-food-orange transition-colors px-4 py-2">Menu</a>
                <a href="#" className="text-lg hover:text-food-orange transition-colors px-4 py-2">About</a>
                <a href="#" className="text-lg hover:text-food-orange transition-colors px-4 py-2">Contact</a>
                
                <Button className="bg-food-orange hover:bg-food-orange/90 mt-4">
                  Order Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
