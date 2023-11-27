import React from 'react';
import "./portfolio.css"
import Keeper from "../../assets/Untitled design (1).png";
import Todo from "../../assets/todolist.png";
import {motion} from "framer-motion"
import ExpressTodo from "../../assets/Untitled design (2).png";
import Secret from "../../assets/secret.png"
import Tindog from "../../assets/tindog.png"

import Drumkit from "../../assets/drumki.png"
const Portfolio = () => {
    const data=[{id:1,name:"Keeper App",github:"https://github.com/SujalVerdhan/Keeper-app",link:"https://keeperapp-ewia.onrender.com",img:Keeper,

    },
    {id:2,name:"To-Do List App",github:"https://github.com/SujalVerdhan/TO-Do-List-",link:"https://todolist-using-react.onrender.com/",img:Todo},
    {id:3,name:"To-Do List App Using ExpressJS.",github:"https://github.com/SujalVerdhan/todolist",link:"https://to-do-list-t781.onrender.com" ,img:ExpressTodo},
    {id:4,name:"Secret Submitter Website",github:"https://github.com/SujalVerdhan/Secret-Submitter",link:"https://secretsubmitter.onrender.com/",img:Secret},
    {id:5,name:"Drum-Kit Website",github:"https://github.com/SujalVerdhan/drumkit",link:"https://sujalverdhan.github.io/drumkit/",img:Drumkit},
    {id:6,name:"Tindog Website",github:"https://github.com/SujalVerdhan/Tindog",link:"https://sujalverdhan.github.io/Tindog/", img:Tindog}]
    return (
        <section id="portfolio">
           <h5>My Recent Work</h5>
           <h2>Portfolio</h2>
           <div 
             
           className='container portfolio_container'>
           {data.map(item=>{
            return <motion.div initial={{opacity:0,scale:0.5,x:100}} transition={{duration:1.5}} whileInView={{opacity:1,scale:1,x:0}}><article className='portfolio_item'>
            <div className='portfolio_item_image'>
             <img src={item.img}/>
            </div>
            <h3>{item.name}</h3>
            <div className='portfolio_item_cta'>
            <a href={item.github} target="_blank" className='btn'>Github</a>
            <a href={item.link} target="_blank" className='btn btn-primary'>Live Demo</a>
            </div>
           </article></motion.div>
           }

           )}
           </div>
          
           
           
        </section>
    );
};

export default Portfolio;
