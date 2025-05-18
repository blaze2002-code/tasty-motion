
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-food-orange">
            SpiceHaven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-food-orange">
              Home
            </Link>
            <Link to="/menu" className="hover:text-food-orange">
              Menu
            </Link>
            <Link to="/about" className="hover:text-food-orange">
              About
            </Link>
            <Link to="/contact" className="hover:text-food-orange">
              Contact
            </Link>
            <Link to="/image-generator" className="hover:text-food-orange">
              Image Generator
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" variant="outline">
              Sign In
            </Button>
            <Button size="sm" className="bg-food-orange hover:bg-food-orange/90">
              <ShoppingCart className="h-4 w-4 mr-2" /> Cart (0)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/image-generator"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Image Generator
            </Link>
            <div className="pt-4 flex flex-col space-y-2 border-t">
              <Button size="sm" variant="outline" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-food-orange hover:bg-food-orange/90">
                <ShoppingCart className="h-4 w-4 mr-2" /> Cart (0)
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
