import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  const [isScrolled,setIsScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll)
  },[]);

  const navLinks = [
    {name: 'Acceuil', path: '/'},
    {name: 'Menu', path: '/menu'},
    {name: 'Contact', path: '/contact'},
    {name: 'A propos', path: '/about'},
    {name: 'Reservation', path: '/reservation'},
  ]

  return (
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="flex items-center justify-between">
            {/* Logo LETARO */}
            <a href='/' className={`text-2xl font-bold md:text-3xl transition-colors ${isScrolled ? 'text-orange-500' : 'text-white'}`}>
              Le<span className='text-orange-500'>Taro</span>
            </a>
            {/* Items WEB Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((links) => (
                <a 
                  key={links.name}
                  href={links.path} 
                  className={`font-medium transition-colors hover:text-orange-500 cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    {links.name}
                </a>
              ))}
              <button className='bg-orange-500 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition shadow-lg cursor-pointer'>Commander</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={()=> setIsOpen(!isOpen)} className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              {isOpen ? (<X className='w-6 h-6'/> ): (<Menu className='w-6 h-6'/>)}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden
            ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            `}>
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                {navLinks.map((links) => (
                  <a 
                    onClick={()=> setIsOpen(false)}
                    key={links.name}
                    href={links.path} 
                    className={`block py-3 text-gray-700 text-center font-medium hover:text-orange-500 transition cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
                      {links.name}
                  </a>
                ))}
                <button className='w-full bg-orange-500 text-white px-5 py-3 rounded-full font-medium hover:bg-orange-600 transition mt-2'>Commander</button>
              </div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar