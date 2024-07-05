"use client";

import { motion } from "framer-motion";

const buttonVariants = {
   hover: {
      x: [0, 10],
      transition: {
         x: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.1,
         },
      },
   },
   active: {
      x: [0, 10],
      transition: {
         x: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.1,
         },
      },
   },
};

const SubmitButton = ({ children }) => {
   return (
      <motion.button
         type="submit"
         className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-black bg-blue-100 hover:bg-gradient-to-r from-blue-200 to-blue-300"
         variants={buttonVariants}
         whileHover="hover"
      >
         {children}
      </motion.button>
   );
};

export default SubmitButton;