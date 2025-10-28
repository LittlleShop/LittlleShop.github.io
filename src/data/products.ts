export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  description?: string;
  category: string[];
  ageRange?: string;
}

export const allProducts: Product[] = [
  // STEM Collection
  {
    id: "stem-1",
    name: "Advanced Robotics Kit",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&auto=format&fit=crop",
    badge: "BEST SELLER",
    description: "Build and program your own robot with this comprehensive STEM kit",
    category: ["stem", "9-plus"],
  },
  {
    id: "stem-2",
    name: "Chemistry Lab Set",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop",
    badge: "NEW",
    description: "Explore chemistry with safe, exciting experiments",
    category: ["stem", "6-8-years"],
  },
  {
    id: "stem-3",
    name: "Coding Game Board",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop",
    description: "Learn programming basics through fun gameplay",
    category: ["stem", "6-8-years"],
  },
  {
    id: "stem-4",
    name: "Engineering Blocks",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop",
    description: "Build bridges, towers, and engineering marvels",
    category: ["stem", "building", "6-8-years"],
  },
  {
    id: "stem-5",
    name: "Solar System Model",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&auto=format&fit=crop",
    description: "Explore space with this interactive solar system",
    category: ["stem", "6-8-years"],
  },
  {
    id: "stem-6",
    name: "Math Puzzle Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop",
    description: "Make math fun with engaging puzzles",
    category: ["stem", "inclusive", "3-5-years"],
  },
  {
    id: "stem-7",
    name: "Electronics Discovery Kit",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    badge: "HOT",
    description: "Build circuits and learn about electronics",
    category: ["stem", "9-plus"],
  },
  {
    id: "stem-8",
    name: "Crystal Growing Lab",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop",
    description: "Grow beautiful crystals and learn geology",
    category: ["stem", "6-8-years"],
  },

  // Fidgets & Gadgets
  {
    id: "fidget-1",
    name: "Sensory Fidget Pack",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    badge: "HOT",
    description: "Ultimate collection of fidget toys for focus",
    category: ["fidgets"],
  },
  {
    id: "fidget-2",
    name: "Pop It Deluxe Set",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    description: "Satisfying bubble popping sensory toy",
    category: ["fidgets"],
  },
  {
    id: "fidget-3",
    name: "Infinity Cube",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    description: "Endless flipping fidget cube",
    category: ["fidgets"],
  },
  {
    id: "fidget-4",
    name: "Magnetic Balls Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    description: "Build and create with magnetic spheres",
    category: ["fidgets", "building"],
  },

  // Building & Construction
  {
    id: "build-1",
    name: "Magnetic Building Blocks",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop",
    description: "Colorful magnetic tiles for creative building",
    category: ["building", "3-5-years"],
  },
  {
    id: "build-2",
    name: "Wooden Block Set Deluxe",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop",
    badge: "NEW",
    description: "Premium wooden blocks for endless creativity",
    category: ["building", "inclusive", "0-2-years"],
  },
  {
    id: "build-3",
    name: "Construction Vehicle Set",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop",
    description: "Build and play with construction trucks",
    category: ["building", "3-5-years"],
  },
  {
    id: "build-4",
    name: "Marble Run Mega Set",
    price: 48.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop",
    description: "Design elaborate marble run tracks",
    category: ["building", "stem", "6-8-years"],
  },

  // Outdoor Fun
  {
    id: "outdoor-1",
    name: "Outdoor Play Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop",
    description: "Complete outdoor adventure equipment",
    category: ["outdoor", "6-8-years"],
  },
  {
    id: "outdoor-2",
    name: "Water Play Station",
    price: 67.99,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop",
    badge: "HOT",
    description: "Fun water activities for summer",
    category: ["outdoor", "3-5-years"],
  },
  {
    id: "outdoor-3",
    name: "Sports Equipment Bundle",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop",
    description: "Soccer, basketball, and more!",
    category: ["outdoor", "6-8-years"],
  },
  {
    id: "outdoor-4",
    name: "Garden Explorer Kit",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop",
    description: "Discover nature in your backyard",
    category: ["outdoor", "stem", "6-8-years"],
  },

  // Gifts
  {
    id: "gift-1",
    name: "Rainbow Stacking Rings",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop",
    badge: "NEW",
    description: "Classic toy in beautiful colors",
    category: ["gifts", "0-2-years"],
  },
  {
    id: "gift-2",
    name: "Musical Instruments Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1519340240522-de8e8e9d7824?w=600&auto=format&fit=crop",
    description: "Complete beginner music set",
    category: ["gifts", "3-5-years"],
  },
  {
    id: "gift-3",
    name: "Plush Animal Collection",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&auto=format&fit=crop",
    description: "Soft, cuddly friends for all ages",
    category: ["gifts", "0-2-years"],
  },
  {
    id: "gift-4",
    name: "Art & Craft Supplies",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop",
    description: "Everything for creative expression",
    category: ["gifts", "3-5-years"],
  },
  {
    id: "gift-5",
    name: "Treasure Chest Surprise Box",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&auto=format&fit=crop",
    badge: "BEST SELLER",
    description: "Curated toy collection in decorative chest",
    category: ["gifts"],
  },

  // Inclusive Play
  {
    id: "inclusive-1",
    name: "Sensory Play Mat",
    price: 56.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop",
    description: "Multi-textured learning experience",
    category: ["inclusive", "0-2-years"],
  },
  {
    id: "inclusive-2",
    name: "Adaptive Building Blocks",
    price: 43.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop",
    badge: "NEW",
    description: "Easy-grip blocks for all abilities",
    category: ["inclusive", "building", "3-5-years"],
  },
  {
    id: "inclusive-3",
    name: "Emotion Learning Cards",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop",
    description: "Develop emotional intelligence",
    category: ["inclusive", "3-5-years"],
  },
  {
    id: "inclusive-4",
    name: "Braille Learning Set",
    price: 37.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop",
    description: "Inclusive learning for all",
    category: ["inclusive", "6-8-years"],
  },

  // More popular items
  {
    id: "pop-1",
    name: "Remote Control Car",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    badge: "NEW",
    description: "High-speed RC car with LED lights",
    category: ["6-8-years"],
  },
  {
    id: "pop-2",
    name: "Educational Board Game",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop",
    description: "Learn while having fun with family",
    category: ["6-8-years"],
  },
  {
    id: "pop-3",
    name: "Wooden Puzzle Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop",
    description: "Challenging puzzles for developing minds",
    category: ["3-5-years"],
  },
  {
    id: "pop-4",
    name: "Doll House Mansion",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop",
    badge: "BEST SELLER",
    description: "Three-story dream house with furniture",
    category: ["gifts", "3-5-years"],
  },
  {
    id: "pop-5",
    name: "Science Experiment Kit",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop",
    description: "50+ experiments to discover science",
    category: ["stem", "6-8-years"],
  },
  {
    id: "pop-6",
    name: "Dinosaur Collection Set",
    price: 33.99,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&auto=format&fit=crop",
    badge: "HOT",
    description: "Realistic dinosaur figures for imaginative play",
    category: ["gifts", "3-5-years"],
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category.includes(category));
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.badge).slice(0, 8);
};
