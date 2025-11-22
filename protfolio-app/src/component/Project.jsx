import React from "react";
import { Link } from "react-router-dom";



export default function(){
    return(
        <>

        

        
        <section className='bg-white py-16 px-6' id="Project">
            <h1 className='text-center font-mono text-indigo-600 text-4xl mb-10'>My Project & Education</h1>
             <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 '>
                <div className='bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2'>
                <div className='p-6'>
               <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Eommerce-App</h3>
                 <p className='text-indigo-500 font-medium mb-1'>React Js  | 2000 - 2050</p>
                 <p className='text-gray-600 text-sm leading-relaxed'>This app are designing of html, css,bootstrap,javascript and implement a functionality to bater responce for web and crud operation perfome and with api</p>
                </div> 
                </div>

                  <div className='bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2'>
                  <div className='p-6'>
                  <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Blinkit App</h3>
                 <p className='text-indigo-500 font-medium mb-1'>React Js  | 2000 - 2050</p>
                 <p className='text-gray-600 text-sm leading-relaxed'>This app are designing of javascript, tailwind , html, css and implement a javascript functionality to bater responce for web</p>
                </div> 
                </div>

                   <div className='bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2'>
                  <div className='p-6'>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Diploma In Computer Engineering</h3>
                 <p className='text-indigo-500 font-medium mb-1'>Asiatic Engineering College  | 2021 - 2024</p>
                 <p className='text-gray-600 text-sm leading-relaxed'>Diploma In Computer Engineering Gujarat Technologies university (GTU) </p>
                </div>
                </div>

                
                   <div className='bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2'>
                  <div className='p-6'>
                    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Frontend Web Developer</h3>
                 <p className='text-indigo-500 font-medium mb-1'>Tops Technology  | 2024 - 2025</p>
                 <p className='text-gray-600 text-sm leading-relaxed'> Frontend Web Developer in React Js, Tops Technology Rajkot. </p>
                </div>
                </div>
               </div>

                  



        </section>
        
        </>
    )
}