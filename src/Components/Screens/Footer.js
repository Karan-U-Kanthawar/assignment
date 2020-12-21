import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.scss';

export const Footer = () => {
  return (
    <>
      <div className='footerContainer'>
        <Container className='footerSubContainer'>
          <div>
            <h5 className='heading'>&copy; 2020 Cryption Network.</h5>
          </div>
          <div className='navContainer'>
            <div className='navLinks'>PRIVATE POLICY</div>
            <div className='navLinks'>LEGAL</div>
          </div>
        </Container>
      </div>
    </>
  );
};
