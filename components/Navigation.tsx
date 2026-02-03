"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold hover:opacity-80 transition-opacity"
            aria-label="Home - Senior Product Engineer"
            onClick={closeMenu}
          >
            <span className="text-white">austin</span>
            <span className="text-cyber-accent">o</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-cyber-accent transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-[#050505] border-t border-cyber-gray-800/30 backdrop-blur-lg transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 py-8 space-y-6 bg-gradient-to-b from-[#0A0E14]/95 to-[#050505]/95">
          <Link
            href="/#services"
            className="text-2xl text-white hover:text-cyber-accent transition-colors py-3 border-b border-white/10"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/work"
            className="text-2xl text-white hover:text-cyber-accent transition-colors py-3 border-b border-white/10"
            onClick={closeMenu}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="mt-4 px-8 py-4 bg-white text-[#050505] font-semibold rounded-lg transition-all text-center text-lg"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
