"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  TitleCard,
  ImagesBrowser,
  DescriptionList
} from "@/components/ui";

export default function ProjectItem({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "0.3 center"]
  });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log(project.id + ': ' + value);
      setIsActive(value > 0.9);
    });

    return () => {
      unsubscribe();
    };
  }, [project.id, scrollYProgress]);

  return (
    <motion.div
      id={"project-" + project.id}
      key={project.id}
      ref={ref}
      className={`project-card ${isActive ? 'project-stay' : 'project-move'}`}
      style={{
        opacity: scrollYProgress,
        scale: scrollYProgress,
      }}
    >
      <TitleCard
        title={project.title}
        isUsingLink={true}
        livelink={project.liveLink}
        gitlink={project.gitHub}
      />

      <ImagesBrowser imagesList={project.img} imgsTitle={project.title} />

      <DescriptionList description={project.desc} />

    </motion.div>
  );
}