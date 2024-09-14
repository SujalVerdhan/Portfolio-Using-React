import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

export const useUpdate = () => {
    const navigate=useNavigate()
    const {setAuthUser}=useAuthContext()
    const {id}=useParams()
   const update=async(data)=>{
   try{
const response=await fetch(`http://localhost:5000/api/project/update/${id}`,{
    method:"POST",
    headers: {
        'Content-Type': 'application/json', // The content type you're sending (e.g., JSON)
        
      },
      credentials:'include',
      body: JSON.stringify(data),
})
const datas=await response.json()
if(datas.error==="Token expired"){
    localStorage.removeItem("portfolio-user");
    setAuthUser(null);
    navigate("/")
    
}
if(datas.error){
throw new Error(datas.error);
}
toast.success("Project updated")
   }catch(err){
    console.log(err)
    toast.error(`${err}`)
   }
   }
   return {update}
}
