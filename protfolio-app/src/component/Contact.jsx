import React from "react";



export default function contact(){
    return(
        <>

      <section className='bg-white py-16 px-6' id="Contact">
        <h1 className='text-center animate-pulse text-4xl font-bold text-indigo-600 '>Contact Me</h1>
        <div className='contact-form w-1/2 mx-auto'>
        <form className='mt-5 text-center justify-center'>
            <input type='text' placeholder='name *' className='mt-3 border-b-1 w-full' />
            <input type='text' placeholder='Email *' className='mt-10 border-b-1 w-full' />
            <input type='text' placeholder='Phone *' className='mt-10 border-b-1 w-full' />
            <input type='text' placeholder='Subject *' className='mt-10 border-b-1 w-full' />
             <textarea type='text' placeholder='Message *' className='mt-10 border-b-1 w-full h-25'></textarea>
             <input type='submit' placeholder='Name *' className='mt-3 border-0 bg-black w-50 p-3 text-white text-xl' value="Send" />
        </form>

        </div>
      </section>
 </>   
    )
}