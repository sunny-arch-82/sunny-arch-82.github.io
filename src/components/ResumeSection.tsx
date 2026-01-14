import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { FileTextIcon, LetterIcon, GraduationCapIcon, ExternalLinkIcon, DownloadIcon } from './icons/Icons';

const getDocumentIcon = (iconType: string) => {
  switch (iconType) {
    case 'file':
      return FileTextIcon;
    case 'letter':
      return LetterIcon;
    case 'graduation':
      return GraduationCapIcon;
    default:
      return FileTextIcon;
  }
};

const ResumeSection: React.FC = () => {
  const { documents } = portfolioData;

  return (
    <section id="resume" className="section-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal-element">Resume & Documents</h2>
        
        <p className="reveal-element text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Download my professional documents to learn more about my experience and qualifications
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const IconComponent = getDocumentIcon(doc.icon);
              return (
                <div 
                  key={index}
                  className="reveal-element glass-card p-6 sm:p-8 text-center flex flex-col items-center group hover:border-accent/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {doc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {doc.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 w-full">
                    <a 
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 bg-accent text-background hover:opacity-90"
                    >
                      <ExternalLinkIcon size={16} />
                      View
                    </a>
                    <a 
                      href={doc.url}
                      download
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border border-accent/50 text-accent hover:bg-accent/10"
                    >
                      <DownloadIcon size={16} />
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
