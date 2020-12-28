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
              Part of the profit from every Cryption Network product will be
              used to mainatin a constant buy pressure on CNT.
            </p>
          </Row>
          <Row>
            <p className='content'>
              Half the tokens bought from those profits will be burned to reduce
              supply and accrue value to the token whereas the other half will
              be staked for yield farming.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
