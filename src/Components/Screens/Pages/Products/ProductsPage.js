import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductsDaigram } from '../Products/ProductsDaigram.js';
import '../Products/ProductsPage.css';

export const ProductsPage = () => {
  return (
    <Container className='productsPageContainer'>
      <Row>
        <Col lg={4}>
          <h2>Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.
          </p>
          <p>
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
