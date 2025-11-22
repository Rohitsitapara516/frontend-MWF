import React,{useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Contact(){

       
    const [data, setData]=useState("")

    const firstname=useRef("");
    const lastname=useRef("");
    const email=useRef("");
    const phone=useRef("");
    const subject=useRef("");
    const message=useRef("");
    const navigate=useNavigate();




    const handleSubmit=async(e) =>{
       e.preventDefault()   

        var insert={
            firstname:firstname.current.value,
            lastname:lastname.current.value,
            email:email.current.value,
            phone:phone.current.value,
            subject:subject.current.value,
            message:message.current.value,
        }

        try{
            axios.post(`http://localhost:8000/contacts`,insert).then((res)=>{
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


        <Navbar />
        <section id="content">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5 p-5 bg-primary">
                        <h1 className="text-white ms-2">Contact With US</h1>
                        <p>
                            <b>
                                    AddressLine1 <span className="bi bi-geo-alt" />
                            </b>
                              1st Floor, Aditya Complex, Jalaram 2 Street Number 2, above Sbi
                              Bank, nr. Indira Circle, <br /> Jala Ram Nagar, Rajkot, Gujarat
                              360005
                        </p>
                        <p>
                             <iframe
                            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3790806.842964988!2d69.37160120088735!3d21.897623445127493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.1998477!2d72.77843519999999!4m5!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2stops%20technology%20rajkot!3m2!1d22.290224199999997!2d70.77486499999999!5e0!3m2!1sen!2sin!4v1697091356217!5m2!1sen!2sin"
                            width="96%"
                            height={250}
                            style={{ border: 0 }}
                           allowFullScreen=""
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                          />
                        </p>
                    </div>

                    <div className="col-md-7 m-0 p-3 mt-5">
                        <form name="frm" id="frm" encType="multipart/form-data" action="resister.html" onSubmit={handleSubmit}>
                        <h3 className="ms-2">Contct Form</h3>
                        <div className="input-group border border-0 w-75 ms-2 mt-3">
                            <span className="input-group-text border border-0"><i className="bi bi-person-add"/></span>
                            <input type="text" name="fname" id="fname"  data-bvalidator="required,email" ref={firstname} placeholder="First Name" className="form-control border border-0 border-bottom border-dark"/>
                        </div>

                        <div className="input-group border border-0 w-75 ms-2 mt-3">
                            <span className="input-group-text border border-0"><i className="bi bi-person-add"/></span>
                            <input type="text" name="lname" id="lname"  data-bvalidator="required,email" ref={lastname} placeholder="Last Name" className="form-control border border-0 border-bottom border-dark"/>
                        </div>

                         <div className="input-group border border-0 w-75 ms-2 mt-3">
                            <span className="input-group-text border border-0"><i className="bi bi-person-add"/></span>
                            <input type="text" name="email" id="email"  data-bvalidator="required,email" ref={email} placeholder="Email" className="form-control border border-0 border-bottom border-dark"/>
                        </div>


                         <div className="input-group border border-0 w-75 ms-2 mt-3">
                            <span className="input-group-text border border-0"><i className="bi bi-person-add"/></span>
                            <input type="text" name="phone" id="pwd"  data-bvalidator="required,email" ref={phone} placeholder="Phone" className="form-control border border-0 border-bottom border-dark"/>
                        </div>

                        <div className="input-group border border-0 w-75 ms-2 mt-3">
                            <span className="input-group-text border border-0"><i className="bi bi-person-add"/></span>
                            <input type="text" name="subject" id="cpwd"  data-bvalidator="required,email" ref={subject} placeholder="Subject" className="form-control border border-0 border-bottom border-dark"/>
                        </div>

                        <div className="input-group border border-0 w-75 ms-2 mt-3">
                            <span className="input-group-text border border-0"><i className="bi bi-person-add"/></span>
                            <textarea name="msg" id="pwd"  data-bvalidator="required" ref={message} placeholder="Message" className="form-control border border-0 border-bottom border-dark" defaultValue={""}/>
                        </div>

                        <div className="inpu-group border border-0 w-75 ms-3 mt-3">
                            <button type="submit" name="Login" className="btn btn-sm p-0 m-0 w-25 ms-2 bg-dark text-white">
                               {""}Send
                            </button>

                            <button type="reset" name="res" className="btn btn-sm p-0 m-0 w-25 ms-2 bg-dark text-white">
                               {""}Reset
                            </button>
                        </div>

                        <div className="input-group border border-0 w-75 ms-2 mt-3">
                            <p className="text-center ms-2">
                                Like Us On<i className="bi bi-facebook text-primary ms-2"/>
                                <i className="bi bi-twitter text-primary ms-2"/>
                                <i className="bi bi-google text-primary ms-2"/>
                                </p>
                                 </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        
        
        </>
    )
}