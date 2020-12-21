import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { RoadmapDaigram } from './RoadmapDaigram.js';
import './RoadmapPage.scss';

export const RoadmapPage = () => {
  return (
    <div className='roadmapPageContainer'>
      <Row>
        <Col lg={4}>
          <h2 className='roadmapHeading'>Road Map</h2>
          <p className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.ore
          </p>
          <p className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.ore
          </p>
        </Col>
        <Col lg={8} clasName='RoadmapImageContainer'>
          <RoadmapDaigram />
        </Col>
      </Row>
    </div>
  );
};
