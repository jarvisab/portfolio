import { motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

export default function MobileNav({ show, hasBeenShown, handleShow }) {
  return (
    <motion.div
      initial={{ height: 50 }}
      animate={{ height: [show ? 70 : 50, 40, 50] }}
      transition={{
        height: {
          duration: show ? 1 : 1.45,
          repeat: show ? 0 : Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      }}
      className="border-2 border-white dark:border-black fixed bottom-0 w-1/2 p-4 bg-blue-100 text-black cursor-pointer z-50 md:hidden rounded-t-xl flex justify-center"
      onClick={handleShow}
    >
      {!hasBeenShown && <p className="text-xs mr-4">Click to Open</p>}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: show ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        className="w-fit h-fit"
      >
        <FaChevronUp className="dark:fill-black" />
      </motion.div>
    </motion.div>
  );
}