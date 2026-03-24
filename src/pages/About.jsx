import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

function About() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar/>
      <Header 
        title={`Notre Histoire`}
        content={`Depuis 1985, nous partageons notre passion pour la cuisine authentique et les saveurs uniques`}
      />
      <div>A propos</div>
      <Footer/>
    </div>
  )
}

export default About