import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";



export default function Layout(){
    return(
        <>
       
        <Navbar />
        <Slider />
        <Content />
        <Footer />
        </>
    )
}