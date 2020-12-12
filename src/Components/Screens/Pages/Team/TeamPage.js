import React from 'react';
import { Container } from 'react-bootstrap';
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
          <div className='main'>
            <div className='view view-ninth'>
              <img
                src={require('./mark_zuckerberg.png')}
                // className='image'
                width='300px'
                height='300px'
                alt='dummy'
              />
              <div className='mask mask-1'></div>
              <div className='mask mask-2'></div>
              <div className='content'>
                <h2>Talan Vaccaro</h2>
                <p>Business &amp; Founder</p>
                <a href='#a' className='info'>
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className='main'>
            <div className='view view-ninth'>
              <img
                src={require('./mark_zuckerberg.png')}
                // className='image'
                width='300px'
                height='300px'
                alt='dummy'
              />
              <div className='mask mask-1'></div>
              <div className='mask mask-2'></div>
              <div className='content'>
                <h2>Talan Vaccaro</h2>
                <p>Business &amp; Founder</p>
                <a href='#a' className='info'>
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className='main'>
            <div className='view view-ninth'>
              <img
                src={require('./mark_zuckerberg.png')}
                // className='image'
                width='300px'
                height='300px'
                alt='dummy'
              />
              <div className='mask mask-1'></div>
              <div className='mask mask-2'></div>
              <div className='content'>
                <h2>Talan Vaccaro</h2>
                <p>Business &amp; Founder</p>
                <a href='#a' className='info'>
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className='main'>
            <div className='view view-ninth'>
              <img
                src={require('./mark_zuckerberg.png')}
                // className='image'
                width='300px'
                height='300px'
                alt='dummy'
              />
              <div className='mask mask-1'></div>
              <div className='mask mask-2'></div>
              <div className='content'>
                <h2>Talan Vaccaro</h2>
                <p>Business &amp; Founder</p>
                <a href='#a' className='info'>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
