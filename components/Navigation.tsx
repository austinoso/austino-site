"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-lg border-b border-cyber-gray-800/30"
          : "bg-[#050505]/80 backdrop-blur-md"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold hover:opacity-80 transition-opacity"
            aria-label="Home - Senior Product Engineer"
          >
            <span className="text-white">austin</span>
            <span className="text-cyber-accent">o</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/#services"
              className="text-white hover:text-cyber-accent transition-colors"
              aria-label="View services section"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-white hover:text-cyber-accent transition-colors"
              aria-label="View work"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="cyber-button"
              aria-label="Contact for project inquiry"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
