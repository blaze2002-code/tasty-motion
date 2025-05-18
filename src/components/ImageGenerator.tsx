
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { RunwareService, GeneratedImage } from "../utils/imageGeneration";
import { toast } from "sonner";

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ onImageGenerated }) => {
  const [apiKey, setApiKey] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
  const handleGenerateImage = async () => {
    if (!apiKey) {
      toast.error("Please enter your Runware API key");
      return;
    }
    
    if (!prompt) {
      toast.error("Please enter a prompt for the image");
      return;
    }
    
    setIsGenerating(true);
    
    try {
      // Create enhanced prompt for better food images
      const enhancedPrompt = `High-quality professional food photography of ${prompt}, appetizing, detailed, on a beautiful plate, restaurant quality, 4k resolution, food photography`;
      
      const runwareService = new RunwareService(apiKey);
      const result = await runwareService.generateImage({
        positivePrompt: enhancedPrompt,
      });
      
      setGeneratedImage(result.imageURL);
      onImageGenerated(result.imageURL);
      toast.success("Image generated successfully!");
    } catch (error) {
      console.error("Failed to generate image:", error);
      toast.error("Failed to generate image. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Generate Food Image</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
            Runware API Key
          </label>
          <Input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Runware API key"
          />
          <p className="text-xs text-gray-500 mt-1">
            Get your API key from <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">runware.ai</a>
          </p>
        </div>
        
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium mb-1">
            Food Description
          </label>
          <Input
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Butter Chicken with naan bread"
          />
        </div>
        
        {generatedImage && (
          <div className="mt-4">
            <img 
              src={generatedImage} 
              alt="Generated food" 
              className="w-full h-auto rounded-md"
            />
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleGenerateImage} 
          disabled={isGenerating}
          className="w-full bg-food-orange hover:bg-food-orange/90"
        >
          {isGenerating ? 'Generating...' : 'Generate Image'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ImageGenerator;
