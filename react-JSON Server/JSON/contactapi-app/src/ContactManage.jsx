import React,{useState, useEffect} from "react";

export default function ManageContact(){


    const[data,setData]=useState([]);


    useEffect(()=>{
        fetch('http://localhost:8000/contact')
        .then((res)=>res.json())
        .then((data)=>{
            setData(data);
            console.log(data);

        }
        )
        .catch((err)=>{
            console.log(err);
        }

        )
    },[])
    console.log(data)
    





    return(
        <>
        
        
        
<div className="min-h-screen p-25  items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">

<div className='text-white p-0 mt-5'>
<h1 className="text-4xl font-bold m-0 p-0">Welcome to Our Contact Page</h1>
<div>ManageContact</div>
<h1>Welcome to ManageContact Page</h1>
<p>This is the ManageContact page of the application.</p>

<div className='w-full m-0 p-0 mt-10'>

<table className='table-auto border-collapse border border-slate-400'>
<thead>
<tr>
<th className='border border-slate-300 px-4 py-2'>Name</th>
<th className='border border-slate-300 px-4 py-2'>Email</th>
<th className='border border-slate-300 px-4 py-2'>Phone</th>
<th className='border border-slate-300 px-4 py-2'>Subject</th>
<th className='border border-slate-300 px-4 py-2'>Message</th>
<th className='border border-slate-300 px-4 py-2'>Actions</th>
</tr>
</thead>
            
<tbody>
    {data && data.map((items)=>{
        return(
            <>

            <tr>

<td className='border border-slate-300 px-4 py-2'>{items.name}</td>
<td className='border border-slate-300 px-4 py-2'>{items.email}</td>
<td className='border border-slate-300 px-4 py-2'>{items.phone}</td>
<td className='border border-slate-300 px-4 py-2'>{items.subject}</td>
<td className='border border-slate-300 px-4 py-2'>{items.message}</td>
<td className='border border-slate-300 px-4 py-2'>
<button className='bg-blue-500 text-white px-4 py-2 rounded mr-2'>Edit</button>
<button className='bg-red-500 text-white px-4 py-2 rounded'>Delete</button>
</td>
</tr>


            </>
        )
    })}
        

</tbody>

</table>


</div>
</div>
</div>
        
        
        </>
    )
}