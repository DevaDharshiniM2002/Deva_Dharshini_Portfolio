import { motion } from 'motion/react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/experience';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#141b29] bg-[#080c15]/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#182336] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1 tracking-widest uppercase">
              <Briefcase className="w-3.5 h-3.5" /><span>SECTION 04 // PROFESSIONAL LOGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">EXPERIENCE DATABASE</h2>
            <p className="text-sm text-slate-400 mt-1">Structured engineering internships, analytics engagements, and development workflows.</p>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-[#0d1422] px-3 py-1.5 rounded border border-[#1b273d] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" /><span>3 INDUSTRY APPOINTMENTS RECORDED</span>
          </div>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp, i) => (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="bg-[#0e1422] border border-[#1c283d] rounded-lg p-6 sm:p-8 relative group hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#182336]">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">RECORD EXP-00{i + 1}</span>
                  <span className="font-mono text-xs text-slate-400">{exp.type}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-[#121927] px-3 py-1 rounded border border-[#1d293d]">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" /><span>{exp.period}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5 space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-mono text-cyan-300 mt-0.5">{exp.company}</p>
                    <p className="text-xs font-mono text-slate-500 mt-1">{exp.location} • Duration: {exp.duration}</p>
                  </div>
                  {exp.highlightMetric && (
                    <div className="p-3 rounded bg-cyan-950/30 border border-cyan-500/30 font-mono text-xs text-cyan-200">
                      <div className="text-[10px] uppercase tracking-wider text-cyan-400 font-semibold mb-0.5">KEY DELIVERABLE</div>
                      <div>{exp.highlightMetric}</div>
                    </div>
                  )}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5">STACK & TOOLSET</span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map(s => (
                        <span key={s} className="px-2 py-0.5 rounded bg-[#131b2b] text-slate-300 border border-[#1f2b41] font-mono text-[11px]">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-[#090d16] p-5 rounded border border-[#172235] space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>EXECUTION LOGS & RESPONSIBILITIES</span>
                    <span className="text-cyan-400">{exp.responsibilities.length} DELIVERABLES</span>
                  </div>
                  <div className="space-y-2.5">
                    {exp.responsibilities.map((r, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /><span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
