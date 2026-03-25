// src/components/menu/MenuCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock, Star, Flame } from 'lucide-react';

const MenuCard = ({ item, onAddToCart }) => {
  // Fonction pour gérer l'ajout au panier avec propagation
  const handleAddToCart = (e) => {
    e.preventDefault(); // Empêcher la navigation vers la page détail
    e.stopPropagation(); // Empêcher la propagation du clic
    onAddToCart(item);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image avec lien vers le détail */}
      <Link to={`/details/${item.id}`}>
        <div className="relative h-48 overflow-hidden cursor-pointer">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {item.popular && (
              <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Star className="w-3 h-3 fill-current" />
                Populaire
              </span>
            )}
          </div>
          
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {item.spicy && (
              <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Flame className="w-3 h-3" />
                Épicé
              </span>
            )}
          </div>

          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white text-orange-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Voir les détails
            </span>
          </div>
        </div>
      </Link>

      {/* Contenu */}
      <div className="p-5">
        {/* Titre avec lien */}
        <Link to={`/details/${item.id}`}>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors cursor-pointer mb-2">
            {item.name}
          </h3>
        </Link>
        
        {/* Temps de préparation */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
          <Clock className="w-4 h-4" />
          <span>{item.time || '15-20 min'}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        {/* Prix et bouton commande */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-orange-500">
              {item.price} FCFA
            </span>
            <span className="text-xs text-gray-400 ml-1">TTC</span>
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;