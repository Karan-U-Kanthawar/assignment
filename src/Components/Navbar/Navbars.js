import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css';

export const Navbars = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        className='navbarContainer'
      >
        <Navbar.Brand>
          <h2>Crytion Network</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#products'>Products</Nav.Link>
            <Nav.Link href='#tokenomics'>Tokenomics</Nav.Link>
            <Nav.Link href='#roadmap'>Roadmap</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#team'>Team</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
