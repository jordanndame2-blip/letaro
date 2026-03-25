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
  ChevronRight,
  ShoppingBag
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
    price: '3500',
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
    price: '4500',
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
    price: '12500',
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
    price: '8500',
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
    price: '7500',
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
    price: '6500',
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
    price: '9500',
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
    price: '15000',
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
    price: '18000',
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
    price: '4500',
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
    price: '3500',
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
    price: '1500',
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
    price: '1500',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop',
    popular: false,
    spicy: false,
    time: '5 min'
  }
];

export const specialties = [
  {
    id: 1,
    name: 'Poulet DG',
    description: 'Poulet braisé aux légumes de saison, plantains et sauce spéciale',
    price: '12500',
    image: 'https://images.unsplash.com/photo-1604909052743-94e818986d86?w=500&h=400&fit=crop',
    badge: 'Plat signature',
    time: '25 min',
    calories: '850 kcal'
  },
  {
    id: 2,
    name: 'Ndolé',
    description: 'Morue, crevettes, arachides et légumes amers traditionnels',
    price: '8500',
    image: 'https://images.unsplash.com/photo-1637095031521-2d2f8c3f4b3e?w=500&h=400&fit=crop',
    badge: 'Spécialité maison',
    time: '20 min',
    calories: '620 kcal'
  },
  {
    id: 3,
    name: 'Poisson Braisé',
    description: 'Poisson frais grillé au feu de bois, sauce pimentée',
    price: '15000',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&h=400&fit=crop',
    badge: 'Frais du jour',
    time: '30 min',
    calories: '720 kcal'
  },
  {
    id: 4,
    name: 'Sanga',
    description: 'Épinards, maïs moulu et viande fumée, un délice traditionnel',
    price: '7500',
    image: 'https://images.unsplash.com/photo-1637095021723-8a2b8c2c6f3e?w=500&h=400&fit=crop',
    badge: 'Authentique',
    time: '20 min',
    calories: '540 kcal'
  },
  {
    id: 5,
    name: 'Crevettes Sautées',
    description: 'Crevettes géantes sautées à l\'ail et persil, sauce légère',
    price: '18000',
    image: 'https://images.unsplash.com/photo-1559742811-822873691dfc?w=500&h=400&fit=crop',
    badge: 'Plat premium',
    time: '20 min',
    calories: '480 kcal'
  },
  {
    id: 6,
    name: 'Tacos Camerounais',
    description: 'Galette garnie de viande, fromage, salade et sauce spéciale',
    price: '4500',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500&h=400&fit=crop',
    badge: 'Populaire',
    time: '15 min',
    calories: '680 kcal'
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Chef Jean-Pierre',
    role: 'Chef Exécutif',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=300&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Chef Marie',
    role: 'Pâtissière',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Thomas',
    role: 'Chef de Salle',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Sofia',
    role: 'Sommelière',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
  },
];

 export const spaces = [
    {
      id: 1,
      name: 'Cuisine',
      icon: '👨‍🍳',
      category: 'cuisine',
      description: 'Une cuisine moderne et ouverte où nos chefs créent des plats d\'exception.',
      images: [
        'https://images.unsplash.com/photo-1556911073-52527cb43769?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 2,
      name: 'Salle du Restaurant',
      icon: '🍽️',
      category: 'salle',
      description: 'Un cadre chaleureux et élégant pour des moments inoubliables.',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 3,
      name: 'Bar',
      icon: '🍸',
      category: 'bar',
      description: 'Un bar chic où nos mixologues créent des cocktails signatures.',
      images: [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 4,
      name: 'Espace Karaoké',
      icon: '🎤',
      category: 'karaoke',
      description: 'Un espace privatisable pour des soirées mémorables entre amis.',
      images: [
        'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop',
      ],
    },
  ];

 export const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      comment: 'Une expérience culinaire exceptionnelle ! Le chef nous a régalés. Les plats sont savoureux et le service impeccable.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      date: '15 mars 2026',
    },
    {
      id: 2,
      name: 'Philippe Dubois',
      comment: 'Le meilleur restaurant de la ville ! Les saveurs sont authentiques et les produits frais. Je recommande vivement.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      date: '10 mars 2026',
    },
    {
      id: 3,
      name: 'Isabelle Lambert',
      comment: 'Très belle découverte ! Le cadre est magnifique et le personnel aux petits soins.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      date: '5 mars 2026',
    },
    {
      id: 4,
      name: 'Thomas Bernard',
      comment: 'Un sans-faute ! De l\'entrée au dessert, tout était parfait. Nous reviendrons très vite.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      date: '28 février 2026',
    },
    {
      id: 5,
      name: 'Claire Moreau',
      comment: 'Service attentionné et cuisine créative. J\'ai adoré l\'ambiance intimiste.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      date: '20 février 2026',
    },
    {
      id: 6,
      name: 'Antoine Girard',
      comment: 'Excellent rapport qualité-prix. Les portions sont généreuses et la carte variée.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      date: '15 février 2026',
    },
    {
      id: 7,
      name: 'Marie Lefèvre',
      comment: 'La pâtisserie est divine ! Mention spéciale pour le soufflé au chocolat.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      date: '10 février 2026',
    },
    {
      id: 8,
      name: 'Lucas Petit',
      comment: 'Accueil chaleureux et conseils avisés de la sommelière. Une belle expérience.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      date: '5 février 2026',
    },
    {
      id: 9,
      name: 'Nathalie Robert',
      comment: 'Parfait pour un dîner en amoureux. Ambiance romantique et cuisine raffinée.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
      date: '30 janvier 2026',
    },
    {
      id: 10,
      name: 'Jean-Michel Durand',
      comment: 'Une adresse à découvrir absolument ! Les plats sont magnifiquement présentés.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      date: '25 janvier 2026',
    },
  ];
export const features = [
  {
    id: 1,
    title: 'Maître Chef',
    description: 'Notre chef étoilé prépare des plats exceptionnels avec des ingrédients frais et des recettes authentiques.',
    icon: ChefHat,
  },
  {
    id: 2,
    title: 'Nourriture de Qualité',
    description: 'Des produits frais, locaux et de saison sélectionnés avec soin pour garantir une qualité exceptionnelle.',
    icon: Utensils,
  },
  {
    id: 3,
    title: 'Commande en Ligne',
    description: 'Commandez facilement depuis notre site et recevez vos plats préférés directement chez vous.',
    icon: ShoppingBag,
  },
  {
    id: 4,
    title: 'Service 24/7',
    description: 'À votre service jour et nuit pour satisfaire toutes vos envies, à toute heure.',
    icon: Clock,
  }
];