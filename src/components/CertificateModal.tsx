import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, ZoomIn } from 'lucide-react';
import { AchievementItem } from '../types';

interface Props { achievement: AchievementItem | null; onClose: () => void; }

export function CertificateModal({ achievement, onClose }: Props) {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl bg-[#0e1422] border border-[#1d2a3f] rounded-lg overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-[#182336]">
              <div className="flex items-center gap-2 font-mono text-xs">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">{achievement.title}</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px]">VERIFIED</span>
              </div>
              <button onClick={onClose} className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              {achievement.certificateImage ? (
                <img src={achievement.certificateImage} alt={`${achievement.title} certificate`}
                  className="w-full rounded border border-[#1d2a3f]" />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-slate-500 font-mono text-sm gap-3">
                  <ShieldCheck className="w-10 h-10 text-slate-600" />
                  <span>Certificate document not yet uploaded</span>
                </div>
              )}
            </div>
            <div className="px-4 pb-4 font-mono text-xs text-slate-400 flex items-center justify-between">
              <span>{achievement.organization} · {achievement.date}</span>
              <span className="text-cyan-400">{achievement.archiveId}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
