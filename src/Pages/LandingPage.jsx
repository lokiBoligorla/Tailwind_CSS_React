import React from 'react'
import Navbar from '../Components/Navbar';
import Contact from '../Components/Contact'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About';
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const LandingPage = ({change}) => {
  return (
    <div>
       <Navbar change={change}/>
      <HeroSection/>
      <About/>
      <Testimonials/>
      <Contact/>  
      <Footer/> 
    </div>
  )
}

export default LandingPage;
