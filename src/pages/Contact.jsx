import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
// import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTiktok,
  FaCar,
  FaClock
} from 'react-icons/fa';
import { FaClockRotateLeft, FaMapLocation, FaMessage } from 'react-icons/fa6';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      console.log('Formulaire soumis:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      setShowModal(true); // Ouvre le modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Fermer le modal après 3 secondes
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const contactInfo = [
    {
      id: 1,
      icon: <FaMapLocation className='text-orange-500'/>,
      title: 'Adresse',
      details: ['123 Rue de la Gastronomie', '75001 Paris, France'],
      action: 'Voir sur Google Maps',
      link: 'https://maps.google.com',
    },
    {
      id: 2,
      icon: <FaPhone className='text-orange-500'/>,
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', '+33 6 12 34 56 78'],
      action: 'Appeler maintenant',
      link: 'tel:+33123456789',
    },
    {
      id: 3,
      icon: <FaEnvelope className='text-orange-500'/>,
      title: 'Email',
      details: ['contact@restaurant.com', 'reservation@restaurant.com'],
      action: 'Envoyer un email',
      link: 'mailto:contact@restaurant.com',
    },
    {
      id: 4,
      icon: <FaClockRotateLeft className='text-orange-500'/>,
      title: 'Horaires d\'ouverture',
      details: [
        'Lundi - Vendredi: 12h00 - 14h30, 19h00 - 22h30',
        'Samedi: 12h00 - 15h00, 19h00 - 23h00',
        'Dimanche: 12h00 - 15h00 (Fermé le soir)'
      ],
    },
  ];

  const subjects = [
    'Réservation',
    'Demande d\'information',
    'Événement privé',
    'Carte cadeau',
    'Réclamation',
    'Autre',
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Header
        title={`Nous Contacter`}
        content={`Une question, une envie, une réservation ? On est là pour vous ! Contactez-nous et on vous répond avec le sourire.`}
      />

      {/* Section Contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Grille d'informations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 bg-orange-200 p-4 w-17 rounded-full">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">
                    {detail}
                  </p>
                ))}
                {info.action && (
                  <a
                    href={info.link}
                    className="inline-block mt-3 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
                  >
                    {info.action} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Formulaire et carte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600 mb-6">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
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
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="01 23 45 67 89"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 disabled:bg-orange-300 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Nous trouver
                </h2>
                <p className="text-gray-600">
                  Venez nous rendre visite dans notre établissement
                </p>
              </div>
              <div className="h-96 w-full">
                <iframe
                  title="Carte du restaurant"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3980.80768651242!2d11.579027799999999!3d3.8514166999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNTEnMDUuMSJOIDExwrAzNCc0NC41IkU!5e0!3m2!1sfr!2scm!4v1774432955977!5m2!1sfr!2scm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-lg"><FaCar/></span>
                  <span className="text-sm">
                    Parking gratuit à proximité | Métro : Ligne 1, Station Hôtel de Ville
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section réseaux sociaux */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Suivez-nous sur les réseaux
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-[#1877f2] text-gray-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <FaFacebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gradient-to-r hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] text-gray-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <FaInstagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-[#1da1f2] text-gray-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <FaTwitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-[#010101] text-gray-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <FaTiktok className="w-5 h-5" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
                  </div>
      </section>

      {/* Modal de succès */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-lg bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            <div className="p-6 text-center">
              {/* Icône de succès */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✅</span>
              </div>
              
              {/* Titre */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Message envoyé !
              </h3>
              
              {/* Message */}
              <p className="text-gray-600 mb-6">
                Merci {formData.name || 'pour votre message'} !<br />
                Nous vous répondrons dans les plus brefs délais.
              </p>
              
              {/* Bouton de fermeture */}
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

export default Contact;