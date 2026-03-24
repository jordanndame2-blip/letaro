import React from 'react'
import resto from '../../assets/images/resto.webp'
import taro from '../../assets/images/taro.jpg'

function Hero() {
  return (
    <section
      id="home"
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Image de fond */}
      <div className="absolute inset-0">
        {/* Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat scale-110"
          style={{
            backgroundImage: `url(${resto})`,
            filter: 'blur(3px)'
          }}
        ></div>
        {/* Superposition sombre pour assombrir l'image */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenu */}
      <div 
      className="relative z-10 container mx-auto px-4
                sm:px-6
                lg:px-8 py-24
                sm:py-32
                md:py-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Section de gauche */}
          <div className="text-center lg:text-left lg:w-1/2">
            <span className='inline-block px-4 py-1 bg-orange-500/20 backdrop-blur-sm text-orange-300 rounded-full text-xs sm:text-sm font-semibold mb-4'>
              🌿 Cuisine Authentique
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Découvrez le <br />
              <span className="text-orange-400">Taro</span> comme jamais
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
              Une expérience culinaire unique où les saveurs traditionnelles rencontrent la créativité moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <button className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 text-sm sm:text-base">
                Voir le menu
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition text-sm sm:text-base">
                Réserver une table
              </button>
            </div>
          </div>

          {/* Section de droite - Image Taro & Biere */}
          <div className="lg:w-1/2 flex justify-center items-center gap-4 sm:gap-6 mt-8 lg:mt-0">
            
            {/* Taro */}
            <div className="relative group flex-1 flex justify-end">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-2xl transform hover:scale-105 transition duration-500">
                <img
                  src={taro}
                  alt="Plat de Taro"
                  className="w-32 sm:w-40 md:w-48 lg:w-85 h-auto object-contain"
                />
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-sm font-bold px-3 py-2 rounded-full">
                  🌟 Vedete
                </div>
              </div>
              <div className="absolute -bottom-4  transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-white text-[10px] sm:text-xl whitespace-nowrap">
                Taro Gratiné
              </div>
            </div>
          </div>
          
        </div>

        {/* Indicateur de Scroll*/}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-1.5 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero