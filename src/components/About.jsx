"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-3 sm:mx-3 lg:mx-0">
      <h2 className="title">About Me</h2>
      <motion.p
        initial={{ opacity: 0.75 }}
        animate={{ opacity: 1 }}
        className="text-slate-600 text-justify sm:text-lg my-4 dark:text-neutral-200"
      >
        I&apos;m a computer engineering student <b>based in Tangerang, Indonesia</b>, who is diving into the world of software (or also hardware as a whole) through practical experience. I blend academic knowledge of algorithms and data structure with real-world software testing and development skills.
      </motion.p>
    </div>
  );
}
