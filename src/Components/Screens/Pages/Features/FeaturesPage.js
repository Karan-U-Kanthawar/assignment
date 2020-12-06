import React from 'react';
import { Container } from 'react-bootstrap';
import './FeaturesPage.css';

export const FeaturesPage = () => {
  return (
    <>
      <Container className='featuresPageContainer'>
        <h2 className='featuresHeading'>Features</h2>
        <p className='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          erat vel lectus bibendum vehicula quis vitae enim.
        </p>
        <div className='featuresSubContainer'>
          <div className='subContainer sb1'>
            <h4 className='sbHeading'>Sound Tokenomics</h4>
            <p className='sbContent'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec erat vel lectus bibendum vehicula quis vitae enim
            </p>
          </div>
          <div className='subContainer sb2'>
            <h4 className='sbHeading'>Gasless Tokenomics</h4>
            <p className='sbContent'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec erat vel lectus bibendum vehicula quis vitae enim
            </p>
          </div>
          <div className='subContainer sb3'>
            <h4 className='sbHeading'>Secure, Scalable, etc</h4>
            <p className='sbContent'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec erat vel lectus bibendum vehicula quis vitae enim
            </p>
          </div>
          <div className='subContainer sb4'>
            <h4 className='sbHeading'>Seamless Integration</h4>
            <p className='sbContent'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec erat vel lectus bibendum vehicula quis vitae enim
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
