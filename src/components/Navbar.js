import React from 'react';
import logo from '../site-logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-scroll';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">
    <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
  
    <div className="navbar-collapse collapse" id="navbarSupportedContent">
      <ul id="override-css" className="navbar-nav ms-auto">
        <li className="nav-item active">
          <Link smooth={true} to="home" offset={-110} className="nav-link"  >Home</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about" offset={-110} className="nav-link" >about me</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="projects" offset={-92} className="nav-link" >Projects</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="education" offset={-110} className="nav-link" >education</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="skills" offset={-92} className="nav-link" >skills</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="contact" offset={-85} className="nav-link" >contact</Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  );
};
