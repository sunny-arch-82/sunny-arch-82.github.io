import React, { useEffect, useState } from 'react';
import { ChevronUpIcon } from './icons/Icons';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const aboutEl = document.querySelector('#about') as HTMLElement | null;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const threshold = aboutEl ? Math.max(aboutEl.offsetTop - 80, 250) : 250;
      setVisible(y >= threshold);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full p-3 bg-card/80 border border-border/60 backdrop-blur-md shadow-lg hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-accent/60"
    >
      <ChevronUpIcon size={22} className="text-foreground" />
    </button>
  );
};

export default ScrollToTopButton;
