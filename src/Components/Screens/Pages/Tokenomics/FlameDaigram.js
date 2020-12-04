import React from 'react';
import './FlameDaigram.css';

export const FlameDaigram = () => {
  return (
    <>
      <div className='fire'>
        <div className='flames'>
          <div className='flame'></div>
          <div className='flame'></div>
          <div className='flame'></div>
          <div className='flame'></div>
        </div>
        <div className='logs'></div>
      </div>
    </>
  );
};
