import React from "react";


export default function About(){
    return(
        <>
        <section className='bg-white-900 py-10 justify-center mt-6'>
             <h1 className="animate-pulse text-4xl font-bold text-indigo-600 text-center">
          About Me
        </h1>
        <hr className="w-32 mx-auto border border-indigo-400 mt-2" />
            <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center mb-6'>
                <div className='flex justify-center'>
                    <img src="https://tse2.mm.bing.net/th/id/OIP.AQtvP5FcfiEMQpu14ueJCgHaGU?pid=Api&P=0&h=180" alt="image" className='w-100 h-100 rounded-2xl object-cover shadow-lg border-4 border-white' />
                </div>

                <div>
                    <h2 className='text-3xl font-bold text-gray-900 mb-10 gap-50'>Frontend Developer</h2>
                    <p className='leading-relaxed text-gray-600 mb-6'>
                Hello! My name is <span className="font-semibold text-blue-600">Rohit Sitapara</span>.  
                I am a passionate Frontend Developer with experience in building modern,   responsive 
                and user-friendly web applications using React, JavaScript, and Tailwind CSS.
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base'>
                        <p><span className='font-semibold'>Name:</span>Rohit Sitapara</p>
                        <p><span className='font-semibold'>Birthday:</span>31 May 2006</p>
                        <p><span className='font-semibold'>Experience:</span>Fresher</p>
                        <p><span className='font-semibold'>Phone:</span>9512579560</p>
                        <p><span className='font-semibold'>Email:</span>rohitsitapara516@gmail.com</p>
                        <p><span className='font-semibold'>Address:</span> Shapar (veraval), Gondal Road, Rajkot - 360 024</p>
                        <p><span className='font-semibold'>Github:</span>https://github.com/Rohitsitapara516/frontend-MWF</p>
                    </div>

                    
                    <div className="mt-6 flex gap-4 flex-wrap">
                     <a 
                        href="/public/parth.pdf"
                        target="_blank"
                         className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
                        >
                View Resume
              </a>
                    </div>
                </div>


            </div>

        </section>
        
        </>
    )
}