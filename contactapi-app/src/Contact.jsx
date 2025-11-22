import React,{useState,useRef} from "react";;
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




export default function Contact(){

const[data,setData]=useState("");

const name=useRef("");
const email=useRef("");
const phone=useRef("");
const subject=useRef("");
const message=useRef("");
const navigate=useNavigate();

const handleSubmit=async(e)=>{
    e.preventDefault();

    var insert={
        name:name.current.value,
        email:email.current.value,
        phone:phone.current.value,
        subject:subject.current.value,
        message:message.current.value,

    }

try{
axios.post(`http://localhost:8000/contact`,insert).then((res)=>{
console.log(res);
setData(res.data);

Swal.fire({
title: 'Success!',
text: 'Form submitted successfully',
icon: 'success',
confirmButtonText: 'OK'
})
})

e.target.reset();
navigate("/");

}
catch(err)
{
console.log(err);
alert("Form submission failed");
}


}



    return(
<>



<div className="min-h-screen grid grid-cols-2 items-center justify-center p-8 bg-gradient-to-r from-green-400 to-blue-600 gap-8">
<div className='w-full'>
<img src="https://static.vecteezy.com/system/resources/thumbnails/048/089/999/small/call-us-shape-banner-free-png.png" alt="Contact Us" className="w-full h-full object-cover" />
</div>
<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
<h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
<form onSubmit={handleSubmit}>
<div>
<label className="block text-gray-700">Name</label>
<input type="text"  ref={name} className="w-full px-3 py-2 border rounded" placeholder="Your Name" required />
</div>
<div>
<label className="block text-gray-700">Email</label>
<input type="email" ref={email}  className="w-full px-3 py-2 border rounded" placeholder="Your Email" required />
</div>
<div>
<label className="block text-gray-700">Phone</label>
<input type="text" ref={phone} className="w-full px-3 py-2 border rounded" placeholder="Your Phone" required />
</div>
<div>
<label className="block text-gray-700">Subject</label>

<select className="w-full px-3 py-2 border rounded" ref={subject}>
<option value="">Select Subject</option>
<option value="general">General Inquiry</option>
<option value="support">Support</option>
<option value="feedback">Feedback</option>
</select>

</div>
<div>
<label className="block text-gray-700">Message</label>
<textarea  className="w-full px-3 py-2 border rounded" placeholder="Your Message" required></textarea>
</div>
<button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
</form>
</div>
</div>


</>
    )
}