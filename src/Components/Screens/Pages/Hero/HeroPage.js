import React, { useEffect } from 'react';
import './HeroPage.scss';
import { init } from 'ityped';

export const HeroPage = () => {
  useEffect(() => {
    const myElement = document.querySelector('#myElement');
    init(myElement, {
      showCursor: false,
      strings: [
        'A Decentralized Hedge Fund',
        'A Prediction Market',
        'A Decentralized Exchange',
        'A Fiat On-Off Ramp',
      ],
    });
  }, []);
  return (
    <div className='HeroPageContainer'>
      <section className='hero'>
        <div className='content'>
          <h2>One Token, Best Of DeFi</h2>
          <p id='myElement'></p>
        </div>
        <div className='waves'></div>
      </section>
    </div>
  );
};
