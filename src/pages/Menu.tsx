
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuItemCard from "../components/MenuItemCard";
import { menuItems, getUniqueCategories } from "../data/menu_data/menuItems";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("default");
  
  const categories = ["all", ...getUniqueCategories()];
  const itemsPerPage = 9;
  
  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);
  
  // Filter items based on search term and selected category
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Sort items based on selected sorting option
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch(sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "time":
        return a.preparationTime.localeCompare(b.preparationTime);
      default:
        return 0;
    }
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide variety of authentic Indian dishes, prepared with traditional recipes and the finest ingredients
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            {/* Search Bar */}
            <div className="w-full md:w-1/3">
              <Input
                type="search"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              {/* Category Filter */}
              <Select 
                value={selectedCategory} 
                onValueChange={(value) => {
                  setSelectedCategory(value);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Sort Options */}
              <Select 
                value={sortBy} 
                onValueChange={(value) => {
                  setSortBy(value);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="time">Preparation Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Results Count */}
          <p className="text-gray-500 mb-6">
            Showing {paginatedItems.length} of {filteredItems.length} items
          </p>
          
          {/* Menu Items Grid */}
          {paginatedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedItems.map((item) => (
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
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">No items found</h3>
              <p className="text-gray-500">Try changing your search or filter criteria</p>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;
                  // Show first, last, and pages around current
                  if (
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink 
                          isActive={page === currentPage}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                  // Add ellipsis for skipped pages
                  else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return <PaginationItem key={page}>...</PaginationItem>;
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
