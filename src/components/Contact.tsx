"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Contact() {
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="h-screen flex flex-col items-center justify-center bg-background text-text font-mono px-6">
      <div className="bg-foreground p-8 rounded-lg shadow-lg border border-gray-700 w-full max-w-lg">
        {/* Fake Terminal Header */}
        <div className="flex items-center space-x-2 pb-4 border-b border-gray-700">
          <span className="w-3 h-3 bg-red rounded-full"></span>
          <span className="w-3 h-3 bg-yellow rounded-full"></span>
          <span className="w-3 h-3 bg-green rounded-full"></span>
          <p className="ml-auto text-gray-400 text-sm">~/contact</p>
        </div>

        {/* Terminal Input */}
        <p className="text-green mt-4">&gt; Enter your message:</p>
        <textarea
          className="w-full bg-transparent border border-gray-600 text-text mt-2 p-2 rounded-md focus:outline-none focus:border-accent resize-none h-32"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-accent text-accent px-4 py-2 rounded-md shadow-md mt-4 hover:bg-opacity-80 transition">
          Send Message
        </button>

        {/* Contact Links */}
        <p className="text-gray-500 mt-6">Or reach me via:</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="mailto:diane.elzaabi@gmail.com" className="text-cyan hover:text-accent transition flex items-center gap-2">
            <FaEnvelope /> Email
          </a>
          <a href="https://github.com/dianelz" target="_blank" className="text-pink hover:text-accent transition flex items-center gap-2">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/diane-elzaabi-17a02213a/" target="_blank" className="text-purple hover:text-accent transition flex items-center gap-2">
             <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
