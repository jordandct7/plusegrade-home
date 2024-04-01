import React from 'react';
import { Container, Navbar, Nav, Image} from 'react-bootstrap';
import logo from '../assets/Logo.png';


export default function Menu() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark menu fixed-top">
      <Container className='widthContainer'>
          <Image src={logo} alt="Plusgrade Logo" width='147px' height='29px'/>
          <Nav>
          <Nav.Link href="">Products</Nav.Link>
          <Nav.Link href="">Industries</Nav.Link>
          <Nav.Link href="">Partners</Nav.Link>
          <Nav.Link href="">About</Nav.Link>
          <Nav.Link href="">Careers</Nav.Link>
          <Nav.Link href="" className='featured'>Request a Demo</Nav.Link>
          <Nav.Link href="">Language</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
