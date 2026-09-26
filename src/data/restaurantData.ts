export interface MenuItem {
  id: string;
  name: string;
  category: 'soups' | 'meals' | 'drinks' | 'specials';
  price: number;
  formattedPrice: string;
  description: string;
  image: string;
  isPopular?: boolean;
  spicyLevel?: number; // 1-3
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const RESTAURANT_INFO = {
  name: "PERSONAL JOINT",
  tagline: "PEPPER SOUP & MORE",
  subTagline: "Good food. Great flavors. Authentic Nigerian pepper soup.",
  phone: "+234 801 234 5678",
  phoneRaw: "+2348012345678",
  whatsapp: "+234 801 234 5678",
  whatsappRaw: "2348012345678",
  email: "hello@personaljoint.com",
  address: "14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  openingHours: "Mon – Sun: 11:00 AM – 11:00 PM",
  mapsUrl: "https://maps.google.com/?q=Admiralty+Way+Lekki+Phase+1+Lagos",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  }
};

// Popular Pepper Soups from the wireframe
export const POPULAR_PEPPER_SOUPS: MenuItem[] = [
  {
    id: "pop-cow-leg",
    name: "Cow Leg Pepper Soup",
    category: "soups",
    price: 3500,
    formattedPrice: "₦3,500",
    description: "Tender, slow-simmered cow leg in rich aromatic spices and scent leaves.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    isPopular: true,
    spicyLevel: 3,
  },
  {
    id: "pop-goat-meat",
    name: "Goat Meat Pepper Soup",
    category: "soups",
    price: 4000,
    formattedPrice: "₦4,000",
    description: "Our signature prime goat cuts infused with traditional Uda and Ehuru broth.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
    isPopular: true,
    spicyLevel: 3,
  },
  {
    id: "pop-beef",
    name: "Beef Pepper Soup",
    category: "soups",
    price: 3500,
    formattedPrice: "₦3,500",
    description: "Juicy prime beef cuts swimming in fiery and fragrant herbal pepper broth.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    isPopular: true,
    spicyLevel: 2,
  },
  {
    id: "pop-fish",
    name: "Fish Pepper Soup",
    category: "soups",
    price: 3000,
    formattedPrice: "₦3,000",
    description: "Freshly caught catfish or croaker steeped in a delicate spicy pepper blend.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
    isPopular: true,
    spicyLevel: 2,
  },
  {
    id: "pop-chicken",
    name: "Chicken Pepper Soup",
    category: "soups",
    price: 2800,
    formattedPrice: "₦2,800",
    description: "Organic local chicken pieces seasoned with natural mountain herbs and chili.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    isPopular: true,
    spicyLevel: 2,
  },
];

