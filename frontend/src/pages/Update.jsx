import React, { useEffect, useState } from 'react'
import { TiTick } from "react-icons/ti";

import { useImageUpload } from '../hooks/useImageUpload';
import { useProject } from '../hooks/useProject';
import toast from 'react-hot-toast';
import { useUpdate } from '../hooks/useUpdate';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

export const Update= () => {
    const navigate=useNavigate()
    const {setAuthUser}=useAuthContext()
  const {update}=useUpdate();
  const {upload,loading,cloudinaryUrl,uploaded,setUploaded}=useImageUpload()
    const {id}=useParams();
    const [file,setFile]=useState(null)
    const [preview,setPreview]=useState(null)
    // const [cloudinaryUrl,setCloudinaryUrl]=useState(null);
    const initial={title:"",github:"",img:"",demo:""}
    const [data,setData]=useState(initial)
    console.log(data);
    console.log(data)
    const handleSubmit=async(e)=>{
     e.preventDefault()
    await update(data);
    
    }

    
   const handleImgChange=(e)=>{
    e.preventDefault();
    
    const file=e.target.files[0];
    console.log(file)
    if (file) {
        setFile(file);

        // Create a preview of the image
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    }

   }
  

    const handleImgSubmit=async(e)=>{
  e.preventDefault()
  if (!file) return;
  
//   setUploading(true);
  
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'portfolio'); // Replace with your upload preset
  formData.append('cloud_name', 'dvjyiyapc'); 
  await upload(formData,setData);
  
    
    }



    useEffect(()=>{
      const getupdate=async()=>{
        console.log("getupdate")
        try{
          const response=await fetch(`http://localhost:5000/api/project/update/${id}`,{credentials:'include'});
          const data=await response.json();
          if(data.error==="Token expired"){
            localStorage.removeItem("portfolio-user");
            setAuthUser(null);
            navigate("/login")
          }
          if(data.error){
            throw new Error(data.error);
          }
        setData(data);
        setPreview(data.img)
        }catch(err){
            console.log(err)
            toast.error(`${err}`)
        }
      }
      getupdate();
},[])
  return (
    <div className=" w-full p-4 min-h-screen flex justify-center items-center gap-1 flex-col">
    <h1 className='text-center md:text-4xl text-2xl'>Add Work Details</h1>

<form onSubmit={handleSubmit} className='md:w-2/5 w-full text-black login p-4 md:px-8 rounded-lg hover:bg-transparent'>
<div className="label ">
    <span className="label-text text-white">Project Title</span>
    
  </div>
  <input required type="text" name='title' value={data.title} onChange={(e)=>setData(prev=>{ return {...prev,[e.target.name]:e.target.value}})} placeholder="Enter project title here" className="input input-bordered w-full text-blue-950 " />
  
  
<form style={{gap:"0", marginTop:"5px"}}>
{preview && <img className="w-[331px] h-[268px] rounded-2xl object-center mx-auto" src={preview}></img>
}

  <div className="label gap-0">
    <span className="label-text text-white">Pick a file</span>

  </div>
  <div className='p-2 bg-white flex gap-4 items-center'>
  <input required  type="file" name='img' accept="image/*" onChange={handleImgChange} className="file-input file-input-bordered  mt-0  p-0 text-blue-950" />
  {!uploaded?  <button style={{border:"2px solid #4db5ff"}} onClick={handleImgSubmit} className='btna btna-primary border-2 border-blue-950'>{loading?<span className="loading loading-bars loading-md"></span>:"Upload"}</button>
  :<TiTick className='text-2xl text-green-600'/>}
</div>
</form>


<div className="label ">
    <span className="label-text  text-white">Github Link</span>
    
  </div>
  <input required type="text" value={data.github} name='github' onChange={(e)=>setData(prev=>{ return {...prev,[e.target.name]:e.target.value}})} placeholder="Enter github link" className="input input-bordered w-full text-blue-950 " />
  
  
 
  <div className="label">
    <span className="label-text text-white">Live Demo Link</span>
    
  </div>
  <input name="demo" type="link" value={data.demo} required onChange={(e)=>setData(prev=>{ return {...prev,[e.target.name]:e.target.value}})}  placeholder="Enter live demo link" className="input input-bordered w-full text-blue-950 " />
<button className='btna btna-primary mt-4 mx-auto'>Submit</button>
</form>
    </div>
  )
}
