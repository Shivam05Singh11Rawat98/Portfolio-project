import React from 'react';
import logo from '../site-logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
    <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
  
    <div className="navbar-collapse collapse" id="navbarSupportedContent">
      <ul id="override-css" className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link"  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  );
};
