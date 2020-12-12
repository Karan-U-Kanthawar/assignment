import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-scroll';

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
            <Nav.Link>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                duration={1000}
                to='products'
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                duration={1000}
                to='tokenomics'
              >
                Tokenomics
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                duration={1000}
                to='roadmap'
              >
                Roadmap
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                duration={1000}
                to='features'
              >
                Features
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                duration={1000}
                to='team'
              >
                Team
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                duration={1000}
                to='contact'
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
