import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Container} from "react-bootstrap"

function NavBar () {
return(
    <div> 
        
        <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Luke's portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="src\pages\Bio\Bios.js">Home</Nav.Link>
      <Nav.Link href="src\pages\Gallery\Gallerys.js">Gallery</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>




    </div>
)


}

export default NavBar

