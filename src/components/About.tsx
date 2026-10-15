import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Brain, Code2, BarChart3 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const interests = [
  { icon: Brain, label: 'Artificial Intelligence & Machine Learning' },
  { icon: Code2, label: 'Full-Stack Web Development' },
  { icon: BarChart3, label: 'Data Analytics & Problem Solving' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mt-2">
            A Little About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-4 text-text-muted leading-relaxed"
          >
            <p>
              I'm a B.Tech student specialising in Artificial Intelligence and Data Science,
              passionate about building software that solves real problems. I enjoy the full
              journey — from understanding a problem to shipping a working solution.
            </p>
            <p>
              My focus is on learning through implementation: building full-stack web
              applications, experimenting with machine learning models, and exploring how
              AI can make everyday experiences more accessible and useful.
            </p>
            <p>
              I care about writing clean, maintainable code and continuously improving my
              technical skills through projects, internships, and hands-on experimentation.
            </p>

            {/* Interest cards */}
            <div className="pt-4 grid gap-3">
              {interests.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-white/8 card-hover"
                >
                  <span className="p-2 rounded-lg bg-accent/15 text-accent">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-text-main font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="rounded-2xl bg-surface border border-white/8 p-6 shadow-xl shadow-black/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-xl bg-accent/15 text-accent">
                  <GraduationCap size={22} />
                </span>
                <h3 className="text-lg font-semibold text-text-main">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Degree</p>
                  <p className="text-text-main font-semibold">
                    B.Tech in Artificial Intelligence and Data Science
                  </p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Institution</p>
                  <p className="text-text-main font-medium">
                    AAA College of Engineering and Technology
                  </p>
                </div>
                <div className="h-px bg-white/5" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Graduation</p>
                    <p className="text-text-main font-medium">2027 (Expected)</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">CGPA</p>
                    <p className="text-accent font-bold text-lg">8.01 <span className="text-text-muted text-sm font-normal">/ 10</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
