import React from 'react';
import Typed from 'react-typed';

export default function Header() {
   return (
      <div id='home' className='header-wrapper'>
         <div className='main-info'>
            <h1>Full stack js web development(MERN stack)</h1>
            <Typed
               className='typed-text'
               strings={["HTML","css3","bootstrap","javascript","React js ", "Nodejs ", "ExpressJs", "Mongodb"]}
               typeSpeed={60}
               backSpeed={60}
               loop
            />
            <a href="#contact" className='btn-main-offer'>contact me</a>
         </div>
      </div>
   );
};
