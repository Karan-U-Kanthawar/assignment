import React, { useEffect } from 'react';
import './HeroPage.scss';
import { init } from 'ityped';

export const HeroPage = () => {
  useEffect(() => {
    const myElement = document.querySelector('#myElement');
    init(myElement, {
      showCursor: false,
      strings: [
        'Decentralized Hedge Fund',
        'Prediction Market',
        'Decentralized Exchange',
        'Fiat On-Off Ramp',
      ],
    });
  }, []);
  return (
    <div className='HeroPageContainer'>
      <section className='hero'>
        <div className='content'>
          <h2 className='heading'>One Token, Best Of DeFi</h2>
          <p className='starting'>A </p>
          <p id='myElement'></p>
        </div>
        <div className='waves'></div>
      </section>
    </div>
  );
};
