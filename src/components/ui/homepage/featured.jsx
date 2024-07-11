"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { projects } from "@/data";

const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    }
    return str;
};

const ProjectImage = ({ src, alt }) => (
    <div className="aspect-square h-32">
        <img
            src={src}
            alt={alt}
            className="rounded-md h-full w-full object-cover"
        />
    </div>
);

const ProjectDetails = ({ title, description, linkText }) => (
    <div className="space-y-2 place-self-center h-full">
        <h3 className="max-md:text-lg text-xl text-gd top-0">{title}</h3>
        <p className="max-md:text-sm text-gd text-slate-600 dark:text-neutral-300">
            {description}
        </p>
        <span className="text-blue-400 hover:underline bottom-0">
            {linkText}
        </span>
    </div>
);

const FeaturedCard = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000); // Change project every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const featuredProject = projects[currentProjectIndex];
    const imageSrc = featuredProject.img[0];
    const projectID = `/projects`; // #project-${featuredProject.id}
    const projectTitle = featuredProject.title;
    const featuredTitle = "Featured Project";
    const projectDescription = featuredProject.desc[0];

    const displayedText = useCallback(
        () => truncateString(`${projectTitle} ${projectDescription}`, 64),
        [projectTitle, projectDescription]
    );

    return (
        <div className="w-full mb-8">
            <div className="mx-auto max-w-md">
                <Link href={projectID}>
                    <div className='items-center rounded-lg border bg-card p-4 cursor-pointer'>
                        <motion.div
                            key={currentProjectIndex}
                            initial={{ opacity: 0, filter: 'blur(5px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.5 }}
                            className="grid grid-cols-[1fr_2fr] gap-4"
                        >
                            <ProjectImage src={imageSrc} alt={projectTitle} />
                            <ProjectDetails
                                title={featuredTitle}
                                description={displayedText()}
                                linkText="(Click to See More)"
                            />
                        </motion.div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCard;