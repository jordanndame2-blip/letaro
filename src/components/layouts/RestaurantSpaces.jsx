import React from 'react';
import { spaces } from '../../data/menu';

const RestaurantSpaces = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Découvrez Nos Espaces
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un lieu unique où chaque espace raconte une histoire
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Grille des espaces avec descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                {/* En-tête de l'espace */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-500 p-3 rounded-2xl">
                    <span className="text-3xl">{space.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {space.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {space.description}
                </p>

                {/* Photos de l'espace (2 photos) */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {space.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-xl aspect-video"
                    >
                      <img
                        src={image}
                        alt={`${space.name} - ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSpaces;