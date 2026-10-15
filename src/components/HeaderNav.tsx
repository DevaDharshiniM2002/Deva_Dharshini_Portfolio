import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X, FileText, Sparkles } from 'lucide-react';
import { useProfileImage } from '../utils/profileImage';

interface HeaderNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenResume: () => void;
}

const navItems = [
  { id: 'overview', label: '01 / OVERVIEW' },
  { id: 'project-lab', label: '02 / PROJECT LAB' },
  { id: 'skill-network', label: '03 / SKILL NETWORK' },
  { id: 'experience', label: '04 / EXPERIENCE' },
  { id: 'achievements', label: '05 / ACHIEVEMENTS' },
  { id: 'education-cert', label: '06 / EDUCATION & CERTS' },
  { id: 'connect', label: '07 / CONNECT' },
];

export function HeaderNav({ activeSection, onNavigate, onOpenResume }: HeaderNavProps) {
  const { profileImage } = useProfileImage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleClick = (id: string) => { onNavigate(id); setMobileOpen(false); };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0a0e17]/90 backdrop-blur-md border-b border-[#1a2333] shadow-lg' : 'bg-transparent border-b border-[#141b29]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div onClick={() => handleClick('overview')} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-8 h-8 rounded-full border border-cyan-500/50 bg-cyan-950/30 overflow-hidden group-hover:border-cyan-400 transition-colors shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.25)]">
              <img src={profileImage} alt="Deva Dharshini" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm tracking-wider text-white">DEVA DHARSHINI</span>
                <span className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />ONLINE
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-wider hidden sm:block">AI & DATA SCIENCE WORKSPACE</p>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#0e1422]/90 border border-[#1e293b] rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => handleClick(item.id)}
                  className={`px-3 py-1 text-xs font-mono tracking-wider transition-all duration-200 rounded-full relative cursor-pointer ${isActive ? 'text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'}`}>
                  {isActive && (
                    <motion.span layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-400/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => handleClick('connect')}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded border border-cyan-500/30 hover:border-cyan-400/60 bg-cyan-500/10 text-cyan-300 font-mono text-xs transition-all cursor-pointer">
              <Sparkles className="w-3.5 h-3.5" /><span>CONNECT</span>
            </button>
            <button onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#24334a] hover:border-slate-400 bg-[#121927] hover:bg-[#1a2337] text-slate-200 font-mono text-xs transition-all cursor-pointer">
              <FileText className="w-3.5 h-3.5 text-cyan-400" /><span>RESUME</span>
            </button>
            <button onClick={() => setMobileOpen(v => !v)}
              className="xl:hidden p-2 rounded border border-[#1e293b] text-slate-300 hover:text-white bg-[#0e1422] cursor-pointer"
              aria-label="Toggle navigation" aria-expanded={mobileOpen}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-30 xl:hidden bg-[#0a0e17]/95 backdrop-blur-xl border-b border-[#1f2a3e] p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#162030] font-mono text-xs text-slate-400">
              <span>SYSTEM NAVIGATION DIRECTORY</span>
              <span className="text-cyan-400">{navItems.length} SECTORS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navItems.map(item => {
                const isActive = activeSection === item.id;
                return (
                  <button key={item.id} onClick={() => handleClick(item.id)}
                    className={`flex items-center justify-between p-3 rounded font-mono text-xs text-left transition-all ${isActive ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-medium' : 'bg-[#0f1624] border border-[#1a2538] text-slate-300 hover:border-slate-500'}`}>
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-[#162030] flex items-center justify-between">
              <span className="font-mono text-[11px] text-slate-500">STATUS: ONLINE</span>
              <button onClick={() => { setMobileOpen(false); onOpenResume(); }} className="font-mono text-xs text-cyan-400 underline underline-offset-4">
                VIEW FULL RESUME →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
