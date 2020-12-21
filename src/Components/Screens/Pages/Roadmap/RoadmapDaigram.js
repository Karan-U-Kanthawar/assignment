import React from 'react';
import './RoadmapDaigram.scss';

export const RoadmapDaigram = () => {
  return (
    <div className='roadmapSubContainer'>
      <div className='masterPlan fourSub'>
        <div className='mainSubPlans'>Master Plan</div>
        <div className='subPlans'>
          <div className='subPlan s1'>Step 1</div>
          <div className='subPlan s2'>Step 2</div>
          <div className='subPlan s3'>Step 3</div>
        </div>
      </div>
      <div className='projectA fourSub'>
        <div className='mainSubPlans'>Project A</div>
        <div className='subPlans'>
          <div className='subPlan s1'>Dev</div>
          <div className='subPlan s2'>QA</div>
        </div>
        <div className='emptyPlans'></div>
      </div>
      <div className='projectB fourSub'>
        <div className='mainSubPlans'>Project B</div>
        <div className='emptyPlans'></div>
        <div className='subPlans'>
          <div className='subPlan s1'>Dev</div>
          <div className='subPlan s2'>QA</div>
          <div className='subPlan s3'>Release</div>
        </div>
      </div>
      <div className='projectC fourSub'>
        <div className='mainSubPlans'>Project C</div>
        <div className='emptyPlans'></div>
        <div className='subPlans'>
          <div className='subPlan s1'>Dev</div>
          <div className='subPlan s2'>QA</div>
          <div className='subPlan s3'>Release</div>
        </div>
      </div>
    </div>
  );
};
