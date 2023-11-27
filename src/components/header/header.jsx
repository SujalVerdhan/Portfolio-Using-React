import React from 'react';
import "./header.css"
import ME from "../../assets/IMG_20220328_142251-removebg-preview.png"
import CTA from "./CTA"
import HeaderSocials from "./headersocial"
import Typed from 'typed.js';
import {motion} from "framer-motion"

const Header = () => {
    const el = React.useRef(null);

  React.useEffect(() => {
    var typed = new Typed('#element', {
       
        strings: [
          'A <i>Front-End Developer ,</i>',
          'Sometimes a <i>Full-Stack Developer ,</i>',
          '&amp; a <i>Computer Science Student.</i>',
          
        ],
        loop: true,
        loopCount: Infinity,
        stringsElement: null,

        /**
         * @property {number} typeSpeed type speed in milliseconds
         */
        typeSpeed: 50,
      
        /**
         * @property {number} startDelay time before typing starts in milliseconds
         */
        startDelay: 0,
      
        /**
         * @property {number} backSpeed backspacing speed in milliseconds
         */
        backSpeed: 10,
      
        /**
         * @property {boolean} smartBackspace only backspace what doesn't match the previous string
         */
        smartBackspace: true,
      
        /**
         * @property {boolean} shuffle shuffle the strings
         */
        shuffle: false,
      
        /**
         * @property {number} backDelay time before backspacing in milliseconds
         */
        backDelay: 1000,
      
        

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

    return (
       <header>
        <div 
        className='container header_container'>
            <h5>Hello I'm</h5>
            <h1>Sujal Verdhan</h1>
            <span id='element' className='text-light' ref={el} />
           
            <CTA/>
            <HeaderSocials/>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
            <div className="me">
                <img src={ME} alt='me'/>
            </div>
            
            
        </div>
       </header>
    );
};

export default Header;
