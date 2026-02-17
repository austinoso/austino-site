"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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

  const scrollToSolutions = useCallback(
    (e: React.MouseEvent) => {
      if (pathname === "/") {
        e.preventDefault();
        closeMenu();

        // Use GSAP ScrollSmoother if available (desktop), otherwise native scroll
        const smoother = (window as unknown as Record<string, unknown>)
          .__smoother as
          | {
              scrollTo?: (
                target: string | Element,
                smooth?: boolean,
                position?: string,
              ) => void;
            }
          | undefined;
        if (smoother?.scrollTo) {
          smoother.scrollTo("#solutions", true, "top top");
        } else {
          const el = document.getElementById("solutions");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    },
    [pathname],
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-extrabold hover:opacity-80 transition-opacity"
            aria-label="Home"
            onClick={closeMenu}
          >
            <span className="text-white">austin</span>
            <span className="text-cyber-accent">o</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#solutions"
              className="text-sm text-cyber-gray-400 hover:text-white transition-colors duration-300 font-mono tracking-wide"
              aria-label="View services section"
              onClick={scrollToSolutions}
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-sm text-cyber-gray-400 hover:text-white transition-colors duration-300 font-mono tracking-wide"
              aria-label="View work"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 bg-cyber-accent text-[#050505] text-sm font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
              aria-label="Contact for project inquiry"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyber-gray-400 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[56px] bg-[#050505]/95 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-10 space-y-1">
          <Link
            href="/#solutions"
            className="text-lg text-cyber-gray-300 hover:text-white transition-colors py-4 border-b border-white/[0.06] font-mono"
            onClick={scrollToSolutions}
          >
            Services
          </Link>
          <Link
            href="/work"
            className="text-lg text-cyber-gray-300 hover:text-white transition-colors py-4 border-b border-white/[0.06] font-mono"
            onClick={closeMenu}
          >
            Work
          </Link>
          <div className="pt-6">
            <Link
              href="/contact"
              className="block px-6 py-3.5 bg-cyber-accent text-[#050505] font-semibold rounded-lg transition-all text-center text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