// Complete Specialties Menu with category filtering
export const ALL_MENU_ITEMS: MenuItem[] = [
  // Pepper Soups
  {
    id: "soup-1",
    name: "Cow Leg Pepper Soup",
    category: "soups",
    price: 3500,
    formattedPrice: "₦3,500",
    description: "Tender cow leg cooked in rich spices, herbs and traditional scent leaf broth.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    spicyLevel: 3,
  },
  {
    id: "soup-2",
    name: "Goat Meat Pepper Soup",
    category: "soups",
    price: 4000,
    formattedPrice: "₦4,000",
    description: "Premium goat meat with traditional spices, slow-simmered for maximum depth.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
    spicyLevel: 3,
  },
  {
    id: "soup-3",
    name: "Beef Pepper Soup",
    category: "soups",
    price: 3500,
    formattedPrice: "₦3,500",
    description: "Juicy beef cuts in a flavorful, hot pepper broth infused with native seasonings.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    spicyLevel: 2,
  },
  {
    id: "soup-4",
    name: "Fish Pepper Soup",
    category: "soups",
    price: 3000,
    formattedPrice: "₦3,000",
    description: "Fresh fish steak seasoned with our special pepper blend and aroma-rich herbs.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
    spicyLevel: 2,
  },
  {
    id: "soup-5",
    name: "Chicken Pepper Soup",
    category: "soups",
    price: 2800,
    formattedPrice: "₦2,800",
    description: "Tender chicken pieces simmered in spicy pepper soup broth with scotch bonnets.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    spicyLevel: 2,
  },
  {
    id: "soup-6",
    name: "Extra Meat (Add On)",
    category: "soups",
    price: 1500,
    formattedPrice: "₦1,500",
    description: "More savory meat cuts added straight to elevate your pepper soup bowl.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
    spicyLevel: 1,
  },
  // Meals
  {
    id: "meal-1",
    name: "Smoky Jollof Rice & Spicy Asun",
    category: "meals",
    price: 4500,
    formattedPrice: "₦4,500",
    description: "Firewood-style party jollof served with hot, peppery diced roasted goat meat.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    badge: "Chef Choice",
  },
  {
    id: "meal-2",
    name: "Pounded Yam & Rich Egusi Soup",
    category: "meals",
    price: 5000,
    formattedPrice: "₦5,000",
    description: "Silky pounded yam with leafy melon-seed egusi soup, stockfish and assorted meats.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
  },
  {
    id: "meal-3",
    name: "Fried Yam & Peppered Fish",
    category: "meals",
    price: 3800,
    formattedPrice: "₦3,800",
    description: "Golden fried sweet yam batons paired with crispy pepper-glazed croaker fish.",
    image: "/src/assets/images/soup_ingredients_1790423328141.jpg",
  },
  {
    id: "meal-4",
    name: "White Rice & Designer Ayamase",
    category: "meals",
    price: 4200,
    formattedPrice: "₦4,200",
    description: "Steamed fragrant rice with traditional green pepper ofada sauce and boiled egg.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
  },
  {
    id: "meal-5",
    name: "Fried Plantain & Peppered Gizzard",
    category: "meals",
    price: 3200,
    formattedPrice: "₦3,200",
    description: "Caramelized ripe dodo tossed with spicy bell pepper gizzard bites (Gizdodo).",
    image: "/src/assets/images/soup_ingredients_1790423328141.jpg",
  },
  {
    id: "meal-6",
    name: "Special Fried Rice & Chicken",
    category: "meals",
    price: 4200,
    formattedPrice: "₦4,200",
    description: "Wok-tossed seasoned rice with sweet corn, kidney beans, liver and peppered chicken.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
  },
  // Drinks
  {
    id: "drink-1",
    name: "Chilled Zobo Supreme",
    category: "drinks",
    price: 1200,
    formattedPrice: "₦1,200",
    description: "Refreshing cold-pressed hibiscus infusion with pineapple, ginger, and cloves.",
    image: "/src/assets/images/soup_ingredients_1790423328141.jpg",
    badge: "House Brew",
  },
  {
    id: "drink-2",
    name: "Fresh Native Palm Wine",
    category: "drinks",
    price: 1800,
    formattedPrice: "₦1,800",
    description: "Naturally sweet, freshly tapped frothy palm wine served chilled in a calabash.",
    image: "/src/assets/images/restaurant_interior_1790423314921.jpg",
  },
  {
    id: "drink-3",
    name: "Classic Nigerian Chapman",
    category: "drinks",
    price: 2200,
    formattedPrice: "₦2,200",
    description: "Sparkling citrus mocktail with Angostura aromatic bitters, cucumber, and fresh lemon slices.",
    image: "/src/assets/images/restaurant_patio_1790423338930.jpg",
  },
  {
    id: "drink-4",
    name: "Kunu Aya (Tiger Nut Milk)",
    category: "drinks",
    price: 1500,
    formattedPrice: "₦1,500",
    description: "Creamy, naturally sweet blended tiger nuts, coconut milk and spicy ginger.",
    image: "/src/assets/images/soup_ingredients_1790423328141.jpg",
  },
  {
    id: "drink-5",
    name: "Malta Guinness & Cold Sodas",
    category: "drinks",
    price: 800,
    formattedPrice: "₦800",
    description: "Ice-cold premium non-alcoholic malt and choice canned beverages.",
    image: "/src/assets/images/restaurant_interior_1790423314921.jpg",
  },
  {
    id: "drink-6",
    name: "Pure Natural Spring Water",
    category: "drinks",
    price: 500,
    formattedPrice: "₦500",
    description: "Chilled premium bottled spring water for complete refreshment.",
    image: "/src/assets/images/restaurant_patio_1790423338930.jpg",
  },
  // Specials
  {
    id: "special-1",
    name: "Delta Fisherman Soup Special",
    category: "specials",
    price: 6500,
    formattedPrice: "₦6,500",
    description: "Riverside specialty with king prawns, crabs, fresh fish steak, periwinkles and ngolo.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
    badge: "Specialty",
  },
  {
    id: "special-2",
    name: "Point & Kill Fresh Catfish",
    category: "specials",
    price: 5500,
    formattedPrice: "₦5,500",
    description: "Live catfish freshly prepared to order in intense aromatic native broth and herbs.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    badge: "Live Catch",
  },
  {
    id: "special-3",
    name: "Traditional Nkwobi Delicacy",
    category: "specials",
    price: 4500,
    formattedPrice: "₦4,500",
    description: "Spiced cow foot cooked in thick potash palm oil paste with utazi leaves.",
    image: "/src/assets/images/soup_ingredients_1790423328141.jpg",
  },
  {
    id: "special-4",
    name: "Spicy Isi Ewu (Goat Head)",
    category: "specials",
    price: 6000,
    formattedPrice: "₦6,000",
    description: "Traditional spicy Igbo goat head delicacy enriched with native spices and herbs.",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
  },
  {
    id: "special-5",
    name: "Sizzling Peppered Snail Platter",
    category: "specials",
    price: 4800,
    formattedPrice: "₦4,800",
    description: "Jumbo crunchy garden snails simmered in fiery scotch bonnet sauce and onions.",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
  },
  {
    id: "special-6",
    name: "Smoky Beef & Chicken Suya",
    category: "specials",
    price: 3500,
    formattedPrice: "₦3,500",
    description: "Charcoal-grilled thin beef strips dusted in spicy yaji pepper, served with red onions.",
    image: "/src/assets/images/restaurant_interior_1790423314921.jpg",
  }
];

