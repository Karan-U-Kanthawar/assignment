import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RoadmapDaigram } from './RoadmapDaigram.js';
import './RoadmapPage.css';

export const RoadmapPage = () => {
  return (
    <Container className='roadmapPageContainer'>
      <Row>
        <Col lg={4}>
          <h2>Road Map</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.ore
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.ore
          </p>
        </Col>
        <Col lg={8}>
          <RoadmapDaigram />
        </Col>
      </Row>
    </Container>
  );
};
