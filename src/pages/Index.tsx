
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularItems from "../components/PopularItems";
import Promotion from "../components/Promotion";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <PopularItems />
      <Promotion />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
