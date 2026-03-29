"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  TrendingUp,
  Zap,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

/* ── Types ── */
type ServiceItem = {
  href: string | null;
  name: string;
  desc: string;
  event: string;
  comingSoon: boolean;
  icon: LucideIcon;
};

type ServiceColumn = { heading: string; items: ServiceItem[] };

/* ── Service data ── */
const CORE_SERVICES: ServiceColumn = {
  heading: "Core Services",
  items: [
    {
      href: "/services/web-development",
      name: "Web Development",
      desc: "Fast, search-optimized websites built around your business goals",
      event: "nav-service-web",
      comingSoon: false,
      icon: Globe,
    },
    {
      href: "/services/growth-strategy",
      name: "SEO & Web Strategy",
      desc: "Local SEO and content strategy that pulls in the right clients",
      event: "nav-service-growth",
      comingSoon: false,
      icon: TrendingUp,
    },
  ],
};

const MORE_SERVICES: ServiceColumn = {
  heading: "Growth Add-ons", // TODO: refine with copywriter
  items: [
    {
      href: "/services/automation",
      name: "Automation",
      desc: "Replace manual workflows with code — CRMs, follow-ups, forms",
      event: "nav-service-automation",
      comingSoon: false,
      icon: Zap,
    },
    {
      href: "/services/consulting",
      name: "Consulting",
      desc: "Strategic guidance for businesses ready to grow deliberately",
      event: "nav-service-consulting",
      comingSoon: false,
      icon: Lightbulb,
    },
  ],
};

const NAV_LINKS = [
  { href: "/work", label: "Work", prefix: "/work" },
  { href: "/about", label: "About", prefix: "/about" },
  { href: "/insights", label: "Insights", prefix: "/insights" },
] as const;

