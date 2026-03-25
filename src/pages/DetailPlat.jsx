// src/pages/DetailPlat.jsx
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Clock, Flame, ChefHat, Users, 
  ShoppingCart, Heart, Share2, Star, 
  Timer, Utensils, Info, CheckCircle 
} from 'lucide-react';
import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';

const DetailPlat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, getTotalItems, setIsCartOpen } = useCart();
  const [plat, setPlat] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  useEffect(() => {
    // Trouver le plat par son id
    const foundPlat = menuItems.find(item => item.id === parseInt(id));
    if (foundPlat) {
      setPlat(foundPlat);
    } else {
      // Rediriger vers le menu si plat non trouvé
      navigate('/menu');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(plat);
    }
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  if (!plat) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <div className="text-4xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold text-gray-800">Chargement...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  // Données supplémentaires pour le plat
  const platDetails = {
    ingredients: getIngredients(plat.id),
    nutrition: {
      calories: getCalories(plat.id),
      proteins: getProteins(plat.id),
      carbs: getCarbs(plat.id),
      fats: getFats(plat.id)
    },
    cookingTime: plat.time,
    difficulty: getDifficulty(plat.id),
    servings: getServings(plat.id),
    allergens: getAllergens(plat.id),
    winePairing: getWinePairing(plat.id)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header personnalisé pour le détail */}
      <Header 
        title={plat.name}
        content={`Découvrez tous les détails de ce plat préparé avec passion`}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Image */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={plat.image} 
                alt={plat.name}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {plat.popular && (
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Populaire
                </span>
              )}
              {plat.spicy && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  Épicé
                </span>
              )}
              {platDetails.allergens.map((allergen, idx) => (
                <span key={idx} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  {allergen}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne droite - Détails */}
          <div className="space-y-6">
            {/* Prix et commande */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-orange-500">{plat.price}</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Share2 className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Ajouter au panier
                </button>
              </div>
              
              {showAddedMessage && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Plat ajouté au panier !
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-orange-500" />
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{plat.description}</p>
            </div>

            {/* Informations de préparation */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <Timer className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Temps de préparation</div>
                <div className="font-bold text-gray-800">{plat.time}</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <ChefHat className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Difficulté</div>
                <div className="font-bold text-gray-800">{platDetails.difficulty}</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Portions</div>
                <div className="font-bold text-gray-800">{platDetails.servings} pers</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <Utensils className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm text-gray-500">Catégorie</div>
                <div className="font-bold text-gray-800 capitalize">{plat.category}</div>
              </div>
            </div>

            {/* Ingrédients */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-orange-500" />
                Ingrédients
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {platDetails.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Valeurs nutritionnelles */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                Valeurs nutritionnelles
              </h2>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-500">{platDetails.nutrition.calories}</div>
                  <div className="text-xs text-gray-500">Calories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500">{platDetails.nutrition.proteins}g</div>
                  <div className="text-xs text-gray-500">Protéines</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500">{platDetails.nutrition.carbs}g</div>
                  <div className="text-xs text-gray-500">Glucides</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500">{platDetails.nutrition.fats}g</div>
                  <div className="text-xs text-gray-500">Lipides</div>
                </div>
              </div>
            </div>

            {/* Accord mets et vins */}
            {platDetails.winePairing && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  🍷 Accord mets et vins
                </h2>
                <p className="text-gray-600">{platDetails.winePairing}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Panier flottant */}
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

      <Footer />
    </div>
  );
};

// Fonctions helper pour les données détaillées
function getIngredients(platId) {
  const ingredients = {
    1: ['Poisson frais', 'Farine', 'Oignons', 'Ail', 'Persil', 'Piment', 'Huile de friture', 'Citron'],
    2: ['Laitue romaine', 'Poulet grillé', 'Parmesan', 'Croûtons', 'Sauce césar', 'Œuf'],
    3: ['Poulet', 'Plantains mûrs', 'Carottes', 'Haricots verts', 'Oignons', 'Ail', 'Sauce tomate', 'Épices'],
    4: ['Morue fumée', 'Crevettes', 'Feuilles de ndolé', 'Arachides', 'Huile de palme', 'Oignons'],
    5: ['Feuilles d\'éru', 'Viande fumée', 'Crevettes', 'Plantain mûr', 'Huile rouge', 'Épices'],
    6: ['Bœuf', 'Épices', 'Piment', 'Oignons', 'Poivrons', 'Sauce soja'],
    7: ['Poulet', 'Marinade', 'Épices', 'Frites de patates douces', 'Sauce'],
    8: ['Poisson frais', 'Citron', 'Ail', 'Piment', 'Légumes grillés', 'Sauce'],
    9: ['Crevettes géantes', 'Ail', 'Persil', 'Beurre', 'Riz parfumé', 'Citron'],
    10: ['Chocolat noir', 'Beurre', 'Œufs', 'Sucre', 'Farine', 'Glace vanille'],
    11: ['Pâte feuilletée', 'Fruits frais', 'Crème pâtissière', 'Sucre glace'],
    12: ['Fleurs d\'hibiscus', 'Sucre', 'Eau', 'Menthe', 'Gingembre'],
    13: ['Gingembre frais', 'Citron vert', 'Sucre', 'Eau', 'Menthe']
  };
  return ingredients[platId] || ['Ingrédients non disponibles'];
}

function getCalories(platId) {
  const calories = { 1: 250, 2: 320, 3: 580, 4: 450, 5: 420, 6: 380, 7: 520, 8: 350, 9: 290, 10: 380, 11: 280, 12: 120, 13: 90 };
  return calories[platId] || 300;
}

function getProteins(platId) {
  const proteins = { 1: 15, 2: 22, 3: 35, 4: 28, 5: 25, 6: 32, 7: 38, 8: 30, 9: 25, 10: 5, 11: 4, 12: 1, 13: 0 };
  return proteins[platId] || 15;
}

function getCarbs(platId) {
  const carbs = { 1: 18, 2: 12, 3: 45, 4: 30, 5: 35, 6: 15, 7: 40, 8: 20, 9: 35, 10: 45, 11: 35, 12: 28, 13: 22 };
  return carbs[platId] || 25;
}

function getFats(platId) {
  const fats = { 1: 12, 2: 18, 3: 22, 4: 25, 5: 20, 6: 15, 7: 25, 8: 18, 9: 12, 10: 22, 11: 14, 12: 0, 13: 0 };
  return fats[platId] || 15;
}

function getDifficulty(platId) {
  const difficulties = { 1: 'Facile', 2: 'Facile', 3: 'Moyen', 4: 'Moyen', 5: 'Moyen', 6: 'Facile', 7: 'Facile', 8: 'Moyen', 9: 'Difficile', 10: 'Facile', 11: 'Facile', 12: 'Très facile', 13: 'Très facile' };
  return difficulties[platId] || 'Moyen';
}

function getServings(platId) {
  const servings = { 1: 2, 2: 1, 3: 2, 4: 2, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 4, 12: 1, 13: 1 };
  return servings[platId] || 2;
}

function getAllergens(platId) {
  const allergens = {
    1: ['Poisson', 'Gluten'],
    2: ['Œufs', 'Lactose', 'Gluten'],
    3: ['Gluten'],
    4: ['Poisson', 'Crustacés', 'Arachides'],
    5: ['Poisson', 'Crustacés'],
    6: ['Gluten', 'Soja'],
    7: ['Gluten'],
    8: ['Poisson'],
    9: ['Crustacés'],
    10: ['Œufs', 'Lactose', 'Gluten'],
    11: ['Gluten', 'Lactose'],
    12: [],
    13: []
  };
  return allergens[platId] || [];
}

function getWinePairing(platId) {
  const wines = {
    3: 'Vin rouge léger comme un Pinot Noir',
    4: 'Vin blanc sec comme un Sauvignon Blanc',
    6: 'Vin rouge corsé comme un Cabernet Sauvignon',
    8: 'Vin blanc sec comme un Chardonnay',
    9: 'Vin blanc sec avec une note citronnée'
  };
  return wines[platId] || 'Notre sommelier vous conseillera sur place';
}

export default DetailPlat;