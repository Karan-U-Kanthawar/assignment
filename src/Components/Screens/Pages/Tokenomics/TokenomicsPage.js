import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TokenomicsDaigram } from './TokenomicsDaigram.js';
import './TokenomicsPage.css';

export const TokenomicsPage = () => {
  return (
    <Container className='tokenomicsPageContainer'>
      <Row>
        <Col lg={8}>
          <TokenomicsDaigram />
        </Col>
        <Col lg={4}>
          <Row>
            <h2>Tokenomics</h2>
          </Row>
          <Row>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nec erat vel lectus bibendum vehicula quis vitae enim. Integer
              tincidunt.
            </p>
          </Row>
          <Row>
            <p>
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
