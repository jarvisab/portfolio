"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import IntroButtons from "./intro-buttons";

export default function HeroBanner() {
  return (
    <div className="py-12 text-slate-700">
      <motion.h2
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold sm:text-4xl text-gd text-center rounded-tl-xl rounded-br-xl sm:max-w-3xl sm:mx-auto"
      >
        <p className="font-light">Hi, I&apos;m</p>Jarvis Al Baasith!
      </motion.h2>
      <h3 className="text-[12px] sm:text-lg mt-4 py-2 pl-1 dark:text-neutral-200 text-center">
        <Typewriter
          options={{
            strings: [
              "Software QA",
              "Freelance Software Dev",
              "QA Engineer",
              "SDET Enthusiast",
            ],
            delay: 50,
            pauseFor: 1000,
            autoStart: true,
            loop: true,
          }}
        />
      </h3>

      {/* <div className="mt-4 flex justify-center items-center text-xs">
        <motion.a
          href="https://s.id/jarvisab"
          download
          className="cv-cl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <MdOutlineFileDownload />Download Documents
        </motion.a>
      </div> */}
      <IntroButtons/>

    </div>
  );
}
