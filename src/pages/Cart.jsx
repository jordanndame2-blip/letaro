// src/pages/Cart.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard, Truck, Clock, X, MapPin, Home, Package, Banknote, Smartphone } from 'lucide-react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal, clearCart, refreshCart } = useCart();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // États pour la livraison
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
    phone: ''
  });
  const [deliveryTime, setDeliveryTime] = useState('asap');
  const [deliveryNote, setDeliveryNote] = useState('');
  
  // États pour le paiement
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  // Rafraîchir le panier au chargement
  useEffect(() => {
    refreshCart();
  }, []);

  // Calculer les frais de livraison
  const subtotal = parseFloat(getTotal());
  const getDeliveryFee = () => {
    if (deliveryMethod === 'takeaway') return 0;
    if (subtotal > 45000) return 0;
    return 1500;
  };
  const deliveryFee = getDeliveryFee();
  const finalTotal = (subtotal + deliveryFee).toFixed(2);

  // Options de livraison
  const deliveryOptions = [
    { id: 'delivery', name: 'Livraison à domicile', icon: Truck, price: deliveryFee, description: 'Livré chez vous en 30-45 min' },
    { id: 'takeaway', name: 'À emporter', icon: Package, price: 0, description: 'Retrait gratuit au restaurant' },
    { id: 'dinein', name: 'Sur place', icon: Home, price: 0, description: 'Service en salle' }
  ];

  // Options de paiement
  const paymentOptions = [
    { id: 'cash', name: 'Espèces', icon: Banknote, description: 'Paiement à la livraison' },
    { id: 'card', name: 'Carte bancaire', icon: CreditCard, description: 'Paiement sécurisé' },
    { id: 'mobile', name: 'Mobile Money', icon: Smartphone, description: 'Orange Money, MTN Mobile' }
  ];

  // Horaires de livraison
  const timeSlots = [
    { id: 'asap', label: 'Dès que possible', time: '30-45 min' },
    { id: '12h-13h', label: '12h00 - 13h00', time: 'Pour le déjeuner' },
    { id: '13h-14h', label: '13h00 - 14h00', time: 'Pour le déjeuner' },
    { id: '19h-20h', label: '19h00 - 20h00', time: 'Pour le dîner' },
    { id: '20h-21h', label: '20h00 - 21h00', time: 'Pour le dîner' },
    { id: '21h-22h', label: '21h00 - 22h00', time: 'Pour le dîner' }
  ];

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Votre panier est vide');
      return;
    }
    if (deliveryMethod === 'delivery' && (!deliveryAddress.street || !deliveryAddress.city)) {
      alert('Veuillez remplir l\'adresse de livraison');
      return;
    }
    confirmOrder();
    setShowConfirmModal(true);
  };

  const confirmOrder = () => {
    const orderDetails = {
      items: cart,
      subtotal: subtotal.toFixed(2),
      deliveryFee: deliveryFee.toFixed(2),
      total: finalTotal,
      deliveryMethod,
      deliveryAddress: deliveryMethod === 'delivery' ? deliveryAddress : null,
      deliveryTime,
      deliveryNote,
      paymentMethod,
      orderDate: new Date().toLocaleString()
    };
    
    console.log('Commande confirmée:', orderDetails);
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
    
    setShowConfirmModal(false);
    setShowSuccessModal(true);
    
    setTimeout(() => {
      setShowSuccessModal(false);
      clearCart();
    }, 3000);
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Header title={`Mon panier`}/>
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Votre panier est vide</h2>
          <p className="text-gray-600 mb-6">Découvrez notre menu et ajoutez vos plats préférés</p>
          <Link to="/menu" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600">
            Voir le menu
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header title={`Mon panier`}/>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/menu" className="text-gray-500 hover:text-orange-500">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Mon Panier</h1>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
              {cart.length} article{cart.length > 1 ? 's' : ''}
            </span>
          </div>
          <button onClick={clearCart} className="text-red-500 hover:text-red-600 text-sm flex items-center gap-1">
            <Trash2 className="w-4 h-4" />
            Vider le panier
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne de gauche - Articles et options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Liste des articles */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 border-b bg-gray-50">
                <h2 className="font-semibold text-gray-800">Vos articles ({cart.length})</h2>
              </div>
              <div className="divide-y">
                {cart.map((item) => (
                  <div key={item.id} className="p-4 flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-orange-500 font-bold">{item.price} FCFA</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-orange-200 rounded-full">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-orange-200 rounded-full">
                          <Plus className="w-4 h-4" />
                        </button>
                        <button onClick={() => removeFromCart(item.id)} className="ml-auto p-1 text-red-500 hover:bg-orange-200 rounded-full">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{(parseFloat(item.price) * item.quantity).toFixed(2)} FCFA</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modes de livraison */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-orange-500" />
                Mode de livraison
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {deliveryOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = deliveryMethod === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setDeliveryMethod(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        isSelected 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-orange-500' : 'text-gray-500'}`} />
                        <span className={`font-semibold ${isSelected ? 'text-orange-500' : 'text-gray-700'}`}>
                          {option.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{option.description}</p>
                      {option.price > 0 && <p className="text-xs text-orange-500 mt-1">+{option.price} fcfa</p>}
                      {option.price === 0 && deliveryMethod === option.id && (
                        <p className="text-xs text-green-500 mt-1">✓ Gratuit</p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Adresse de livraison */}
              {deliveryMethod === 'delivery' && (
                <div className="border-t pt-4 mt-2">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Adresse de livraison
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Rue / Adresse"
                      value={deliveryAddress.street}
                      onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
                      className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Ville"
                      value={deliveryAddress.city}
                      onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
                      className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Code postal"
                      value={deliveryAddress.postalCode}
                      onChange={(e) => setDeliveryAddress({...deliveryAddress, postalCode: e.target.value})}
                      className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      value={deliveryAddress.phone}
                      onChange={(e) => setDeliveryAddress({...deliveryAddress, phone: e.target.value})}
                      className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              )}

              {/* Horaires de livraison */}
              <div className="border-t pt-4 mt-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  {deliveryMethod === 'takeaway' ? 'Heure de retrait' : 'Heure de livraison'}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setDeliveryTime(slot.id)}
                      className={`p-2 rounded-lg text-sm transition-all ${
                        deliveryTime === slot.id
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div>{slot.label}</div>
                      <div className="text-xs opacity-80">{slot.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Instructions spéciales */}
              <div className="border-t pt-4 mt-4">
                <label className="font-semibold text-gray-800 mb-2 block">Instructions spéciales</label>
                <textarea
                  placeholder="Allergies, instructions de livraison, etc..."
                  value={deliveryNote}
                  onChange={(e) => setDeliveryNote(e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Modes de paiement */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-orange-500" />
                Mode de paiement
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {paymentOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = paymentMethod === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setPaymentMethod(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        isSelected 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-orange-500' : 'text-gray-500'}`} />
                        <span className={`font-semibold ${isSelected ? 'text-orange-500' : 'text-gray-700'}`}>
                          {option.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{option.description}</p>
                    </button>
                  );
                })}
              </div>

              {/* Infos carte bancaire */}
              {paymentMethod === 'card' && (
                <div className="border-t pt-4 mt-2">
                  <h3 className="font-semibold text-gray-800 mb-3">Informations carte</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Numéro de carte"
                      value={cardInfo.number}
                      onChange={(e) => setCardInfo({...cardInfo, number: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Nom du titulaire"
                        value={cardInfo.name}
                        onChange={(e) => setCardInfo({...cardInfo, name: e.target.value})}
                        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={cardInfo.expiry}
                        onChange={(e) => setCardInfo({...cardInfo, expiry: e.target.value})}
                        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cardInfo.cvv}
                      onChange={(e) => setCardInfo({...cardInfo, cvv: e.target.value})}
                      className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Colonne de droite - Résumé */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-orange-500" />
                Résumé de la commande
              </h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-semibold">{subtotal.toFixed(2)} FCFA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    Livraison
                  </span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? 'Gratuit' : `${deliveryFee.toFixed(2)} FCFA`}
                  </span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-orange-500">{finalTotal} FCFA</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Commander
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Commande sécurisée • Paiement à la livraison
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;