import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer(){
    return(
        <>
        <footer className='bg-sky-900 text-white py-5 text-center'>
        
        <div className='container mx-auto flex flex-col items-center space-py-3'>
             <div className='flex space-x-5 text-xl text-center space-y-3 mt-15'>
          <a href="#" className='hover:text-blue-500 transition justify-center '>
            <FaFacebook className='text-3xl  hover:text-blue-500' />
          </a>

           <a href="#" className='hover:text-blue-500 transition'>
            <FaInstagram className='text-3xl  hover:text-blue-500' />
          </a>

           <a href="#" className='hover:text-blue-500 transition'>
            <FaLinkedin className='text-3xl  hover:text-blue-500' />
          </a>

           <a to="/" className='hover:text-blue-500 transition'>         
              <FaGithub className='text-3xl  hover:text-blue-500' />
          </a>
        </div>

        <div className='flex justify-center space-x-4 text-sm md:text-base mt-3'>
            <Link>Privacy<span> | </span></Link>
            <Link>Terms<span> | </span></Link>
            <Link>FAQs<span> | </span></Link>
            <Link>Help<span> | </span></Link>

        </div>

        <p className='mt-5 text-xs md:text-sm text-gray-300'>© Degital Protfolio. All Rights Reserved. Designed by Rohit Sitapara</p>
        </div>

        </footer>
        
        </>
    )
}