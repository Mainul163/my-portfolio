import React from 'react';
import CV from '../../../pdf/Mainul-converted.pdf'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
    return (
   <nav class="navbar navbar-expand-lg mainor container ">
  <div class="container-fluid ">
    <a class="navbar-brand name-color" href="#">Mainul Islam</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} style={{color:'white'}} /></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="nav-item  me-3  "
              ><a class='nav-link text-color' href='#'>Home</a> 
              </Link>

               <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="nav-item  me-3  "
              >
                <a class='nav-link text-color' href='#'>About Me</a> 
              </Link>

              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="nav-item  me-3  "
              >
                <a class='nav-link text-color' href='#'>Project</a> 
              </Link>

             
         
              <li class="nav-item  me-3">
          <a class="nav-link text-color" href="#">Blog</a>
          
        </li>
         
             
        
        <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="nav-item  me-3  "
              ><a class='nav-link text-color' href='#'>Contact</a> 
              </Link>


        <li class="nav-item  me-2">
        <a href={CV} download='Download CV' ><button type="button" class="btn btn-success">Download CV</button></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;