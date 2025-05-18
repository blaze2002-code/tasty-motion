
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageGenerator from "../components/ImageGenerator";

const ImageGeneratorPage = () => {
  const handleImageGenerated = (imageUrl: string) => {
    console.log("Generated image URL:", imageUrl);
    // You could copy the URL to clipboard or save it
    navigator.clipboard.writeText(imageUrl)
      .then(() => {
        alert("Image URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy URL: ", err);
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Food Image Generator</h1>
        <p className="text-center max-w-2xl mx-auto mb-8">
          Generate high-quality images for your food menu items using AI. Enter your description and get a professional food photo you can use in your menu.
        </p>
        <ImageGenerator onImageGenerated={handleImageGenerated} />
      </div>
      <Footer />
    </div>
  );
};

export default ImageGeneratorPage;
