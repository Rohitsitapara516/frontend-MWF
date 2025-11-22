import React from "react";
import visa from '../assets/images/visa.png';

export default function Footer(){
    return(
        <>
        
        <div className="footer mt-3">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-3">
                        <a href="index.html" className="bavbar-brand pro-logo text-white">Be Pro</a>
                        <br />
                        <a href="#" className="text-white"><i className="bi bi-whatsapp ms-1"/></a>
                        <a href="#" className="text-white"><i className="bi bi-twitter ms-1"/></a>
                        <a href="#" className="text-white"><i className="bi bi-instagram ms-1"/></a>
                        <a href="#" className="text-white"><i className="bi bi-snapchat ms-1"/></a>
                        <a href="#" className="text-white"><i className="pinterest ms-1"/></a>
                    </div>

                    <div className="col-md-6">
                        <ul className="footer-nav-link">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">womens</a></li>
                        <li><a href="#">Mens</a></li>
                        <li><a href="#">Contact</a></li>  
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        </ul>
                        <p className="text-white ms-7">Subscribe to News</p>
                        <div className="input-group w-75">
                            <input type="text" name="subscribe" placeholder="Sunscrine Our news" className="form-control text-center" />
                            <span className="input-group-text"><button type="button" className="btn btn-sm border border-0">Subscribe</button></span>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h4 className="text-white">Contact Us</h4>
                        <p className="text-white mt-4">San Francisco, California 400 Castro St, San Francisco, CA (+1)
                        686-868-9999</p>
                        <p className=""><img src={visa} /></p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}