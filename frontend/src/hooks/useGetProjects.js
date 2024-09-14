import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'
import toast from 'react-hot-toast'

export const useGetProjects = () => {
    const [projects,setProjects]=useState([])
    const[loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()
   
    const navigate=useNavigate();
    useEffect(()=>{
        const getProjects=async()=>{
            
           
try{
const res=await fetch("https://portfolio-using-react-tgvo.onrender.com/api/project/get",{credentials: 'include'})
const data=await res.json()
console.log(data)
if(data.error==="Token expired"){
    localStorage.removeItem("portfolio-user");
    setAuthUser(null);
    navigate("/")
}
if(data.error){
    throw new Error(data.error)
}
setProjects(data)
}catch(err){
console.log(err)
toast.error(`${err}`);
}finally {
setLoading(false)
}
        }
         getProjects();
        console.log("caalled")
    },[])


    
     return {projects,loading}
}
