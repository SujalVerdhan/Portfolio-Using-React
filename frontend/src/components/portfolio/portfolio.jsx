import React, { useState } from 'react';
import "./portfolio.css"

import {motion} from "framer-motion"

import Helper from './helper';
import { useGetProjects } from '../../hooks/useGetProjects';
import { Link } from 'react-router-dom';
const Portfolio = () => {
    // const [data,setData]=useState([])
   const {projects,loading}=useGetProjects()
//    
    return (
        <section id="portfolio">
           <h5>My Recent Work</h5>
           <h2>Portfolio</h2>
           <div style={{width:"100%",justifyItems:"center",alignItems:"center"}}
             
           className='w-full container portfolio_container'>
           {projects.length!==0 && projects?.map(item=>{
            return <motion.div style={{width:"100%"}} initial={{opacity:0,scale:0.5,x:100}} transition={{duration:2}} whileInView={{opacity:1,scale:1,x:0}}>
            <Helper item={item}/>
          </motion.div>
           }
           

           )}
           <article style={{width:"max-content",height:"max-content",justifyItems:"center",alignItems:"center"}} className='portfolio_item'>
            
            <div className='portfolio_item_cta'>
            
            <Link to="/form"  className='btna btna-primary mx-auto'>Add More</Link>
            </div>
           </article>
           </div>
          
           
           
        </section>
    );
};

export default Portfolio;
