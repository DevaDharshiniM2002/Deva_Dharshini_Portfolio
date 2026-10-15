import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Linkedin, ChevronRight } from 'lucide-react'
import { siteConfig } from '../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <motion.span
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan uppercase mb-4"
            >
              <span className="w-6 h-px bg-cyan" />
              Hello, I'm
            </motion.span>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-main leading-tight mb-3"
            >
              Deva Dharshini{' '}
              <span className="text-gradient">M</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-lg sm:text-xl text-text-muted font-medium mb-4"
            >
              AI &amp; Data Science Student &nbsp;|&nbsp; Aspiring Software Developer
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="text-text-muted leading-relaxed max-w-lg mb-6"
            >
              I build practical web applications and AI-powered solutions that address
              real-world problems. My experience spans full-stack development, machine
              learning, data analytics, and interactive digital experiences.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-white/10 text-xs text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                B.Tech AI &amp; Data Science &nbsp;·&nbsp; Class of 2027
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                Explore My Projects <ChevronRight size={16} />
              </button>
              <a
                href={siteConfig.resumePath}
                download="Deva_Dharshini_M_Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-text-main font-medium text-sm hover:border-accent/50 hover:bg-accent/10 transition-colors"
              >
                <Download size={16} /> Download Resume
              </a>
            </motion.div>

            <motion.a
              {...fadeUp(0.55)}
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-cyan transition-colors"
            >
              <Linkedin size={15} /> Connect on LinkedIn
            </motion.a>
          </div>

          {/* Right — profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-cyan/20 blur-2xl scale-110" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-dashed border-accent/20"
              />

              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-accent/40 overflow-hidden bg-surface-2 shadow-2xl shadow-accent/20">
                {!imgError ? (
                  <img
                    src={siteConfig.profileImage}
                    alt="Portrait of Deva Dharshini M, AI and Data Science student"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-accent/20 to-cyan/10">
                    <span className="text-5xl font-bold text-gradient">DD</span>
                    <span className="text-xs text-text-muted mt-2">Add profile.jpg</span>
                  </div>
                )}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 glass rounded-xl px-3 py-2 text-xs font-medium text-text-main border border-white/10 shadow-lg"
              >
                <span className="text-accent">AI</span> &amp; DS Student
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
