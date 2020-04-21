import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
function NavBar () {
return(
    <div> 
        
        <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Luke Klymshyn</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"><Button variant="dark">
      <Link to="/Gallery">Gallery</Link>
      </Button>
      <Button variant="dark">
        <Link to="/">Home</Link>
        </Button>
          
          
    </Nav>
  </Navbar.Collapse>
</Navbar>




    </div>
)


}

export default NavBar

