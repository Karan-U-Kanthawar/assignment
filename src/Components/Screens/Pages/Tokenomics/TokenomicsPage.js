import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FlameDaigram } from './FlameDaigram.js';
import { TokenomicsDaigram } from './TokenomicsDaigram.js';
import './TokenomicsPage.css';

export const TokenomicsPage = () => {
  return (
    <Container className='tokenomicsPageContainer'>
      <Row>
        <Col lg={8} className='tokenomicsImageContainer'>
          <img
            src={require('./TokenomicsImage2.png')}
            alt='tokenomics'
            width='700px'
            height='550px'
          />
          <div className='flameContainer'>
            <FlameDaigram />
          </div>
        </Col>
        <Col lg={4}>
          <Row>
            <h2 className='heading'>Tokenomics</h2>
          </Row>
          <Row>
            <p className='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec erat vel lectus bibendum vehicula quis vitae enim. Integer
              tincidunt.
            </p>
          </Row>
          <Row>
            <p className='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec erat vel lectus bibendum vehicula quis vitae enim. Integer
              tincidunt.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
