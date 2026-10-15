import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Eye, Building, Calendar } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { AchievementItem } from '../types';

interface Props { onOpenCertificate: (a: AchievementItem) => void; }

export function AchievementArchiveSection({ onOpenCertificate }: Props) {
  const [selectedId, setSelectedId] = useState(achievementsData[1].id);
  const active = achievementsData.find(a => a.id === selectedId) || achievementsData[0];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#141b29]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#182336] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1 tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" /><span>SECTION 05 // VERIFIED RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">ACHIEVEMENT ARCHIVE</h2>
            <p className="text-sm text-slate-400 mt-1">Verified competition wins, national level selections, honors, and leadership merit grants.</p>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-[#0d1422] px-3 py-1.5 rounded border border-[#1b273d] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /><span>5 VERIFIED ARCHIVAL RECORDS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-2">
            <div className="p-3 bg-[#0d1320] border border-[#1a2538] rounded text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>ARCHIVE INDEX</span><span className="text-cyan-400">SELECT RECORD</span>
            </div>
            {achievementsData.map(item => {
              const isSel = item.id === selectedId;
              return (
                <button key={item.id} onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded border transition-all duration-200 cursor-pointer flex flex-col justify-between group relative ${isSel ? 'bg-[#101827] border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'bg-[#0a0f19] border-[#182233] hover:border-slate-500 hover:bg-[#0d1422]'}`}>
                  {isSel && <span className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" />}
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-cyan-400">{item.archiveId}</span>
                    <span className="text-[10px] font-mono text-slate-400">{item.date}</span>
                  </div>
                  <h4 className={`text-sm font-bold font-mono tracking-tight ${isSel ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{item.title}</h4>
                  <div className="mt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="truncate pr-2">{item.organization}</span>
                    {item.hasCertificate && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shrink-0 flex items-center gap-1">
                        <Eye className="w-2.5 h-2.5" /><span>PROOF</span>
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <motion.div key={active.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
              className="bg-[#0e1422] border border-[#1d293e] rounded-lg p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#182336] pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">{active.archiveId}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono text-[10px] border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /><span>VERIFIED RECORD</span>
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400">{active.date}</span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">{active.category}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight mt-0.5">{active.title}</h3>
                {active.subtitle && <p className="text-xs font-mono text-cyan-300 mt-1">{active.subtitle}</p>}
              </div>

              <div className="p-4 rounded bg-[#090d16] border border-[#172336] space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center pb-2 border-b border-[#151e2e]">
                  <span className="text-slate-500 flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-cyan-400" />ORGANIZATION</span>
                  <span className="text-white font-medium">{active.organization}</span>
                </div>
                {active.project && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#151e2e]">
                    <span className="text-slate-500">ASSOCIATED PROJECT</span>
                    <span className="text-cyan-300 font-semibold">{active.project}</span>
                  </div>
                )}
                {active.metrics?.participants && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#151e2e]">
                    <span className="text-slate-500">PARTICIPATION REACH</span>
                    <span className="text-white">{active.metrics.participants}</span>
                  </div>
                )}
                {active.metrics?.institutions && (
                  <div className="flex justify-between items-center pb-2 border-b border-[#151e2e]">
                    <span className="text-slate-500">ACADEMIC INSTITUTIONS</span>
                    <span className="text-white">{active.metrics.institutions}</span>
                  </div>
                )}
                {active.metrics?.level && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">SELECTION TIER</span>
                    <span className="text-cyan-300">{active.metrics.level}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">OFFICIAL RECOGNITION SUMMARY</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0b1019] p-4 rounded border border-[#182335]">{active.description}</p>
              </div>

              {active.hasCertificate ? (
                <div className="p-4 rounded bg-[#0b111d] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded border border-[#22314a] overflow-hidden bg-black shrink-0">
                      <img src={active.certificateImage} alt="Certificate Preview" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /><span>OFFICIAL CERTIFICATE OF SELECTION</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Yi Sivakasi Chapter • Young Indians, CII</p>
                    </div>
                  </div>
                  <button onClick={() => onOpenCertificate(active)}
                    className="w-full sm:w-auto px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-[#070a10] font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer">
                    <Eye className="w-3.5 h-3.5" /><span>INSPECT CERTIFICATE</span>
                  </button>
                </div>
              ) : (
                <div className="p-3 rounded bg-[#090d16] border border-[#172233] text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>DOCUMENTATION: FORMAL MERIT CITATION</span><span className="text-slate-500">ARCHIVED</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
