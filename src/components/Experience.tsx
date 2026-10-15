import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experiences } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mt-2">
            Experience &amp; <span className="text-gradient">Learning</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.org}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="sm:pl-16 relative"
              >
                {/* Dot */}
                <div className="absolute left-3 top-5 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="rounded-2xl bg-surface border border-white/8 p-5 card-hover">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="p-2 rounded-lg bg-accent/15 text-accent mt-0.5 flex-shrink-0">
                      <Briefcase size={16} />
                    </span>
                    <div>
                      <h3 className="text-text-main font-semibold">{exp.role}</h3>
                      <p className="text-accent text-sm font-medium">{exp.org}</p>
                      <p className="text-text-muted text-xs mt-0.5">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
