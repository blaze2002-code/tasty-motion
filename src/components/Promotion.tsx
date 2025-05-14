
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Promotion = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-food-beige -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:20px_20px] opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 order-2 md:order-1">
            <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto md:ml-0 animate-fade-in">
              <span className="inline-block bg-food-orange/20 text-food-orange font-bold px-4 py-2 rounded-full mb-4">Limited Offer</span>
              <h2 className="text-3xl font-bold mb-4">Get 25% Off on Your First Order!</h2>
              <p className="text-gray-600 mb-6">
                Download our app and enjoy exclusive discounts on your favorite meals. Valid for new customers only.
              </p>
              <div className="flex gap-4">
                <Button className="bg-black hover:bg-black/90 px-4">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm.5 5c.828 0 1.5.672 1.5 1.5v2h2c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-2v2c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-2h-2c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h2v-2c0-.828.672-1.5 1.5-1.5z" />
                  </svg>
                  App Store
                </Button>
                <Button className="bg-black hover:bg-black/90 px-4">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zM8.5 5l6 5-6 5V5z" />
                  </svg>
                  Google Play
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                *Terms and conditions apply. Offer valid until May 31, 2025.
              </p>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-food-orange/30 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=2574&auto=format&fit=crop"
              alt="Mobile app promotion" 
              className="rounded-2xl shadow-xl mx-auto md:mr-0 max-w-xs md:max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
