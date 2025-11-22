import React, { useEffect, useRef } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar"
import { Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProducts(){

    const Navigate=useNavigate();
    const{id}=useParams();
    const productname=useRef("");
    const oldprice=useRef("");
    const offerprice=useRef("");
    const qty=useRef("");
    const added_date=useRef("");


           useEffect(()=>{
           axios.get(`http://localhost:8000/addproducts/${id}`).then((response)=>{
            productname.current.value=response.data.productname;
            oldprice.current.value=response.data.oldprice;
            offerprice.current.value=response.data.offerprice;
            qty.current.value=response.data.qty;    
            added_date.current.value=response.data.added_date;
        })
        },[]);

          const UpdProkductsFormHandeler = (e) => {
             e.preventDefault();
            var updprod={
            productname:productname.current.value,
            oldprice:oldprice.current.value,
            offerprice:offerprice.current.value,
            qty:qty.current.value,    
            added_date:added_date.current.value

            }

            axios.put(`http://localhost:8000/addproducts/${id}`,updprod).then(()=>{
               // pass messages of update api
            Swal.fire({
            title: "Wow",
            text: "Thanks for Updated your Products",
            icon: "success"
        });

         Navigate('/admin-login/manage-products');
          }
        )}
    
   
    



    return(
        <>
              <AdminHeader />
                  <section id="dashboard-content">
                    <div className="container-fluid m-0 p-0 ">
                        <div className="row">
                            <AdminSidebar />
        
                            <div className="admin-dashboard col-md-9">
                                <h2 className="ms-3 p-4 mt-3">Welcome to Admin Dashboard</h2>
                                <hr className="border border-1 border-dark ms-5" align="left" />
                                <div className="row text-center d-flex justify-content-center align-items-center">
                                    <div className="col-md-8 ms-2 mt-3 p-4 shadow">
                                    <h2 className="ms-3 p-4 mt-3">Add Product here</h2>
                                    <hr className="border border-1 border-dark ms-5" align="left" />

                                    <Form>
                                        

                                        <InputGroup className="mt-2">
                                        <input type="text" ref={productname}  placeholder="Pruduct Name*" className="form-control" />
                                        </InputGroup>
                                        
                                        
                                       <InputGroup className="mt-2">
                                       <input type="text" ref={oldprice} placeholder="Old Price*" className="form-control" />
                                       </InputGroup>

                                       <InputGroup className="mt-2">
                                       <input type="text" ref={offerprice} placeholder="Offer Price*" className="form-control" />
                                       </InputGroup>

                                       <InputGroup className="mt-2">
                                       <input type="text" ref={qty} placeholder="Qty*" className="form-control" />
                                       </InputGroup>

                                          
                                       <InputGroup className="mt-2">
                                       <input type="text" ref={added_date} placeholder="Addedd Date*" className="form-control" />
                                       </InputGroup>

                                         
                                     <InputGroup className='mt-2'>
                                     <button type="submit" onClick={UpdProkductsFormHandeler}  className='btn btn-lg btn-dark text-white'>Update Products       </button> 
                                     </InputGroup>



                                    </Form>
                                    </div>
                                      </div>
                                        </div>
                                          </div>
                                            </div>
                                              </section>

        
        </>
    )
}
