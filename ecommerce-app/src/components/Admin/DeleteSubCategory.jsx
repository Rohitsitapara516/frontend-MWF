import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteSubCategory(){
    const[data,setdata]=useState([]);
    const Navigate=useNavigate();
    const{id}=useParams();
    useEffect(()=>{
        axios.delete(`http://localhost:8000/addsubcategory/${id}`).than(()=>{
             Swal.fire({
             title: "Wow",
             text: "Your subcategory Data Deleted successfully",
             icon: "success"
                });

            Navigate('/admin-login/manage-subcategory');    
        }

        )
    }

    )
    return(
        <>
        <div>

        </div>
        
        </>
    )
}