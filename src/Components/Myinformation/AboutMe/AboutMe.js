import React from 'react';
import pic from '../../../image/profile1.png.png'
import './About.css'
import {faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AboutMe = () => {
    return (
        <div className='aboutcss' >
            <div className='text-center'>
            <h1 className='headerline mainclr'>ABOUT ME</h1>
            </div>
           
           <div className='  d-flex  justify-content-center mt-5 p-5'>
                <div >
                   <div>
                   <p className='mainclr edit headerline'>Hello! I'm </p>
                   </div>
                <div>
                <h2>Mainul Islam</h2>  
                </div>
                <div>
                    <h7 className='para text'> I'm a Web developer with a deep interest in React.To obtain an entry level <br/> position in a dynamic organization where I can enhance my energy and <br/> skills to develop, motivate and encourage productivity I cherish to explore <br/> leadership responsibilities, improve organizational ability to achieve <br/> personal dexterity.</h7>
                </div>
                <div className='mt-3'>

               <a href="https://github.com/Mainul163" target="_blank"><FontAwesomeIcon className='fa-2x' icon={faGithub } style={{color:'white'}}/></a>

               <a className='icons' href="https://www.linkedin.com/in/mainul-islam-a755aa184/" target="_blank"><FontAwesomeIcon className='fa-2x' icon={faLinkedin } style={{color:'white'}}/></a>
         

                    
                </div>
                </div>
                <div>
                    <img src={pic} className='img' alt=""/>
                </div>
            </div>
           </div>
       
    );
};

export default AboutMe;