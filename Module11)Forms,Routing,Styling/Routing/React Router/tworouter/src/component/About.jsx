import React from "react";
import { Link } from 'react-ruter-dom'
import NavbarApp from "./Navbarapp";
import { container,Row } from 'react-bootstrap'


export default function About(){

  return(


    <>
    
     <NavbarApp />
    <Container className='p-5 mt-5 content'>
            <h2>About us</h2>
            <Row>
                <div className='col-md-4 shadow p-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut! Magni omnis quae amet et, eveniet nisi nemo? Aut, quis laudantium odio ipsam ipsa laborum provident atque deserunt impedit consequatur. </p>
                </div>
                
            </Row>
        </Container>

    
    </>
  )
}