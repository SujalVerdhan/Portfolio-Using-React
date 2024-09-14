import React from 'react';
import "./footer.css";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
const Footer = () => {
  const permalinks=[{link:"#",name:"Home"},
  {link:"#about",name:"About"},
  {link:"#experience",name:"Experience"},
  {link:"#services",name:"Services"},
  {link:"#portfolio",name:"Portfolio"},
  {link:"#testimonials",name:"Testimonial"},
  {link:"#contact",name:"Contact"}]

  const footerlinks=[{link:"https://www.instagram.com/sujal_vardhan/",name:<FaInstagram/>}
  ,{link:"https://www.facebook.com/sujal.verdhen",name:<FaFacebookF />},
  {link:"https://twitter.com/Sujal_Vardhan",name:<BsTwitterX />},
  {link:"https://www.linkedin.com/in/sujal-verdhan-21859a225/",name:<FaLinkedinIn />},
  {link:"https://github.com/SujalVerdhan",name:<TbBrandGithubFilled />},
  
  ]
    return (
        <footer>
          <a href='' className='footer_logo'>Sujal Verdhan</a>
          <ul className='permalinks'>
         {permalinks.map((items,index)=>{
            return  <li key={index}><a href={items.link}  >{items.name}</a></li>
         
          })}
          
        
          </ul>

          <div className='footer_socials'>
          {footerlinks.map((items,index)=>{
            return <a key={index} href={items.link} target="_blank">{items.name}</a>
          })}
            
            
          </div>

          <div className='footer_copyright'>
            <small>&copy; Sujal Verdhan.All rights reserved.</small>
          </div>
        </footer>
    );
};

export default Footer;
