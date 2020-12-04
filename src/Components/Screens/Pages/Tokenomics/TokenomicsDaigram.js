import React from 'react';
import { FlameDaigram } from './FlameDaigram.js';
import '../Tokenomics/TokenomicsDaigram.css';
import { motion } from 'framer-motion';

export const TokenomicsDaigram = () => {
  return (
    <>
      <div className='tokenomicsGridContainer'>
        <motion.div
          className='box1'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box1
        </motion.div>
        <motion.div
          className='box2'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box2
        </motion.div>
        <motion.div
          className='box3'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box3
        </motion.div>
        <motion.div
          className='box4'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box4
        </motion.div>
        <div className='box5'>Box5</div>
        <div className='box6'>Box6</div>
        <div className='box7'>Box7</div>
        <div className='box8'>
          <FlameDaigram />
        </div>
        <div className='box9'>Box10</div>
        <div className='box10'>Box11</div>
      </div>
    </>
  );
};
