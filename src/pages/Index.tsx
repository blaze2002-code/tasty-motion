
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularItems from "../components/PopularItems";
import Footer from "../components/Footer";
import ChatBot from "../components/chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <PopularItems />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