/* ── Active link indicator ── */
function ActiveBar({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className="absolute -bottom-1.5 inset-x-0 h-0.5 rounded-full"
      style={{
        background: onDark ? "rgba(255,255,255,0.4)" : "linear-gradient(90deg, #B45309, #DB2777)",
      }}
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
              ? "bg-[#004D3A] border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
              : "bg-warm-bg border-b border-stone-200/60"
        }`}
        aria-label="Main navigation"
      >
        <div className="site-frame px-6 sm:px-10 md:px-16 lg:px-20 py-2.5 sm:py-4">
          <div className="flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] md:gap-6">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              aria-label="Home"
            >
              <Image
                src="/assets/loudbark-logo.svg"
                alt=""
                width={34}
                height={26}
                className={`h-7 w-auto transition-[filter] duration-500 ${isScrolled && !mobileOpen ? "brightness-0 invert" : ""}`}
                priority
              />
              <div className="flex flex-col -space-y-0.5">
                <span
                  className={`text-lg font-display font-bold tracking-tight leading-tight transition-colors duration-500 ${isScrolled && !mobileOpen ? "text-white" : "text-stone-900"}`}
                >
                  Loud Bark
                </span>
                <span
                  className={`hidden sm:block text-[10px] font-semibold tracking-[0.12em] uppercase transition-colors duration-500 ${isScrolled && !mobileOpen ? "text-white/50" : "text-stone-500"}`}
                >
                  SEO & Web Strategy
                </span>
              </div>
            </Link>

            {/* ── Desktop nav links (centered) ── */}
            <div className="hidden md:flex items-center justify-center gap-8">
              {/* Solutions megamenu — CSS :hover/:focus-within, zero JS */}
              <div className="group/dd relative">
                <Link
                  href="/#solutions"
                  className={`relative inline-flex items-center gap-1.5 text-[13px] tracking-wide transition-colors duration-300 ${
                    isServicesActive
                      ? isScrolled
                        ? "text-white"
                        : "text-stone-900"
                      : isScrolled
                        ? "text-white/65 hover:text-white"
                        : "text-stone-500 hover:text-stone-900"
                  }`}
                  data-umami-event="nav-solutions"
                  onClick={scrollToSolutions}
                >
                  Solutions
                  <ChevronDown
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover/dd:rotate-180 group-focus-within/dd:rotate-180"
                    aria-hidden="true"
                  />
                  {isServicesActive && <ActiveBar onDark={isScrolled} />}
                </Link>

                {/* Megamenu panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 -translate-y-2 pointer-events-none transition-all duration-200 group-hover/dd:opacity-100 group-hover/dd:translate-y-0 group-hover/dd:pointer-events-auto group-focus-within/dd:opacity-100 group-focus-within/dd:translate-y-0 group-focus-within/dd:pointer-events-auto">
                  <div className="w-[700px] rounded-2xl border border-stone-200/80 bg-white overflow-hidden shadow-2xl shadow-black/[0.14] ring-1 ring-stone-900/[0.04]">
                    {/* Top accent bar */}
                    <div className="h-[2px] bg-gradient-to-r from-[#004D3A]/0 via-[#004D3A]/60 to-[#004D3A]/0" />
                    {/* Two-column grid */}
                    <div className="grid grid-cols-2 divide-x divide-stone-100">
                      {/* Core Services */}
                      <div className="p-6">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-medium mb-3">
                          {CORE_SERVICES.heading}
                        </p>
                        <div className="space-y-1">
                          {CORE_SERVICES.items.map((item) => {
                            const Icon = item.icon;
                            const active = pathname === item.href;
                            return (
                              <Link
                                key={item.href!}
                                href={item.href!}
                                className={`flex items-start gap-3.5 px-3.5 py-3.5 rounded-xl transition-all duration-150 group/item ${
                                  active ? "bg-[#004D3A]/[0.07]" : "hover:bg-stone-50"
                                }`}
                                data-umami-event={item.event}
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                    active
                                      ? "bg-[#004D3A] text-white"
                                      : "bg-stone-100 text-stone-500 group-hover/item:bg-[#004D3A]/[0.1] group-hover/item:text-[#004D3A]"
                                  }`}
                                >
                                  <Icon className="w-4 h-4" aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                  <span
                                    className={`block text-[14px] font-semibold leading-tight transition-colors ${
                                      active
                                        ? "text-[#004D3A]"
                                        : "text-stone-800 group-hover/item:text-[#004D3A]"
                                    }`}
                                  >
                                    {item.name}
                                  </span>
                                  <span className="block text-[12.5px] text-stone-500 mt-1 leading-snug">
                                    {item.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                      {/* Growth Add-ons */}
                      <div className="p-6">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-medium mb-3">
                          {MORE_SERVICES.heading}
                        </p>
                        <div className="space-y-1">
                          {MORE_SERVICES.items.map((item) => {
                            const Icon = item.icon;
                            const active = pathname === item.href;
                            return item.comingSoon ? (
                              <div
                                key={item.name}
                                className="flex items-start gap-3.5 px-3.5 py-3.5 rounded-xl cursor-default select-none opacity-50"
                                aria-disabled="true"
                              >
                                <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-400 flex items-center justify-center shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                  <span className="flex items-center gap-2">
                                    <span className="text-[14px] font-semibold text-stone-600 leading-tight">
                                      {item.name}
                                    </span>
                                    <span className="inline-flex items-center text-[9px] font-mono font-semibold bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded-md tracking-widest uppercase border border-stone-200">
                                      Soon
                                    </span>
                                  </span>
                                  <span className="block text-[12.5px] text-stone-400 mt-1 leading-snug">
                                    {item.desc}
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <Link
                                key={item.href!}
                                href={item.href!}
                                className={`flex items-start gap-3.5 px-3.5 py-3.5 rounded-xl transition-all duration-150 group/item ${
                                  active ? "bg-[#004D3A]/[0.07]" : "hover:bg-stone-50"
                                }`}
                                data-umami-event={item.event}
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                    active
                                      ? "bg-[#004D3A] text-white"
                                      : "bg-stone-100 text-stone-500 group-hover/item:bg-[#004D3A]/[0.1] group-hover/item:text-[#004D3A]"
                                  }`}
                                >
                                  <Icon className="w-4 h-4" aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                  <span
                                    className={`block text-[14px] font-semibold leading-tight transition-colors ${
                                      active
                                        ? "text-[#004D3A]"
                                        : "text-stone-800 group-hover/item:text-[#004D3A]"
                                    }`}
                                  >
                                    {item.name}
                                  </span>
                                  <span className="block text-[12.5px] text-stone-500 mt-1 leading-snug">
                                    {item.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {/* Bottom helper row */}
                    <div className="border-t border-stone-100 px-6 py-3.5 bg-stone-50/80 flex items-center justify-between">
                      <span className="text-[12px] text-stone-500">Not sure which fits?</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#004D3A] hover:text-[#003328] transition-colors"
                        data-umami-event="nav-dd-contact"
                      >
                        Let&apos;s talk &rarr;
                      </Link>
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
                      active
                        ? isScrolled
                          ? "text-white"
                          : "text-stone-900"
                        : isScrolled
                          ? "text-white/65 hover:text-white"
                          : "text-stone-500 hover:text-stone-900"
                    }`}
                    data-umami-event={`nav-${link.label.toLowerCase()}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && <ActiveBar onDark={isScrolled} />}
                  </Link>
                );
              })}
            </div>

            {/* ── Right: CTA + mobile toggle ── */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 py-2 bg-[#B84C3A] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:-translate-y-px shadow-lg shadow-[#B84C3A]/20 hover:shadow-xl hover:shadow-[#B84C3A]/30 focus:outline-none focus:ring-2 focus:ring-[#B84C3A] focus:ring-offset-2 focus:ring-offset-warm-bg"
                data-umami-event="nav-get-started"
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                Get Started
              </Link>
              <button
                className={`md:hidden transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${isScrolled && !mobileOpen ? "text-white/70 hover:text-white" : "text-stone-500 hover:text-stone-900"}`}
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
        </div>
      </nav>

      {/* ── Mobile menu (native <dialog>) ── */}
      {/* Browser provides: focus trapping, Escape-to-close, inert background */}
      <dialog
        ref={dialogRef}
        className="nav-dialog fixed inset-0 top-[48px] sm:top-[56px] z-40 m-0 w-full h-[calc(100dvh-48px)] sm:h-[calc(100dvh-56px)] max-w-none max-h-none bg-warm-bg p-0 md:hidden"
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
              <div className="space-y-0.5 pt-1 pb-3">
                <p className="text-[10px] font-mono uppercase tracking-widest px-3 pb-1.5 pt-1 text-[#004D3A]">
                  {CORE_SERVICES.heading}
                </p>
                {CORE_SERVICES.items.map((item) => (
                  <Link
                    key={item.href!}
                    href={item.href!}
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
                <div className="mx-3 my-2 border-t border-stone-200" />
                <p className="text-[10px] font-mono uppercase tracking-widest px-3 pb-1.5 text-stone-400">
                  {MORE_SERVICES.heading}
                </p>
                {MORE_SERVICES.items.map((item) =>
                  item.comingSoon ? (
                    <div
                      key={item.name}
                      className="px-3 py-2.5 rounded-lg opacity-50 cursor-default"
                      aria-disabled="true"
                    >
                      <span className="flex items-center gap-2 text-[15px] font-medium text-stone-600">
                        {item.name}
                        <span className="text-[9px] font-mono bg-stone-100 text-stone-400 px-1.5 py-0.5 rounded uppercase tracking-wide border border-stone-200">
                          Soon
                        </span>
                      </span>
                      <span className="block text-[12px] text-stone-400 mt-0.5">{item.desc}</span>
                    </div>
                  ) : (
                    <Link
                      key={item.href!}
                      href={item.href!}
                      className="block px-3 py-2.5 rounded-lg hover:bg-stone-100 transition-colors"
                      data-umami-event={`mobile-${item.event}`}
                      onClick={closeMobileMenu}
                    >
                      <span className="block text-[15px] font-medium text-stone-800">
                        {item.name}
                      </span>
                      <span className="block text-[12px] text-stone-500 mt-0.5">{item.desc}</span>
                    </Link>
                  ),
                )}
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
              className="block px-6 py-3.5 bg-[#B84C3A] text-white font-semibold rounded-lg text-center text-sm transition-all hover:brightness-110 hover:-translate-y-px shadow-lg shadow-[#B84C3A]/20 hover:shadow-xl hover:shadow-[#B84C3A]/30 focus:outline-none focus:ring-2 focus:ring-[#B84C3A] focus:ring-offset-2 focus:ring-offset-warm-bg"
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
