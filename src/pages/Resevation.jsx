import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import { FaCalendar, FaClock, FaPhone, FaPhoneAlt, FaUsers, FaUtensils } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';
import { FaClockRotateLeft } from 'react-icons/fa6';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'Dîner',
    allergies: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success'); // success or error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Vérifier que la date n'est pas dans le passé
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setModalType('error');
      setShowModal(true);
      setIsLoading(false);
      setTimeout(() => setShowModal(false), 3000);
      return;
    }
    
    // Simuler l'envoi de la réservation
    setTimeout(() => {
      console.log('Réservation soumise:', formData);
      setModalType('success');
      setShowModal(true);
      setIsLoading(false);
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: 'Dîner',
        allergies: '',
        message: '',
      });
      
      // Fermer le modal après 3 secondes
      setTimeout(() => setShowModal(false), 3000);
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Générer les créneaux horaires
  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  // Options pour le nombre de personnes
  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];

  // Options pour l'occasion
  const occasions = [
    'Dîner',
    'Déjeuner',
    'Brunch',
    'Anniversaire',
    'Mariage',
    'Dîner d\'affaires',
    'Date romantique',
    'Autre'
  ];

  // Informations pratiques
  const practicalInfo = [
    {
      icon: <FaClock/>,
      title: 'Horaires',
      details: [
        'Lundi - Vendredi: 12h-14h30, 19h-22h30',
        'Samedi: 12h-15h, 19h-23h',
        'Dimanche: 12h-15h (fermé le soir)'
      ]
    },
    {
      icon: <FaUsers/>,
      title: 'Groupes',
      details: [
        'Groupes jusqu\'à 20 personnes',
        'Salle privée disponible',
        'Menu spécial pour groupes'
      ]
    },
    {
      icon: <FaClockRotateLeft/>,
      title: 'Annulation',
      details: [
        'Annulation gratuite jusqu\'à 2h avant',
        'En cas de retard, merci de nous prévenir'
      ]
    }
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Header
        title={`Réservation`}
        content={`Réservez votre table en quelques clics. On a hâte de vous recevoir !`}
      />

      {/* Section Réservation */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire de réservation */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Réservez votre table
                </h2>
                <p className="text-gray-600 mb-6">
                  Remplissez le formulaire ci-dessous et nous vous confirmerons votre réservation par email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="jean@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="01 23 45 67 89"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Nombre de personnes *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        {guestOptions.map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'personne' : 'personnes'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Heure *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez une heure</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Occasion
                      </label>
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        {occasions.map((occ) => (
                          <option key={occ} value={occ}>
                            {occ}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Allergies / Restrictions
                      </label>
                      <input
                        type="text"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Sans gluten, allergies aux fruits de mer..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message / Demande spéciale
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Place de préférence, demande particulière..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 disabled:bg-orange-300 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Réservation en cours...' : <span className='flex items-center justify-center gap-3'><FaCalendar/>Réserver maintenant</span>}
                  </button>
                </form>
              </div>
            </div>

            {/* Informations pratiques */}
            <div className="lg:col-span-1">
              <div className="bg-orange-500 rounded-xl shadow-lg p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-4">
                  Informations pratiques
                </h3>
                {practicalInfo.map((info, idx) => (
                  <div key={idx} className="mb-4 pb-4 border-b border-orange-400 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{info.icon}</span>
                      <h4 className="font-semibold">{info.title}</h4>
                    </div>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-orange-100 text-sm ml-8">
                        • {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg flex items-center gap-2 font-bold text-gray-800 mb-3">
                  <span className='bg-orange-200 p-2 rounded-full'><FaUtensils className='text-orange-600 w-5 h-5'/> </span>Pourquoi réserver chez nous ?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <span>✓</span> Cuisine fraîche et maison
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span>✓</span> Service attentionné
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span>✓</span> Ambiance chaleureuse
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span>✓</span> Terrasse extérieure
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span>✓</span> Parking gratuit
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-xl shadow-lg p-6 mt-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-3">
                  <span className='bg-orange-200 p-2 rounded-full'><FaPhoneAlt className='text-orange-500'/></span> Besoin d'aide ?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Vous pouvez aussi nous appeler pour une réservation
                </p>
                <a
                  href="tel:+33123456789"
                  className="block text-center bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  <span className='flex items-center justify-center gap-3'>
                    <FaPhoneAlt className='text-gray-700'/> +33 1 23 45 67 89
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            <div className="p-6 text-center">
              {modalType === 'success' ? (
                <>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Réservation confirmée !
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Merci {formData.name || 'pour votre réservation'} !<br />
                    Un email de confirmation vous a été envoyé.
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg mb-4 text-sm">
                    <p className="text-gray-700">
                      📅 {formData.date || 'Date'} à {formData.time || 'heure'} <br />
                      👥 {formData.guests} personnes
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Date non disponible
                  </h3>
                  <p className="text-gray-600 mb-4">
                    La date sélectionnée est déjà passée.<br />
                    Veuillez choisir une date ultérieure.
                  </p>
                </>
              )}
              
              <button
                onClick={closeModal}
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Reservation;