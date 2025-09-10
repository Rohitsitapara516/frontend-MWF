import React from "react";
import { Containar,Row} from 'react-bootstrap'


export default function Home(){

  return(

    <>
    
     <Containar classname= 'p-5 mt-5 content'>
    <h2>React</h2>
    <Row>

      <div className='col-md-7 ms-5 p-5'>
       <h1>Download Now</h1>
      <h4>React Router Tutorials</h4>
       <button type='button' className='btn btn-md btn-danger text-white'>Play store</button>

       
      </div>
    </Row>
      
     </Containar>


    </>
  )
}