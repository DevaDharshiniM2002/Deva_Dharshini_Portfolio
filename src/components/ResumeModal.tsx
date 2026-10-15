import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Download } from 'lucide-react';

interface Props { isOpen: boolean; onClose: () => void; }

export function ResumeModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl h-[90vh] bg-[#0e1422] border border-[#1d2a3f] rounded-lg overflow-hidden shadow-2xl flex flex-col"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-[#182336] shrink-0">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>DEVA DHARSHINI M // TECHNICAL RESUME DOSSIER</span>
              </div>
              <div className="flex items-center gap-2">
                <a href="/resume/Deva_Dharshini_M_Resume.pdf" download
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-[#070a10] font-mono text-xs font-bold transition-colors cursor-pointer">
                  <Download className="w-3.5 h-3.5" /><span>DOWNLOAD</span>
                </a>
                <button onClick={onClose} className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <iframe
              src="/resume/Deva_Dharshini_M_Resume.pdf"
              className="w-full flex-1"
              title="Deva Dharshini M Resume"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
