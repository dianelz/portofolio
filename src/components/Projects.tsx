"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import TerminalButton from "./TerminalButton";
import Link from "next/link";



const projects = [
    {
        title: "YouNav",
        description: "Complete SaaS marina management with multi-tenancy, integrated payments and advanced reporting.",
        tech: ["Odoo", "Python", "JavaScript", "PostgreSQL"],
        link: "https://www.younav.com",
        image: "/images/younav.png"
    },
    {
        title: "Task Manager",
        description: "Kanban and calendar view for task management, allowing users to create, assign, and track tasks.",
        tech: ["SvelteKit", "Nest.js", "PostgreSQL", "Tailwind", "Docker"],
        link: "https://github.com/dianelz/TaskManagement",
        image: "/images/taskmanagement.png"
    },
    {
        title: "Portfolio",
        description: "Portfolio website with animations and responsive design.",
        tech: ["React", "Next.js", "Tailwind"],
        link: "https://github.com/dianelz/portofolio",
        image: "/images/portfolio.png"
    },
    {
        title: "Book Recommendation System",
        description: "Book recommendation system based on user's preferences.",
        tech: ["React", "Next.js", "Pytorch", "Tailwind"],
        image: "/images/coming.png"
    }
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const colors = ["bg-pink", "bg-cyan", "bg-green", "bg-yellow", "bg-purple", "bg-orange", "bg-blue"];
    const color = (key: number) => colors[key % colors.length];


    return (
        <section id="projects" className="h-screen flex flex-col items-center justify-center bg-background text-text font-mono px-6">

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
                                <div className="flex justify-center gap-2 mt-2 text-sm text-gray-400">
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
                                        className="rounded-md object-contain mt-4 mx-auto"
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
        </section>
    );
}
