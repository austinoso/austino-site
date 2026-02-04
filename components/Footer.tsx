import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-cyber-gray-800/30 bg-[#050505]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 mb-10">
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
                  href="https://github.com/austinoso"
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
                href="https://github.com/austinoso"
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
