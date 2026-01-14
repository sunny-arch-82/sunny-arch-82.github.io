import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon, CheckIcon, MapPinIcon, PhoneIcon } from './icons/Icons';

const ContactSection: React.FC = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="section-container bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Contact Form */}
            <div className="reveal-element">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Send Me a Message
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-8" />
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {isSubmitted && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                    <CheckIcon size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'border-destructive' : ''}`}
                    placeholder="Your Name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-destructive' : ''}`}
                    placeholder="Your Email"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`form-input resize-none ${errors.message ? 'border-destructive' : ''}`}
                    placeholder="Message"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="reveal-element" style={{ animationDelay: '150ms' }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Get in Touch
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-8" />
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {personal.contactBio}
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPinIcon size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground uppercase text-sm tracking-wide">{personal.location}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <PhoneIcon size={20} className="text-accent shrink-0" />
                  <a href={`tel:${personal.phone}`} className="text-foreground hover:text-accent transition-colors">
                    {personal.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <MailIcon size={20} className="text-accent shrink-0" />
                  <a href={`mailto:${personal.email}`} className="text-foreground hover:text-accent transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={22} />
                </a>
                <a 
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={22} />
                </a>
                <a 
                  type="button"
                  onClick={() => {
                    window.location.href = `mailto:${personal.email}`;
                  }}
                  className="relative z-50 pointer-events-auto cursor-pointer w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center hover:bg-accent/10 transition"
                  aria-label="Send Email"
                  title="Email"
                >
                  <MailIcon size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
