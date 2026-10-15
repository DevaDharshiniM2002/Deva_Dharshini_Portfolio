import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, ShieldCheck, ArrowRight, Activity, Cpu } from 'lucide-react';

interface IntroLoaderProps { onComplete: () => void; }

const steps = [
  'Loading projects database...',
  'Initializing technical skill network...',
  'Loading professional experience records...',
  'Compiling verified achievements...',
  'Syncing latest engineering signals...',
];

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [stepIdx, setStepIdx] = useState(0);
  const [progress, setProgress] = useState(15);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const si = setInterval(() => {
      setStepIdx(prev => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(si); setReady(true); return prev;
      });
    }, 550);
    const pi = setInterval(() => {
      setProgress(prev => { if (prev >= 100) { clearInterval(pi); return 100; } return Math.min(100, prev + 18); });
    }, 380);
    return () => { clearInterval(si); clearInterval(pi); };
  }, []);

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070a10] text-[#e2e8f0] px-4">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative w-full max-w-lg border border-[#1f293d] bg-[#0d121c]/90 backdrop-blur-md p-8 md:p-10 shadow-2xl rounded-sm">
        <div className="flex items-center justify-between border-b border-[#1e293b] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">DEVA DHARSHINI // PORTFOLIO</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Activity className="w-3.5 h-3.5 text-cyan-400" /><span>SYS_DIAGNOSTIC</span>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">AI & DATA SCIENCE WORKSPACE</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-mono">DEVA DHARSHINI M</h1>
          <p className="text-sm text-slate-400 mt-1">INITIALIZING PROFESSIONAL PROFILE...</p>
        </div>
        <div className="space-y-2.5 mb-8 font-mono text-xs">
          {steps.map((step, idx) => {
            const done = idx < stepIdx || ready;
            const cur = idx === stepIdx && !ready;
            return (
              <div key={step} className={`flex items-center justify-between py-1 transition-colors duration-300 ${done ? 'text-slate-300' : cur ? 'text-cyan-400 font-medium' : 'text-slate-600'}`}>
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] text-slate-500">[{`0${idx + 1}`}]</span>
                  <span>{step}</span>
                </div>
                <span className={done ? 'text-cyan-400 text-[11px]' : cur ? 'text-cyan-400 animate-pulse text-[11px]' : 'text-slate-600 text-[11px]'}>
                  {done ? 'OK' : cur ? 'LOAD...' : 'WAIT'}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mb-8">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span>CALIBRATION</span><span className="text-cyan-400">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-[#161f30] overflow-hidden">
            <motion.div className="h-full bg-cyan-400" initial={{ width: '0%' }} animate={{ width: `${progress}%` }} transition={{ ease: 'easeOut', duration: 0.3 }} />
          </div>
        </div>
        <div className="pt-2">
          {ready ? (
            <motion.button initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} onClick={onComplete}
              className="w-full py-3.5 px-6 bg-cyan-500 hover:bg-cyan-400 text-[#070a10] font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <ShieldCheck className="w-4 h-4" /><span>SYSTEM READY // ENTER WORKSPACE</span><ArrowRight className="w-4 h-4" />
            </motion.button>
          ) : (
            <button onClick={onComplete} className="w-full py-3 px-4 border border-[#24334a] hover:border-cyan-500/50 text-slate-400 hover:text-cyan-300 font-mono text-xs tracking-wider uppercase transition-colors text-center cursor-pointer">
              SKIP CALIBRATION →
            </button>
          )}
        </div>
        <div className="mt-6 text-center text-[10px] font-mono text-slate-600 tracking-wider">DEVA DHARSHINI • AI & DATA SCIENCE PORTFOLIO • 2026</div>
      </div>
    </motion.div>
  );
}
