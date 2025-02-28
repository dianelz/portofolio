"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 py-4 z-50 transition-all ${scrolled ? "bg-foreground shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-primary hover:text-pink transition font-bold text-xl"><Link href="/">[ Diane Elzaabi ]</Link></h1>
        <div className="flex space-x-6 text-text">
          <Link href="#career" className="hover:text-pink transition">#Career</Link>
          <Link href="#projects" className="hover:text-pink transition">#Projects</Link>
          <Link href="#contact" className="hover:text-pink transition">#Contact</Link>
        </div>
      </div>
    </nav>
  );
}
