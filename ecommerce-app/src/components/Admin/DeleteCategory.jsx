import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function DeleteCategory(){
    const[data,setdata]=useState([]);
    const{id}=useParams();
    const Navigate=useNavigate();
    useEffect(()=>{
        axios.delete(`http://localhost:8000/addcategory/${id}`).then((response)=>{
            setdata(response.data)

            Swal.fire({
            title: "wow!",
            text: "Category successfully deleted!",
            icon: "success"
});

           Navigate('/admin-loginm/manage-category')
        }

        )
    },
    []

    )
    return(
        <>
        
        
        <div>

        </div>
        
        </>
    )
}