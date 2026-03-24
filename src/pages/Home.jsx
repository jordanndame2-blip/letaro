import React from 'react'
import Navbar from '../components/layouts/Navbar';
import Hero from '../components/layouts/Hero';
import Specialities from '../components/layouts/Specialities';
import Teams from '../components/layouts/Teams';
import Footer from '../components/layouts/Footer';
import Testimonial from '../components/layouts/Testimonial';
import Description from '../components/layouts/Description';

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Description/>
      <Specialities/>
      <Teams/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home