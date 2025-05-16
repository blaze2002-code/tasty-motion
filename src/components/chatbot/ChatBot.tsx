
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Send } from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hello! How can I help you with your food order today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I can help you find the perfect dish for your taste!",
        "Would you like to see our popular items?",
        "Our special today is butter paneer masala, would you like to try it?",
        "You can customize your order with additional toppings and spice levels.",
        "Is there anything specific you're looking for today?"
      ];
      
      const botMessage: Message = {
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            size="icon" 
            className="h-14 w-14 rounded-full bg-food-orange hover:bg-food-orange/90 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:w-[380px] p-0">
          <SheetHeader className="bg-food-orange text-white p-4">
            <SheetTitle className="text-white">Foodie Assistant</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col h-[calc(100vh-150px)]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[75%] p-3 rounded-lg ${
                      msg.isUser 
                        ? 'bg-food-orange text-white rounded-br-none' 
                        : 'bg-gray-100 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.isUser ? 'text-white/70' : 'text-gray-500'}`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t p-4 bg-white">
              <div className="flex items-center gap-2">
                <Input
                  className="flex-1"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  className="bg-food-orange hover:bg-food-orange/90" 
                  size="icon"
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatBot;
