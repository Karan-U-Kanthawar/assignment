import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Cryption Network.</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>Products</Nav.Link>
              <Nav.Link href='#link'>Tokenomics</Nav.Link>
              <Nav.Link href='#home'>Roadmap</Nav.Link>
              <Nav.Link href='#link'>Features</Nav.Link>
              <Nav.Link href='#home'>Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
