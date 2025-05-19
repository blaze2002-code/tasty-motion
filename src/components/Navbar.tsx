
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignIn = () => {
    navigate("/signin");
    setIsMenuOpen(false);
  };

  const handleSignOut = () => {
    signOut();
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md py-2" : "bg-transparent py-4"
      } dark:bg-background`}
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
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm">Hello, {user.name.split(' ')[0]}</span>
                <Button size="sm" variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button size="sm" variant="outline" onClick={handleSignIn}>
                <User className="h-4 w-4 mr-2" /> Sign In
              </Button>
            )}
            <Button 
              size="sm" 
              className="bg-food-orange hover:bg-food-orange/90 relative"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-4 w-4 mr-2" /> 
              Cart 
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-background p-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="px-4 py-2 hover:bg-accent rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="px-4 py-2 hover:bg-accent rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 hover:bg-accent rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-accent rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-2 border-t">
              {user ? (
                <>
                  <div className="px-4 py-2">Hello, {user.name.split(' ')[0]}</div>
                  <Button size="sm" variant="outline" className="w-full" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button size="sm" variant="outline" className="w-full" onClick={handleSignIn}>
                  <User className="h-4 w-4 mr-2" /> Sign In
                </Button>
              )}
              <Button 
                size="sm" 
                className="w-full bg-food-orange hover:bg-food-orange/90 relative"
                onClick={handleCartClick}
              >
                <ShoppingCart className="h-4 w-4 mr-2" /> 
                Cart 
                {totalItems > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
