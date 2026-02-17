import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/[0.06] bg-[#050505]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-extrabold hover:opacity-80 transition-opacity inline-block mb-3"
              aria-label="Home"
            >
              <span className="text-white">austin</span>
              <span className="text-cyber-accent">o</span>
            </Link>
            <p className="text-sm text-cyber-gray-400 leading-relaxed max-w-[240px]">
              Helping small businesses work smarter with better websites,
              automation, and ongoing tech support.
            </p>
          </div>

          {/* Solutions */}
          <nav aria-label="Footer navigation - Solutions">
            <h3 className="text-sm font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2.5" role="list">
              <li>
                <Link
                  href="/#solutions"
                  className="text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  className="text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/#solutions"
                  className="text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                >
                  Ongoing Partnership
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Footer navigation - Resources">
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2.5" role="list">
              <li>
                <Link
                  href="/work"
                  className="text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
            <a
              href="https://github.com/austinoso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyber-gray-400 hover:text-cyber-accent transition-colors"
              aria-label="GitHub profile"
            >
              <svg
                className="w-4 h-4"
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
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-cyber-gray-500 text-center font-mono">
            &copy; {currentYear} austino
          </p>
        </div>
      </div>
    </footer>
  );
}
