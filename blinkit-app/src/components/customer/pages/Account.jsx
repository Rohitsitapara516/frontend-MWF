import React,{useState,useRef} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "../Header";
import Navigation from "../Navigation";
import PageBanner from "./PageBanner";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Account(){

    const [data, setData]=useState("")
           
               const name=useRef("");
               const email=useRef("");
               const password=useRef("");
               const navigate=useNavigate();
           
               const handleSubmit=async(e) =>{
                  e.preventDefault()   
           
                   var insert={
                       name:name.current.value,
                       email:email.current.value,
                       password:password.current.value,
                     
                   }
           
                   try{
                       axios.post(`http://localhost:8000/register`,insert).then((res)=>{
                           console.log(res);
                           setData(res.data);
           
                         
                   Swal.fire({
                   title: 'Success!',
                   text: 'Account submitted successfully',
                   icon: 'success',
                   confirmButtonText: 'OK'
           
                      })
                    })
           
                       
                       e.target.reset();
                       navigate("/")
                   }
           
                   catch(err)
                   {
                       console.log(err)
                       alert("Form submission faild");
                   }
                   
               }
           
    
    AOS.init();
    return(
        <>
        
        <Header />
        <Navigation />
        <PageBanner />
             <section id='content' className='container mx-auto mt-16'>
             <h1 className='animate-pulse text-8xl text-center font-mono text-red-300'>Create Account</h1>   
             <hr className='w-96 mx-auto border-1'/>

                <div className=' contact-us flex flex-row mt-16' data-aos="fade-up" data-aos-duration="2000">
                    <div className='address p-16 w-1/2'>
                    <h1 className='text-5xl'>Why Choose To Us</h1>
                    <hr className='border-1 w-50'/>
                    <p className='mt-8'><b>24x7 customer support</b></p>
                    <p className='mt-8'><b>Refund policy</b></p>
                    <p className='mt-8'><b>FAQ via customer care</b></p>
                    <p className='mt-8'><b>Best in the area</b></p>
                    </div>

                <div className='contact-form w-1/2 p-16'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email *' ref={email} className='mt-10 border-b-1 w-full' />
                     <input type='text' placeholder='Password *' ref={password} className='mt-10 border-b-1 w-full' />
                      <input type='submit' placeholder='Name *'  className='mt-3 border-3 bg-black w-50 p-3 text-white text-xl' value="sing in" />
                      <Link to='/forget-password' className='ms-5 text-xl '>Forget Password</Link> 
                     <br />
                     <br />
                     <b>Dont't have an Account? <Link to='/register' className='ms-1 text-xl'>Create Account Here</Link></b>    
                </form>
                </div>
            </div>

             
            <div className='help-desk  mt-16 w-full' data-aos="fade-up"
            data-aos-duration="2000">
            <h1 className='text-5xl text-center font-mono'>Any help contact with Us!</h1>
            <hr className='w-128 mx-auto border-1' />
            <div className='w-1/2 p-5 mt-5 mx-auto'>
            <p className='text-center'><img src='https://media0.giphy.com/media/lebpnk3qVPAjBxIKKc/giphy.gif?cid=6c09b952gnsx8cn97w1jl5oewe3ieu10i72l3ek9igb7agow&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g' alt='help' /></p>
            <p className='text-center animate-bounce text-4xl mt-3'>Call Us : <span className='bi bi-telephone'></span> (+91)-1800-3500-180</p>

         </div>
        </div>



        </section>
        <Footer />  
        </>
    )
}

