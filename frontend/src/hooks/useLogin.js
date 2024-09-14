import React from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';

export const useLogin = () => {
  const {setAuthUser}=useAuthContext()
  const login=async(data)=>{
    try{
        const response=await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST', // Method type
            headers: {
              'Content-Type': 'application/json', // The content type you're sending (e.g., JSON)
            },
            credentials:'include',
            body: JSON.stringify(data),
          })

        
      const datas=await response.json();
      if(datas.error){
        throw new Error(datas.error)
      }
     console.log(datas);
     localStorage.setItem("portfolio-user",JSON.stringify(datas));
     setAuthUser(datas)
     toast.success("Admin Logged in ")

    }catch(err){
      toast.error(`${err}`)
        console.log(err);
    }
  }
  return {login}
}
