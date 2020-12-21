import React, { useState } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import './ProductsDaigram.scss';
import { ReactComponent as Box2a } from './svg/Box2a.svg'; // SVG image for Arrow & names

export const ProductsDaigram = () => {
  const [open4, setOpen4] = useState(true);
  const [open5, setOpen5] = useState(true);
  const [open6, setOpen6] = useState(true);
  const [open7, setOpen7] = useState(true);
  const [open8, setOpen8] = useState(true);
  return (
    <AnimateSharedLayout>
      <div className='gridContainer'>
        <div className='box1'>
          <div className='letter'>S</div>
          <div className='letter'>T</div>
          <div className='letter'>A</div>
          <div className='letter'>K</div>
          <div className='letter'>E</div>
          <div className='letter'>R</div>
        </div>
        <div className='box2a arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='box2b arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='a a1 arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='a a2 arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='a a3 arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='a a4 arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='a a5 arrowNameBox'>{/* <Box2a /> */}</div>

        <div className='box3'>USERS</div>
        {open4 ? (
          <motion.div
            onClick={() => setOpen4(false)}
            layoutId='idBox4'
            className='normalBox normalBox4'
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
            className='normalBox normalBox5'
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
            className='normalBox normalBox6'
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
            className='normalBox normalBox7'
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
        {open8 ? (
          <motion.div
            onClick={() => setOpen8(false)}
            layoutId='idBox8'
            className='normalBox normalBox8'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          >
            <img
              src={require('./image8.svg')}
              alt='company logo'
              width='90'
              height='60'
              className='responsiveImages'
            />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpen8(true)}
            layoutId='idBox8'
            className='expandedBox expandedBox8'
          >
            <img
              src={require('./image8.svg')}
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
        <div className='a6 arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='a7 arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='a8 arrowNameBox'>{/* <Box2a /> */}</div>
        <div className='box9'>LIQUIDITY PROVIDERS</div>
      </div>
    </AnimateSharedLayout>
  );
};
