import React,{useState,useRef} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import login from '../assets/images/login_img_c4a81e.png';
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Register(){

        const [data, setData] = useState("");
        const firstname=useRef("");
        const lastname=useRef("");
        const email=useRef("");
        const password=useRef("");
        const confirmpassword=useRef("");
        const navigate=useNavigate();
    
    
    
    
        const handleSubmit=async(e) =>{
           e.preventDefault()   
    
            var insert={
                firstname:firstname.current.value,
                lastname:lastname.current.value,
                email:email.current.value,
                password:password.current.value,
                confirmpassword:confirmpassword.current.value,
            }
    
            try{
                axios.post(`http://localhost:8000/register`,insert).then((res)=>{
                    console.log(res);
                    setData(res.data);
    
                  
            Swal.fire({
            title: 'Success!',
            text: 'Register submitted successfully',
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
                    <div className="col-md-4 p-5 bg-primary">
                        <h1 className="text-white ms-2">Looks like you're new here!</h1>
                        <p className="text-white text-center">
                           Sing up with your mobile number to get started
                        </p>

                        <img
                       src={login}
                       className="img-fluid w-75 mt-5"
                      />
                    </div>

                    <div className="col-md-8 m-0 p-3 mt-5">
                        <form name="frm" id="frm" encType="multipart/form-data" action="resister.html" onSubmit={handleSubmit}>
                        <h3 className="ms-2">Sing UP Form</h3>
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
                            <input type="password" name="pwd" id="pwd"  data-bvalidator="required,email" ref={password} placeholder="Password" className="form-control border border-0 border-bottom border-dark"/>
                        </div>

                        <div className="input-group border border-0 w-75 ms-2 mt-3">
                            <span className="input-group-text border border-0"><i className="bi bi-person-add"/></span>
                            <input type="password" name="cpwd" id="cpwd"  data-bvalidator="required,email" ref={confirmpassword} placeholder="Confirm Password" className="form-control border border-0 border-bottom border-dark"/>
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
                            <b>
                                Already have an account ?{""}
                                <a href="#" data-bs-target="#log" data-bs-toggle="modal">Login</a>
                            </b>

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