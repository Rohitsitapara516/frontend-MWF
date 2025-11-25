import React from "react";
import Header from './Header';
import Sidebar from './Sidebar';

export default function AddFruits(){
    return(
        <>

       <Header />
       <div className='p-0 w-full flex flex-row'>
       <div className='w-65  p-10 bg-black'>
      <Sidebar />   
      </div>
      <div className='w-full mt-40'>
        <h1 className='text-5x1 ms-2'>Add Fruits</h1>
        <hr className='border-1 w-55 ms-5'/>
        <form className='mt-5'>
            <div className='from-group mt-2 p-5'>
                <select name='category' placeholder='Category Name *' className='w-1/2 p-2 border-2'>
                <option value="">-select Category-</option>
                </select>

                <div className='form-group mt-2 p-5'>
                    <input type='text' placeholder='Fruits Name *' className='w-1/2 p-2 border'  />
                </div>

                <div className='form-group mt-2 p-5'>
                    <input type='text' placeholder='Fruits Price *' className='w-1/2 p-2 border'  />
                </div>

                <div className='form-group mt-2 p-5'>
                    <input type='text' placeholder='Fruits qty *' className='w-1/2 p-2 border'  />
                </div>

                <div className='form-group mt-2 p-5'>
                    <input type='text' placeholder='Fruits Photo url*' className='w-1/2 p-2 border'  />
                </div>

               <div className='form-group mt-2 p-5'>
                    <textarea placeholder='Fruits description *' className='w-1/2 p-2 border'  ></textarea>
                </div>

                <div className='form-group mt-2 p-5'>
                    <input type='submit' placeholder='Add Fruits *' className='w-1/2 p-2 border'  />
                </div>







            </div>

        </form>


      </div>
      </div>    
    
        </>
    )
}