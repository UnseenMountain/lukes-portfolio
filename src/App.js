import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Bios from "./components/Bio/Bios"

import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    
        <Router>  
    <div>
      
      <NavBar/>
             <Route path="/" exact component={Bios}/>
              <Route path="/gallery" component={Gallery}/>
         
          <Footer/>
          </div>
          </Router>
    
  );
}

export default App;
