import React from "react";
import { Link } from "react-router-dom";


export default function PageBanner(){
    return(
        <>
        
        <div>
            <section id='page-banner' className='container max-auto '>
                <h1><Link to="/">Home</Link></h1>

            </section>

        </div>

        </>
    )
}