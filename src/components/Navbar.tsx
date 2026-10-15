import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../data/portfolio'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeMenu])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    closeMenu()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label="Go to top"
        >
          <span className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-sm group-hover:bg-accent/30 transition-colors">
            DD
          </span>
          <span className="font-semibold text-text-main hidden sm:block">Deva Dharshini</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-1.5 text-sm rounded transition-colors relative ${
                  active === link.href.slice(1)
                    ? 'text-accent'
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-accent rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/20 border border-accent/40 text-accent text-sm font-medium hover:bg-accent/30 transition-colors"
          >
            Let's Connect
          </button>
          <button
            className="lg:hidden p-2 text-text-muted hover:text-text-main transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass border-t border-white/5">
          <ul className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                    active === link.href.slice(1)
                      ? 'bg-accent/15 text-accent'
                      : 'text-text-muted hover:bg-white/5 hover:text-text-main'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full px-4 py-3 rounded-lg bg-accent/20 border border-accent/40 text-accent text-sm font-medium hover:bg-accent/30 transition-colors"
              >
                Let's Connect
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
