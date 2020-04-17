import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Bios from "./components/Bio/Bios"

import Gallery from "./components/Gallery/Gallerys"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    
        <Router>  
    <div>
      
      <NavBar/>

          <Bios/>
          
          <Gallery/>
          
          <Footer/>
          </div>
          </Router>
    
  );
}

export default App;
