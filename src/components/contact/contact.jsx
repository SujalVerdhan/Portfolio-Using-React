
import "./contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import {motion} from "framer-motion"
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_snh7de4', 'template_wkoc17k', form.current, 'O1S6tiWkWZ1DSmew1')
    e.target.reset()
      
  };
    return (
        <section id="contact">
          <h5>Get In Contact</h5>
          <h2>Contact Me</h2>
          <div className='container contact_container'>
            <motion.div 
            initial={{opacity:0,x:-100,scale:0.5}}
                    transition={{duration:1.5}}
                    whileInView={{opacity:1,x:0,scale:1}}
            className='contact_options'>
                <article className='contact_option'>
                <MdOutlineEmail className='contact_option-icon'/>

                    <h4>Email</h4>
                    <h5>sujalverdhen1234@gmail.com</h5>
                    <a href='mailto:sujalverdhen1234@gmail.com' target='_blank'>Send a message</a>
                </article>
                <article className='contact_option'>
                <RiMessengerLine  className='contact_option-icon'/>

                    <h4>Messenger</h4>
                    <h5>Sujal_Verdhan</h5>
                    <a href='https://m.me/sujal.verdhen/' target='_blank'>Send a message</a>
                </article>
                <article className='contact_option'>
                <BsWhatsapp  className='contact_option-icon' />
                    <h4>WhatsApp</h4>
                    <h5>+91 86***-****0</h5>
                    <a href='https://wa.me/+918626872550' target='_blank'>Send a message</a>
                </article>
            </motion.div>
            <motion.form initial={{opacity:0,x:100,scale:0.5}}
                    transition={{duration:1.5}}
                    whileInView={{opacity:1,x:0,scale:1}}
                    ref={form} onSubmit={sendEmail}>
                <input type='text' name="name" placeholder="Enter Your Name" required/>
                <input type='email' name="email" placeholder="Enter Your Email" required/>
                <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                <button type="submit" className='btn btn-primary'>Send Message</button>
            </motion.form>
          </div>
        </section>
    );
};

export default Contact;
