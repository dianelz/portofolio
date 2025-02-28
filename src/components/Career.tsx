"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {experiences} from "../data/experiences"

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
          {experiences.map((item, index) => (
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
        <div className="mt-6 text-context">
          <a href="/DEresume.pdf" download className="text-context hover:text-pink transition flex items-center gap-2">&gt; Upload my resume</a>
        </div>
      </motion.div>
    </section>
  );
}
