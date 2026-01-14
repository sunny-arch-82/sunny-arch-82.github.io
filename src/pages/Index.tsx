import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ResumeSection from '@/components/ResumeSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useTheme } from '@/hooks/useTheme';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  
  useScrollReveal();

  // Set dark mode on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Index;
