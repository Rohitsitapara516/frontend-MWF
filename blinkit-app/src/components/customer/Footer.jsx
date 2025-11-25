import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
        
        <section id='footer' className='p-16 mt-10 bg-black flex flex-row'>
            <div className='w-full text-white'>
                <ul className='p-5'>
                    <li><Link to='' className='text-3xl'>Page Links</Link></li>
                    <li><Link to='/products'></Link>Vagetable</li>
                    <li><Link to='/products'></Link>Fruits</li>
                    <li><Link to='/products'></Link>Dry Fruits</li>
                    <li><Link to='/create account'></Link>Account</li>
                    <li><Link to='/contact-us'></Link>Contact Us</li>
                    <li><Link to='/faq'></Link>Faq</li>
                    <li><Link to='/terms-condition'>Terms $ Condition</Link></li>
                </ul>
            </div>

            <div className='w-full text-white'>
                <ul className='p-5'>
                    <li><Link to='' className='text-3xl'>Our Address</Link></li>
                    <li><Link to=''>Ground Floor, Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram-122098, Haryana, India, and their registered office address is 1042/2, VISTAR COLONY, MAKNPUR INDIRAPURAM, Ghaziabad, Uttar Pradesh, India - 201012</Link></li>
                </ul>
            </div>

             <div className='w-full text-white'>
                <ul className='p-5'>
                <li><Link to='' className='text-3xl'>Our Address</Link></li>
                <li><Link to=''><input type='text' placeholder='subscribe newslatter' className='p-2 w-full mt-2 bg-white text-black' /></Link></li>
                <li><Link to=''>Terms $ Condition</Link></li>
                <p>All right reseved @2025 Blinkit App</p>
                </ul>
               </div>


        </section>
        
        </>
    )
}