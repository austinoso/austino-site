"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

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

  /* ── Close mobile menu on Escape ── */
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileToggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  /* ── Focus trap for mobile menu ── */
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;
    const menu = mobileMenuRef.current;
    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // Focus first item when menu opens
    requestAnimationFrame(() => first.focus());

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    menu.addEventListener("keydown", trap);
    return () => menu.removeEventListener("keydown", trap);
  }, [isMobileMenuOpen, isMobileSolutionsOpen]);

  /* ── Close desktop dropdown on Escape ── */
  useEffect(() => {
    if (!isSolutionsOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSolutionsOpen(false);
        dropdownTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSolutionsOpen]);

  /* ── Close desktop dropdown when focus leaves the dropdown container ── */
  useEffect(() => {
    if (!isSolutionsOpen || !dropdownRef.current) return;
    const container = dropdownRef.current;
    const handleFocusOut = (e: FocusEvent) => {
      if (!container.contains(e.relatedTarget as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    container.addEventListener("focusout", handleFocusOut);
    return () => container.removeEventListener("focusout", handleFocusOut);
  }, [isSolutionsOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const scrollToSolutions = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      e.preventDefault();
      closeMenu();

      const doScroll = () => {
        const el = document.getElementById("solutions");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };

      if (pathname === "/") {
        doScroll();
      } else {
        router.push("/");
        // Wait for navigation and DOM to settle, then scroll
        const wait = setInterval(() => {
          const el = document.getElementById("solutions");
          if (el) {
            clearInterval(wait);
            setTimeout(doScroll, 100);
          }
        }, 50);
        // Safety timeout
        setTimeout(() => clearInterval(wait), 5000);
      }
    },
    [pathname, router],
  );

  const toggleDropdown = () => setIsSolutionsOpen((prev) => !prev);

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsSolutionsOpen(true);
      // Focus first dropdown link after it opens
      requestAnimationFrame(() => {
        const firstLink = dropdownRef.current?.querySelector<HTMLAnchorElement>(
          "[data-dropdown-item] a",
        );
        firstLink?.focus();
      });
    }
  };

  const handleDropdownItemKeyDown = (e: React.KeyboardEvent) => {
    const items = dropdownRef.current?.querySelectorAll<HTMLAnchorElement>(
      "[data-dropdown-item] a",
    );
    if (!items) return;
    const currentIndex = Array.from(items).indexOf(
      e.currentTarget as HTMLAnchorElement,
    );

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = items[currentIndex + 1] || items[0];
      next.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = items[currentIndex - 1] || items[items.length - 1];
      prev.focus();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
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
            {/* Solutions Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeout.current)
                  clearTimeout(dropdownTimeout.current);
                setIsSolutionsOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout.current = setTimeout(
                  () => setIsSolutionsOpen(false),
                  150,
                );
              }}
            >
              <Link
                ref={dropdownTriggerRef}
                href="/#solutions"
                className="inline-flex items-center gap-1.5 text-sm text-cyber-gray-400 hover:text-white transition-colors duration-300 font-mono tracking-wide"
                aria-haspopup="true"
                aria-expanded={isSolutionsOpen}
                aria-controls="solutions-dropdown"
                data-umami-event="nav-solutions"
                onClick={scrollToSolutions}
                onKeyDown={handleDropdownKeyDown}
              >
                Solutions
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </Link>

              {/* Dropdown */}
              <div
                id="solutions-dropdown"
                role="menu"
                aria-hidden={!isSolutionsOpen}
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  isSolutionsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div
                  className="w-56 rounded-xl border border-white/[0.08] bg-[#111318]/95 backdrop-blur-xl overflow-hidden"
                  style={{
                    boxShadow:
                      "0 16px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)",
                  }}
                >
                  <div className="p-1.5">
                    <div data-dropdown-item role="none">
                      <Link
                        href="/services/web-development"
                        role="menuitem"
                        className="block px-3.5 py-2.5 rounded-lg text-sm text-cyber-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors duration-200"
                        data-umami-event="nav-service-web"
                        tabIndex={isSolutionsOpen ? 0 : -1}
                        onClick={() => setIsSolutionsOpen(false)}
                        onKeyDown={handleDropdownItemKeyDown}
                      >
                        <span className="font-medium">Web Development</span>
                        <span className="block text-[11px] text-cyber-gray-500 mt-0.5">
                          Fast, search-optimized sites
                        </span>
                      </Link>
                    </div>
                    <div data-dropdown-item role="none">
                      <Link
                        href="/services/automation"
                        role="menuitem"
                        className="block px-3.5 py-2.5 rounded-lg text-sm text-cyber-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors duration-200"
                        data-umami-event="nav-service-automation"
                        tabIndex={isSolutionsOpen ? 0 : -1}
                        onClick={() => setIsSolutionsOpen(false)}
                        onKeyDown={handleDropdownItemKeyDown}
                      >
                        <span className="font-medium">Automation</span>
                        <span className="block text-[11px] text-cyber-gray-500 mt-0.5">
                          Replace manual work with code
                        </span>
                      </Link>
                    </div>
                    <div data-dropdown-item role="none">
                      <Link
                        href="/services/ongoing-support"
                        role="menuitem"
                        className="block px-3.5 py-2.5 rounded-lg text-sm text-cyber-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors duration-200"
                        data-umami-event="nav-service-support"
                        tabIndex={isSolutionsOpen ? 0 : -1}
                        onClick={() => setIsSolutionsOpen(false)}
                        onKeyDown={handleDropdownItemKeyDown}
                      >
                        <span className="font-medium">Ongoing Partnership</span>
                        <span className="block text-[11px] text-cyber-gray-500 mt-0.5">
                          A developer in your corner
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/work"
              className="text-sm text-cyber-gray-400 hover:text-white transition-colors duration-300 font-mono tracking-wide"
              data-umami-event="nav-work"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 bg-cyber-accent text-[#050505] text-sm font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
              data-umami-event="nav-get-started"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileToggleRef}
            className="md:hidden text-cyber-gray-400 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal={isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
        className={`md:hidden fixed inset-0 top-[56px] bg-[#050505] transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-10 space-y-1">
          {/* Mobile Solutions Expandable */}
          <div className="border-b border-white/[0.06]">
            <button
              className="flex items-center justify-between w-full text-lg text-cyber-gray-300 hover:text-white transition-colors py-4 font-mono"
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              aria-expanded={isMobileSolutionsOpen}
              aria-controls="mobile-solutions-panel"
            >
              Solutions
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileSolutionsOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id="mobile-solutions-panel"
              role="region"
              aria-label="Solutions submenu"
              hidden={!isMobileSolutionsOpen}
              className={`overflow-hidden transition-all duration-300 ${
                isMobileSolutionsOpen
                  ? "max-h-60 opacity-100 pb-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 space-y-1">
                <Link
                  href="/services/web-development"
                  className="block text-base text-cyber-gray-400 hover:text-cyber-accent transition-colors py-2 font-mono"
                  data-umami-event="mobile-nav-service-web"
                  onClick={closeMenu}
                >
                  Web Development
                </Link>
                <Link
                  href="/services/automation"
                  className="block text-base text-cyber-gray-400 hover:text-cyber-accent transition-colors py-2 font-mono"
                  data-umami-event="mobile-nav-service-automation"
                  onClick={closeMenu}
                >
                  Automation
                </Link>
                <Link
                  href="/services/ongoing-support"
                  className="block text-base text-cyber-gray-400 hover:text-cyber-accent transition-colors py-2 font-mono"
                  data-umami-event="mobile-nav-service-support"
                  onClick={closeMenu}
                >
                  Ongoing Partnership
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/work"
            className="text-lg text-cyber-gray-300 hover:text-white transition-colors py-4 border-b border-white/[0.06] font-mono"
            data-umami-event="mobile-nav-work"
            onClick={closeMenu}
          >
            Work
          </Link>
          <div className="pt-6">
            <Link
              href="/contact"
              className="block px-6 py-3.5 bg-cyber-accent text-[#050505] font-semibold rounded-lg transition-all text-center text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
              data-umami-event="mobile-nav-get-started"
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
