import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react'
import { projects } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

type Project = (typeof projects)[number]

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false)
  if (err) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-cyan/5">
        <span className="text-text-muted text-sm">Screenshot coming soon</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setErr(true)}
      loading="lazy"
    />
  )
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="aspect-video w-full overflow-hidden bg-surface-2">
            <ProjectImage src={project.image} alt={project.title} />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-text-main mt-1">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-main hover:bg-white/5 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-4">{project.description}</p>
            <ul className="grid grid-cols-2 gap-1.5 mb-5">
              {project.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-xs text-text-muted">
                  <ChevronRight size={12} className="text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map(t => (
                <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-text-muted">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-text-main text-sm hover:border-accent/50 hover:bg-accent/10 transition-colors"
              >
                <Github size={15} /> GitHub
              </a>
              {project.demoVerified && project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/40 text-accent text-sm hover:bg-accent/30 transition-colors"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-4"
        >
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mt-2">
            Projects That <span className="text-gradient">Solve Problems</span>
          </h2>
        </motion.div>
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-text-muted mb-12 max-w-xl"
        >
          A selection of projects exploring artificial intelligence, machine learning, and
          practical software development.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group rounded-2xl bg-surface border border-white/8 overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelected(project)}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelected(project)}
              aria-label={`View details for ${project.title}`}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-surface-2">
                <ProjectImage src={project.image} alt={`${project.title} screenshot`} />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-text-main mt-1 mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/10 text-text-muted">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/10 text-text-muted">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3" onClick={e => e.stopPropagation()}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-main transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={14} /> GitHub
                  </a>
                  {project.demoVerified && project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-cyan hover:text-cyan/80 transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="text-xs text-text-muted/50 italic">Demo unavailable</span>
                  )}
                  <span className="ml-auto text-xs text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Details <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
