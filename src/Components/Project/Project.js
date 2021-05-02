import React from 'react';
import './project.css'
import travel from '../../image/travel show.JPG'
import ecomace from'../../image/ecomarces.JPG'
import pickup from '../../image/pickups.JPG'
import Projectdetails from './Projectdetails/Projectdetails';
const totalinfo=[
    {
        img:travel,
        describe:'This website name is Travasia. it is a fullstack tour packge booking webstie with a dynamic service section and feedback section.',
        tools:'React.js, REST API, React Router, Firebase, Node.js, Express.js, MongoDB, Bootstrap, Heroku',
        header:'Travasia',
        git:'https://github.com/Mainul163/Adventure--with-tarvasia',
        live:'https://travel-f2f39.firebaseapp.com/'
    },
    {
        img:ecomace,
        describe:'This website is a ecommerce website it is a full stack website where volunteers can log in with Google and can take part in a variety of activities.' ,
        tools:'React.js, REST API, React Router, Firebase, Node.js, Express.js, MongoDB, Bootstrap, Heroku',
        header:'Book-shop',
        git:'https://github.com/Mainul163/book-shop',
        live:'https://book-shop-6fa77.firebaseapp.com/'
    },
    {
        img:pickup,
        describe:'A Single Page Application with a dynamic posts of fake data loaded from REST API. A user can see the dynamically loaded post and comments.',
        tools:'React.js, REST API, React Router, Material UI, Netlify',
        header:'Pick-up-rider',
        git:'https://github.com/Mainul163/pick-up-rider',
        live:'https://picup-rider.web.app/'
    }
]
const Project = () => {
    return (
        <div id='project'>
          <div className='text-center headerline mainclr procss'>
              <h1>My Project</h1>

          </div>
            <div className='d-flex justify-content-center'>
               {
                   totalinfo.map(pd=><Projectdetails info={pd}></Projectdetails>)
               }
            </div>
        
        </div>
    );
};

export default Project;