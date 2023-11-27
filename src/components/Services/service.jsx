import React from 'react';
import { FaCheck } from "react-icons/fa6";
import {motion} from "framer-motion"
import "./service.css"
const Service = () => {
    return (
        <section id="services">
          <h5>What I Offer</h5>
          <h2>Services</h2>
          <div className='container services_container'>
          <motion.div
           initial={{opacity:0.5,scale:0.5,x:-180}}
                transition={{duration:1.5, }}
                whileInView={{opacity:1,scale:1,x:0}}
          >
            <article className='service'>
                <div className='service_head'>
                    <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p> Craft visually captivating interfaces that prioritize user needs.</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p> Bring your vision to life early in the design process with meticulous wireframing and prototyping.</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p> Enhance user engagement with interactive elements that captivate and guide, utilizing cutting-edge design techniques.</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Prioritize inclusivity with designs that consider diverse user needs, ensuring your interface is accessible to all users</p>
                        </li>
                        {/* <li>
                        <FaCheck className='service_list_icon'/>
                            <p> Establish a strong brand presence through visually consistent design elements.</p>
                        </li> */}
                        {/* <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Lorem Ipsum is simply dummy text of the printing and</p>
                        </li> */}
                    </ul>
              
            </article>
            </motion.div>
            <motion.div
           initial={{opacity:0.5,scale:0.5,x:-180}}
                transition={{duration:1.5,delay:0.1 }}
                whileInView={{opacity:1,scale:1,x:0}}
          >
            <article className='service'>
                <div className='service_head'>
                    <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Craft visually stunning and user-friendly websites that seamlessly adapt to various devices</p>
                        </li>
                        {/* <li> */}
                        {/* <FaCheck className='service_list_icon'/>
                            <p>Custom Development Solutions: Tailor-made web applications and solutions designed to meet your unique business requirements, combining innovation and functionality for a competitive edge.</p>
                        </li> */}
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Enhance your digital visibility with SEO implementation.</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Streamline website performance for faster loading times.</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Seamlessly connect your web sites with third-party services and APIs,</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p> Elevate user engagement and satisfaction through  visually appealing interfaces</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p> Enjoy peace of mind with our reliable maintenance and support services.</p>
                        </li>
                    </ul>
               
            </article>
            </motion.div>
            <motion.div
           initial={{opacity:0.5,scale:0.5,x:-180}}
                transition={{duration:1.5,delay:0.1 }}
                whileInView={{opacity:1,scale:1,x:0}}
          >
            <article className='service'>
                <div className='service_head'>
                    <h3>Content Creation</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Implement best coding practices to create a robust and efficient website architecture.</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Formulate a comprehensive web development strategy that aligns with your business objectives.</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Ensure your website functions flawlessly across various browsers, providing a consistent and reliable user experience.</p>
                        </li>
                        <li>
                        <FaCheck className='service_list_icon'/>
                            <p>Harness the power of the latest web technologies to build modern and feature-rich websites.</p>
                        </li>
                    </ul>
                
            </article>
            </motion.div>
          </div>
        </section>
    );
};

export default Service;
