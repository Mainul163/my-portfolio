
import './App.css';
import Home from './Components/Home/Home/Home';
import AboutMe from './Components/Myinformation/AboutMe/AboutMe';


import Navbar from './Components/Home/Navbar/Navbar';
import Myinformation from './Components/Myinformation/Myinformation/Myinformation';
import React from "react";

import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact/Contact';

function App() {
  return (
    <div className="App-header">
     
     
       <Navbar></Navbar>
       
         
         <Home></Home>

         <Myinformation></Myinformation>
            
          <Project></Project>
          <Contact></Contact>
    </div>
  );
}

export default App;
