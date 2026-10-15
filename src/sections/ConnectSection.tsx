import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { useProfileImage } from '../utils/profileImage';

export function ConnectSection() {
  const { profileImage } = useProfileImage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', topic: 'Engineering Collaboration', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('deva10042002@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`);
    const subject = encodeURIComponent(form.topic);
    window.location.href = `mailto:deva10042002@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: '', email: '', topic: 'Engineering Collaboration', message: '' });
    setErrors({});
  };

  const inputClass = (field: string) =>
    `w-full bg-[#090d16] border ${errors[field] ? 'border-red-500/60' : 'border-[#1a2538]'} focus:border-cyan-400 px-3.5 py-2.5 rounded text-slate-200 outline-none transition-colors font-mono text-xs`;

  return (
    <section id="connect" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#070b13]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#182336] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1 tracking-widest uppercase">
              <Send className="w-3.5 h-3.5" /><span>SECTION 07 // COMMUNICATIONS PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">CONNECT WITH DEVA</h2>
            <p className="text-sm text-slate-400 mt-1">Let's discuss AI engineering, data science, research collaborations, or full-time opportunities.</p>
          </div>
          <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span>COMMUNICATION CHANNELS ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 sm:p-5 rounded-lg bg-[#0e1422] border border-[#1d2a3f] flex justify-center shadow-lg">
              <div className="relative w-24 h-28 rounded-md overflow-hidden border border-cyan-500/40 bg-[#090d16]">
                <img src={profileImage} alt="Deva Dharshini M" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#0e1422] border border-[#1d2a3f] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /><span>DIRECT EMAIL</span></span>
                <span className="text-emerald-400">PREFERRED</span>
              </div>
              <div className="font-mono text-sm sm:text-base text-white font-semibold break-all">deva10042002@gmail.com</div>
              <div className="flex items-center gap-2 pt-1">
                <button onClick={handleCopy}
                  className="px-3 py-1.5 rounded bg-[#162135] hover:bg-[#1e2d47] border border-[#243450] text-slate-200 font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer">
                  {copiedEmail ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">COPIED</span></> : <><Copy className="w-3.5 h-3.5 text-cyan-400" /><span>COPY EMAIL</span></>}
                </button>
                <a href="mailto:deva10042002@gmail.com" className="px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-[#070a10] font-mono text-xs font-bold transition-colors">OPEN CLIENT →</a>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/deva-dharshini-m-33b29a2a2b3c4/" target="_blank" rel="noreferrer"
              className="p-5 rounded-lg bg-[#0e1422] border border-[#1d2a3f] hover:border-cyan-500/50 block transition-all group">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-2"><Linkedin className="w-4 h-4 text-cyan-400" /><span>LINKEDIN NETWORK</span></span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </div>
              <div className="font-mono text-sm text-white font-medium group-hover:text-cyan-300">linkedin.com/in/deva-dharshini-m-33b29a2a2b3c4</div>
              <p className="text-xs text-slate-400 mt-1">Connect for professional networking and career inquiries.</p>
            </a>

            <a href="https://github.com/DevaDharshiniM2002" target="_blank" rel="noreferrer"
              className="p-5 rounded-lg bg-[#0e1422] border border-[#1d2a3f] hover:border-cyan-500/50 block transition-all group">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="flex items-center gap-2"><Github className="w-4 h-4 text-cyan-400" /><span>GITHUB CODEBASE</span></span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </div>
              <div className="font-mono text-sm text-white font-medium group-hover:text-cyan-300">github.com/DevaDharshiniM2002</div>
              <p className="text-xs text-slate-400 mt-1">Explore open-source repositories, ML models, and full-stack projects.</p>
            </a>

            <div className="p-4 rounded-lg bg-[#090d16] border border-[#182336] text-xs font-mono text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /><span>LOCATION BASE</span></span>
              <span className="text-slate-200">Sivakasi / Virudhunagar, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7 bg-[#0e1422] border border-[#1d2a3f] rounded-lg p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#182336]">
              <span className="font-mono text-xs text-slate-400">TRANSMIT MESSAGE DIRECTLY</span>
              <span className="font-mono text-xs text-cyan-400">DEVA DHARSHINI // INBOX</span>
            </div>
            <p className="text-[11px] font-mono text-slate-500 mb-5 italic">Note: Uses mailto fallback — opens your email client pre-filled.</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded bg-[#090e18] border border-cyan-500/40 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center mx-auto text-cyan-300">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-mono text-white">EMAIL CLIENT OPENED</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">Your message has been pre-filled in your email client. Please send it to complete the transmission.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 px-4 py-2 rounded border border-[#24334a] hover:border-slate-400 text-xs font-mono text-slate-300 transition-colors cursor-pointer">
                  SEND ANOTHER TRANSMISSION
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 block">SENDER NAME *</label>
                    <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass('name')} />
                    {errors.name && <p className="text-red-400 text-[11px]">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-400 block">EMAIL ADDRESS *</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="name@company.com" className={inputClass('email')} />
                    {errors.email && <p className="text-red-400 text-[11px]">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-400 block">COMMUNICATION TOPIC</label>
                  <select value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })} className={inputClass('topic')}>
                    <option>Full-time AI/ML Opportunity</option>
                    <option>Data Science & Analytics Role</option>
                    <option>Engineering Collaboration</option>
                    <option>Technical Consultation</option>
                    <option>General Inquiries</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-400 block">MESSAGE *</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Provide details about the opportunity or discussion..." className={`${inputClass('message')} resize-none`} />
                  {errors.message && <p className="text-red-400 text-[11px]">{errors.message}</p>}
                </div>
                <button type="submit"
                  className="w-full py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-[#070a10] font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                  <Send className="w-3.5 h-3.5" /><span>DISPATCH TRANSMISSION</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="pt-12 border-t border-[#162030] text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-bold tracking-wider">DEVA DHARSHINI</span>
            <span>—</span><span>AI & Data Science Portfolio</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />SYSTEM STATUS: ONLINE
            </span>
            <span className="text-slate-600">|</span>
            <span>© {new Date().getFullYear()} DEVA DHARSHINI M</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
