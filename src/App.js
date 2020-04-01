import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Bios from "./components/Bio/Bios"

import Gallery from "./components/Gallery/Gallerys"
import Footer from "./components/Footer/Footer"
// import Contact from "./components/Contact/Contact.js"


function App() {
  return (
        <Router>  
    <div>
      <NavBar>

        
          
          <Route path="/Bios" component={Bios}/>
          <Route path="/Gallerys" component={Gallery}/>
          
          
      </NavBar>
          
          
          <Bios/>
          
          <Gallery/>
          
          <Footer/>
          </div>
          </Router>
    
  );
}

export default App;
