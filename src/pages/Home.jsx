import React from 'react'
import Navbar from '../components/layouts/Navbar';
import Hero from '../components/layouts/Hero';
import Specialities from '../components/layouts/Specialities';
import TeamsSection from '../components/layouts/TeamsSection';
import Footer from '../components/layouts/Footer';
import Testimonial from '../components/layouts/Testimonial';
import Description from '../components/layouts/Description';
import RestaurantSpaces from '../components/layouts/RestaurantSpaces';

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Description/>
      <Specialities/>
      <TeamsSection/>
      <RestaurantSpaces/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home