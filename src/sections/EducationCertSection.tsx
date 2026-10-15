import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Eye } from 'lucide-react';
import { certificationsData } from '../data/certifications';
import { CertificationItem } from '../types';

export function EducationCertSection() {
  const [preview, setPreview] = useState<CertificationItem | null>(null);

  return (
    <section id="education-cert" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#141b29] bg-[#090d16]/70">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#182336] gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-1 tracking-widest uppercase">
              <GraduationCap className="w-3.5 h-3.5" /><span>SECTION 06 // ACADEMIC CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">EDUCATION & CERTIFICATIONS</h2>
            <p className="text-sm text-slate-400 mt-1">Academic background and verified professional certifications.</p>
          </div>
        </div>

        {/* Education card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}
          className="bg-[#0e1422] border border-[#1c283d] rounded-lg p-6 sm:p-8 mb-10 shadow-xl">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-4 tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5" /><span>PRIMARY ACADEMIC RECORD</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'DEGREE', value: 'B.Tech — Artificial Intelligence & Data Science' },
              { label: 'INSTITUTION', value: 'AAA College of Engineering and Technology' },
              { label: 'EXPECTED GRADUATION', value: '2027' },
              { label: 'CGPA', value: '8.01 / 10' },
            ].map(item => (
              <div key={item.label} className="p-4 rounded bg-[#090d16] border border-[#182336]">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                <div className={`font-mono font-bold ${item.label === 'CGPA' ? 'text-cyan-400 text-xl' : 'text-white text-sm'}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-6 tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" /><span>PROFESSIONAL CERTIFICATIONS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificationsData.map((cert, i) => (
              <motion.div key={cert.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#0e1422] border border-[#1c283d] rounded-lg overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-lg group">
                <div className="aspect-[4/3] overflow-hidden bg-[#090d16] relative">
                  {cert.image ? (
                    <img src={cert.image} alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  ) : null}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#090d16]" style={{ display: cert.image ? 'none' : 'flex' }}>
                    <Award className="w-8 h-8 text-cyan-400/30 mb-2" />
                    <span className="text-xs font-mono text-slate-500 text-center px-2">Certificate image not available</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold font-mono text-white leading-snug mb-1">{cert.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mb-0.5">{cert.issuer}</p>
                  <p className="text-xs font-mono text-slate-500 mb-3">{cert.date}</p>
                  <button onClick={() => setPreview(cert)}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer">
                    <Eye className="w-3 h-3" /> VIEW CERTIFICATE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview modal */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setPreview(null)}>
          <div className="relative w-full max-w-lg bg-[#0e1422] border border-[#1d2a3f] rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#090d16]">
              {preview.image ? (
                <img src={preview.image} alt={preview.title} className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <Award className="w-10 h-10 text-cyan-400/30" />
                  <span className="text-xs font-mono text-slate-500">Certificate image not available</span>
                </div>
              )}
            </div>
            <div className="p-4 flex items-center justify-between font-mono text-xs">
              <div><p className="text-white font-bold">{preview.title}</p><p className="text-slate-400">{preview.issuer} · {preview.date}</p></div>
              <button onClick={() => setPreview(null)} className="px-3 py-1.5 rounded border border-[#24334a] text-slate-400 hover:text-white transition-colors cursor-pointer">CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
