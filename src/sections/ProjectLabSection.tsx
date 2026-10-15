import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, ArrowRight, ExternalLink, Github, CheckCircle2, Cpu, Award, Code2 } from 'lucide-react';
import { projectsData } from '../data/projects';

export function ProjectLabSection() {
  const [activeId, setActiveId] = useState(projectsData[0].id);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'architecture'>('overview');
  const current = projectsData.find(p => p.id === activeId) || projectsData[0];

  return (
    <section id="project-lab" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#141b29] bg-[#090d16]/70">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#182336] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1 tracking-widest uppercase">
              <Database className="w-3.5 h-3.5" /><span>SECTION 02 // REPOSITORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">PROJECT LAB</h2>
            <p className="text-sm text-slate-400 mt-1">Selected systems, experiments, and technology solutions.</p>
          </div>
          <div className="font-mono text-xs text-slate-400 bg-[#0d1422] px-3 py-1.5 rounded border border-[#1b273d] flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>PROJECT DATABASE: 004 COMMITS VALIDATED</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Selector */}
          <div className="lg:col-span-4 space-y-2">
            <div className="p-3 bg-[#0d1320] border border-[#1a2538] rounded text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>PROJECT DIRECTORY</span><span className="text-cyan-400">SELECT RECORD</span>
            </div>
            {projectsData.map((p, i) => {
              const isActive = p.id === activeId;
              return (
                <motion.div key={p.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  onClick={() => { setActiveId(p.id); setActiveTab('overview'); }}
                  className={`w-full text-left p-4 rounded border transition-colors duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${isActive ? 'bg-[#101827] border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'bg-[#0a0f19] border-[#182233] hover:border-slate-500 hover:bg-[#0d1422]'}`}>
                  {isActive && <span className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" />}
                  <div className="flex items-center justify-between mb-1.5 gap-2">
                    <span className={`font-mono text-xs font-semibold truncate ${isActive ? 'text-cyan-300' : 'text-slate-500 group-hover:text-slate-400'}`}>
                      {p.code} — {p.name}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {p.recognition?.includes('1st Prize') && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">1ST PRIZE</span>
                      )}
                      <a href={p.links.repo || 'https://github.com/DevaDharshiniM2002'} target="_blank" rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="p-1 rounded bg-[#131b2b] border border-[#223048] hover:border-cyan-400/60 hover:bg-cyan-950/40 text-slate-400 hover:text-cyan-300 transition-colors flex items-center justify-center cursor-pointer">
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 line-clamp-1">{p.category}</div>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">{p.technology.slice(0, 3).join(' • ')}</span>
                    <span className={`transition-transform duration-200 ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`}>→</span>
                  </div>
                </motion.div>
              );
            })}
            <div className="p-4 rounded bg-[#0b101a] border border-[#172233] text-xs font-mono text-slate-400 space-y-2">
              <div className="text-slate-300 flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-cyan-400" /><span>CODEBASE AUDIT</span></div>
              <p className="text-[11px] text-slate-400 leading-relaxed">All systems engineered with robust separation between neural/heuristic inference and resilient client-state architectures.</p>
            </div>
          </div>

          {/* Detail panel */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div key={current.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-[#0e1422] border border-[#1c283d] rounded-lg p-6 sm:p-8 space-y-6 shadow-xl relative">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#182336] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">PROJECT {current.code}</span>
                    <span className="text-xs font-mono text-slate-400 tracking-wider">{current.category}</span>
                  </div>
                  {current.recognition?.includes('1st Prize') && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs">
                      <Award className="w-3.5 h-3.5" /><span>{current.recognition}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">{current.name}</h3>
                  {current.title && <p className="text-sm font-mono text-cyan-300 mt-1">{current.title}</p>}
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">{current.description}</p>
                </div>

                <div className="flex items-center gap-2 border-b border-[#182336] pb-1">
                  {(['overview', 'features', 'architecture'] as const).map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 font-mono text-xs rounded transition-colors cursor-pointer ${activeTab === tab ? 'bg-cyan-500/15 text-cyan-300 border-b-2 border-cyan-400 font-medium' : 'text-slate-400 hover:text-white'}`}>
                      {tab === 'overview' ? 'PROBLEM & SOLUTION' : tab === 'features' ? `KEY CAPABILITIES (${current.keyFeatures.length})` : 'METRICS & SYSTEM SPECS'}
                    </button>
                  ))}
                </div>

                {activeTab === 'overview' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 rounded bg-[#090d16] border border-[#192336] space-y-1.5">
                      <div className="font-mono text-xs text-rose-400/90 font-semibold tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /><span>THE PROBLEM MATRIX</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{current.problem}</p>
                    </div>
                    <div className="p-4 rounded bg-[#090d16] border border-[#192336] space-y-1.5">
                      <div className="font-mono text-xs text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /><span>THE ENGINEERING SOLUTION</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{current.solution}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.keyFeatures.map((f, i) => (
                      <div key={i} className="p-3 rounded bg-[#090d16] border border-[#182336] flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    {current.metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {current.metrics.map((m, i) => (
                          <div key={i} className="p-3.5 rounded bg-[#090d16] border border-[#182336] font-mono">
                            <div className="text-[10px] text-slate-500 uppercase">{m.label}</div>
                            <div className="text-sm font-bold text-cyan-300 mt-1">{m.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="p-4 rounded bg-[#090d16] border border-[#182336] font-mono text-xs space-y-2">
                      <div className="text-slate-400 uppercase tracking-wider">STACK CONFIGURATION & PROTOCOLS</div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {current.technology.map(t => (
                          <span key={t} className="px-2.5 py-1 rounded bg-[#131b2c] border border-[#212e47] text-slate-200 text-xs">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {current.technology.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#121927] border border-[#1e2a3f] text-slate-200 font-mono text-xs hover:border-cyan-400/40 transition-colors">{t}</span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#182336] flex flex-wrap items-center gap-3">
                  <button onClick={() => setActiveTab('features')}
                    className="px-4 py-2.5 rounded bg-cyan-500 hover:bg-cyan-400 text-[#070a10] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 transition-colors cursor-pointer">
                    <span>VIEW CASE STUDY</span><ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a href={current.links.repo || 'https://github.com/DevaDharshiniM2002'} target="_blank" rel="noreferrer"
                    className="px-4 py-2.5 rounded border border-[#24334a] hover:border-slate-300 bg-[#121927] hover:bg-[#182236] text-slate-200 font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-colors">
                    <Github className="w-3.5 h-3.5 text-cyan-400" /><span>VIEW REPOSITORY</span><ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <button onClick={() => setActiveTab('architecture')}
                    className="px-4 py-2.5 rounded border border-[#24334a] hover:border-cyan-400/50 bg-[#121927] hover:bg-[#182236] text-slate-300 hover:text-cyan-300 font-mono text-xs tracking-wider uppercase flex items-center gap-2 transition-colors cursor-pointer">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" /><span>TECHNICAL DETAILS</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
