import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDownIcon } from './icons/Icons';

const HeroSection: React.FC = () => {
  const { personal } = portfolioData;

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToResume = () => {
    document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background Effects */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Content - Left Side */}
            <div className="text-center md:text-left flex-1">
              {/* Status Badge */}
              <div className="reveal-element inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-muted-foreground">Open to opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="reveal-element text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient block">{personal.nameLine1}</span>
                <span className="text-gradient block">{personal.nameLine2}</span>
              </h1>

              {/* Role */}
              <p className="reveal-element text-sm md:text-base font-mono text-accent tracking-wide mb-4">
                {personal.headline}
              </p>          
                
               {/* Pitch */}
              <p className="reveal-element text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                {personal.pitch}
              </p>  
              
              {/* CTA Buttons */}
              <div className="reveal-element flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
                <button onClick={handleScrollToProjects} className="btn-primary w-full sm:w-auto">
                  View Projects
                  <ChevronDownIcon size={18} />
                </button>
                <button
                  onClick={handleScrollToResume}
                  className="btn-secondary w-full sm:w-auto"
                >
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="reveal-element flex items-center justify-center md:justify-start gap-4">
                <a 
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={22} />
                </a>
                <a 
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={22} />
                </a>
                <a 
                  href={`mailto:${personal.email}`}
                  className="social-link"
                  aria-label="Send Email"
                >
                  <MailIcon size={22} />
                </a>
              </div>
            </div>

            {/* Profile Photo - Right Side */}
            <div className="reveal-element shrink-0">
              <div className="profile-photo-wrapper">
                <img 
                  src={personal.profilePhoto}
                  alt={`${personal.name} profile photo`}
                  className="profile-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        aria-label="Scroll to About section"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-accent/60 rounded-full p-2"
      >
        <ChevronDownIcon size={28} className="text-muted-foreground hover:text-foreground transition-colors" />
      </button>
    </section>
  );
};

export default HeroSection;
