"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TerminalButton from "./TerminalButton";

const words = ["Full Stack Developer", "Problem Solver", "Code Lover", "Tech Explorer", "Great Manager"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!isDeleting && subIndex === words[index].length + 1) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-background text-text font-mono px-6">
      {/* Enlarged Terminal UI */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-foreground border border-gray-700 p-8 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <TerminalButton path="~/presentation" />

        <div className="pt-6 text-lg">
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p className="text-comment">// Welcome to my portfolio</p>
          <p className="text-secondary text-2xl font-bold mt-2">
            Hello, I&apos;m <span className="text-primary">Diane Elzaabi</span>
          </p>
          <p className="text-gray-400 mt-4">
            <span className="text-pink">const role = </span> <span className="text-primary">&quot;{text}&quot;</span>
            {blink ? "|" : ""}
          </p>
        </div>
      </motion.div>
      {/* Programming Languages */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <span className="bg-purple hover:bg-gray-500 text-background px-4 py-2 rounded-md shadow-md">Python</span>
        <span className="bg-cyan hover:bg-gray-500 text-background px-4 py-2 rounded-md shadow-md">TypeScript</span>
        <span className="bg-green hover:bg-gray-500 text-background px-4 py-2 rounded-md shadow-md">Javascript</span>
        <span className="bg-orange hover:bg-gray-500 text-background px-4 py-2 rounded-md shadow-md">HTML</span>
        <span className="bg-red hover:bg-gray-500 text-background px-4 py-2 rounded-md shadow-md">CSS</span>
      </div>
    </section>
  );
}
