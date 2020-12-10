import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import './TeamPage.css';

export const TeamPage = () => {
  return (
    <>
      <Container className='teamPageContainer'>
        <div>
          <h2 className='teamHeading'>Team</h2>
        </div>
        <div>
          <div className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim.Lorem ipsum
            dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Praesent nec erat vel lectus bibendum vehicula quis vitae enim
            consectetur adipiscing elit. Praesent nec erat vel lectus bibendum
            vehicula quis vitae enim
          </div>
        </div>
        <div className='imageContainer'>
          <div className='allImg'>
            <img
              className='image'
              src={require('./mark_zuckerberg.png')}
              alt='member1'
              width='150px'
              height='150px'
            />
            <h5 className='imgHeading'>Talan Vaccaro</h5>
            <p className='imgProf'>Business &amp; Founder</p>
          </div>
          <div className='allImg'>
            <img
              className='image'
              src={require('./mark_zuckerberg.png')}
              alt='member1'
              width='150px'
              height='150px'
            />
            <h5 className='imgHeading'>Talan Vaccaro</h5>
            <p className='imgProf'>Business &amp; Founder</p>
          </div>
          <div className='allImg'>
            <img
              className='image'
              src={require('./mark_zuckerberg.png')}
              alt='member1'
              width='150px'
              height='150px'
            />
            <h5 className='imgHeading'>Talan Vaccaro</h5>
            <p className='imgProf'>Business &amp; Founder</p>
          </div>
          <div className='allImg'>
            <img
              className='image'
              src={require('./mark_zuckerberg.png')}
              alt='member1'
              width='150px'
              height='150px'
            />
            <h5 className='imgHeading'>Talan Vaccaro</h5>
            <p className='imgProf'>Business &amp; Founder</p>
          </div>
          <div className='allImg'>
            <img
              className='image'
              src={require('./mark_zuckerberg.png')}
              alt='member1'
              width='150px'
              height='150px'
            />
            <h5 className='imgHeading'>Talan Vaccaro</h5>
            <p className='imgProf'>Business &amp; Founder</p>
          </div>
        </div>
      </Container>
    </>
  );
};
