import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
function NavBar () {
return(
    <div> 
        
        <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Luke Klymshyn</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
          <Link to="/Gallery">Gallery</Link>
          
          <Link to="/">Home</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>




    </div>
)


}

export default NavBar

