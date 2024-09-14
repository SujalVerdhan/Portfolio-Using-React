import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export const useImageUpload = () => {
    const [cloudinaryUrl,setCloudinaryUrl]=useState(null)
    const [uploaded,setUploaded]=useState(false)
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()
    const navigate=useNavigate()
  const upload=async(formData,setData)=>{
    
    setLoading(true)
    console.log("formdata is",formData)
    try{
        const response = await fetch(
            'https://api.cloudinary.com/v1_1/dvjyiyapc/image/upload', // Replace with your cloud name
            {
                method: 'POST',
                body: formData,
                
            }
        );
    
        const data = await response.json();
        const url=await data.secure_url
       if(data.error==="Token expired"){
        setAuthUser(null);
        localStorage.removeItem("portfolio-user")
        navigate("/login");
       }
        console.log(data)
        setCloudinaryUrl(url);
        console.log(url);
        setUploaded(true)
        console.log("url",cloudinaryUrl)
        setData(prev=>{return {...prev,img:url}})
      }catch(err){
        console.log(err)
      }finally{
        setLoading(false)
      }
    }
    
  return {upload,loading,cloudinaryUrl,uploaded,setUploaded}
}
