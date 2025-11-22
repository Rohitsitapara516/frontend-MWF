import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { data } from "jquery";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";


export default function Cart(){
    const [data,setdata]=useState([]);
    const Navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8000/cart`).then((response)=>{
            setdata(response.data);
        }

        )
    }

    )
    return(
        <>
        
            <Navbar />
            <section id="content">
                <div className="container mt-5">
                    <div className="card">
                        <div className="card-header">View Cart ()</div>
                        <div className="card-body">
                            <table className="table table-responsive">
                                <tr>
                                    <th>productname</th>
                                    <th>offerprice</th>
                                    <th>qty</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>

                                {data && data.map((items)=>{
                                    return(
                                        <>
                                        <tr>
                                           <td>{items.productname}</td>
                                           <td>{items.offerprice1}</td>
                                           <td><input type="number" value="1" min="1" max="10"/></td>
                                           <td>{items.offerprice2}</td>
                                           <td><button type="button" onClick={()=>{Navigate(`/delete-cart/{items.id}`)}} className="btn btn-sm btn-danger text-white"><span className="bi bi-trash"></span></button></td>
                                        </tr>
                                        </>
                                    )

                                })}
                            </table>

                        </div>

                    </div>

                </div>

            </section>
            <Footer />
        
        </>
    )
}