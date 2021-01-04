import React from 'react';
import { Col, Row } from 'react-bootstrap';
import RoadmapDaigram from './RoadmapDaigram.png';
// import { RoadmapDaigram } from './RoadmapDaigram.js';
import './RoadmapPage.scss';

export const RoadmapPage = () => {
  return (
    <div className='roadmapPageContainer'>
      <Row>
        <Col lg={4}>
          <h2 className='roadmapHeading'>Road Map</h2>
          <p className='content content1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.ore
          </p>
          <p className='content content2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec erat vel lectus bibendum vehicula quis vitae enim. Integer
            tincidunt.ore
          </p>
        </Col>
        <Col lg={8} clasName='RoadmapImageContainer'>
          {/* <RoadmapDaigram /> */}
          <img
            src={RoadmapDaigram}
            alt='roadmap'
            width='100%'
            heigth='auto'
            style={{ objectFit: 'contain' }}
          />
        </Col>
      </Row>
    </div>
  );
};
