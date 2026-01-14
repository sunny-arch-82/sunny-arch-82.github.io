import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Icons';

const Footer: React.FC = () => {
  const { personal, navLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 font-mono text-lg font-bold text-foreground hover:text-accent transition-colors mb-2"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="text-accent">&lt;</span>
              {personal.firstName}
              <span className="text-accent">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href={`mailto:${personal.email}`}
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <MailIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
