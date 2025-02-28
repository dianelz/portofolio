"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import TerminalButton from "./TerminalButton";
import Link from "next/link";
import {projects} from "../data/projects"


export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const colors = ["bg-pink", "bg-cyan", "bg-green", "bg-yellow", "bg-purple", "bg-orange", "bg-blue"];
    const color = (key: number) => colors[key % colors.length];


    return (
        <div className="font-mono px-6 py-12 flex flex-col items-center">

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-foreground p-8 rounded-lg shadow-lg border border-gray-700 w-full max-w-4xl"
            >
                <TerminalButton path="~/project" />
                <div className="relative w-full flex overflow-hidden mt-6">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
                        className="flex w-full min-w-full"
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="min-w-full p-6 bg-gray-800 rounded-md text-center">
                                {project.link && (
                                    <Link href={project.link} target="_blank">
                                        <h3 className=" hover:text-pink text-xl font-semibold">{project.title}</h3>
                                    </Link>
                                )}
                                {!project.link && (
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                )}
                                <p className="text-gray-300 mt-2">{project.description}</p>
                                <div className="flex flex-wrap justify-center gap-2 mt-2 text-sm text-gray-400">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className={`${color(i)} hover:bg-gray-500 text-background px-4 py-2 rounded-md shadow-md`}>{tech}</span>
                                    ))}
                                </div>
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt=""
                                        width={800}
                                        height={400}
                                        className="rounded-md object-contain mt-4 mx-auto max-w-full h-auto max-h-64"
                                        />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <button onClick={nextSlide} className="mt-6 px-4 py-2 bg-cyan text-background rounded-md shadow-md hover:bg-opacity-80 transition">
                    Next →
                </button>
            </motion.div>
        </div>
    );
}
