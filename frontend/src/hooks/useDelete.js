import React from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export const useDelete = () => {
const {setAuthUser}=useAuthContext()
const navigate=useNavigate()
  const deleteItem=async(id)=>{
     try{
          const response=await fetch(`http://localhost:5000/api/project/delete/${id}`,
            {credentials: 'include'})
          const data=await response.json();
          if(data.error==="Token expired"){
            setAuthUser(null);
        localStorage.removeItem("portfolio-user")
        navigate("/login");
           }
          if(data.error){
           throw new Error(data.error)
          }
          toast.success("Project Deleted");
     }catch(err){
        toast.error(`${err}`)
        console.log(err)
     }
  }
  return {deleteItem}
}
