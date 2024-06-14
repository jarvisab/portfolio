"use client";

import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { socialMedia } from "../app/_data/personal";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [show, setShow] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleShow = () => {
    setShow(!show);
    document.body.classList.toggle("overflow-y-hidden", !show);
  };

  useEffect(() => {
    if (show) {
      setHasBeenShown(true);
    }
  }, [show]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const links = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/gallery", text: "Gallery" },
    { href: "/contact", text: "Contact" }
  ];

  // Get Menu (for mobile)
  const getMenu = () => (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", duration: 0.3 }}
          className="text-4xl p-8 absolute flex flex-col justify-center top-0 border-2 rounded-md z-10 bg-zinc-900 text-neutral-300 w-full h-screen overflow-y-hidden"
        >
          <div className="w-full bg-transparent px-2 mb-8">
            <div className="flex justify-between items-center text-lg mb-4">
              <h5>Links</h5>
              <h5 className="text-xs">{window.location.origin.replace(/^https?:\/\/(www\.)?/, '')}</h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center text-lg mb-2">
              {socialMedia.map((social, index) => (
                <a
                  href={social.link}
                  className="h-8 flex items-center gap-2 text-sm"
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="" /> <p className="">{social.name}</p>
                </a>
              ))}
            </div>
            <hr />
          </div>


          {links.map((link, index) => (
            <Link key={index}
              href={link.href}
              onClick={handleShow}
              className="menu-link"
            >
              {link.text}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header className="flex md:justify-center max-md:justify-center items-center bg-white text-slate-800 py-3 md:border-b-2 sm:mx-3 lg:mx-0 dark:text-neutral-200 dark:bg-zinc-900 sticky top-0 z-10">

      <nav className="hidden md:flex justify-between items-center">
        {links.map((link, index) => (
          <Link key={index}
            href={link.href}
            className="menu-link"
          >
            {link.text}
          </Link>
        ))}
      </nav>

      {/* Mobile Bottom Navbar */}
      {isMobile && (
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
      )}

      {getMenu()}
    </header>
  );
}
