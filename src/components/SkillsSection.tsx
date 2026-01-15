import React from 'react';
import { portfolioData } from '@/data/portfolioData';

const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-container bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal-element">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div
              key={category}
              className="skill-box reveal-element w-full max-w-sm"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-sm font-mono font-bold text-accent mb-4 uppercase tracking-wider">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default SkillsSection;
