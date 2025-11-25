import React, {useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function Content(){

    const [data, setData]=useState("")

    const name=useRef("");
    const email=useRef("");
    const phone=useRef("");
    const subject=useRef("");
    const message=useRef("");
    const navigate=useNavigate();

    const handleSubmit=async(e) =>{
       e.preventDefault()   

        var insert={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
            subject:subject.current.value,
            message:message.current.value,
        }

        try{
            axios.post(`http://localhost:8000/contact`,insert).then((res)=>{
                console.log(res);
                setData(res.data);

              
        Swal.fire({
        title: 'Success!',
        text: 'Contact submitted successfully',
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

     
    return(
        <>
        
        <section id='banner' className='container mx-auto'>
           <img src='https://www.creativehatti.com/wp-content/uploads/edd/2021/04/Delivery-services-free-delivery-on-all-orders-banner-design-06-large.jpg' alt='banner' className='w-full mt-5 h-100'/>
        </section>
        
        <section id='content' className='container mx-auto mt-16'>
            <h1 className='animate-pulse text-4xl text-center font-mono'>Hurry Up 50% discount on selected Items</h1>
            <hr  className='w-96 border-1 mx-auto'/>
        


        <div className='products-app flex flex-row mt-10' data-aos="fade-up" data-aos-duration="2000">
            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Flowers</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

             <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse1.mm.bing.net/th/id/OIP.XiPcVkzFOLRpfWuS21KY9AAAAA?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Tameta</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse3.mm.bing.net/th/id/OIP.A4JUDhVW6ltSEYVTjF4LQQHaHa?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Karela</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse4.mm.bing.net/th/id/OIP.kDeVVY882mCsEFnxmg8H1QHaGl?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Bateta</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>
        </div>

        
        <div className='products-app flex flex-row mt-10' data-aos="fade-up" data-aos-duration="2000">
            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Flowers</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>

            </div>

             <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse1.mm.bing.net/th/id/OIP.XiPcVkzFOLRpfWuS21KY9AAAAA?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Tameta</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse3.mm.bing.net/th/id/OIP.A4JUDhVW6ltSEYVTjF4LQQHaHa?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Karela</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse4.mm.bing.net/th/id/OIP.kDeVVY882mCsEFnxmg8H1QHaGl?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Bateta</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
 |         
        </div>
        </div>


        
        <div className='products-app flex flex-row mt-10' data-aos="fade-up" data-aos-duration="2000">
            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Flowers</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

             <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse1.mm.bing.net/th/id/OIP.XiPcVkzFOLRpfWuS21KY9AAAAA?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Tameta</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse3.mm.bing.net/th/id/OIP.A4JUDhVW6ltSEYVTjF4LQQHaHa?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Karela</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse4.mm.bing.net/th/id/OIP.kDeVVY882mCsEFnxmg8H1QHaGl?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Bateta</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>
        </div>


        
          
           <div className='products-app flex flex-row mt-10' data-aos="fade-up" data-aos-duration="2000">
            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Flowers</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

             <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse1.mm.bing.net/th/id/OIP.XiPcVkzFOLRpfWuS21KY9AAAAA?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Tameta</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse3.mm.bing.net/th/id/OIP.A4JUDhVW6ltSEYVTjF4LQQHaHa?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Karela</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>

            <div className='product-grid w-1/2 mb-5'>   
             <p className='text-center p-10'><img src='https://tse4.mm.bing.net/th/id/OIP.kDeVVY882mCsEFnxmg8H1QHaGl?pid=Api&P=0&h=180' className='w-80 h-80 mx-auto'/></p>
             <p className='text-center text-3xl'>Bateta</p>
             <p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p>
             <p className='text-center text-3xl'><button className='bg-green-500 w-25 mt-5'>Add</button></p>
            </div>
        </div>


    
        <div className='contact-us flex flex-row mt-10' data-aos="fade-up" data-aos-duration="2000">
            <div className='address p-16 w-1/2'>
            <h1 className='text-5xl'>Get in Touch With us</h1>
            <hr className='border-1 w-96 '/>
            <p className='mt-16'><b>Address :</b>Ground Floor, Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram-122098, Haryana, India</p>
            <p className='mt-3'><b>Registered Office :</b>Ground Floor, Tower A, Pioneer Square Building, Golf Course Extension Road, Sector 62, Gurugram-122098, Haryana.</p>
            <p className='mt-3'><b>Cin :</b>U52609UP2021PTC157461</p>
            <p className='mt-3'><b>Email us :</b><a href='mailto:blinkit2021@gmail.com'>blinkit2021@gmail.com</a></p>
            <p className='mt-3'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59075.463026054276!2d70.68915472167966!3d22.269789600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb000e507455%3A0xf0cd3e17d20e1b1e!2sBlinkit%20store!5e0!3m2!1sen!2sin!4v1743395044069!5m2!1sen!2sin" width="100%" height="250" style={{border:0}} allowFullscreen="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </p>
            </div>

            <div className='contact-form w-1/2  p-16'>
            <form className='mt-16' onSubmit={handleSubmit}>
             <input type='text' placeholder='Name *' ref={name} className='mt-3 border-b-1 w-full' />
             <input type='text' placeholder='Email *' ref={email} className='mt-10 border-b-1 w-full' />
             <input type='text' placeholder='Phone *' ref={phone} className='mt-10 border-b-1 w-full' />
             <input type='text' placeholder='Subject *' ref={subject} className='mt-10 border-b-1 w-full' />
             <textarea type='text' placeholder='Message' ref={message} className='mt-10 border-b-1  w-full h-25'></textarea>
              <input type='submit' placeholder='Name *' className='mt-3 border-0 bg-black w-50 p-3 text-white text-xl' value="Send" />
              <input type='submit' placeholder='Name *' className='mt-3 border-0 bg-black w-50 p-3 text-white text-xl' value="Reset" />
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
        </>
    )
}