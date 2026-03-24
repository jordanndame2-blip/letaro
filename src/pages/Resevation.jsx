import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

function Resevation() {
  return (
    <div>
      <Navbar/>
      <Header
        title={`Reservation`}
        content={`Réservez votre table en quelques clics. On a hâte de vous recevoir !`}
      />
      <div>Reservation</div>
      <Footer/>
    </div>
  )
}

export default Resevation