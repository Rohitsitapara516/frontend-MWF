import React from 'react'
import { Link } from 'react-router-dom'
import NavbarApp from './NavbarApp'
import { Container,Row } from 'react-bootstrap'
export default function Contact() {
  return (
    <>
    <NavbarApp />
    <Container className='p-5 mt-5 content'>
            <h2>Contact Us</h2>
            <Row>
               
                <div className='col-md-7 ms-5 p-5'>
                   <hr className='w-25' />
                   <form>
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Name *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='email *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Phone *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Subject *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-2'>
                        <input type='text' placeholder='Comment *' className='form-control' />
                    </div>
                    
                    <div className='form-group mt-3'>
                        <input type='submit' placeholder='Name *' className='btn btn-lg btn-dark text-white' value="Send" />
                    </div>
                   </form>
                   
                </div>
            </Row>
        </Container>
        </>
  )
}