import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='text-center' >
              
                
                    <h3 className='headings'>Md. Mainul Islam</h3>
                
               
                    <a className='icon' href="https://github.com/Mainul163" target="_blank"> <FontAwesomeIcon className='fa-2x' icon={faGithub} style={{ color: 'white' }} /> </a>
                    <a className='icon' href="https://www.linkedin.com/in/mainul-islam-a755aa184/" target="_blank"> <FontAwesomeIcon className='fa-2x' icon={faLinkedin} style={{ color: 'white' }} /></a>
                      <p>Copyright © 2021 by Mainul || All Right Reserved.</p>
            </div>
            
          
        </div>
    );
};

export default Footer;