import React,{useState} from 'react';
import "./navbar.css"
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import {motion} from "framer-motion"
import { SlLogout } from "react-icons/sl";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { a, Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import toast from 'react-hot-toast';


const Navbar = () => {
       const navigate=useNavigate()
    const [activeNav,setActiveNav]=useState("#")
    const {authUser,setAuthUser}=useAuthContext()
    const handleLogout=async(e)=>{
       // e.preventDefault();
       setActiveNav("#logout");
       try{
         const res=await fetch("https://portfolio-using-react-tgvo.onrender.com/api/auth/logout",{credentials: 'include'}) ;
         const data=await res.json();
         if(data.error){
              throw new Error(data.error);
         }
         setAuthUser(null);
         localStorage.removeItem("portfolio-user")
         navigate("/")
         toast.success("User Logout");
         return;
       }catch(err){
              console.log(err)
              toast.error(`${err}`)
       }
        
    }
    return (
       <motion.div  initial={{opacity:0,x:600,scale:0}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:500,damping:100}} >
        <nav className='nav xs:w-full md:w-max justify-center'>
       <a  className={activeNav==="#"?"active": ""}  onClick={()=>{setActiveNav("#")}} href="/#"> <IoHomeOutline /></a>
       <a href="#about" className={activeNav==="#about"?"active": ""}  onClick={()=>{setActiveNav("#about")}} > <FaRegUser /></a>
       <a className={activeNav==="#experience"?"active": ""}  onClick={()=>{setActiveNav("#experience")}} href="/#experience"> <GiBlackBook />
</a>
       <a className={activeNav==="#services"?"active": ""}  onClick={()=>{setActiveNav("#services")}} href="/#services"> <RiServiceLine />
</a>
       <a className={activeNav==="#contact"?"active": ""}  onClick={()=>{setActiveNav("#contact")}}  href="/#contact"> <MdOutlinePermContactCalendar />
</a> 
{authUser && <Link className={activeNav==="#logout"?"active": ""}  onClick={handleLogout}  to="/"> <SlLogout />
</Link>}

        </nav>
        </motion.div>
    );
};

export default Navbar;
