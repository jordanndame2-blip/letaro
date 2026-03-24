import { useState } from 'react';
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

import { categories,menuItems } from '../data/menu';
import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);

  // Filtrer les plats par catégorie
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section + Navbar */}
      <Navbar/>
      <Header
        title={`Menu`}
        content={`Découvrez nos plats préparés avec passion et générosité. Une cuisine qui fait voyager vos papilles.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Grille des plats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Populaire
                    </span>
                  </div>
                )}
                {item.spicy && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      🌶️ Épicé
                    </span>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-orange-500">
                    {item.price}
                  </span>
                  <button 
                    onClick={() => setCartCount(cartCount + 1)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun plat */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun plat dans cette catégorie</p>
          </div>
        )}

        {/* Panier flottant */}
        {cartCount > 0 && (
          <div className="fixed bottom-8 right-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;