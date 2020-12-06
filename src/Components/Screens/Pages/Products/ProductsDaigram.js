import React from 'react';
import { motion } from 'framer-motion';
import '../Products/ProductsDaigram.css';
import { Image } from 'react-bootstrap';

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
          <div className='box4Container'>
            <img
              src={require('./image1.svg')}
              alt='company logo'
              width='125'
              height='90'
            />
          </div>
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
        <div className='stakeCnt'>Stake CNT</div>
        <div className='box9'> Box 9 </div>
      </div>
    </>
  );
};

// export const ProductsDaigram = () => {
//   const [selectedId, setSelectedId] = useState(null);
//   const items = [
//     { image: 'image1', className: 'box4', id: 4 },
//     { image: 'image1', className: 'box5', id: 5 },
//     { image: 'image1', className: 'box6', id: 6 },
//     { image: 'image1', className: 'box7', id: 7 },
//     { image: 'image1', className: 'box8', id: 8 },
//   ];
//   return (
//     <>
//       <div className='gridContainer'>
//         <div className='box1'>Box1</div>
//         <div className='box2'>Box2</div>
//         <div className='box3'>Box3</div>
//         {/* ------------------------------------------------------------------------------ */}
//         <AnimateSharedLayout type='crossfade'>
//           {items.map((item) => (
//             <motion.div
//               layoutId={item.id}
//               onClick={() => setSelectedId(item.id)}
//             >
//               <div className={`${item.className}`}>{item.className}</div>
//             </motion.div>
//           ))}
//           <AnimatePresence>
//             {selectedId &&
//               items.map((item) => (
//                 <motion.div layoutId={item.id}>
//                   <div className={`${item.className}`}>{item.className}</div>
//                   <motion.button onClick={() => setSelectedId(null)}>
//                     x
//                   </motion.button>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </AnimateSharedLayout>
//         {/* ------------------------------------------------------------------------------ */}
//         <div className='box9'> Box 9 </div>
//       </div>
//     </>
//   );
// };
