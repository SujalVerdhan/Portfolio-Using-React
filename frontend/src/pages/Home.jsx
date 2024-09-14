import React from 'react'
import Header from '../components/header/header'
import About from '../components/about/about'
import Experience from '../components/experience/experience'
import Service from '../components/Services/service'
import Portfolio from '../components/portfolio/portfolio'
import Testimonial from '../components/testimonials/Testimonial'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/fooetr'
import Navbar from '../components/navbar/navbar'

export const Home = () => {
  return (
    <div>



       <Header/>
       <Navbar/>
     <About/>
     <Experience/>
     <Service/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>

    </div>
  )
}
