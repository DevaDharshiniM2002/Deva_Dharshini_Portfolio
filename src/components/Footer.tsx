import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react'
import { siteConfig } from '../data/portfolio'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact']

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/8 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2.5 justify-center md:justify-start mb-2">
              <span className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-sm">
                DD
              </span>
              <span className="font-semibold text-text-main">Deva Dharshini M</span>
            </div>
            <p className="text-xs text-text-muted">
              AI &amp; Data Science Student · Aspiring Software Developer
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.toLowerCase())
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-xs text-text-muted hover:text-text-main transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <Mail size={17} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <Github size={17} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Deva Dharshini M. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
