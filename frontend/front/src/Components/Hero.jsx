import React, { useEffect } from 'react'
import heroo from '../images/hero.png'
import bg from '../images/bg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
    useEffect(()=>{
       AOS.init({duration: 2000})
       },[])
  return (
    <>
   <div className='flex justify-around h-screen'>
    <div className='relative top-36 left-12' data-aos="fade-right"  >
        <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>Looking to rent a car</h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to Rent-a-Car, your ultimate destination for hassle-free car rentals.</p>
        <div>
        <a href="#" class="inline-flex bg-yellow-200 mr-4 items-center justify-center px-5 py-3 text-base font-medium text-center  border border-gray-300 rounded-lg  focus:ring-4 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>
        </div>
    </div>

    <div data-aos="fade-left" >
        <div className='relative top-10 right-6'><img src="https://i.pinimg.com/564x/78/40/4a/78404a6f51c4b627e6ef5b6ca567b540.jpg" alt="absolute w-full" /></div>
        
        <img src={heroo} alt="" className='z-50 absolute -top-10' />
    </div>
   </div>
    
    </>
  )
}

export default Hero