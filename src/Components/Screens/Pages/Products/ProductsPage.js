import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductsDaigram } from './ProductsDaigram.js';
import './ProductsPage.scss';

export const ProductsPage = () => {
  return (
    <Container className='productsPageContainer'>
      <Row>
        <Col lg={4}>
          <h2 className='heading'>Products</h2>
          <p className='content'>
            We are building a suite of user firendly crypto products for the
            normal retail investor who wants to invest in crypto but is
            intimidated by its complexity. We see a lack of an integrated
            ecosystem that simplifies investing without taking away from all
            that crypto has to offer.
          </p>
          <p className='content'>
            Click on the graphic to understand all the legos that make up
            Cryption Network
          </p>
        </Col>
        <Col lg={8}>
          <ProductsDaigram />
        </Col>
      </Row>
    </Container>
  );
};
