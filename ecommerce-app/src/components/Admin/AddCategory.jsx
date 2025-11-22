import React, { useRef } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar"
import { InputGroup } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";


export default function AdminCategory(){

    const categoryname=useRef("");
    const added_date=useRef("");

    const AddcategoryHendeler=(e)=>{
         e.preventDefault();

         const insert={
            categoryname:categoryname.current.value,
            added_date:added_date.current.value
         }

         axios.post(`http://localhost:8000/addcategory`,insert).then(()=>{
             Swal.fire({
              title: "Woe",
              text: "Thanks for added your category",
              icon: "success"
          });
         }

         )
         e.target.value();
    }
    return(
        <>
        
        <AdminHeader />
        <section id="dashboard-content text-center d-flex justify-content-center align-items-center">
            <div className="container-fluid m-0 p-0">
                <div className="row">
                    <AdminSidebar />

                    <div className="admin-dashboard col-md-9 p-3">
                        <h2 className="ms-3 p-4 mt-3">Welcome to Admin Dashboard</h2>
                        <hr className="border border-1 border-dark ms-5" align="left" />
                        <div className="row text-center d-flex justify-content-center align-items-center">
                            <div className="col-md-8 ms-2 mt-3 p-4 shadow">
                            <h2 className="ms-3 p-4 mt-3">Add Categort here</h2>
                            <hr className="border border-1 border-dark ms-5" align="left" />
                            <form onSubmit={AddcategoryHendeler}>
                                <InputGroup className="mt-2">
                                <input type="text" ref={categoryname} placeholder="Enter Category Name*" className="form-control" />
                                </InputGroup>

                                 <InputGroup className="mt-2">
                                <input type="text" ref={added_date} placeholder="Addedd Date*" className="form-control" />
                                </InputGroup>

                                 <InputGroup className="mt-2">
                                <input type="submit"  placeholder="Enter Category Name*" className="btn btn-lg btn-dark text-white" />
                                </InputGroup>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
        
        </>
    )
}