// Testimonials matching wireframe (Customer Favorites)
export const TESTIMONIALS_SET_1: Testimonial[] = [
  {
    id: "t1",
    name: "Chima A.",
    location: "Lagos",
    quote: "The best pepper soup I've ever had! The taste is unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "t2",
    name: "Tunde O.",
    location: "Abuja",
    quote: "Fresh, hot and full of flavor. The place is a gem!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "t3",
    name: "Blessing E.",
    location: "Port Harcourt",
    quote: "Always my go-to spot for real pepper soup. Keep it up!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=160&q=80"
  }
];

// Reviews section (Section 17 from wireframe)
export const REVIEWS_SET_2: Testimonial[] = [
  {
    id: "r1",
    name: "Peace D.",
    location: "Ikeja",
    quote: "The pepper soup here is on another level! Fresh, hot and delicious!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "r2",
    name: "Emeka J.",
    location: "Lekki",
    quote: "Best local food spot I've been to. The service is top-notch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
  },
  {
    id: "r3",
    name: "Victoria S.",
    location: "Victoria Island",
    quote: "I always come back. The taste is consistent and amazing!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
  }
];

// Gallery items
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Signature Goat Meat Pepper Soup",
    category: "Signature Dishes",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    description: "Slow-cooked goat meat simmered in traditional calabash nutmeg and uda broth."
  },
  {
    id: "g2",
    title: "Vibrant Joint Atmosphere",
    category: "Restaurant Vibes",
    image: "/src/assets/images/restaurant_interior_1790423314921.jpg",
    description: "Warm lighting and welcoming seating designed for community and good company."
  },
  {
    id: "g3",
    title: "Handpicked Natural Spices",
    category: "Fresh Ingredients",
    image: "/src/assets/images/soup_ingredients_1790423328141.jpg",
    description: "Pure scent leaves, uda pods, ginger and habanero peppers ground daily."
  },
  {
    id: "g4",
    title: "Outdoor Dining & Evening Chill",
    category: "Restaurant Vibes",
    image: "/src/assets/images/restaurant_patio_1790423338930.jpg",
    description: "Relaxed open-air dining patio in the heart of Lekki."
  },
  {
    id: "g5",
    title: "Simmering Pot of Spiced Broth",
    category: "Kitchen & Craft",
    image: "/src/assets/images/cooking_pot_broth_1790423350009.jpg",
    description: "Simmered continuously to achieve deep savory herbal extraction."
  },
  {
    id: "g6",
    title: "Fresh Steaming Catfish Pepper Soup",
    category: "Signature Dishes",
    image: "/src/assets/images/hero_pepper_soup_1790423300944.jpg",
    description: "Freshly sliced fish with pepper soup spices and fresh aromatic herbs."
  }
];
