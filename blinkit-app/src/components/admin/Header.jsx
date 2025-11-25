import React from "react";

export default function Header(){
    return(
        <>
        
        <div className='relative'>
            <div className='shadow p-0 w-full flex flex-row fixed top-0 bg-white'>
                <div className='w-65 bg-black p-10 border-b-1 border-white'>
                    <h1 className="text-white text-2x1">Blinkit App <span className='ms-5 text-red-300 text-3x1'>Admin</span></h1>
                </div>

                <div className="w-full">
                    <input type='text' placeholder='Search anything here...' className='mt-5 p-3 ms-15 w-4/6 border-1' />
                    <b className='text-x1 ms-3'>Welcome : Admin</b>

                </div>
            </div>
        </div>
        
        </>
    )
}