import React from 'react';
import Typed from 'react-typed';

export const Header = () => {
  return <div className='header-wraper'>
      <div className="main-info">
          <h1>Full stack developer and QTC Developer</h1>
          <Typed 
              className='typed-text'
              strings={["Full Stack Developer","QTC Developer"]} 
              typeSpeed={100}
              backSpeed={60}
              loop={true}
          />
          <a href="#" className='btn-main-offer'>Contact Me</a>
      </div>
  </div>;
};
