// CategoryFilter.jsx
import React from 'react';

// Assurez-vous que le composant est exporté par défaut
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
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
  );
};

export default CategoryFilter; // ← Important: export default