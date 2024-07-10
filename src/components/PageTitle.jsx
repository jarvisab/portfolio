"use client";

import { motion } from 'framer-motion';

const PageTitle = ({ children }) => {
  const dropdownAnimate = {
    initial: { y: -100 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.h3
      variants={dropdownAnimate}
      initial="initial"
      animate="animate"
      className='page-title'
    >
      {children}
    </motion.h3>
  );
};

export default PageTitle;
