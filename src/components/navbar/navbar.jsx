import React,{useState} from 'react';
import "./navbar.css"
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import {motion} from "framer-motion"

import { MdOutlinePermContactCalendar } from "react-icons/md";


const Navbar = () => {
    const [activeNav,setActiveNav]=useState("#")
    return (
       <motion.div  initial={{opacity:0,x:600,scale:0}} animate={{opacity:1,y:0,x:0,scale:1}} transition={{type:"spring",stiffness:500,damping:100}} >
        <nav className='nav'>
       <a  className={activeNav==="#"?"active": ""}  onClick={()=>{setActiveNav("#")}} href="#"> <IoHomeOutline /></a>
       <a href="#about" className={activeNav==="#about"?"active": ""}  onClick={()=>{setActiveNav("#about")}} > <FaRegUser /></a>
       <a className={activeNav==="#experience"?"active": ""}  onClick={()=>{setActiveNav("#experience")}} href="#experience"> <GiBlackBook />
</a>
       <a className={activeNav==="#services"?"active": ""}  onClick={()=>{setActiveNav("#services")}} href="#services"> <RiServiceLine />
</a>
       <a className={activeNav==="#contact"?"active": ""}  onClick={()=>{setActiveNav("#contact")}}  href="#contact"> <MdOutlinePermContactCalendar />
</a>
        </nav>
        </motion.div>
    );
};

export default Navbar;
