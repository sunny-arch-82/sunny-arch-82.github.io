import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GithubIcon } from './icons/Icons';

const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-container bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal-element">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <article 
              key={index}
              className={`reveal-element glass-card p-6 flex flex-col group hover:border-accent/50 transition-all duration-300 ${
                project.featured ? 'ring-1 ring-accent/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
      
              {/* Title & Outcome */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-accent text-sm font-medium mb-4">
                {project.outcome}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 flex-grow">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, tIndex) => (
                  <span key={tIndex} className="skill-chip text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links - GitHub Only */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon size={18} />
                  <span>View Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
