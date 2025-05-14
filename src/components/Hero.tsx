
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-r from-food-orange/10 to-food-teal/10 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Delicious Food <br />
              <span className="text-food-orange">Delivered</span> To <br />
              Your Door
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Order your favorite meals from the best restaurants in town. Fast delivery, great prices, and a wide selection.
            </p>
            <div className="flex gap-4">
              <Button className="bg-food-orange hover:bg-food-orange/90 text-white px-8 py-6">
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-food-orange text-food-orange hover:bg-food-orange/10 px-8 py-6">
                View Menu
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 md:w-56 md:h-56 rounded-full bg-food-orange/20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-food-teal/20 -z-10"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
              alt="Delicious food" 
              className="rounded-2xl shadow-xl animate-fade-in object-cover h-[300px] md:h-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
