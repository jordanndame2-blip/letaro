import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { categories, menuItems } from '../data/menu';
import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';
import MenuCard from '../components/menu/MenuCard';
import CategoryFilter from '../components/menu/CategoryFilter';
import CartDrawer from '../components/cart/CartDrawer';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart, getTotalItems, setIsCartOpen, isCartOpen } = useCart();

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header
        title="Menu"
        content="Découvrez nos plats préparés avec passion et générosité. Une cuisine qui fait voyager vos papilles."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Catégories */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Grille des plats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Message si aucun plat */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun plat dans cette catégorie</p>
          </div>
        )}

        {/* Icône panier flottant */}
        {getTotalItems() > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            </div>
          </button>
        )}

        {/* Panier latéral */}
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </div>
  );
};

export default Menu;