
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

// Define types for our context
type User = {
  id: string;
  email: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (name: string, email: string, password: string) => Promise<boolean>;
  signOut: () => void;
};

// Create the context
const AuthContext = createContext<AuthContextType | null>(null);

// Create a default test user
const DEFAULT_USER = {
  id: "test-user-1",
  email: "test@example.com",
  name: "Test User",
  password: "password123", // This would never be stored like this in production
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // For demo purposes, check if credentials match our default user
      if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
        const userToStore = {
          id: DEFAULT_USER.id,
          email: DEFAULT_USER.email,
          name: DEFAULT_USER.name,
        };
        
        localStorage.setItem("user", JSON.stringify(userToStore));
        setUser(userToStore);
        toast({
          title: "Success",
          description: "Signed in successfully",
        });
        return true;
      } 
      
      toast({
        title: "Error",
        description: "Invalid email or password",
        variant: "destructive",
      });
      return false;
    } catch (error) {
      console.error("Sign-in error:", error);
      toast({
        title: "Error",
        description: "An error occurred during sign-in",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // In a real app, you would create a new user in your database here
      // For demo, we'll just pretend we created it and sign them in
      
      if (email === DEFAULT_USER.email) {
        toast({
          title: "Error",
          description: "An account with this email already exists",
          variant: "destructive",
        });
        return false;
      }
      
      const newUser = {
        id: `user-${Math.random().toString(36).substring(2, 9)}`,
        email,
        name,
      };
      
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      
      toast({
        title: "Success",
        description: "Account created successfully",
      });
      return true;
    } catch (error) {
      console.error("Sign-up error:", error);
      toast({
        title: "Error",
        description: "An error occurred during sign-up",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast({
      title: "Signed out",
      description: "You have been signed out successfully",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
