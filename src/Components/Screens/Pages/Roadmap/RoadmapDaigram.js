import React from 'react';
import { motion } from 'framer-motion';
import './RoadmapDaigram.css';

export const RoadmapDaigram = () => {
  return (
    <div className='roadmapSubContainer'>
      {/* <Image
        src={require('./RoadmapDaigram.png')}
        alt='roadmap daigram'
        fluid
      /> */}
      <div className='masterPlan fourSub'>
        <div className='mainSubPlans'>Master Plan</div>
        <div className='subPlans'>
          <motion.div className='subPlan s1'>Step 1</motion.div>
          <div className='subPlan s2'>Step 2</div>
          <div className='subPlan s3'>Step 3</div>
        </div>
      </div>
      <div className='projectA fourSub'>
        <div className='mainSubPlans'>Project A</div>
        <div className='subPlans'>
          <div className='subPlan s1'>Step 1</div>
          <div className='subPlan s2'>Step 2</div>
          <div className='subPlan s3'>Step 3</div>
        </div>
      </div>
      <div className='projectB fourSub'>
        <div className='mainSubPlans'>Project B</div>
        <div className='subPlans'>
          <div className='subPlan s1'>Step 1</div>
          <div className='subPlan s2'>Step 2</div>
          <div className='subPlan s3'>Step 3</div>
        </div>
      </div>
      <div className='projectC fourSub'>
        <div className='mainSubPlans'>Project C</div>
        <div className='subPlans'>
          <div className='subPlan s1'>Step 1</div>
          <div className='subPlan s2'>Step 2</div>
          <div className='subPlan s3'>Step 3</div>
        </div>
      </div>
    </div>
  );
};
