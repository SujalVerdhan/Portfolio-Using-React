import React from 'react'
import "./portfolio.css"
import { useAuthContext } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { useDelete } from '../../hooks/useDelete'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const Helper = ({item}) => {
  const navigate=useNavigate()
  const {authUser}=useAuthContext()
  const {deleteItem}=useDelete()
  const id=item._id;
  console.log(id)
  const handleDelete=async(e)=>{
    e.preventDefault()
     if(authUser){
      await deleteItem(id);
     }
   navigate("/login");
   return;
  }
  return (
    <article className='portfolio_item'>
    <div className='portfolio_item_image rounded-lg relative'>
     <img className='rounded-xl' style={{height:"268px",maxWidth:"100%"}} src={item.img}/>
     <div className='absolute text-4xl top-0 right-0 rotate-90 z-10 text-white option-button peer xs:hidden md:block '>...</div>
     <ul className='absolute top-0 bg-white text-black rounded-lg p-4 right-10 options hidden hover:block peer-hover:block'>
      <li className='text-red-500 p-2 cursor-pointer' onClick={handleDelete}>Delete</li>
      <hr style={{height:"1px"}} className='bg-black  px-0'></hr>
      <li className='p-2'><Link className='hover:text-blue-800' to={`/update/${id}`}>Update</Link></li>
     </ul>
    </div>
    <div className='flex items-center md:block justify-around'>
    <h3>{item.title}</h3>
    <a className='text-red-500 float-right btna  md:hidden' onClick={handleDelete}><MdDelete/></a>
    <Link to={`/update/${id}`} className='text-red-500 float-right btna  md:hidden'><FaRegEdit/></Link>
    </div>
    <div className='portfolio_item_cta'>
    <a href={item.github} target="_blank" className='btna'>Github</a>
    <a href={item.demo} target="_blank" className='btna btna-primary'>Live Demo</a>
    </div>
    
   </article>
  )
}

export default Helper