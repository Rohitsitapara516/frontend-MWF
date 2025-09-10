import react, { useState } from 'react'
import { Container } from 'react-bootstrap';

export default function Addformapp(){
    
        const[value,setvalue]=useState("");
        const[result,setresult]=useState("");


        const onChangrData=(e)=>{
            e.preventDefualt();
            setvalue(e.target.value);
        }

        const AddFromData=(e)=>{
           e.preventDefualt();
           setresult("From Successfully submited",value); 
        }
          




        return
        
        (


        <>
     <Container className='p-5 w-50 mt-5 shadow'>
        <h1>ADD DATA</h1>
        <hr />
        <form>

             <div className='form-group mt-3'>
                <input type='text' value={value} onChange={onChangrData} placeholder='name' required className='form control' />
            </div>

             <div className='form-group mt-3'>
                <input type='text' value={value} onChange={onChangrData} placeholder='email' required className='form control' />
            </div>

            <div className='form-group mt-3'>
                <input type='text' value={value} onChange={onChangrData} placeholder='password' required className='form control' />
            </div>

             <div className='form-group mt-3'>
                <input type='submit' value='submit' required className='btn btn-lg btn-dark text-white' />
            </div>
        </form>
        
        
        </Container>     
        
        </>
    )
}