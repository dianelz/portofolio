"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TerminalButton from "./TerminalButton";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setError("Please fill in all fields");
      return;
    }
    const serviceID = "portfolio_service"
    const templateId = "portfolio_template"
    const publicKey = "ajaFjYGZfgI89puBA"
    const templateParams = {
      from_email: email,
      message: message,
    };
    console.log(templateParams)

    // Use mail JS service to send mail 
    emailjs.send(serviceID, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response)
        setIsSent(true);
        setMessage("");
        setEmail("");
        setError("");
      })
      .catch((error) => {
        console.log(error)
        setError("Failed to send message. Try again later.");
      });
  };

  return (
    <section id="contact" className="h-screen flex flex-col items-center justify-center bg-background text-text font-mono px-6">
      <div className="bg-foreground p-8 rounded-lg shadow-lg border border-gray-700 w-full max-w-lg">
        <TerminalButton path="~/contact" />
        {/* Terminal Input */}
        <p className="text-green mt-4">&gt; Enter your email:</p>
        <input
          type="email"
          className="w-full bg-transparent border border-gray-600 text-text mt-2 p-2 rounded-md focus:outline-none focus:border-accent"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-green mt-4">&gt; Enter your message:</p>
        <textarea
          className="w-full bg-transparent border border-gray-600 text-text mt-2 p-2 rounded-md focus:outline-none focus:border-accent resize-none h-32"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={sendEmail}
          className="bg-accent text-accent px-4 py-2 rounded-md shadow-md mt-4 hover:bg-opacity-80 transition"
        >
          Send Message
        </button>

        {isSent && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}

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
