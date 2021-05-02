import React from 'react';
import './Skills.css';
const Skils = () => {
    return (
        <div className='skilcss'>

            <div className='text-center margint'>
            <h1 className='headerline mainclr'>My Skills </h1>
            </div>

            <div className='d-flex justify-content-center '>
              <div className=' w-75 row'>
               <div className='col-md-4'>

                <div className='textmr headerline'>
                <h2>Comfortable</h2>
                </div>
               
                  <div >
                  <button type="button" class="btn btn-success me-2">Html5</button>
                  <button type="button" class="btn btn-success me-2">Css3</button>
                  <button type="button" class="btn btn-success">Bootstrap 5</button>
                  </div>
                  <div className='mt-2'>
                  <button type="button" class="btn btn-success me-2">React</button>
                  <button type="button" class="btn btn-success me-2">Rest Api</button>
                  <button type="button" class="btn btn-success">React Router</button>
                  </div>
                  <div className='mt-2'>
                  <button type="button" class="btn btn-success me-2">Material Ui</button>
                  <button type="button" class="btn btn-success me-2">Firebase</button>
                  <button type="button" class="btn btn-success">Mongodb</button>
                  </div>
               </div>


               <div className='col-md-4'>

                <div className='textmr headerline'>
                <h2>Familiar</h2>
                </div>
               
                  <div >
                  <button type="button" class="btn btn-success me-2">Node.js</button>
                  <button type="button" class="btn btn-success me-2">Express.js</button>
                  <button type="button" class="btn btn-success">Json</button>
                  </div>
                  <div className='mt-2'>
                  <button type="button" class="btn btn-success me-2">React Native</button>
                  <button type="button" class="btn btn-success me-2">Redux</button>
                  
                  </div>
                  
               </div>

               
               <div className='col-md-4'>

                <div  className='textmr headerline'>
                <h2>Tools</h2>
                </div>
               
                  <div >
                  <button type="button" class="btn btn-success me-2">VS Code</button>
                  <button type="button" class="btn btn-success me-2">Heroku</button>
                  <button type="button" class="btn btn-success">Netlify</button>
                  </div>
                  <div className='mt-2'>
                  <button type="button" class="btn btn-success me-2">Notepad++</button>

                  
                  </div>
                  
               </div>

               
              </div>
            </div>
        </div>
    );
};

export default Skils;