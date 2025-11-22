import React, { useRef } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar"
import { Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddProduct(){


    const productname=useRef("");
    const oldprice=useRef("");
    const offerprice=useRef("");
    const qty=useRef("");
    const description=useRef("");
    const added_date=useRef("");

    const AddProductHandeler=(e)=>{
        e.preventDefault();

        var insert={
            productname:productname.current.value,
            oldprice:oldprice.current.value,
            offerprice:offerprice.current.value,
            qty:qty.current.value,
            description:description.current.value,
            added_date:added_date.current.value

        }

        axios.post("http://localhost:8000/addproducts", insert).then(()=>{
            Swal.fire({
             title: "wow!",
             text: "Thankyou for added your Products!",
             icon: "success"
});
        }

        )

        e.target.reset();
    }
    



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

                                    <Form onSubmit={AddProductHandeler}>
                                        

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
                                       <input type="text" ref={description} placeholder="Description*" className="form-control" />
                                       </InputGroup>
                                          
                                       <InputGroup className="mt-2">
                                       <input type="text" ref={added_date} placeholder="Addedd Date*" className="form-control" />
                                       </InputGroup>

                                         
                                     <InputGroup className='mt-2'>
                                     <input type='submit' value="AddProducts"  className='btn btn-lg btn-dark text-white'/>
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