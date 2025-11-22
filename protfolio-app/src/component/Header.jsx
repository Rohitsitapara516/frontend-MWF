import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact"
import { ImPointDown } from "react-icons/im";


export default function Header(){
    return(
        <>

      <section className='h-screen flex flex-col justify-center items-center text-center bg-indigo-900 text-white px-4'>
        <img src="https://tse2.mm.bing.net/th/id/OIP.DZAd36PzKWO33CwYWJrT-AHaHa?pid=Api&P=0&h=180" alt="image"   className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-lg mb-4 object-cover"
     />
      <h1 className='text-4xl sm:text-4x1 md:text-5x1 font-bold mb-4'>Hi, I'm Rohit Sitapara 👋</h1>

      <h2 className=' text-xl sm:text-2xl md:text-3x1 font-semibold md:text-yellow-400 mb-3'>
       Frontend / React JS Developer
      </h2>

      <p className='max-w-xl text-gray-300 text-sm sm:text-base md:text-lg mb-6'>
        I build modern web applications & Web Development using React, Tailwind, and JavaScript.
      </p>

      <div className='flex flex-col sm:flex-row gap-4'>
      <Link to="/project" className='px-6 py-3 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition'> View Project</Link>

      <Link to="/contact" className='px-6 py-3 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition'> Contact</Link>
      </div>

      </section>
      <About />
      <Skill />
      <Project />
      <Contact />
      
        
        </>
    )

}