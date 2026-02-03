import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-cyber-gray-800/30 bg-[#050505]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-extrabold hover:opacity-80 transition-opacity inline-block mb-4"
              aria-label="Home - Senior Product Engineer"
            >
              <span className="text-white">austin</span>
              <span className="text-cyber-accent">o</span>
            </Link>
            <p className="text-base text-cyber-gray-400 leading-relaxed">
              Building production-ready software that scales. 6 years of
              experience delivering MVPs and custom solutions.
            </p>
          </div>

          {/* Quick Links */}
          <nav
            className="md:col-span-1"
            aria-label="Footer navigation - Services"
          >
            <h3 className="text-white font-semibold mb-4 text-base">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="/#services"
                  className="text-base text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                  aria-label="View MVP Development services"
                >
                  MVP Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-base text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                  aria-label="View Custom Solutions services"
                >
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-base text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                  aria-label="View Automation services"
                >
                  Automation Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-base text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                  aria-label="View Technical Consulting services"
                >
                  Technical Consulting
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav
            className="md:col-span-1"
            aria-label="Footer navigation - Resources"
          >
            <h3 className="text-white font-semibold mb-4 text-base">
              Resources
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="/work"
                  className="text-base text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                  aria-label="View all work"
                >
                  Work
                </Link>
              </li>

              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                  aria-label="View open source projects on GitHub"
                >
                  Open Source
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                  aria-label="Contact page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div
              className="flex gap-4"
              role="list"
              aria-label="Social media links"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                aria-label="GitHub profile"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                aria-label="LinkedIn profile"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                aria-label="Twitter profile"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="cyber-button-outline inline-block text-sm px-4 py-2"
                aria-label="Get in touch for project inquiry"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyber-gray-800">
          <p className="text-sm text-cyber-gray-400 text-center">
            © {currentYear} austino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
