import React from 'react';
import Typed from 'react-typed';
import { Link} from 'react-scroll';

export const Header = () => {
  return <div id="home" className='header-wraper'>
      <div className="main-info">
          <h1>Web development and Salesforce Development</h1>
          <Typed 
              className='typed-text'
              strings={["Full Stack Developer","QTC Developer"]} 
              typeSpeed={100}
              backSpeed={60}
              loop={true}
          />
          <Link smooth={true} to="contact" offset={-85} className='btn-main-offer' >Contact Me</Link>
      </div>
  </div>;
};
