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

export default function Contact() {
   return (
      <section className="py-3 sm:mx-3 lg:mx-0 text-justify">

         <h3 className="my-3 text-2xl text-center pb-2 text-gd">Contact me!</h3>


         <div className="flex flex-col mx-auto">
            <div className="flex justify-center items-center mt-4 mb-6">


               <form
                  action="https://getform.io/f/qalorweb"
                  method="POST"
                  className="flex flex-col w-full md:w-7/12 text-white"
               >
                  <input
                     type="text"
                     name="name"
                     required
                     placeholder="Name"
                     className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                  />
                  <input
                     type="text"
                     name="source"
                     required
                     placeholder="Phone or Email"
                     className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                  />
                  <textarea
                     name="message"
                     placeholder="Message"
                     rows="10"
                     required
                     className="resize-none p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                  />
                  <motion.button
                     type="submit"
                     className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-[#212f4d] hover:bg-gradient-to-r from-blue-400 to-sky-500"
                     variants={buttonVariants}
                     whileHover="hover"
                  >
                     Get In Touch
                  </motion.button>
               </form>
            </div>
         </div>
      </section>
   );
}
