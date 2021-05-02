import React from 'react';
import Particles from 'react-particles-js';
import './CoverSite.css'
import ReAnimateTypo from 'react-moving-text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import CV from '../../../pdf/Mainul-converted.pdf'
const CoverSite = () => {
    return (
        
      <div className='mainDiv'>
         
         
          <Particles
          
          params={{
         "particles": {
             "number": {
                 "value": 50
             },
             "size": {
                 "value": 3
             }
         },
         "interactivity": {
             "events": {
                 "onhover": {
                     "enable": true,
                     "mode": "repulse"
                 }
             }
         }
     }} 
     
     />
        
    <div className='secondDiv '>
                
                    <h1 className='heading'>Md. Mainul Islam</h1>

                    <ReAnimateTypo
                        type="jelly"
                        duration="2000ms"
                        delay="20s"
                        direction="alternate-reverse"
                        timing="ease-in"
                        iteration="infinite"
                        fillMode="none">
                        <h3 className='margin'>I'm A <span style={{ color: '#1CA369' }}>Web Developer</span>  </h3>
                    </ReAnimateTypo>
                    <div className='social'>
                        <a className='icon' href="https://github.com/Mainul163" target="_blank"> <FontAwesomeIcon className='fa-2x' icon={faGithub} style={{ color: 'white' }} /> </a>
                        <a className='icon' href="https://www.linkedin.com/in/mainul-islam-a755aa184/" target="_blank"> <FontAwesomeIcon className='fa-2x' icon={faLinkedin} style={{ color: 'white' }} /></a>
                    </div>

                    <div className='buttons '>
                        <button type="button" className="btn btn-success btnicons">About Me</button>

                        <a href={CV} download="Download CV " className='btn  btn-success'> Download CV</a>

                    </div>
            
      
                </div >
                

              </div>



    );
};

export default CoverSite;