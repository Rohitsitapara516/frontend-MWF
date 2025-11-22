import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/cart`).then((response)=>{
            setdata(response.data);
        }

        )
    }

    )
    return(
        <>
        
        <nav className="nav navbar navbar-expand-sm">
         {/* <!-- logo of be-pro --> */}
            <Link to="/" className="navbar-brand pro-logo">Be-Pro</Link>
            {/* <!-- button toggler --> */}

            <button type="button" data-bs-toggle="collapse" data-bs-target="#btn-col" className="navbra-toggle border border-0 btn-btn-sm btn-primary text-white p-0 m-0"><span className="bi bi-grid-3x3"></span></button>
            <div className="collapse navbar-collapse" id="btn-col">
                {/* <!-- main navbar start here --> */}
            <ul className="nav-link">
            <li className="dropdown"><Link className="dropdown-toggle"  data-bs-toggle="dropdown" href="/">Home</Link>
            <ul className="dropdown-menu bg-primary tex-white">
                <li><Link to="/support">24x7 support</Link></li>
                <li><Link to="/#" data-bs-toggle="modal" data-bs-target="#support">Customer support</Link></li>
                <li><Link to="/privacy">privacy policy</Link></li>
                <li><Link to="/terms">Terms $ Condition</Link></li>
            </ul>
            </li>

                <li><Link to="/products">Shop Now</Link></li>
                <li><Link to="/blogs.html">Blogs</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
                <li className="pro-account ms-5"><Link to="/#" data-bs-toggle="modal" data-bs-target="#log">Shop Now</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/view-cart"><span className="bi bi-cart fs-6"><span className="badge badge-sm bg-white text-dark">{data.length}</span></span></Link></li>
                <li><Link to="/#"><span bi bi-search fs-6></span></Link></li>
            </ul>
            </div>


        </nav>
        
        </>
    )
}