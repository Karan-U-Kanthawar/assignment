import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './ContactPage.css';
import { SocialMedia } from './SocialMedia.js';

export const ContactPage = () => {
  return (
    <>
      <Container className='contactPageContainer'>
        <div className='companyLogoName'>
          <div>
            <img
              src={require('./dummyLogo.png')}
              alt='companyLogo'
              width='50px'
              height='30px'
            />
          </div>
          <div>
            <h2 className='heading'>Cryption Network.</h2>
          </div>
        </div>
        <div>
          <div className='content'>
            Cras mush pardon you kenwws up he lost this homel itá all the gone
            pot stag porking bardnwe art gaon.
          </div>
        </div>
        <div className='socialMedia'>
          <SocialMedia />
        </div>
      </Container>
    </>
  );
};
