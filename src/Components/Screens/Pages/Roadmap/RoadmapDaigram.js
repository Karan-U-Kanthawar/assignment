import React from 'react';
import { Image } from 'react-bootstrap';

export const RoadmapDaigram = () => {
  return (
    <>
      <Image
        src={require('./RoadmapDaigram.png')}
        alt='roadmap daigram'
        fluid
      />
    </>
  );
};
