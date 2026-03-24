import { 
  ChefHat, 
  Utensils, 
  Coffee, 
  IceCream, 
  Wine, 
  ShoppingCart,
  Star,
  Clock,
  Flame,
  Heart,
  ChevronRight
} from 'lucide-react';
// Catégories du menu
export const categories = [
  { id: 'all', name: 'Tous', icon: Utensils },
  { id: 'starters', name: 'Entrées', icon: ChefHat },
  { id: 'mains', name: 'Plats Principaux', icon: Flame },
  { id: 'grills', name: 'Grillades', icon: Flame },
  { id: 'seafood', name: 'Poissons & Fruits de Mer', icon: Utensils },
  { id: 'desserts', name: 'Desserts', icon: IceCream },
  { id: 'drinks', name: 'Boissons', icon: Coffee },
  { id: 'wines', name: 'Vins', icon: Wine }
];

// Données du menu
export const menuItems = [
  // Entrées
  {
    id: 1,
    name: 'Accras de Poissons',
    description: 'Beignets de poisson épicés, sauce piquante maison',
    price: '3 500 FCFA',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    popular: true,
    spicy: true,
    time: '10 min'
  },
  {
    id: 2,
    name: 'Salade César',
    description: 'Laitue romaine, poulet grillé, parmesan, croûtons, sauce césar',
    price: '4 500 FCFA',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop',
    popular: false,
    spicy: false,
    time: '10 min'
  },
  // Plats Principaux
  {
    id: 3,
    name: 'Poulet DG',
    description: 'Poulet braisé aux légumes de saison, plantains mûrs et sauce spéciale',
    price: '12 500 FCFA',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1604909052743-94e818986d86?w=400&h=300&fit=crop',
    popular: true,
    spicy: true,
    time: '25 min'
  },
  {
    id: 4,
    name: 'Ndolé',
    description: 'Morue fumée, crevettes, arachides et légumes amers',
    price: '8 500 FCFA',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1637095021723-8a2b8c2c6f3e?w=400&h=300&fit=crop',
    popular: true,
    spicy: false,
    time: '20 min'
  },
  {
    id: 5,
    name: 'Eru avec Plantain',
    description: 'Feuilles d\'éru, viande fumée, crevettes, plantain mûr',
    price: '7 500 FCFA',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1637095021723-8a2b8c2c6f3e?w=400&h=300&fit=crop',
    popular: false,
    spicy: false,
    time: '20 min'
  },
  // Grillades
  {
    id: 6,
    name: 'Brochettes de Bœuf',
    description: 'Brochettes marinées grillées au feu de bois, sauce piment',
    price: '6 500 FCFA',
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    popular: true,
    spicy: true,
    time: '15 min'
  },
  {
    id: 7,
    name: 'Poulet Braisé',
    description: 'Demi-poulet mariné grillé, frites de patates douces',
    price: '9 500 FCFA',
    category: 'grills',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop',
    popular: true,
    spicy: false,
    time: '20 min'
  },
  // Poissons
  {
    id: 8,
    name: 'Poisson Braisé',
    description: 'Poisson frais entier grillé, sauce pimentée, légumes',
    price: '15 000 FCFA',
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop',
    popular: true,
    spicy: true,
    time: '30 min'
  },
  {
    id: 9,
    name: 'Crevettes Sautées',
    description: 'Crevettes géantes sautées à l\'ail et persil, riz parfumé',
    price: '18 000 FCFA',
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1559742811-822873691dfc?w=400&h=300&fit=crop',
    popular: false,
    spicy: false,
    time: '20 min'
  },
  // Desserts
  {
    id: 10,
    name: 'Fondant au Chocolat',
    description: 'Cœur coulant au chocolat noir, glace vanille',
    price: '4 500 FCFA',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    popular: true,
    spicy: false,
    time: '10 min'
  },
  {
    id: 11,
    name: 'Tarte aux Fruits',
    description: 'Tarte croustillante aux fruits frais de saison',
    price: '3 500 FCFA',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    popular: false,
    spicy: false,
    time: '10 min'
  },
  // Boissons
  {
    id: 12,
    name: 'Jus de Bissap',
    description: 'Jus traditionnel aux fleurs d\'hibiscus',
    price: '1 500 FCFA',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    popular: true,
    spicy: false,
    time: '5 min'
  },
  {
    id: 13,
    name: 'Jus de Gingembre',
    description: 'Jus frais au gingembre et citron vert',
    price: '1 500 FCFA',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop',
    popular: false,
    spicy: false,
    time: '5 min'
  }
];