import { motion } from 'motion/react';
import { ArrowRight, FileText, Send, Cpu } from 'lucide-react';
import { useProfileImage } from '../utils/profileImage';

interface Props { onNavigate: (id: string) => void; onOpenResume: () => void; }

export function OverviewSection({ onNavigate, onOpenResume }: Props) {
  const { profileImage } = useProfileImage();

  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#141b29]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Telemetry ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 border-b border-[#182233] pb-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300">NODE: DEVA DHARSHINI // PROFILE</span>
            <span className="text-slate-600">//</span>
            <span className="text-cyan-400">ENG_CORE_ACTIVE</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden sm:inline text-slate-500">LOC: SIVAKASI / VIRUDHUNAGAR, TN</span>
            <span className="text-slate-400">LATENCY: <span className="text-cyan-400">12ms</span></span>
            <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />STABLE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase">
                <Cpu className="w-3.5 h-3.5" /><span>ARTIFICIAL INTELLIGENCE & DATA SCIENCE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-mono leading-tight">DEVA DHARSHINI M</h1>
              <p className="text-lg sm:text-xl text-cyan-300/90 font-mono font-medium tracking-tight">Building intelligent systems for real-world problems.</p>
            </div>

            <div className="p-6 rounded bg-[#0e1422] border border-[#1b263b] text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl pointer-events-none" />
              <p>B.Tech student in <span className="text-white font-medium">Artificial Intelligence and Data Science</span> with hands-on experience in AI/ML, data analytics, and full-stack development through internships, hackathons, and projects.</p>
              <p className="text-slate-400 text-sm">Skilled in Python, machine learning, data analysis, and modern development tools, with a strong interest in building practical technology solutions that translate complex data models into dependable digital products.</p>
              <div className="pt-2 border-t border-[#182336] flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-slate-500">CORE TECH:</span>
                {['Python', 'Machine Learning', 'Data Analytics', 'Full-Stack Systems'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-[11px]">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button onClick={() => onNavigate('project-lab')}
                className="px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-400 text-[#070a10] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer">
                <span>EXPLORE PROJECTS</span><ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onOpenResume}
                className="px-5 py-3 rounded border border-[#24334a] hover:border-slate-300 bg-[#121927] hover:bg-[#182236] text-slate-200 font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer">
                <FileText className="w-4 h-4 text-cyan-400" /><span>VIEW RESUME</span><span className="text-slate-500">&#8594;</span>
              </button>
              <button onClick={() => onNavigate('connect')}
                className="px-5 py-3 rounded border border-[#24334a] hover:border-cyan-500/50 bg-[#121927] hover:bg-[#182236] text-slate-300 hover:text-cyan-300 font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer">
                <Send className="w-3.5 h-3.5 text-cyan-400" /><span>CONNECT</span><span className="text-slate-500">&#8594;</span>
              </button>
            </div>
          </div>

          {/* Right — profile card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 sm:p-5 rounded-lg bg-[#0d1320] border border-[#1e2a3f] space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#1b273d]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-slate-300 tracking-wider">IDENTITY // VERIFIED PROFILE</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">DEVA DHARSHINI // VERIFIED</span>
              </div>

              {/* Profile photo only — no overlay text */}
              <div className="relative rounded-lg overflow-hidden border border-[#23334d] bg-[#070a12] shadow-[0_0_25px_rgba(6,182,212,0.12)]">
                <div className="absolute top-2 left-2 z-20 font-mono text-[10px] text-cyan-400/80 pointer-events-none select-none">&#9484; [SYS.ENG]</div>
                <div className="absolute top-2 right-2 z-20 font-mono text-[10px] text-emerald-400/90 pointer-events-none select-none bg-[#090d16]/80 px-1.5 py-0.5 rounded border border-emerald-500/30">&#9679; ACTIVE</div>
                <div className="absolute bottom-2 left-2 z-20 font-mono text-[10px] text-cyan-400/80 pointer-events-none select-none">&#9492; [TN/IN]</div>
                <img
                  src={profileImage}
                  alt="Deva Dharshini M - AI & Data Science Engineer"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
