"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

/* ── Shared link data ── */
const SOLUTIONS = [
  {
    label: "Core",
    color: "text-amber-700",
    items: [
      {
        href: "/services/web-development",
        name: "Web Development",
        desc: "Fast, search-optimized sites",
        event: "nav-service-web",
      },
      {
        href: "/services/growth-strategy",
        name: "Growth Strategy",
        desc: "Data + content that ranks",
        event: "nav-service-growth",
      },
    ],
  },
  {
    label: "Add-on",
    color: "text-rose-700",
    items: [
      {
        href: "/services/automation",
        name: "Automation",
        desc: "Replace manual work with code",
        event: "nav-service-automation",
      },
    ],
  },
] as const;

const NAV_LINKS = [
  { href: "/work", label: "Work", prefix: "/work" },
  { href: "/insights", label: "Insights", prefix: "/insights" },
] as const;

/* ── Active link indicator ── */
function ActiveBar() {
  return (
    <span
      className="absolute -bottom-1.5 inset-x-0 h-0.5 rounded-full"
      style={{ background: "linear-gradient(90deg, #B45309, #DB2777)" }}
      aria-hidden="true"
    />
  );
}

/* ── Component ── */
export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  /* Scroll detection — the only effect we need */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Mobile menu via <dialog> — using .show() so the nav bar stays interactive */
  const openMobileMenu = useCallback(() => {
    dialogRef.current?.show();
    document.body.style.overflow = "hidden";
    setMobileOpen(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
  }, []);

  /* Close on Escape — .show() doesn't auto-close on Escape like .showModal() */
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobileMenu]);

  const scrollToSolutions = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (pathname === "/") {
        document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.assign("/#solutions");
      }
    },
    [pathname],
  );

  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
          mobileOpen
            ? "bg-warm-bg border-b border-stone-200"
            : isScrolled
              ? "bg-warm-bg/80 backdrop-blur-2xl border-b border-stone-200 shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
              : "bg-transparent border-b border-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Home"
            >
              <Image
                src="/assets/loudbark-logo.svg"
                alt=""
                width={27}
                height={20}
                className="h-5 w-auto"
                priority
              />
              <span className="text-lg font-display font-bold tracking-tight text-stone-900">
                Loud Bark
              </span>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-8">
              {/* Solutions dropdown — CSS :hover/:focus-within, zero JS */}
              <div className="group/dd relative">
                <Link
                  href="/#solutions"
                  className={`relative inline-flex items-center gap-1.5 text-[13px] tracking-wide transition-colors duration-300 ${
                    isServicesActive ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
                  }`}
                  data-umami-event="nav-solutions"
                  onClick={scrollToSolutions}
                >
                  Solutions
                  <ChevronDown
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover/dd:rotate-180 group-focus-within/dd:rotate-180"
                    aria-hidden="true"
                  />
                  {isServicesActive && <ActiveBar />}
                </Link>

                {/* Dropdown panel — visible on hover/focus-within */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 -translate-y-2 pointer-events-none transition-all duration-200 group-hover/dd:opacity-100 group-hover/dd:translate-y-0 group-hover/dd:pointer-events-auto group-focus-within/dd:opacity-100 group-focus-within/dd:translate-y-0 group-focus-within/dd:pointer-events-auto">
                  <div className="w-56 rounded-lg border border-stone-200 bg-white/95 backdrop-blur-xl overflow-hidden shadow-lg shadow-black/[0.06]">
                    <div className="p-1.5">
                      {SOLUTIONS.map((group, gi) => (
                        <div key={group.label}>
                          {gi > 0 && <div className="mx-3 my-1.5 border-t border-stone-200" />}
                          <p
                            className={`px-3.5 pt-2 pb-1 text-[10px] font-mono uppercase tracking-wider ${group.color}`}
                          >
                            {group.label}
                          </p>
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-3.5 py-2.5 rounded-md text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors duration-200"
                              data-umami-event={item.event}
                            >
                              <span className="font-medium">{item.name}</span>
                              <span className="block text-[11px] text-stone-500 mt-0.5">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple nav links */}
              {NAV_LINKS.map((link) => {
                const active = pathname.startsWith(link.prefix);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[13px] tracking-wide transition-colors duration-300 ${
                      active ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
                    }`}
                    data-umami-event={`nav-${link.label.toLowerCase()}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && <ActiveBar />}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
                data-umami-event="nav-get-started"
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                Get Started
              </Link>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              className="md:hidden text-stone-500 hover:text-stone-900 transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={mobileOpen ? closeMobileMenu : openMobileMenu}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu (native <dialog>) ── */}
      {/* Browser provides: focus trapping, Escape-to-close, inert background */}
      <dialog
        ref={dialogRef}
        className="nav-dialog fixed inset-0 top-[56px] z-40 m-0 w-full h-[calc(100dvh-56px)] max-w-none max-h-none bg-warm-bg p-0 md:hidden"
      >
        <div className="flex flex-col px-6 py-8 gap-2">
          {/* Solutions expandable */}
          <div>
            <button
              className="flex items-center justify-between w-full text-base font-semibold text-stone-900 py-3"
              onClick={() => setMobileSolutionsOpen((o) => !o)}
              aria-expanded={mobileSolutionsOpen}
            >
              Solutions
              <ChevronDown
                className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                  mobileSolutionsOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {mobileSolutionsOpen && (
              <div className="space-y-1 pt-1 pb-2">
                {SOLUTIONS.map((group, gi) => (
                  <div key={group.label}>
                    {gi > 0 && <div className="mx-3 my-2 border-t border-stone-200" />}
                    <p
                      className={`text-[10px] font-mono uppercase tracking-wider px-3 pb-1 ${group.color}`}
                    >
                      {group.label}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2.5 rounded-lg hover:bg-stone-100 transition-colors"
                        data-umami-event={`mobile-${item.event}`}
                        onClick={closeMobileMenu}
                      >
                        <span className="block text-[15px] font-medium text-stone-800">
                          {item.name}
                        </span>
                        <span className="block text-[12px] text-stone-500 mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-stone-200" />
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="block text-base font-semibold text-stone-900 py-3"
                data-umami-event={`mobile-nav-${link.label.toLowerCase()}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
              <div className="border-t border-stone-200" />
            </div>
          ))}

          <div className="pt-4">
            <Link
              href="/contact"
              className="block px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg text-center text-sm transition-all hover:brightness-110 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
              data-umami-event="mobile-nav-get-started"
              onClick={closeMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
