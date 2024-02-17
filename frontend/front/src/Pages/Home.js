import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Products from '../Components/Products';
import Filter from '../Components/Filter';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Testimonial from '../Components/Testimonial';
import AboutUs from '../Components/AboutUs';

function Home() {
  return (
    <>
    <Navbar/>
    <div className='h-screen'><Hero/>
    <Filter/>
    </div>
    <AboutUs/>
    <div> 
    <Products/>

    </div>
     <Testimonial/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Home