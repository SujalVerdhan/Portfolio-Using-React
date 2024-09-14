import React from 'react';
import CV from "../../assets/Sujal CV.pdf"
const CTA = () => {
    return (
        <div className='cta'>
             <a href={CV} className='btna' download>Download CV</a>
             <a href="#contact" className='btna btna-primary'>Let's Talk</a>
        </div>
    );
};

export default CTA;
