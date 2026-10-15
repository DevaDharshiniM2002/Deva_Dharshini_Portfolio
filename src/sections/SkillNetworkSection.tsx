import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Terminal, GitFork, FolderKanban } from 'lucide-react';
import { skillsData } from '../data/skills';

const categoryTabs = [
  { id: 'all', label: 'ALL DOMAINS' },
  { id: 'programming', label: 'PROGRAMMING' },
  { id: 'aiml', label: 'AI & MACHINE LEARNING' },
  { id: 'datascience', label: 'DATA SCIENCE' },
  { id: 'webdev', label: 'WEB DEVELOPMENT' },
  { id: 'databases', label: 'DATABASES' },
  { id: 'tools', label: 'ENGINEERING TOOLS' },
];

export function SkillNetworkSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkillId, setSelectedSkillId] = useState('python');

  const filtered = selectedCategory === 'all' ? skillsData : skillsData.filter(s => s.category === selectedCategory);
  const selected = skillsData.find(s => s.id === selectedSkillId) || skillsData[0];
  const connected = skillsData.filter(s => selected.connections?.includes(s.id) || s.connections?.includes(selected.id));

  return (
    <section id="skill-network" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#141b29]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#182336] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1 tracking-widest uppercase">
              <Network className="w-3.5 h-3.5" /><span>SECTION 03 // INTELLIGENCE GRAPH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">SKILL NETWORK</h2>
            <p className="text-sm text-slate-400 mt-1">Technologies and domains used across projects and professional experience.</p>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-[#0d1422] px-3 py-1.5 rounded border border-[#1b273d] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" /><span>NODES: {skillsData.length} ACTIVE CAPABILITIES</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pb-6 mb-6 border-b border-[#172236]">
          {categoryTabs.map(tab => (
            <button key={tab.id} onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-150 cursor-pointer ${selectedCategory === tab.id ? 'bg-cyan-500/15 border border-cyan-400/50 text-cyan-300 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.15)]' : 'bg-[#0e1422] border border-[#192437] text-slate-400 hover:text-slate-200 hover:border-slate-500'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 bg-[#0b101b] border border-[#1a2538] rounded-lg p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-[#162030]">
              <span className="flex items-center gap-1.5"><GitFork className="w-3.5 h-3.5 text-cyan-400" /><span>SELECT CAPABILITY NODE TO INSPECT</span></span>
              <span className="text-cyan-400">{filtered.length} NODES</span>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {filtered.map(skill => {
                const isSelected = skill.id === selectedSkillId;
                const isConnected = selected.connections?.includes(skill.id) || skill.connections?.includes(selected.id);
                return (
                  <motion.button key={skill.id} layout onClick={() => setSelectedSkillId(skill.id)}
                    className={`px-3.5 py-2 rounded text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-2 border ${isSelected ? 'bg-cyan-500 text-[#070a10] font-bold border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105' : isConnected ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-200' : 'bg-[#0e1524] border-[#1b273d] text-slate-300 hover:border-slate-400 hover:bg-[#131c2e]'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#070a10]' : isConnected ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'}`} />
                    <span>{skill.name}</span>
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-6 pt-4 border-t border-[#162030] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" />Active Node</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-600" />Linked Dependencies</span>
              </div>
              <span className="text-slate-500">Continuous Evaluation Framework</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div key={selected.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}
                className="bg-[#0e1422] border border-[#1d2a3f] rounded-lg p-6 space-y-6 shadow-xl">
                <div className="border-b border-[#182336] pb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">{selected.categoryLabel}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#162135] text-slate-300 border border-[#21304b]">{selected.level}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-white mt-1">{selected.name}</h3>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /><span>APPLICATION AREAS</span>
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {selected.applicationAreas.map((area, i) => (
                      <div key={i} className="p-2.5 rounded bg-[#090d16] border border-[#192437] text-xs text-slate-200 font-mono flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">&gt;</span><span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FolderKanban className="w-3.5 h-3.5 text-cyan-400" /><span>USED IN PROJECTS</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.usedInProjects.map((p, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-[#131b2c] border border-[#212f4a] text-cyan-300 text-xs font-mono">{p}</span>
                    ))}
                  </div>
                </div>
                {connected.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[#182336]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <GitFork className="w-3.5 h-3.5 text-cyan-400" /><span>DIRECT ARCHITECTURAL LINKAGES</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {connected.map(c => (
                        <button key={c.id} onClick={() => setSelectedSkillId(c.id)}
                          className="px-2 py-0.5 rounded bg-[#090e17] border border-[#1b263b] hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-[11px] font-mono cursor-pointer transition-colors">
                          {c.name} →
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
