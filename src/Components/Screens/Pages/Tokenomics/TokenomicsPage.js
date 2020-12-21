import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TokenomicsDaigram } from './TokenomicsDaigram.js';
import './TokenomicsPage.scss';

export const TokenomicsPage = () => {
  return (
    <Container className='tokenomicsPageContainer'>
      <Row>
        <Col lg={8} className='tokenomicsImageContainer'>
          <TokenomicsDaigram />
        </Col>
        <Col lg={4} className='tokenomicsTextContainer'>
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
