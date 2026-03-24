import React from 'react'

function Header({title,content}) {
  return (
    <section className='relative pt-32 pb-20 bg-orange-600'>
      {/* Assombrir le font */}
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
          {content}
        </p>
      </div>
    </section>
  )
}

export default Header