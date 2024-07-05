"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { projects } from "@/data";

const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    }
    return str;
};

const FeaturedCard = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000); // Change project every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const featured = projects[currentProjectIndex];
    const imageSrc = featured.img[0];
    const projectID = '/projects#project-' + featured.id;
    const projectTitle = featured.title;
    const featuredTitle = "Featured Project";
    const projectDescription = featured.desc[0];

    const displayedText = truncateString(projectDescription, 64);

    return (
        <div className="w-full mb-8">
            <div className="mx-auto max-w-md">
                <Link href={projectID}>
                    <div className='items-center rounded-lg border bg-card p-4 cursor-pointer'>
                        <motion.div
                            key={currentProjectIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="grid grid-cols-[1fr_2fr] gap-4"
                        >
                            <div className="h-32">
                                <img
                                    src={imageSrc}
                                    alt={projectTitle}
                                    className="rounded-md h-full w-full object-cover"
                                />
                            </div>
                            <div className="space-y-2 place-self-center h-full">
                                <h3 className="max-md:text-lg text-xl text-gd top-0">{featuredTitle}</h3>
                                <p className="max-md:text-sm text-gd text-slate-600 dark:text-neutral-300">
                                    {displayedText}
                                </p>
                                <span className="text-blue-400 hover:underline bottom-0">
                                    (Click to See More)
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCard;