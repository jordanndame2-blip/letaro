import { ChefHat, Utensils, ShoppingBag, Clock } from 'lucide-react';

const features = [
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

// Composant Card avec thème orange
const Card = ({ title, description, icon: Icon }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-500">
      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
        <Icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Section principale
const Description = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Pourquoi nous choisir ?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Une expérience culinaire unique
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez nos atouts qui font la différence
          </p>
        </div>

        {/* Grille des cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;