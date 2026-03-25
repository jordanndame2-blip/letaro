import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

function About() {
  // Statistiques du restaurant
  const stats = [
    { number: '35+', label: 'Années d\'existence', icon: '🎂' },
    { number: '50k+', label: 'Clients satisfaits', icon: '😊' },
    { number: '150+', label: 'Plats signature', icon: '🍽️' },
    { number: '20+', label: 'Membres équipe', icon: '👥' },
  ];

  // Événements et moments forts
  const milestones = [
    { year: '1985', event: 'Ouverture du restaurant', icon: '🏠' },
    { year: '2000', event: 'Rénovation et agrandissement', icon: '🔨' },
    { year: '2015', event: 'Passage à la 2ème génération', icon: '👨‍👦' },
    { year: '2024', event: 'Nouvelle carte signature', icon: '📖' },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Header 
        title={`Notre Histoire`}
        content={`Depuis 1985, nous partageons notre passion pour la cuisine authentique et les saveurs uniques`}
      />
      
      {/* Section À propos */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Introduction */}
          <div className="text-center mb-12">
            <span className="text-6xl">🏠✨</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-4">
              Une histoire de famille et de passion
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trois générations, une même passion : vous offrir le meilleur de la gastronomie française
            </p>
          </div>

          {/* Grille histoire */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <span className="text-5xl block mb-4">📖</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Notre Héritage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fondé en 1985 par le chef Jean-Pierre Martin, notre restaurant est né d'une vision : 
                créer un lieu où la cuisine traditionnelle rencontre l'innovation. Avec des recettes 
                transmises de génération en génération, nous perpétuons un savoir-faire unique.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <span className="text-5xl block mb-4">🌟</span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Notre Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Aujourd'hui, c'est la deuxième génération qui perpétue cette tradition familiale, 
                en alliant savoir-faire traditionnel et créativité moderne. Notre mission : 
                vous faire voyager à travers nos assiettes.
              </p>
            </div>
          </div>

          {/* Statistiques */}
          <div className="bg-orange-500 rounded-2xl shadow-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Quelques chiffres qui parlent
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center text-white">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-orange-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Notre philosophie */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Produits frais
              </h3>
              <p className="text-gray-600">
                Sélection rigoureuse de produits locaux et de saison, chez nos producteurs depuis 35 ans
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Fait maison
              </h3>
              <p className="text-gray-600">
                Tous nos plats sont préparés sur place avec passion, des entrées aux desserts
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Accueil chaleureux
              </h3>
              <p className="text-gray-600">
                Une équipe attentive et souriante pour vous offrir un service personnalisé
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Notre parcours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {milestones.map((item, idx) => (
                <div key={idx} className="text-center relative">
                  {idx < milestones.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-orange-200"></div>
                  )}
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="font-bold text-orange-600 mb-1">{item.year}</div>
                  <div className="text-gray-600 text-sm">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Citation */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-12 text-center">
            <span className="text-5xl mb-4 block">“</span>
            <p className="text-xl text-gray-700 italic max-w-2xl mx-auto mb-4">
              La bonne cuisine, c'est celle qui fait plaisir à ceux qui la mangent et à ceux qui la préparent.
            </p>
            <p className="text-orange-600 font-semibold">
              — Chef Jean-Pierre Martin, Fondateur
            </p>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Prêt à vivre l'expérience ?
            </h3>
            <p className="text-gray-600 mb-6">
              Venez découvrir notre univers et laissez-vous séduire par nos créations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservation"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg"
              >
                📅 Réserver une table
              </a>
              <a
                href="/menu"
                className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors shadow-lg"
              >
                🍽️ Découvrir notre carte
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;