import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import {Nav, NavDropdown, Form, FormControl, Button, Container} from "react-bootstrap"

function NavBar () {
return(
    <div> 
        <Container>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="Bio.js">Home</Nav.Link>
      <Nav.Link href="Gallery.js">Gallery</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>



    </div>
)


}

export default NavBar

