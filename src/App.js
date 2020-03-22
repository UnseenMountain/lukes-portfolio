import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Bios from "./components/Bio/Bios"
import Gallery from "./components/Gallery/Gallery"
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
    <div>
      <NavBar/>
        
       
          {/* <Route path="/Gallery" component={Gallery}/> */}

        


      <Bios/>
         

    </div>
    
  );
}

export default App;
