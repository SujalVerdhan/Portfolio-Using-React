import React from 'react';
import "./about.css"
import ME from "../../assets/IMG_7798.jpg"
import { FaAward } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { VscFolderActive } from "react-icons/vsc";
import {motion} from "framer-motion"
const About = () => {
    return (
        <section id="about">
            <h5>Get TO Know</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <motion.div initial={{opacity:0,x:100,scale:0.5}}
                    transition={{duration:1.5}}
                    whileInView={{opacity:1,x:0,scale:1}} className='about_me'>
                    <div className='about_me_image'>
                        <img src={ME}></img>
                    </div>
                </motion.div>
                <div className='about_content'>
                    <motion.div
                      initial={{opacity:0,x:100,scale:0.5}}
                    transition={{duration:1.5}}
                    whileInView={{opacity:1,x:0,scale:1}} className='about_cards'>
                        <article className='about_card'>
                        <FaAward className='about_card_icon'/>
                            <h5>Experience</h5>
                            <small>Fresher </small>
                        </article>
                        <article className='about_card'>
                        <PiUsersThreeLight className='about_card_icon'/>
                            <h5>Skills</h5>
                            <small>All Rounder</small>
                        </article>
                        <article className='about_card'>
                        <VscFolderActive className='about_card_icon'/>
                            <h5>Projects</h5>
                            <small>10 + Completed</small>
                        </article>
                    </motion.div>
                    <motion.p
                    initial={{opacity:0,x:100,scale:0.5}}
                    transition={{duration:1.5}}
                    whileInView={{opacity:1,x:0,scale:1}}
                    >Hello Greetings !<br/> I'm Sujal Verdhan, a Computer Science student and passionate <br/> Web Developer. With a knack for turning ideas into sleek, user-centric designs, I thrive on crafting impactful digital experiences. Let's collaborate and bring your vision to life!</motion.p>
                    
                    <motion.div
                    initial={{opacity:0,y:100}}
                    transition={{duration:1.5}}
                    whileInView={{opacity:1,y:2}}>
                    <a href="#contact"> <button i className='btna btna-primary'>Lets Talk</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
