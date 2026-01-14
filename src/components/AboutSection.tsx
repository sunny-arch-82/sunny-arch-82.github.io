import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GraduationCapIcon, AwardIcon } from './icons/Icons';

const AboutSection: React.FC = () => {
  const { aboutBio, education } = portfolioData;

  return (
    <section id="about" className="section-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal-element">About Me</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Bio Text - Takes more space */}
            <div className="lg:col-span-3 reveal-element">
              <div className="space-y-5">
                {aboutBio.paragraphs.map((text, i) => (
                  <p
                    key={i}
                    className="text-lg sm:text-xl text-muted-foreground leading-relaxed" 
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Education Box - Fixed size, doesn't stretch */}
            <div className="lg:col-span-2 reveal-element" style={{ animationDelay: '100ms' }}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <GraduationCapIcon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                </div>

                <div className="space-y-5">
                  {education.map((edu, index) => (
                    <div 
                      key={index}
                      className={`${index < education.length - 1 ? 'pb-5 border-b border-border/50' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
                          {edu.logo ? (
                            <img
                              src={edu.logo}
                              alt={`${edu.university} logo`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-accent">
                              {index === 0 ? <GraduationCapIcon size={18} /> : <AwardIcon size={18} />}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-foreground leading-tight mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {edu.university}
                          </p>
                          <p className="text-xs text-muted-foreground mb-2">
                            {edu.location}
                          </p>
                          <div className="flex items-center justify-between gap-4 mb-3">
                            <span className="text-xs text-muted-foreground">
                              {edu.startDate} – {edu.endDate}
                            </span>
                            <span className="text-sm font-semibold text-accent">
                              GPA: {edu.gpa}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.courses.map((course, cIndex) => (
                              <span 
                                key={cIndex}
                                className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground border border-border/30"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
