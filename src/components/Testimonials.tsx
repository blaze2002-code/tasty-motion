
import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
    rating: 5,
    comment: "The food was absolutely delicious! Delivery was prompt and the packaging kept everything fresh. I'll definitely be ordering again!",
    date: "May 12, 2025"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    rating: 4,
    comment: "Great selection of restaurants and the app is super easy to use. Food arrived hot and on time. Very satisfied!",
    date: "May 10, 2025"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop",
    rating: 5,
    comment: "I love the variety of cuisines available. The order tracking feature is really helpful, and customer service is excellent!",
    date: "May 8, 2025"
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
    rating: 5,
    comment: "The pizza was amazing! Perfectly cooked and arrived still hot. Their app makes ordering so convenient.",
    date: "May 5, 2025"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">What People Say</h2>
            <p className="text-gray-600">See what our happy customers have to say</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="hover:bg-food-orange/10 hover:text-food-orange"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="hover:bg-food-orange/10 hover:text-food-orange"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef} 
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-[300px] md:min-w-[350px] snap-start"
              >
                <TestimonialCard
                  name={testimonial.name}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                  date={testimonial.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
