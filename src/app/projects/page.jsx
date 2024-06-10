/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import { projects, otherProjects } from "../_data/projects";
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function Projects() {
  return (
    <section className="py-3 projects sm:mx-3 lg:mx-0">
      <h3 className="my-3 text-2xl text-center pb-2 text-gd">My Projects</h3>

      <div>
        {projects.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between bg-slate-200 rounded-md my-4 dark:bg-slate-700">
              <h4 className="font-bold px-4 py-2 text-slate-700 text-gd text-lg">
                {item.title}
              </h4>
              <div className="px-2 text-slate-600 dark:text-neutral-200 flex items-center">
                {item.liveLink !== '' ? (
                  <Link href={item.liveLink} className="projects-link">
                    <AiOutlineLink />
                  </Link>
                ) : null}

                {item.gitHub !== '' ? (
                  <Link href={item.gitHub} className="projects-link">
                    <AiOutlineGithub />
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <PhotoProvider>
                {item.img.map((image, index) => (
                  <PhotoView src={image} key={item.id + index}>
                    <img
                      src={image}
                      alt=""
                      key={item.id + index}
                      style={{ height: '120px'}}
                      className="projects-img h-12"
                    />
                  </PhotoView>
                ))}
              </PhotoProvider>
            </div>

            <motion.ul
              initial={{ opacity: 0.25 }}
              animate={{ opacity: 1 }}
              className="px-4 pb-1 mx-1 rounded-md text-slate-600 list-disc dark:text-neutral-300"
            >
              {item.desc.map((data) => (
                <li key={Math.random()}>{data}</li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>

      <div className="mb-1">
        <div className="flex items-center justify-between bg-slate-200 rounded-md my-4 dark:bg-slate-700">
          <h4 className="font-bold px-4 py-2 text-slate-700 text-gd text-lg">
            Others (Websites, Apps, Tests, etc)
          </h4>
        </div>

        <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <PhotoProvider>
            {otherProjects.map((image, index) => (
              <PhotoView src={image} key={index}>
                <img
                  src={image}
                  alt=""
                  key={index}
                  style={{ height: '120px'}}
                  className="projects-img"
                />
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </div>
    </section>
  );
}
