import React from 'react';
import './Projectdetails.css'
const Projectdetails = ({info}) => {
    console.log(info)
    return (
        <div className='w-25  row '>
            
            <div className='col-md-4'>

            <div class="card style" style={{width: '18rem',backgroundColor:"#282c34"}}>
                    <img src={info.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title para mainclr"> {info.header} </h5><hr/>
                        <p class="card-text">{info.describe}</p><hr/>
                        <p class="card-text">{info.tools}</p>
                        <a href={info.git} target='blank'class="btn btn-success ancor">GitHUb Link</a>
                        <a href={info.live} target='blank' class="btn btn-success ancor">Live Site Link</a>
                    </div>
                </div>

    
            </div>
        </div>
    );
};

export default Projectdetails;