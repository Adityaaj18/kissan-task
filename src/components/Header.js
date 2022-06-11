import React from 'react'
import {
   Container,
   Navbar,
   Nav,
   NavDropdown,
   Form,
   FormControl,
   Button
} from 'react-bootstrap'

const Header = () => {
   return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href="#home">
               <img
                  style={{ width: '120px' }}
                  src={require('../img/logo.png')}
                  alt=""
               />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto"></Nav>
               <Nav>
                  <Nav.Link className="active" href="#">
                     <p className="nav-item ">HOME</p>
                  </Nav.Link>
                  <Nav.Link href="#">
                     <p className="nav-item">ABOUT</p>
                  </Nav.Link>
                  <Nav.Link href="#">
                     <p className="nav-item">CONTACT</p>
                  </Nav.Link>
                  <Nav.Link href="#">
                     <p className="nav-item">ADDRESS</p>
                  </Nav.Link>
                  <Nav.Link href="#">
                     <p className="nav-item">USER</p>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Header
