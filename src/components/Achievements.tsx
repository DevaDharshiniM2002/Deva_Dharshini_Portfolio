import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Medal, Star, Award, GraduationCap } from 'lucide-react'
import { achievements } from '../data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
  award: Award,
  graduation: GraduationCap,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="achievements" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">Recognition</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mt-2">
            Achievements &amp; <span className="text-gradient">Milestones</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Award
            return (
              <motion.div
                key={item.title}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="rounded-2xl bg-surface border border-white/8 p-5 card-hover flex gap-4"
              >
                <span className="p-3 rounded-xl bg-accent/15 text-accent h-fit flex-shrink-0">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-text-main font-semibold text-sm leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
