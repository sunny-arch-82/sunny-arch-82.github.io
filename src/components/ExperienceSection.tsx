import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { BriefcaseIcon, ZapIcon, CodeIcon, CalendarIcon, MapPinIcon } from './icons/Icons';

const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal-element">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experience.map((role, index) => (
            <div 
              key={index}
              className="reveal-element glass-card p-6 sm:p-8"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header without Logo */}
              <div className="flex items-start gap-4 mb-6">
                {/* Icon badge */}
                 <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 
                  flex items-center justify-center text-accent shrink-0 
                  border border-accent/20">
                    <BriefcaseIcon size={28} />
                </div>

                {/* Text content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{role.title}</h3>
                  <p className="text-accent font-semibold mb-2">{role.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarIcon size={14} />
                      {role.startDate} - {role.endDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPinIcon size={14} />
                      {role.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {role.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <ZapIcon size={18} className="text-accent" />
                  <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
                </div>
                <ul className="space-y-3">
                  {role.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent mt-1.5 shrink-0">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CodeIcon size={18} className="text-accent" />
                  <h4 className="text-lg font-semibold text-foreground">Technologies Used</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
