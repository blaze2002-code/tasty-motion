
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularItems from "../components/PopularItems";
import Promotion from "../components/Promotion";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <PopularItems />
      <Promotion />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
