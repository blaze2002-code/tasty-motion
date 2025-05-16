
// Menu items data for the food ordering application

export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  preparationTime: string;
  category: string;
}

// Generate descriptions for menu items
const getDescription = (title: string, category: string): string => {
  const descriptions = {
    sauce: "Flavorful sauce made with fresh ingredients, perfect as a condiment or dipping sauce",
    papadum: "Thin, crisp, disc-shaped food made from seasoned dough, perfect as a starter",
    bread: "Freshly baked bread from our traditional tandoor oven",
    raita: "Yogurt-based side dish with mild spices and fresh vegetables",
    rice: "Aromatic long grain rice cooked to perfection",
    salad: "Fresh vegetables tossed with our house dressing",
    drinks: "Refreshing beverage to complement your meal",
    appetizer: "Delicious starter to begin your culinary journey",
    curry: "Rich and flavorful curry made with our chef's special blend of spices",
    fry: "Perfectly fried and seasoned to crispy perfection",
  };
  
  return descriptions[category as keyof typeof descriptions] || 
    `Delicious ${title.toLowerCase()} prepared with traditional Indian recipes`;
};

// All menu items from the provided data
export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Mint Sauce",
    description: getDescription("Mint Sauce", "sauce"),
    price: 29,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Mint_sauce.jpg",
    rating: 4.3,
    preparationTime: "5 min",
    category: "sauce"
  },
  {
    id: 2,
    title: "Lime Pickle",
    description: getDescription("Lime Pickle", "sauce"),
    price: 19,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Lime_pickle.jpg",
    rating: 4.2,
    preparationTime: "5 min",
    category: "sauce"
  },
  {
    id: 3,
    title: "Mango Chutney",
    description: getDescription("Mango Chutney", "sauce"),
    price: 39,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Mango_Chutney.JPG",
    rating: 4.7,
    preparationTime: "5 min",
    category: "sauce"
  },
  {
    id: 4,
    title: "Red Sauce",
    description: getDescription("Red Sauce", "sauce"),
    price: 59,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Ketchup_aka_tomato_sauce.jpg",
    rating: 4.1,
    preparationTime: "5 min",
    category: "sauce"
  },
  {
    id: 5,
    title: "Onion Chutney",
    description: getDescription("Onion Chutney", "sauce"),
    price: 19,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Onion_chutney.JPG",
    rating: 4.4,
    preparationTime: "5 min",
    category: "sauce"
  },
  {
    id: 6,
    title: "Plain Papadum",
    description: getDescription("Plain Papadum", "papadum"),
    price: 29,
    image: "https://source.unsplash.com/400x300/?Plain%20Papadum",
    rating: 4.6,
    preparationTime: "5 min",
    category: "papadum"
  },
  {
    id: 7,
    title: "Spicy Papadum",
    description: getDescription("Spicy Papadum", "papadum"),
    price: 34,
    image: "https://source.unsplash.com/400x300/?Spicy%20Papadum",
    rating: 4.8,
    preparationTime: "5 min",
    category: "papadum"
  },
  {
    id: 8,
    title: "Chapati",
    description: getDescription("Chapati", "bread"),
    price: 9,
    image: "https://source.unsplash.com/400x300/?Chapati",
    rating: 4.5,
    preparationTime: "10 min",
    category: "bread"
  },
  {
    id: 9,
    title: "Puree",
    description: getDescription("Puree", "bread"),
    price: 19,
    image: "https://source.unsplash.com/400x300/?Puree",
    rating: 4.3,
    preparationTime: "10 min",
    category: "bread"
  },
  {
    id: 10,
    title: "Tandoori Roti",
    description: getDescription("Tandoori Roti", "bread"),
    price: 27,
    image: "https://source.unsplash.com/400x300/?Tandoori%20Roti",
    rating: 4.7,
    preparationTime: "12 min",
    category: "bread"
  },
  // Adding more items from the list (selecting a few from each category for brevity)
  {
    id: 11,
    title: "Plain Naan",
    description: getDescription("Plain Naan", "bread"),
    price: 19,
    image: "https://source.unsplash.com/400x300/?Plain%20Naan",
    rating: 4.6,
    preparationTime: "12 min",
    category: "bread"
  },
  {
    id: 12,
    title: "Raitha",
    description: getDescription("Raitha", "raita"),
    price: 19,
    image: "https://source.unsplash.com/400x300/?Raitha",
    rating: 4.2,
    preparationTime: "5 min",
    category: "raita"
  },
  {
    id: 13,
    title: "Pilau Rice",
    description: getDescription("Pilau Rice", "rice"),
    price: 79,
    image: "https://source.unsplash.com/400x300/?Pilau%20Rice",
    rating: 4.8,
    preparationTime: "15 min",
    category: "rice"
  },
  {
    id: 14,
    title: "Green Salad",
    description: getDescription("Green Salad", "salad"),
    price: 100,
    image: "https://source.unsplash.com/400x300/?Green%20Salad",
    rating: 4.4,
    preparationTime: "5 min",
    category: "salad"
  },
  {
    id: 15,
    title: "Bottle Coke",
    description: getDescription("Bottle Coke", "drinks"),
    price: 100,
    image: "https://source.unsplash.com/400x300/?Bottle%20Coke",
    rating: 4.5,
    preparationTime: "1 min",
    category: "drinks"
  },
  {
    id: 16,
    title: "Onion Bhajee",
    description: "Crispy onion fritters with a blend of Indian spices and gram flour batter",
    price: 116,
    image: "https://source.unsplash.com/400x300/?Onion%20Bhajee",
    rating: 4.7,
    preparationTime: "15 min",
    category: "appetizer"
  },
  {
    id: 17,
    title: "Chicken Tikka",
    description: "Tender chicken pieces marinated in yogurt and spices, cooked in a tandoor",
    price: 116,
    image: "https://source.unsplash.com/400x300/?Chicken%20Tikka",
    rating: 4.9,
    preparationTime: "20 min",
    category: "appetizer"
  },
  {
    id: 18,
    title: "Korma Sauce",
    description: "Rich, creamy sauce made with coconut, almonds, and mild spices",
    price: 116,
    image: "https://source.unsplash.com/400x300/?Korma%20Sauce",
    rating: 4.6,
    preparationTime: "10 min",
    category: "curry"
  },
  {
    id: 19,
    title: "Chicken Tikka Masala",
    description: "Grilled chicken pieces in a rich, creamy tomato sauce with aromatic spices",
    price: 199,
    image: "https://source.unsplash.com/400x300/?Chicken%20Tikka%20Masala",
    rating: 4.9,
    preparationTime: "25 min",
    category: "curry"
  },
  {
    id: 20,
    title: "Mutton Biryani",
    description: "Fragrant basmati rice cooked with tender mutton pieces and aromatic spices",
    price: 216,
    image: "https://source.unsplash.com/400x300/?Mutton%20Biryani",
    rating: 4.8,
    preparationTime: "30 min",
    category: "rice"
  }
];

// Get unique categories from the menu items
export const getUniqueCategories = (): string[] => {
  const categories = menuItems.map(item => item.category);
  return Array.from(new Set(categories));
};

// Get count of items in each category
export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  menuItems.forEach(item => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });
  return counts;
};
