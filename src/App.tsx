import { useState, useEffect } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { HeaderNav } from './components/HeaderNav';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { OverviewSection } from './sections/OverviewSection';
import { ProjectLabSection } from './sections/ProjectLabSection';
import { SkillNetworkSection } from './sections/SkillNetworkSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AchievementArchiveSection } from './sections/AchievementArchiveSection';
import { EducationCertSection } from './sections/EducationCertSection';
import { ConnectSection } from './sections/ConnectSection';
import { AchievementItem } from './types';

export default function App() {
  const [initialized, setInitialized] = useState<boolean>(() => {
    try { return sessionStorage.getItem('deva_os_loaded') === 'true'; } catch { return false; }
  });
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedCert, setSelectedCert] = useState<AchievementItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleInitComplete = () => {
    setInitialized(true);
    try { sessionStorage.setItem('deva_os_loaded', 'true'); } catch { /* ignore */ }
  };

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!initialized) return;
    const sections = ['overview', 'project-lab', 'skill-network', 'experience', 'achievements', 'education-cert', 'connect'];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -60% 0px' }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [initialized]);

  if (!initialized) return <IntroLoader onComplete={handleInitComplete} />;

  return (
    <div className="min-h-screen bg-[#070b13] text-[#f1f5f9] font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <BackgroundCanvas />
      <HeaderNav activeSection={activeSection} onNavigate={handleNavigate} onOpenResume={() => setResumeOpen(true)} />
      <main className="relative z-10">
        <OverviewSection onNavigate={handleNavigate} onOpenResume={() => setResumeOpen(true)} />
        <ProjectLabSection />
        <SkillNetworkSection />
        <ExperienceSection />
        <AchievementArchiveSection onOpenCertificate={setSelectedCert} />
        <EducationCertSection />
        <ConnectSection />
      </main>
      <CertificateModal achievement={selectedCert} onClose={() => setSelectedCert(null)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
