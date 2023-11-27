import React from 'react';
import {motion} from "framer-motion"
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

     <div  className='container experience_container'>
            <motion.div initial={{opacity:0.5,scale:0.5,x:-100}}
                transition={{duration:1.5, }}
                whileInView={{opacity:1,scale:1,x:0}}>
                <div 
                className='card experience_frontend'>
                <h3>Frontend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>HTML</h4>
                             <small className='text-light'>Experienced</small>
                             </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>CSS</h4>
                             <small className='text-light'>Intermediate</small>
                             </div>
                        </article>
                        <article className='experience_details' >
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>JavaScript</h4>
                             <small className='text-light'>Intermediate</small>
                             </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>Bootstrap</h4>
                             <small className='text-light'>Experienced</small>
                             </div>
                        </article>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>React JS</h4>
                             <small className='text-light'>Intermediate</small>
                             </div>
                        </article>
                        
                    </div>
                </div>
                </motion.div>
                <motion.div initial={{opacity:0.5,scale:0.5,x:100}}
                transition={{duration:1.5, }}
                whileInView={{opacity:1,scale:1,x:0}}>
                <div  className='card experience_backend'>
                <h3>Back-End Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>Node JS.</h4>
                             <small className='text-light'>Beginner</small>
                             </div>
                        </article>
                        <article className='experience_details' style={{order:2}} >
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>Express JS.</h4>
                             <small className='text-light'>Intermediate</small>
                             </div>
                        </article>
                        <article className='experience_details' style={{gridRowStart:3}}>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>Mongo DB</h4>
                             <small className='text-light'>Intermediate</small>
                             </div>
                        </article>
                        <article className='experience_details' style={{order:1}}>
                        <BsPatchCheckFill className='experience_details-icon'/>
                        <div>
                             <h4>My-SQL</h4>
                             <small className='text-light'>Beginner</small>
                             </div>
                        </article>
                       
                        
                    </div>
                </div>
                </motion.div>
     </div>
        </section>
    );
};

export default Experience;
