import React, { useEffect, useRef, useState } from "react";
import { Form,FormGroup } from 'react-bootstrap'
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditCategory(){

    //edit category via calling api http://localhost:8000/addcategory
    // take a reference using hooks useRef
    const[data,setdata]=useState([])
    const navigate=useNavigate();
    const{id}=useParams();
    const categoryname=useRef("");
    const added_date=useRef("");

    
// create a useEffect to fetch edited data
useEffect(()=>{
    axios.get(`http://localhost:8000/addcategory/${id}`).then((response)=>{
        setdata(response.data)
        categoryname.current.value=response.data.categoryname
        added_date.current.value=response.data.added_date;
    } )
},[id])

  // update category from http://localhost:8000/addcategory

  const UpdFormHandeler=(e)=>{
      e.preventDefault();
    const Updcat={
        categoryname:categoryname.current.value,
        added_date:added_date.current.value
    }

    axios.put(`http://localhost:8000/addcategory/${id}`,Updcat).then((response)=>{
        Swal.fire({
        title: "Wow",
        text: "Thanks for Edit your category",
        icon: "success"
    });

    navigate('/admin-login/manage-category')
    }

    )
  }

    return(
        <>
        
          <AdminHeader />
        <section id="dashboard-content" className="text-center d-flex justify-content-center align-items-center">
            <div className="container-fluid m-0 p-0">
                <div className="row">
                    <AdminSidebar />

                    <div className="admin-dashboard col-md-9 p-3">
                        <h2 className="ms-3 p-4 mt-3">Welcome to Admin Dashboard</h2>
                        <hr className="border border-1 border-dark ms-5" align="left" />
                        <div className="row text-center d-flex justify-content-center align-items-center">
                            <div className="col-md-8 ms-2 mt-3 p-4 shadow">
                            <h2 className="ms-3 p-4 mt-3">Edit Categort here</h2>
                            <hr className="border border-1 border-dark ms-5" align="left" />


                            <Form onSubmit={UpdFormHandeler}>
                                <FormGroup className="mt-2">
                                <label className='text-success'>Edit CategoryName *</label>
                                <input type="text" ref={categoryname}  placeholder="Enter Category Name*" className="form-control" />
                                </FormGroup>

                                 <FormGroup className="mt-2">
                                 <label className='text-success'>Edit Addedd Date *</label>
                                <input type="text" ref={added_date}  placeholder="Addedd Date*" className="form-control" />
                                </FormGroup>

                                <FormGroup className='mt-2'>
                                    <button className="btn btn-lg btn-dark text-white">Update Category</button>
                                </FormGroup>
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
        
    