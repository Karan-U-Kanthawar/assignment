import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TokenomicsDaigram } from './TokenomicsDaigram.js';
import './TokenomicsPage.css';

export const TokenomicsPage = () => {
  return (
    <Container className='tokenomicsPageContainer'>
      <Row>
        <Col lg={8}>
          <img
            src={require('./TokenomicsImage2.png')}
            alt='tokenomics'
            width='750px'
            height='550px'
          />
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
