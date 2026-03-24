import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

function Contact() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar/>
      <Header
        title={`Nous Contacter`}
        content={`Une question, une envie, une réservation ? On est là pour vous ! Contactez-nous et on vous répond avec le sourire.`}
      />
      <div>Contact</div>
      <Footer/>
    </div>
  )
}

export default Contact