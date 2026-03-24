import { BadgeDollarSign, Banknote, Building, ChevronRight, Clock, CreditCardIcon, Globe, Heart, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

function Footer() {

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id:1,name: 'Accueil', href: '/' },
    { id:2,name: 'Menu', href: '/menu' },
    { id:3,name: 'Contact', href: '/contact' },
    { id:4,name: 'A propos', href: '/about' },
    { id:5,name: 'Reservation', href: '/reservation' }
  ];

  const contact = {
    email: 'contact@letaro.com',
    phone: '+237 650 90 40 05',
    address: 'Yaounde Cameroun',
    hours: '24h/7j'
  };

  const paymentMethods = [
  {id: 1,name: 'Carte bancaire',icon: <CreditCardIcon className="w-4 h-4 mr-1 cursor-pointer"/>},
  {id: 2,name: 'PayPal',icon: <BadgeDollarSign  className="w-4 h-4 mr-1 cursor-pointer "/>},
  {id: 3,name: 'Espèces',icon: <Banknote className="w-4 h-4 mr-1 " cursor-pointer/>},
  {id: 4,name: 'Orange Money',icon: <Phone className="w-4 h-4 mr-1 cursor-pointer "/>,},
  {id: 5,name: 'MTN Mobile Money',icon: <Phone className="w-4 h-4 mr-1 cursor-pointer "/> }
];

const reservationModalities = [
  {id: 1,name: 'En ligne',icon: <Globe className="w-4 h-4 mr-1 cursor-pointer"/>},
  {id: 2,name: 'Par téléphone',icon: <Phone className="w-4 h-4 mr-1 cursor-pointer"/>,},
  {id: 3,name: 'Sur place',icon: <Building className="w-4 h-4 mr-1 cursor-pointer"/>}
];

// const socials = [
//   { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#', color: 'hover:bg-blue-600' },
//   { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:bg-sky-500' },
//   { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'hover:bg-blue-700' },
//   { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#', color: 'hover:bg-red-600' },
//   { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:bg-pink-600' }
// ];

const socials = [
  { name: 'Facebook',href: '#',},
  { name: 'Twitter',href: '#',},
  { name: 'LinkedIn',href: '#',},
  { name: 'YouTube',href: '#',},
  { name: 'Instagram',href: '#',}
];

  return (
    <footer className="mt-auto bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* contenu du footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Lien rapide */}
          <div>
            <h3 className='text-lg font-bold mb-4 flex items-center'>
              <span className='w-1 h-5 bg-orange-600 rounded-full mr-2'> </span>
              Liens rapides
            </h3>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-bold mb-4 flex items-center'>
              <span className='w-1 h-5 bg-orange-600 rounded-full mr-2'> </span>
              Contact
            </h3>
            <ul className='space-y-2'>
              <li>
                <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-start group">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0 group-hover:text-orange-500" />
                  <span className="text-sm">{contact.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-start group">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0 group-hover:text-orange-500" />
                  <span className="text-sm">{contact.phone}</span>
                </a>
              </li>
              <li>
                <div className="text-gray-400 flex items-start hover:text-orange-500">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0 group-hover:text-orange-500" />
                  <span className="text-sm">{contact.address}</span>
                </div>
              </li>
              <li>
                <div className="text-gray-400 flex items-center hover:text-orange-500">
                  <Clock className="w-5 h-5 mr-2 flex-shrink-0 group-hover:text-orange-500" />
                  <span className="text-sm">{contact.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Media Sociaux */}
          <div>
            <h3 className='text-lg font-bold mb-4 flex items-center'>
              <span className='w-1 h-5 bg-orange-600 rounded-full mr-2'> </span>
              Socials
            </h3>
            <ul className='space-y-2'>
              {socials.map((social,index) => (
                <li key={index}>
                  <a href={social.href} className="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Methode de paiement*/}
          <div>
            <h3 className='text-lg font-bold mb-4 flex items-center'>
              <span className='w-1 h-5 bg-orange-600 rounded-full mr-2'> </span>
              Paiement
            </h3>
            <ul className='space-y-2'>
              {paymentMethods.map((methode,index) => (
                <li key={index}>
                  <a className="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center group">
                    {methode.icon}
                    {methode.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reservation*/}
          <div>
            <h3 className='text-lg font-bold mb-4 flex items-center'>
              <span className='w-1 h-5 bg-orange-600 rounded-full mr-2'> </span>
              Reservation
            </h3>
            <ul className='space-y-2'>
              {reservationModalities.map((modalities) => (
                <li key={modalities.id}>
                  {<a className="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center group">
                    {modalities.icon}
                    {modalities.name}
                  </a>}
                </li>
              ))}
            </ul>
          </div>

        </div> 
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center text-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} LeTaro237. Tous droits réservés. 
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer