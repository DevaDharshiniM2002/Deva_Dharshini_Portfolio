import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { siteConfig } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const empty: FormData = { name: '', email: '', subject: '', message: '' }

function validate(data: FormData): Partial<FormData> {
  const errors: Partial<FormData> = {}
  if (!data.name.trim()) errors.name = 'Name is required.'
  if (!data.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email.'
  if (!data.subject.trim()) errors.subject = 'Subject is required.'
  if (!data.message.trim()) errors.message = 'Message is required.'
  return errors
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState<FormData>(empty)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // No backend configured — open mailto fallback
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    const subject = encodeURIComponent(form.subject)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('success')
    setForm(empty)
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-surface border rounded-xl px-4 py-3 text-sm text-text-main placeholder-text-muted/50 outline-none transition-colors focus:border-accent/60 ${
      errors[field] ? 'border-red-500/60' : 'border-white/10'
    }`

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mt-2">
            Let's Build Something <span className="text-gradient">Meaningful</span>
          </h2>
          <p className="text-text-muted mt-3 max-w-xl">
            Interested in software development, AI-powered applications, internships, or
            entry-level opportunities? I'd be happy to connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-white/8 card-hover group"
            >
              <span className="p-2.5 rounded-xl bg-accent/15 text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-text-muted mb-0.5">Email</p>
                <p className="text-sm text-text-main group-hover:text-accent transition-colors break-all">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-white/8 card-hover group"
            >
              <span className="p-2.5 rounded-xl bg-accent/15 text-accent">
                <Linkedin size={18} />
              </span>
              <div>
                <p className="text-xs text-text-muted mb-0.5">LinkedIn</p>
                <p className="text-sm text-text-main group-hover:text-accent transition-colors">
                  Deva Dharshini M
                </p>
              </div>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-white/8 card-hover group"
            >
              <span className="p-2.5 rounded-xl bg-accent/15 text-accent">
                <Github size={18} />
              </span>
              <div>
                <p className="text-xs text-text-muted mb-0.5">GitHub</p>
                <p className="text-sm text-text-main group-hover:text-accent transition-colors">
                  DevaDharshiniM2002
                </p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-accent/40 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
            >
              <Mail size={15} /> Email Me Directly
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl bg-surface border border-white/8 p-6">
              <p className="text-xs text-text-muted mb-5 italic">
                Note: This form uses a mailto fallback. For direct delivery, configure a backend endpoint.
              </p>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-5">
                  <CheckCircle size={16} /> Your email client has been opened. Please send the message.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-text-muted mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass('name')}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-text-muted mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass('email')}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs text-text-muted mb-1.5">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass('subject')}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-text-muted mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className={`${inputClass('message')} resize-none`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors"
                >
                  <Send size={15} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
