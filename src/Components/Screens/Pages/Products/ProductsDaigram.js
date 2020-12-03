import React from 'react';
import { motion } from 'framer-motion';
import '../Products/ProductsDaigram.css';

export const ProductsDaigram = () => {
  return (
    <>
      <div className='gridContainer'>
        <div className='box1'>Box1</div>
        <div className='box2'>Box2</div>
        <div className='box3'>Box3</div>
        <motion.div
          className='box4'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box 4
        </motion.div>
        <motion.div
          className='box5'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box 5
        </motion.div>
        <motion.div
          className='box6'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box 6
        </motion.div>
        <motion.div
          className='box7'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box 7
        </motion.div>
        <motion.div
          className='box8'
          whileHover={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
        >
          Box 8
        </motion.div>
        <div className='box9'> Box 9 </div>
      </div>
    </>
  );
};
