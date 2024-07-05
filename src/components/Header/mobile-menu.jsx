import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./nav-links";
import SocialLinks from "./mobile-social";

export default function MobileMenu({ show, handleShow, links }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", duration: 0.3 }}
          className="text-4xl p-8 absolute flex flex-col justify-center top-0 border-2 rounded-md z-40 bg-zinc-900 text-neutral-300 w-full h-screen overflow-y-hidden"
        >
          <div className="w-full px-2 mb-2">

            <div className="flex justify-between items-center text-lg mb-4">
              <h5>Links</h5>
            </div>

            <SocialLinks />
            <hr />

          </div>


          <NavLinks
            links={links}
            onClickAction={handleShow}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}