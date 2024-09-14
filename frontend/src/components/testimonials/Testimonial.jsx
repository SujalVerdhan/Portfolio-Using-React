import React from 'react';
import "./Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import {motion} from "framer-motion"
import Ishan from "../../assets/ishaan.jpg"
import Ayush from "../../assets/ayush.png"
import Sushant from "../../assets/sushant.png"
import Divay from "../../assets/divay.png"
import 'swiper/css/pagination';
import Deepankar from "../../assets/Deepankar.jpg"

const Testimonial = () => {
    const testim=[{id:1,image:Ayush,name:"Ayush Thakur",review:"Sujal Verdhan could turn a routine git push into a blockbuster event. They've mastered the art of making version control sound like a thrilling adventure."},
    {id:2,image:Ishan,name:"Ishan Chauhan",review:"If there's a contest for the most entertaining storyteller, Sujal Verdhan is a shoo-in for the gold medal. Their tales are so riveting; I'm convinced he've got a hidden talent for fiction."},
    {id:3,image:Sushant,name:"Sushant Sharma",review:"Meet Sujal Verdhan, the human caffeine dispenser. He's so energetic that I suspect they might be powered by pure enthusiasm and the occasional cookie."},
    {id:4,image:Divay,name:"Divay Sharma",review:"Sujal Verdhan, the developer wizard who turns '404 Not Found' into '404 Found the Laughs.' Their ability to inject humor into every line of code is simply enchanting."},
    {id:5,image:Deepankar,name:"Deepankar Chauhan",review:"Introducing Sujal Verdhan, the code ninja with a sense of humor sharper than a syntax error. Their commits are not just lines of code; they're witty one-liners that make programming a delight."},
    
];
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
           <motion.div
            initial={{opacity:0.5,scale:0.5,x:-180}}
                transition={{duration:2, }}
                whileInView={{opacity:1,scale:1,x:0}}>
            <Swiper 
           
            className='container testimonials_container'
              modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
            {testim.map((item)=>{return  <SwiperSlide key={item.id} className='testimonial'>
                <div className='client_avatar'>
                  <img src={item.image} alt=""></img>
                </div>
                <h5 className='client_name'>{item.name}</h5>
                    <small className='client_review'>{item.review}</small>
                 
            </SwiperSlide>})}
       
            </Swiper>
            </motion.div>
        </section>
    );
};

export default Testimonial;
