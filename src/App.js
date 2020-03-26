import React from 'react';
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
        
          
          {/* <Route path="/Bio" component={Bio}/> */}
          {/* <Route path="/Gallery" component={Gallery}/> */}
          
          
          
          {/* <Gallery/> */}
          <Bios/>
          
          <Footer/>
          </div>
          </Router>
    
  );
}

export default App;
