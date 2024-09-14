import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import {motion} from "framer-motion"
import { FaInstagramSquare } from "react-icons/fa";
const HeaderSocials = () => {
    return (
        
     <div className='header_socials'>

        <a className="linkedin" href='https://www.linkedin.com/in/sujal-verdhan-21859a225/' target='_blank'><FaLinkedin /></a>
        <a className="github" href='https://github.com/SujalVerdhan' target='_blank'><FaSquareGithub /></a>
        <a className="instagram" href='https://www.instagram.com/sujal_vardhan/' target='_blank'><FaInstagramSquare /></a>
       
     </div>
  
    );
};

export default HeaderSocials ;
