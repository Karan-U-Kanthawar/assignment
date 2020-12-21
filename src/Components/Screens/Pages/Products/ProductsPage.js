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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.
          </p>
          <p className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.
          </p>
        </Col>
        <Col lg={8}>
          <ProductsDaigram />
        </Col>
      </Row>
    </Container>
  );
};
