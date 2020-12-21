import React, { useState } from 'react';
import { FlameDaigram } from './FlameDaigram.js';
import '../Tokenomics/TokenomicsDaigram.scss';
import { motion } from 'framer-motion';

export const TokenomicsDaigram = () => {
  const [open4, setOpen4] = useState(true);
  const [open5, setOpen5] = useState(true);
  const [open6, setOpen6] = useState(true);
  const [open7, setOpen7] = useState(true);
  const [open8, setOpen8] = useState(true);
  return (
    <>
      <div className='tokenomicsGridContainer'>
        {open4 ? (
          <motion.div
            onClick={() => setOpen4(false)}
            layoutId='idBox4'
            className='normalBox normalBox4 box1'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={require('./image4.svg')}
              alt='company logo'
              width='50'
              height='30'
              className='responsiveImages'
            />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpen4(true)}
            layoutId='idBox4'
            className='expandedBox expandedBox4'
          >
            <img
              src={require('./image4.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              aliquam molestiae ratione sint magnam sequi fugiat u llam earum
              distinctio
            </div>
          </motion.div>
        )}
        {open5 ? (
          <motion.div
            onClick={() => setOpen5(false)}
            layoutId='idBox5'
            className='normalBox normalBox5 box2'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={require('./image5.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpen5(true)}
            layoutId='idBox5'
            className='expandedBox expandedBox5'
          >
            <img
              src={require('./image5.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              aliquam molestiae ratione sint magnam sequi fugiat u llam earum
              distinctio
            </div>
          </motion.div>
        )}
        {open6 ? (
          <motion.div
            onClick={() => setOpen6(false)}
            layoutId='idBox6'
            className='normalBox normalBox6 box3'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={require('./image4.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpen6(true)}
            layoutId='idBox6'
            className='expandedBox expandedBox6'
          >
            <img
              src={require('./image4.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              aliquam molestiae ratione sint magnam sequi fugiat u llam earum
              distinctio
            </div>
          </motion.div>
        )}
        {open7 ? (
          <motion.div
            onClick={() => setOpen7(false)}
            layoutId='idBox7'
            className='normalBox normalBox7 box4'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={require('./image7.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpen7(true)}
            layoutId='idBox7'
            className='expandedBox expandedBox7'
          >
            <img
              src={require('./image7.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              aliquam molestiae ratione sint magnam sequi fugiat u llam earum
              distinctio
            </div>
          </motion.div>
        )}
        <div className='box5'></div>
        {open8 ? (
          <motion.div
            onClick={() => setOpen8(false)}
            layoutId='idBox7'
            className='normalBox normalBox7 box6'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={require('./image7.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpen8(true)}
            layoutId='idBox7'
            className='expandedBox expandedBox7'
          >
            <img
              src={require('./image7.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              aliquam molestiae ratione sint magnam sequi fugiat u llam earum
              distinctio
            </div>
          </motion.div>
        )}
        <div className='box7'></div>
        <div className='box8'>
          <FlameDaigram />
        </div>

        <div className='box9'>STAKER</div>
      </div>
    </>
  );
};
