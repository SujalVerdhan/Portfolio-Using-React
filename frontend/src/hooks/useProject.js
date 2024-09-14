import React from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export const useProject = () => {
    const {setAuthUser}=useAuthContext()
    const navigate=useNavigate()
    const add=async(data)=>{
      try{
      const response=await fetch("http://localhost:5000/api/project/add",{
        method: 'POST', // Method type
        headers: {
          'Content-Type': 'application/json', // The content type you're sending (e.g., JSON)
          
        },
        credentials:'include',
        body: JSON.stringify(data),
        
      });
      const datas=await response.json();
      if(datas.error==="Token expired"){
        setAuthUser(null);
        localStorage.removeItem("portfolio-user")
        navigate("/login");
        toast.error("Token Expired! Login Again.")
        return;
       }
      if(datas.error){
        throw new Error(datas.error);
      }
      toast.success("project added")
      
      }catch(err){
        toast.error(`${err}`)
        console.log(err)
      }
    }
  return {add}
}
