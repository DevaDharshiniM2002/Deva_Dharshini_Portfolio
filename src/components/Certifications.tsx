import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Award, X } from 'lucide-react'
import { certifications } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

type Cert = (typeof certifications)[number]

function CertImage({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false)
  if (err) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-accent/10 to-cyan/5 gap-2">
        <Award size={28} className="text-accent/40" />
        <span className="text-xs text-text-muted text-center px-2">Certificate image not available</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setErr(true)}
      loading="lazy"
    />
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [preview, setPreview] = useState<Cert | null>(null)

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">Certifications</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mt-2">
            Certifications &amp; <span className="text-gradient">Learning</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="rounded-2xl bg-surface border border-white/8 overflow-hidden card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                <CertImage src={cert.image} alt={`${cert.title} certificate`} />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-text-main leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-accent mb-0.5">{cert.org}</p>
                <p className="text-xs text-text-muted mb-3">{cert.year}</p>
                <button
                  onClick={() => setPreview(cert)}
                  className="text-xs text-text-muted hover:text-accent transition-colors flex items-center gap-1"
                >
                  <Award size={12} /> View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-surface border border-white/10 rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-2">
                <CertImage src={preview.image} alt={`${preview.title} certificate`} />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-text-main">{preview.title}</p>
                  <p className="text-xs text-text-muted">{preview.org} · {preview.year}</p>
                </div>
                <button
                  onClick={() => setPreview(null)}
                  className="p-1.5 rounded-lg text-text-muted hover:text-text-main hover:bg-white/5 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
