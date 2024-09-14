import React, { useState } from 'react'
import "./login.css"
import { MdPassword } from 'react-icons/md'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'
export const Login = () => {
  const {login}=useLogin()
  const [data,setData]=useState({email:"",password:""})
  const handleSubmit=(e)=>{
    e.preventDefault();
  login(data);
  }
  return (
    <div className=" w-full h-screen flex justify-center items-center gap-1 flex-col">
    <Link className='btna absolute top-8 left-3' to="/">{"<"}</Link>
    <h1 className='text-center md:text-4xl text-2xl'>Hello Mr. Verdhan</h1>

<form onSubmit={handleSubmit} className='md:w-2/5 w-full text-black login p-4 px-8 rounded-lg hover:bg-transparent'>
<h4 className='mx-auto text-white '>Please Login</h4>
<div className="label ">
    <span className="label-text text-white">Admin Email</span>
    
  </div>
  <input type="text" name='email' onChange={(e)=>setData(prev=>{ return {...prev,[e.target.name]:e.target.value}})} placeholder="Enter your email here" className="input input-bordered w-full text-blue-950 " />
  
  
 
  <div className="label">
    <span className="label-text text-white">Password</span>
    
  </div>
  <input name="password" onChange={(e)=>setData(prev=>{ return {...prev,[e.target.name]:e.target.value}})} type="text" placeholder="Enter your password" className="input input-bordered w-full text-blue-950 " />
<button className='btna btna-primary mt-4 mx-auto'>Submit</button>
</form>
    </div>
  )
}
