import { Star, Clock, Flame, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { specialties } from '../../data/menu';

const SpecialtiesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Notre Carte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Spécialités du <span className="text-orange-500">Restaurant</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez nos plats signature préparés avec passion par notre chef
          </p>
        </div>

        {/* Grille des spécialités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Container image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                {/* Prix */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/70 backdrop-blur-sm text-white text-lg font-bold px-3 py-1 rounded-lg">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-gray-600">4.8/5</span>
                  </div>
                  <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors flex items-center gap-1">
                    Commander
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className="text-center mt-12">
          <button  onClick={() => navigate('/menu')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
            Voir toute la carte
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesSection;