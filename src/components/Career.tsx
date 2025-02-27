"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Career() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="career" className="h-screen flex flex-col items-center justify-center bg-background text-text font-mono px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-foreground p-8 rounded-lg shadow-lg border border-gray-700 w-full max-w-2xl"
      >
        <h2 className="text-pink text-3xl font-bold">My Career</h2>
        <p className="text-gray-400 mt-4">Some professional XP:</p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Chief Product & Technology Officer - YouNav",
              description: "Leading product and technology strategy for a SaaS marina management solution.",
              details: "Rebranded a SaaS solution, led go-to-market strategy, and drove tech innovations like multi-tenant architectures and API integrations."
            },
            {
              title: "Full Stack Developer - YouNav",
              description: "Building scalable web applications using Odoo, Python, and JavaScript.",
              details: "Developed and deployed full-stack application for marina industry, optimizing performance and scalability."
            },
            {
              title: "Software Engineer - French Army Ministry",
              description: "Building a solution to help PTSD soldat to get back to normal life",
              details: "Using AI to detect stress and anxiety signals, developpint client interface and tablet application"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-md cursor-pointer transition-all duration-300 ${hovered === index ? "bg-cyan text-background scale-105" : "bg-gray-800 text-text"}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2">{hovered === index ? item.details : item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
